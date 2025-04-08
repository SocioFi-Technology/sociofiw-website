"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageSquare, Play } from "lucide-react"

const ChatbotHero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-white to-neutral-offwhite">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full geometric-bg" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        <div className="hero-animation" />
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:w-1/2"
          >
            <motion.div variants={itemVariants}>
              <Badge className="mb-4 bg-primary-teal/10 text-primary-teal hover:bg-primary-teal/20 border-none">
                AI Chatbot BB
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-neutral-darkgrey"
            >
              AI Chatbot BB: Intelligent Assistance and Community Building for Your Business
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl mb-8 font-medium text-primary-teal"
              style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
            >
              এআই চ্যাটবট বিবি: আপনার ব্যবসার জন্য বুদ্ধিমান সহায়তা এবং কমিউনিটি তৈরি
            </motion.h2>

            <motion.div variants={itemVariants} className="flex justify-start mb-8">
              <div className="w-24 h-1 bg-secondary-gold rounded-full"></div>
            </motion.div>

            <motion.h3 variants={itemVariants} className="text-xl md:text-2xl mb-6 text-neutral-darkgrey">
              Experience the power of intelligent conversations with AI Chatbot BB, featuring keyword activation, smart
              LLM routing, and dynamic community building.
            </motion.h3>

            <motion.p variants={itemVariants} className="text-lg mb-10 text-gray-700">
              Meet AI Chatbot BB, SocioFi Technology's innovative chatbot solution designed to provide intelligent
              assistance and foster community engagement. Activated by a simple keyword, BB intelligently analyzes user
              input, routes it to the most appropriate Large Language Model for optimal output, and even builds dynamic
              communities based on user interests, creating a powerful tool for information retrieval, communication,
              and collaboration.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary-teal hover:bg-primary-teal/90 text-white">
                <Link href="/contact" className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Request a Demo
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-teal text-primary-teal hover:bg-primary-teal/10"
              >
                <a href="#chatbot-demo" className="flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  See It in Action
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6 max-w-md mx-auto">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary-teal flex items-center justify-center text-white font-bold">
                    BB
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold text-neutral-darkgrey">AI Chatbot BB</h3>
                    <p className="text-xs text-gray-500">Online</p>
                  </div>
                </div>

                <div className="space-y-4 mb-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primary-teal flex items-center justify-center text-white font-bold text-xs mr-2">
                      BB
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Hello! I'm BB, your intelligent assistant. How can I help you today?</p>
                    </div>
                  </div>

                  <div className="flex items-start justify-end">
                    <div className="bg-primary-teal/10 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Help: I need information about our quarterly sales report.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primary-teal flex items-center justify-center text-white font-bold text-xs mr-2">
                      BB
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">
                        I've found the Q3 sales report. The total revenue was 25% higher than Q2, with the strongest
                        growth in the eastern region. Would you like me to send you the full report?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full p-3 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-teal focus:border-transparent"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <Badge className="bg-accent-green text-white">Powered by LLM Technology</Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-offwhite to-transparent"></div>
    </section>
  )
}

export default ChatbotHero

