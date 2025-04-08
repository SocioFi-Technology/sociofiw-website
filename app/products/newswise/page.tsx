import type { Metadata } from "next"
import NewsWiseHero from "@/components/products/newswise/newswise-hero"
import NewsWiseFeatures from "@/components/products/newswise/newswise-features"
import NewsWiseBenefits from "@/components/products/newswise/newswise-benefits"
import NewsWiseHowItWorks from "@/components/products/newswise/newswise-how-it-works"
import NewsWiseCta from "@/components/products/newswise/newswise-cta"

export const metadata: Metadata = {
  title: "NewsWise - Personalized AI News Portal with Summarization for Bangladesh | SocioFi Technology",
  description:
    "Discover NewsWise by SocioFi Technology in Bangladesh. Get personalized news with references, AI-powered summarization, and explanations tailored to your interests.",
}

export default function NewsWisePage() {
  return (
    <main className="pt-20">
      <NewsWiseHero />
      <NewsWiseFeatures />
      <NewsWiseBenefits />
      <NewsWiseHowItWorks />
      <NewsWiseCta />
    </main>
  )
}

