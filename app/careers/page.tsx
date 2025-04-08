import type { Metadata } from "next"
import CareersHero from "@/components/careers/careers-hero"
import WhyWorkHere from "@/components/careers/why-work-here"
import OpenPositions from "@/components/careers/open-positions"
import LifeAtSocioFi from "@/components/careers/life-at-sociofi"
import CareersCTA from "@/components/careers/careers-cta"

export const metadata: Metadata = {
  title: "Join SocioFi Technology - AI Jobs & Careers in Bangladesh",
  description:
    "Explore career opportunities at SocioFi Technology, Bangladesh's leading AI Agent company. Join our innovative team and build the future of AI in Bangladesh.",
}

export default function CareersPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <CareersHero />

      {/* Why Work at SocioFi Section */}
      <WhyWorkHere />

      {/* Open Positions Section */}
      <OpenPositions />

      {/* Life at SocioFi Section */}
      <LifeAtSocioFi />

      {/* Call to Action Section */}
      <CareersCTA />
    </div>
  )
}

