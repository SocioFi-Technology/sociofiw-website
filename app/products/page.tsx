import type { Metadata } from "next"
import ProductsPageClient from "./ProductsPageClient"

export const metadata: Metadata = {
  title: "AI-Powered Products for Business in Bangladesh | SocioFi Technology",
  description:
    "Discover SocioFi Technology's innovative AI products designed for businesses in Bangladesh - Fabricxai, Internal Business App, and AI Chatbot BB.",
}

export default function ProductsPage() {
  return <ProductsPageClient />
}

