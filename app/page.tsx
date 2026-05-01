import AnimatedBackground from '@/components/animated-background';
import { cn } from '@/lib/utils';

export default function PortfolioPage() {
    return (
        <>
            <AnimatedBackground />
            <main className={cn('bg-slate-100 dark:bg-transparent canvas-overlay-mode')}></main>
        </>
    );
}