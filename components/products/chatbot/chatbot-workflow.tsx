"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const ChatbotWorkflow = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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
    <section id="chatbot-demo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Badge className="mb-4 bg-primary-teal/10 text-primary-teal hover:bg-primary-teal/20 border-none">
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              The Intelligence Behind AI Chatbot BB
            </h2>
            <div className="w-24 h-1 bg-secondary-gold rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Discover the sophisticated technology that powers AI Chatbot BB and enables its intelligent features.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="AI Chatbot BB Workflow"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-6 text-neutral-darkgrey">Advanced Technology Stack</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-primary-teal">1. Keyword Activation</h4>
                  <p className="text-gray-700">
                    AI Chatbot BB is activated by a simple keyword like "Help" that can be customized by premium users.
                    This activation method ensures that the chatbot is only engaged when needed, providing a
                    non-intrusive user experience while remaining readily available.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2 text-primary-teal">2. Intelligent Input Analysis</h4>
                  <p className="text-gray-700">
                    When a user provides input, BB's advanced algorithms analyze and categorize the content based on
                    intent, topic, and complexity. This analysis determines which specialized LLM will handle the
                    request for optimal results.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2 text-primary-teal">3. LLM Routing System</h4>
                  <p className="text-gray-700">
                    Different types of requests require different specialized models. BB routes each query to the most
                    appropriate LLM - whether it's for creative content generation, factual information retrieval, or
                    complex problem-solving.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2 text-primary-teal">4. Community Building Algorithm</h4>
                  <p className="text-gray-700">
                    BB's proprietary algorithm identifies patterns in user interests and automatically creates temporary
                    communities of users with shared interests, fostering collaboration and knowledge sharing that
                    dissolves after periods of inactivity.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ChatbotWorkflow

