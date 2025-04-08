import type { Metadata } from "next"
import AgentHero from "@/components/services/agent-development/agent-hero"
import WhatAreAgents from "@/components/services/agent-development/what-are-agents"
import DevelopmentProcess from "@/components/services/agent-development/development-process"
import AgentBenefits from "@/components/services/agent-development/agent-benefits"
import AgentExamples from "@/components/services/agent-development/agent-examples"
import AgentCTA from "@/components/services/agent-development/agent-cta"

export const metadata: Metadata = {
  title: "AI Agent Development Services in Bangladesh | SocioFi Technology",
  description:
    "Learn about SocioFi Technology's AI Agent development services in Bangladesh. Create custom AI agents for automation, customer service, and intelligent assistance.",
}

export default function AIAgentDevelopmentPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <AgentHero />

      {/* What are AI Agents Section */}
      <WhatAreAgents />

      {/* Development Process Section */}
      <DevelopmentProcess />

      {/* Benefits Section */}
      <AgentBenefits />

      {/* Examples Section */}
      <AgentExamples />

      {/* Call to Action Section */}
      <AgentCTA />
    </div>
  )
}

