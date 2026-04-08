import Link from "next/link"
import { ArrowUpRight, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    value: "Frontend",
    label: "Next.js, React, TypeScript",
  },
  {
    value: "UI",
    label: "Clean systems and polished interactions",
  },
  {
    value: "Focus",
    label: "Portfolio, product pages, and web apps",
  },
]

const links = [
  {
    label: "GitHub",
    href: "https://github.com/nvminh162",
    icon: ArrowUpRight,
  },
  {
    label: "Email",
    href: "mailto:nguyenvanminh.work@gmail.com",
    icon: Mail,
  },
]

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_26%),linear-gradient(180deg,#090909_0%,#020202_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/15" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
              <MapPin className="size-4" />
              Based in Vietnam, building for the web
            </div>

            <div className="space-y-5">
              <div className="text-7xl font-black tracking-[0.22em] text-white sm:text-8xl lg:text-9xl">
                NM
              </div>
              <div className="space-y-3">
                <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Nguyen Van Minh
                </h1>
                <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                  I design and build focused portfolio experiences, landing pages, and product interfaces with a strong visual point of view.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
                <Link href="#highlights">
                  View profile
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <Link href="#contact">Contact</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle,rgba(255,255,255,0.14),transparent_55%)] blur-3xl" />
            <Card className="relative border-white/10 bg-white/5 text-white shadow-2xl shadow-black/40 backdrop-blur-xl">
              <CardContent className="space-y-8 p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/45">Portfolio</p>
                    <p className="mt-2 text-2xl font-semibold">Visual identity first</p>
                  </div>
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-xl font-semibold">
                    NM
                  </div>
                </div>

                <div className="grid gap-3" id="highlights">
                  {highlights.map((item) => (
                    <div
                      key={item.value}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <div className="text-lg font-medium text-white">{item.value}</div>
                      <div className="mt-1 text-sm leading-6 text-white/60">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-2" id="contact">
                  {links.map((item) => {
                    const Icon = item.icon

                    return (
                      <Button
                        key={item.label}
                        asChild
                        variant="outline"
                        className="h-auto justify-between rounded-2xl border-white/10 bg-white/5 px-4 py-4 text-white hover:bg-white/10 hover:text-white"
                      >
                        <Link href={item.href} target="_blank" rel="noreferrer">
                          <span className="flex items-center gap-3">
                            <Icon className="size-4" />
                            {item.label}
                          </span>
                          <ArrowUpRight className="size-4" />
                        </Link>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}
