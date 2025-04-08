"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  BookOpen,
  Search,
  FolderOpen,
  RefreshCw,
  Languages,
  AlertCircle,
  Scale,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

type FeatureProps = {
  icon: React.ReactNode
  title: string
  description: string
  expandedContent: string
  index: number
}

function Feature({ icon, title, description, expandedContent, index }: FeatureProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="flex flex-col p-6 bg-gray-50 dark:bg-neutral-darkgrey/20 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4">{icon}</div>
        <h3 className="text-xl font-bold text-neutral-darkgrey dark:text-white">{title}</h3>
      </div>
      <p className="text-neutral-darkgrey/80 dark:text-gray-300 mb-4">{description}</p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-primary-teal hover:text-primary-teal/80 font-medium mt-2 self-start"
        aria-expanded={isExpanded}
        aria-controls={`expanded-content-${index}`}
      >
        Learn More {isExpanded ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
      </button>
      {isExpanded && (
        <motion.div
          id={`expanded-content-${index}`}
          className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-neutral-darkgrey/80 dark:text-gray-300"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          {expandedContent}
        </motion.div>
      )}
    </motion.div>
  )
}

export default function AingyanFeatures() {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary-teal" />,
      title: "Extensive Knowledge Base of Bangladesh Laws",
      description:
        "Access a vast and growing database of Bangladeshi laws, rules, and regulations across various domains.",
      expandedContent:
        "Our comprehensive knowledge base covers a wide range of legal areas in Bangladesh, including but not limited to: Constitutional Law, Criminal Law, Civil Law, Family Law, Property Law, Labor Law, and more. We continuously update this database with the latest amendments and new legislation to ensure you have access to the most current information. You can easily browse through different legal categories or use the search function to find specific laws or regulations.",
    },
    {
      icon: <Scale className="h-10 w-10 text-primary-teal" />,
      title: "Answer Basic Legal Queries",
      description:
        "Get clear and concise answers to your fundamental legal questions in simple and understandable language.",
      expandedContent:
        "AinGyan is designed to answer your basic legal inquiries in a straightforward manner. Simply type your question in the search bar, and our system will provide you with relevant information extracted from our legal knowledge base. We focus on providing easy-to-understand answers to common legal questions, helping you grasp the fundamentals of Bangladeshi law without needing to decipher complex legal jargon.",
    },
    {
      icon: <Search className="h-10 w-10 text-primary-teal" />,
      title: "User-Friendly Search Functionality",
      description: "Easily search for specific laws, topics, or keywords to quickly find the information you need.",
      expandedContent:
        "Our powerful search engine allows you to quickly locate the legal information you're looking for. You can search using specific keywords, legal terms, article numbers, or general topics. The search results are designed to be relevant and easy to navigate, helping you pinpoint the exact legal information you need within our extensive database.",
    },
    {
      icon: <FolderOpen className="h-10 w-10 text-primary-teal" />,
      title: "Categorized Legal Information",
      description:
        "Browse legal information organized into relevant categories, making it easy to explore specific areas of law.",
      expandedContent:
        "To make it easier for you to explore the vast landscape of Bangladeshi law, we have organized our knowledge base into logical categories. These categories cover major areas of law, allowing you to browse and learn about specific legal domains based on your interests or needs. This structured approach helps you understand the broader context of different laws and regulations.",
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-primary-teal" />,
      title: "Regular Updates and Information Accuracy",
      description:
        "Our knowledge base is regularly updated to reflect the latest legal amendments and ensure the accuracy of the information provided.",
      expandedContent:
        "We are committed to providing you with the most up-to-date and accurate legal information. Our team continuously monitors legal developments and updates our knowledge base to reflect any changes in Bangladeshi laws and regulations. This ensures that you can rely on AinGyan for current and reliable legal information.",
    },
    {
      icon: <Languages className="h-10 w-10 text-primary-teal" />,
      title: "Bengali Language Support (Primary)",
      description:
        "Access all legal information and query responses primarily in Bengali, making it easily accessible to a wider audience in Bangladesh.",
      expandedContent:
        "Recognizing the importance of accessibility, AinGyan primarily provides legal information and answers to queries in the Bengali language. This makes it easier for a larger segment of the population in Bangladesh to understand their legal rights and obligations without the barrier of complex legal terminology in a foreign language.",
    },
    {
      icon: <AlertCircle className="h-10 w-10 text-primary-teal" />,
      title: "Disclaimer and Legal Guidance",
      description:
        "Provides clear disclaimers that the information is for general knowledge and informational purposes only and does not constitute legal advice.",
      expandedContent:
        "It is crucial to understand that the information provided by AinGyan is for general knowledge and informational purposes only. It should not be considered as professional legal advice. For specific legal guidance or assistance with particular legal situations, we strongly recommend consulting with a qualified advocate or legal professional in Bangladesh.",
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 bg-white dark:bg-neutral-darkgrey/10">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-darkgrey dark:text-white">
            Explore the Features of AinGyan in Detail
          </h2>
          <p className="mt-4 text-lg text-neutral-darkgrey/80 dark:text-gray-300 max-w-3xl mx-auto">
            Your Gateway to Understanding Bangladesh Law
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              expandedContent={feature.expandedContent}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

