import { CalendarDays, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            An evening for doctors
          </span>
          <h1 className="mt-5 text-pretty text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Doctor Conference 2026 Organizing Team
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Led by <span className="font-semibold text-foreground">Raushan Kumar Gupta</span>, we bring together
            leading medical professionals to discuss the latest advancements in patient care and healthcare
            technology.
          </p>

          <dl className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-6">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <CalendarDays className="size-5" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs text-muted-foreground">When</dt>
                <dd className="text-sm font-semibold text-foreground">15 Sep 2026, 6:00 PM</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs text-muted-foreground">Where</dt>
                <dd className="text-sm font-semibold text-foreground">Buddha Heritage, Patna</dd>
              </div>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#join"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Request to join
            </a>
            <a
              href="#about"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              What to expect
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <img
              src="/conference-hero.png"
              alt="Doctors networking and listening to a keynote at an evening medical conference"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
