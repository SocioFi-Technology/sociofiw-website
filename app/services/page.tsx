import type { Metadata } from "next"
import ServicesPageClient from "./ServicesPageClient"

export const metadata: Metadata = {
  title: "AI Services for Business in Bangladesh | SocioFi Technology",
  description:
    "Explore SocioFi Technology's comprehensive AI services in Bangladesh, including AI Agent Development, Customized Industry Solutions, AI Consultancy, and our Incubation Program.",
}

export default function ServicesPage() {
  return <ServicesPageClient />
}

