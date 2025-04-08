import type { Metadata } from "next"
import FabricxaiHero from "@/components/products/fabricxai/fabricxai-hero"
import IndustryChallenges from "@/components/products/fabricxai/industry-challenges"
import ProductFeatures from "@/components/products/fabricxai/product-features"
import ProductBenefits from "@/components/products/fabricxai/product-benefits"
import DemoVideo from "@/components/products/fabricxai/demo-video"
import ProductCTA from "@/components/products/fabricxai/product-cta"

export const metadata: Metadata = {
  title: "Fabricxai - AI-Powered Garment Automation & Efficiency for Bangladesh | SocioFi Technology",
  description:
    "Discover Fabricxai, SocioFi Technology's AI-powered solution for garment automation in Bangladesh. Improve efficiency, gain data-driven insights, and optimize your garment business.",
}

export default function FabricxaiPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <FabricxaiHero />

      {/* Industry Challenges Section */}
      <IndustryChallenges />

      {/* Product Features Section */}
      <ProductFeatures />

      {/* Product Benefits Section */}
      <ProductBenefits />

      {/* Demo Video Section */}
      <DemoVideo />

      {/* Call to Action Section */}
      <ProductCTA />
    </div>
  )
}

