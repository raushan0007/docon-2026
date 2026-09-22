import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { DetailsSection } from "@/components/details-section"
import { JoinSection } from "@/components/join-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <DetailsSection />
        <JoinSection />
      </main>
      <SiteFooter />
    </div>
  )
}
