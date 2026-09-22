import { Mic, Users, UtensilsCrossed } from "lucide-react"

const highlights = [
  {
    icon: Mic,
    title: "Keynote address",
    description: "Open the evening with insights on where patient care and healthcare technology are heading.",
  },
  {
    icon: Users,
    title: "Expert panel discussions",
    description: "Hear leading medical professionals debate the latest advancements and share practical experience.",
  },
  {
    icon: UtensilsCrossed,
    title: "Networking dinner",
    description: "Close the evening over dinner and build connections with fellow doctors.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-5xl px-5 py-14 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">What we do</h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Our Doctor Conference evening is designed for doctors. It brings together leading medical professionals to
            discuss the latest advancements in patient care and healthcare technology.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
