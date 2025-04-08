"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

const benefits = [
  {
    title: "Personalized Information at Your Fingertips",
    description:
      "Get the news that truly matters to you, eliminating the noise and information overload of traditional news sources.",
  },
  {
    title: "Enhanced Trust and Credibility",
    description: "With clear references, you can be confident in the accuracy and reliability of the news you consume.",
  },
  {
    title: "Save Time with Summarization",
    description: "Quickly grasp the essence of any news story without having to read lengthy articles.",
  },
  {
    title: "Improved Understanding of Complex Issues",
    description: "Our AI-powered explanation feature demystifies complex news, making it accessible to everyone.",
  },
  {
    title: "Greater Control Over Your News Intake",
    description: "Customize your feed to focus on the topics and sources you trust and value.",
  },
  {
    title: "Stay Ahead of the Curve",
    description: "Be the first to know about developments in your areas of interest.",
  },
]

export default function NewsWiseBenefits() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-teal/5 to-accent-green/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-darkgrey">
              Stay Informed, Intelligently and Efficiently
            </h2>
            <p className="text-lg mb-8 text-gray-700">
              NewsWise transforms how you consume news, making it more relevant, trustworthy, and easy to understand.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <CheckCircle className="h-6 w-6 text-primary-teal flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-neutral-darkgrey">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="NewsWise benefits visualization"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-accent-green/20 to-transparent rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

