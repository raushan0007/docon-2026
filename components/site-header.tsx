import { Stethoscope } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Stethoscope className="size-5" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold leading-tight text-foreground sm:text-base">
            Doctor Conference <span className="text-primary">2026</span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <a href="#about" className="transition-colors hover:text-primary">
            About
          </a>
          <a href="#details" className="transition-colors hover:text-primary">
            Details
          </a>
          <a
            href="#join"
            className="rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Join us
          </a>
        </nav>
      </div>
    </header>
  )
}
