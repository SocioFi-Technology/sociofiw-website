import type { Metadata } from "next"
import IndustryHero from "@/components/services/industry-solutions/industry-hero"
import IndustryFocus from "@/components/services/industry-solutions/industry-focus"
import IndustrySolutions from "@/components/services/industry-solutions/industry-solutions"
import SolutionsApproach from "@/components/services/industry-solutions/solutions-approach"
import IndustryCTA from "@/components/services/industry-solutions/industry-cta"

export const metadata: Metadata = {
  title: "Customized AI Solutions for Industries in Bangladesh | SocioFi Technology",
  description:
    "SocioFi Technology provides customized AI solutions for various industries in Bangladesh, including garments, agriculture, and manufacturing. Learn more.",
}

export default function CustomizedIndustrySolutionsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <IndustryHero />

      {/* Industry Focus Section */}
      <IndustryFocus />

      {/* Industry Solutions Section */}
      <IndustrySolutions />

      {/* Solutions Approach Section */}
      <SolutionsApproach />

      {/* Call to Action Section */}
      <IndustryCTA />
    </div>
  )
}

