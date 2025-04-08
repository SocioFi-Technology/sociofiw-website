import type { Metadata } from "next"
import ConsultancyHero from "@/components/services/consultancy/consultancy-hero"
import ConsultancyExpertise from "@/components/services/consultancy/consultancy-expertise"
import ConsultingProcess from "@/components/services/consultancy/consulting-process"
import ConsultancyBenefits from "@/components/services/consultancy/consultancy-benefits"
import ConsultancyCTA from "@/components/services/consultancy/consultancy-cta"

export const metadata: Metadata = {
  title: "AI Consulting Services in Bangladesh | SocioFi Technology",
  description:
    "Get expert AI consulting services from SocioFi Technology in Bangladesh. We help you strategize, plan, and implement AI solutions for your business.",
}

export default function AIConsultancyPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <ConsultancyHero />

      {/* Consultancy Expertise Section */}
      <ConsultancyExpertise />

      {/* Consulting Process Section */}
      <ConsultingProcess />

      {/* Benefits Section */}
      <ConsultancyBenefits />

      {/* Call to Action Section */}
      <ConsultancyCTA />
    </div>
  )
}

