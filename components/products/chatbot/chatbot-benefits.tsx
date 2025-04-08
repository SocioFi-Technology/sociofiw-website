"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, BarChart3, HeartHandshake, MessageSquare, LineChart } from "lucide-react"

const ChatbotBenefits = () => {
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

  const benefits = [
    {
      title: "Instant Information & Support",
      description:
        "Provide users with immediate access to information and support, improving efficiency and user satisfaction.",
      stats: "24/7 availability with instant responses",
      icon: <Clock className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Optimized Content Generation",
      description: "Leverage the power of multiple LLMs to generate high-quality content tailored to different needs.",
      stats: "Up to 40% improvement in response quality",
      icon: <MessageSquare className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Enhanced User Engagement",
      description: "Create dynamic and engaging user experiences through intelligent conversations.",
      stats: "Increase user engagement by up to 35%",
      icon: <HeartHandshake className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Fostered Community Collaboration",
      description:
        "Build temporary, focused communities around shared interests, promoting knowledge sharing and problem-solving.",
      stats: "Create up to 200% more collaborative interactions",
      icon: <Users className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Improved Customer Service",
      description: "Offer quick and efficient responses to customer inquiries, improving overall customer experience.",
      stats: "Reduce response time by up to 90%",
      icon: <BarChart3 className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Valuable User Insights",
      description: "Gain insights into user interests and needs through their interactions with the chatbot.",
      stats: "Collect actionable data from 100% of interactions",
      icon: <LineChart className="h-10 w-10 text-primary-teal" />,
    },
  ]

  return (
    <section className="py-20 bg-neutral-offwhite">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Badge className="mb-4 bg-accent-green/10 text-accent-green hover:bg-accent-green/20 border-none">
              Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Unlock the Advantages of an Intelligent Chatbot Solution
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Implementing AI Chatbot BB delivers significant benefits that can transform your organization's
              communication, customer service, and community engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="bg-primary-teal/10 p-4 rounded-full mb-4">{benefit.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-neutral-darkgrey">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{benefit.description}</p>
                    <div className="bg-secondary-gold/10 p-3 rounded-md">
                      <p className="text-secondary-gold font-medium text-sm">
                        <span className="font-bold">Potential Impact:</span> {benefit.stats}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ChatbotBenefits

