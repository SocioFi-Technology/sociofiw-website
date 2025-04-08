import type { Metadata } from "next"
import ChatbotHero from "@/components/products/chatbot/chatbot-hero"
import ChatbotFeatures from "@/components/products/chatbot/chatbot-features"
import ChatbotBenefits from "@/components/products/chatbot/chatbot-benefits"
import ChatbotWorkflow from "@/components/products/chatbot/chatbot-workflow"
import ChatbotPremium from "@/components/products/chatbot/chatbot-premium"
import ChatbotCTA from "@/components/products/chatbot/chatbot-cta"

export const metadata: Metadata = {
  title: "AI Chatbot BB - Intelligent Chatbot for Business in Bangladesh | SocioFi Technology",
  description:
    "Discover AI Chatbot BB by SocioFi Technology in Bangladesh. Intelligent chatbot with keyword activation, LLM routing, and community building features.",
}

export default function AIChatbotBBPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <ChatbotHero />

      {/* Features Section */}
      <ChatbotFeatures />

      {/* Benefits Section */}
      <ChatbotBenefits />

      {/* How It Works Section */}
      <ChatbotWorkflow />

      {/* Premium Features Section */}
      <ChatbotPremium />

      {/* Call to Action Section */}
      <ChatbotCTA />
    </div>
  )
}

