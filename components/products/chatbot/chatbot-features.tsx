"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Brain, Users, Smartphone, SmilePlus } from "lucide-react"

const ChatbotFeatures = () => {
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

  const features = [
    {
      title: "Keyword-Activated Chatbot with Trusted Notifications",
      description:
        "Activate the chatbot instantly with a user-defined keyword like 'Help'. Premium users can customize this keyword and designate up to three trusted individuals who will receive notifications when the chatbot is activated.",
      icon: <MessageSquare className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Intelligent LLM Routing & Output Generation",
      description:
        "Any input is intelligently analyzed and categorized (e.g., Information Seeking, Descriptive Writing, Social Media Posts). AI Chatbot BB automatically selects the most suitable Large Language Model to generate the best possible output.",
      icon: <Brain className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Dynamic Interest-Based Community Building",
      description:
        "AI Chatbot BB automatically builds communities based on user interests and search history. Users with shared interests are connected in temporary group chats that dissolve after 7 days of inactivity, fostering focused and timely collaboration.",
      icon: <Users className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Premium Mobile Number Integration",
      description:
        "(Premium Feature) Premium users can integrate their mobile number for enhanced notifications and potentially direct interaction with the chatbot.",
      icon: <Smartphone className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Sentiment Analysis",
      description:
        "AI Chatbot BB can analyze the sentiment of user input, allowing businesses to understand the emotional tone of conversations and respond more effectively.",
      icon: <SmilePlus className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="chatbot-features" className="py-20 bg-white">
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
              Key Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Smart Features for Intelligent Interactions and Community Growth
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              AI Chatbot BB offers a comprehensive suite of features designed to provide intelligent assistance, foster
              community engagement, and enhance communication within your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6">
                        <div className="flex items-center">
                          <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm mr-3">{feature.icon}</div>
                          <h3 className="text-xl font-bold text-white">{feature.title.split(":")[0]}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-700">{feature.description}</p>
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

export default ChatbotFeatures

