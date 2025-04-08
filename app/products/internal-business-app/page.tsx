import type { Metadata } from "next"
import AppHero from "@/components/products/internal-app/app-hero"
import AppFeatures from "@/components/products/internal-app/app-features"
import AppBenefits from "@/components/products/internal-app/app-benefits"
import AppProcess from "@/components/products/internal-app/app-process"
import AppCTA from "@/components/products/internal-app/app-cta"

export const metadata: Metadata = {
  title: "Customized Internal Business App for Enhanced Productivity in Bangladesh | SocioFi Technology",
  description:
    "Boost your business productivity in Bangladesh with SocioFi Technology's customized internal app. Secure information access, task management, and AI-powered assistance.",
}

export default function InternalBusinessAppPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <AppHero />

      {/* Features Section */}
      <AppFeatures />

      {/* Benefits Section */}
      <AppBenefits />

      {/* Process Section */}
      <AppProcess />

      {/* Call to Action Section */}
      <AppCTA />
    </div>
  )
}

