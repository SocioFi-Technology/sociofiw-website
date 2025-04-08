"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const WhatAreAgents = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="what-are-agents" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Badge className="mb-4 bg-secondary-gold/10 text-secondary-gold hover:bg-secondary-gold/20 border-none">
              Understanding AI Agents
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Understanding the Power of AI Agents
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div variants={itemVariants} className="lg:w-1/2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="AI Agent Visualization"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-6 text-neutral-darkgrey">What are AI Agents?</h3>

              <p className="text-lg mb-6 text-gray-700">
                AI Agents are intelligent software programs that can perceive their environment, make decisions, and
                take actions to achieve specific goals. Unlike traditional software that follows pre-defined rules, AI
                agents can learn, adapt, and improve over time based on their interactions and the data they process.
              </p>

              <p className="text-lg mb-6 text-gray-700">
                These agents leverage advanced technologies like Large Language Models (LLMs), machine learning, and
                natural language processing to understand and respond to human language, analyze complex data, and
                perform tasks with minimal human intervention.
              </p>

              <p className="text-lg text-gray-700">
                In the context of Bangladeshi businesses, AI agents can be particularly valuable for automating customer
                support in Bengali and English, analyzing local market data, optimizing manufacturing processes in
                garment factories, or providing personalized recommendations for e-commerce platforms serving the local
                market.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatAreAgents

