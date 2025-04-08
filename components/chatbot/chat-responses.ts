import type { ChatOption } from "./types"

export const greetingMessage = {
  english: "Hi there! Welcome to SocioFi Technology. How can I help you today?",
  bengali: "হ্যালো! সোশিওফি টেকনোলজিতে স্বাগতম। আজ আমি আপনাকে কিভাবে সাহায্য করতে পারি?",
}

export const infoGatheringPrompt = "To better assist you, could you please provide a few details?"
export const namePrompt = "What is your name?"
export const emailPrompt = (name: string) => `Thank you, ${name}. What is your email address?`
export const professionPrompt = "Could you please tell us about your profession?"
export const designationPrompt = "And what is your designation or role?"
export const confirmationMessage = (name: string) =>
  `Thank you for providing your details, ${name}. How can I help you understand SocioFi Technology better?`

export const professionOptions: ChatOption[] = [
  { id: "entrepreneur", text: "Entrepreneur", action: "profession" },
  { id: "it-professional", text: "IT Professional", action: "profession" },
  { id: "business-owner", text: "Business Owner", action: "profession" },
  { id: "student", text: "Student", action: "profession" },
  { id: "other", text: "Other", action: "profession" },
]

export const designationOptions: ChatOption[] = [
  { id: "ceo", text: "CEO", action: "designation" },
  { id: "manager", text: "Manager", action: "designation" },
  { id: "developer", text: "Developer", action: "designation" },
  { id: "marketing", text: "Marketing Specialist", action: "designation" },
  { id: "student", text: "Student", action: "designation" },
  { id: "other", text: "Other", action: "designation" },
]

export const initialConversationOptions: ChatOption[] = [
  { id: "about", text: "What does SocioFi do?", action: "about" },
  { id: "services", text: "Tell me about your services", action: "services" },
  { id: "products", text: "What products do you offer?", action: "products" },
  { id: "contact", text: "I want to get in touch", action: "contact" },
]

export const responseDatabase = {
  about:
    "SocioFi Technology is Bangladesh's leading AI Agent company. We provide a range of services and products to help businesses leverage the power of Artificial Intelligence. This includes developing custom AI Agents, creating tailored AI solutions for various industries, offering strategic AI consultancy, and running an incubation program for young entrepreneurs.",

  services:
    "We offer four main services: AI Agent Development, Customized Industry Solutions, AI Consultancy, and an Incubation Program for young entrepreneurs. Would you like to learn more about any specific service?",

  products:
    "Our flagship products include Fabricxai for the garment industry, OfficeFlow for business efficiency, and AI Chatbot BB for intelligent customer interactions. Which product would you like to know more about?",

  contact:
    "You can reach us through our contact form, by email at info@sociofi.com, or by phone at +880 123 456 789. Would you like me to connect you with someone from our team?",

  "ai-agent":
    "In simple terms, an AI Agent is an intelligent software entity that can perform tasks autonomously, often mimicking human capabilities. Our AI Agents can be customized to automate various business processes, such as customer service, data analysis, and more.",

  fabricxai:
    "Fabricxai is our flagship AI-powered platform designed specifically for the garment industry in Bangladesh. It helps businesses automate processes, gain valuable data-driven insights, and improve overall efficiency in manufacturing operations. Key features include production tracking, quality control, and predictive maintenance.",

  officeflow:
    "OfficeFlow is our internal business application designed to boost employee efficiency, streamline communication, and simplify HR management. It includes modules for task management, team collaboration, and performance tracking.",

  chatbot:
    "AI Chatbot BB is our intelligent chatbot solution that uses advanced LLM routing, keyword activation, and community-building features to provide exceptional customer service and engagement for your business.",
}

export const serviceOptions: ChatOption[] = [
  { id: "ai-agent-dev", text: "AI Agent Development", action: "ai-agent" },
  { id: "industry-solutions", text: "Customized Industry Solutions", action: "industry-solutions" },
  { id: "ai-consultancy", text: "AI Consultancy", action: "ai-consultancy" },
  { id: "incubation", text: "Incubation Program", action: "incubation" },
]

export const productOptions: ChatOption[] = [
  { id: "fabricxai", text: "Fabricxai", action: "fabricxai" },
  { id: "officeflow", text: "OfficeFlow", action: "officeflow" },
  { id: "chatbot-bb", text: "AI Chatbot BB", action: "chatbot" },
]

