import { CalendarDays, Clock, MapPin } from "lucide-react"

const details = [
  { icon: CalendarDays, label: "Date", value: "15 September 2026" },
  { icon: Clock, label: "Time", value: "6:00 PM" },
  { icon: MapPin, label: "Venue", value: "Buddha Heritage, Patna" },
]

export function DetailsSection() {
  return (
    <section id="details">
      <div className="mx-auto max-w-5xl px-5 py-14 md:py-20">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">When &amp; where we meet</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {details.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
                <p className="mt-0.5 text-base font-semibold text-foreground">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
