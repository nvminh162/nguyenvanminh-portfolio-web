import { config } from '@/data/config';
import nodemailer from 'nodemailer';
import { z } from 'zod';

export const runtime = 'nodejs';

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimit.get(ip);
    if (!entry || now > entry.resetAt) {
        rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return false;
    }
    entry.count++;
    return entry.count > RATE_LIMIT_MAX;
}

const Email = z.object({
    fullName: z.string().min(2, 'Full name is invalid!'),
    email: z.string().email({ message: 'Email is invalid!' }),
    message: z.string().min(10, 'Message is too short!'),
});

function escapeHtml(value: string): string {
        return value
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
}

function buildEmailHtml(fullName: string, email: string, message: string): string {
        return `
        <div>
            <h1>From: ${escapeHtml(fullName)}</h1>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <blockquote>${escapeHtml(message)}</blockquote>
        </div>
    `;
}
export async function POST(req: Request) {
    try {
        const ip = req.headers.get('x-forwarded-for') ?? 'unknown';
        if (isRateLimited(ip)) {
            return Response.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
        }

        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            return Response.json({ error: 'Missing SMTP credentials' }, { status: 500 });
        }

        const body = await req.json();
        const { success: zodSuccess, data: zodData, error: zodError } = Email.safeParse(body);
        if (!zodSuccess) return Response.json({ error: zodError?.message }, { status: 400 });

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const html = buildEmailHtml(zodData.fullName, zodData.email, zodData.message);

        await transporter.sendMail({
            from: process.env.SMTP_FROM ?? `Portfolio <${process.env.SMTP_USER}>`,
            to: config.email,
            subject: 'Contact me from portfolio',
            replyTo: zodData.email,
            html,
        });

        return Response.json({ ok: true });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
