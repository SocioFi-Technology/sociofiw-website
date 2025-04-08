import type { Metadata } from "next"
import AingyanHero from "@/components/products/aingyan/aingyan-hero"
import AingyanFeatures from "@/components/products/aingyan/aingyan-features"
import AingyanBenefits from "@/components/products/aingyan/aingyan-benefits"
import AingyanDisclaimer from "@/components/products/aingyan/aingyan-disclaimer"
import AingyanCta from "@/components/products/aingyan/aingyan-cta"

export const metadata: Metadata = {
  title: "AinGyan - Legal Information & Laws of Bangladesh | SocioFi Technology",
  description:
    "Discover AinGyan by SocioFi Technology in Bangladesh. Get answers to your basic legal queries about Bangladeshi laws and regulations. Explore our extensive legal knowledge base and more.",
}

export default function AingyanPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <AingyanHero />
      <AingyanFeatures />
      <AingyanBenefits />
      <AingyanDisclaimer />
      <AingyanCta />
    </main>
  )
}

