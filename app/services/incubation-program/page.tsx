import type { Metadata } from "next"
import IncubationHero from "@/components/services/incubation/incubation-hero"
import ProgramOverview from "@/components/services/incubation/program-overview"
import ProgramBenefits from "@/components/services/incubation/program-benefits"
import IdealCandidates from "@/components/services/incubation/ideal-candidates"
import ApplicationProcess from "@/components/services/incubation/application-process"
import IncubationCTA from "@/components/services/incubation/incubation-cta"

export const metadata: Metadata = {
  title: "AI Incubation Program in Bangladesh | SocioFi Technology",
  description:
    "Learn about SocioFi Technology's incubation program in Bangladesh, designed to support young entrepreneurs in building innovative AI-powered products.",
}

export default function IncubationProgramPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <IncubationHero />

      {/* Program Overview Section */}
      <ProgramOverview />

      {/* Program Benefits Section */}
      <ProgramBenefits />

      {/* Ideal Candidates Section */}
      <IdealCandidates />

      {/* Application Process Section */}
      <ApplicationProcess />

      {/* Call to Action Section */}
      <IncubationCTA />
    </div>
  )
}

