import { Mail } from "lucide-react"

export function JoinSection() {
  const email = "raushan.smile@gmail.com"
  const subject = encodeURIComponent("Doctor Conference 2026 — Request to join")
  const body = encodeURIComponent(
    "Hello Raushan,\n\nI would like to join the Doctor Conference 2026.\n\nName:\nSpecialty / Institution:\nPhone:\n\nThank you.",
  )

  return (
    <section id="join" className="border-t border-border/60 bg-primary">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
        <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">How to join</h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
          Email Raushan Kumar Gupta with your details by{" "}
          <span className="font-semibold text-primary-foreground">September 10, 2026</span> to reserve your place.
        </p>

        <a
          href={`mailto:${email}?subject=${subject}&body=${body}`}
          className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary shadow-sm transition-transform hover:-translate-y-0.5"
        >
          <Mail className="size-5" aria-hidden="true" />
          Email {email}
        </a>

        <p className="mt-5 text-sm text-primary-foreground/75">Please include your name and relevant details.</p>
      </div>
    </section>
  )
}
