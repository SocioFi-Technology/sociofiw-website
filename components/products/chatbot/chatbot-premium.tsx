"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, MessageSquare, Bell, Smartphone, Palette } from "lucide-react"

const ChatbotPremium = () => {
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

  const premiumFeatures = [
    {
      title: "Customizable Activation Keyword",
      description: "Choose your own activation keyword that fits your organization's culture and communication style.",
      icon: <MessageSquare className="h-6 w-6 text-primary-teal" />,
    },
    {
      title: "Trusted Person Notifications",
      description:
        "Designate up to three trusted individuals who will receive notifications when the chatbot is activated.",
      icon: <Bell className="h-6 w-6 text-primary-teal" />,
    },
    {
      title: "Mobile Number Integration",
      description: "Integrate your mobile number for enhanced notifications and direct interaction with the chatbot.",
      icon: <Smartphone className="h-6 w-6 text-primary-teal" />,
    },
    {
      title: "Custom Branding",
      description: "Personalize the chatbot interface with your company's branding, colors, and logo.",
      icon: <Palette className="h-6 w-6 text-primary-teal" />,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary-teal/5 to-accent-green/5">
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
              Premium Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Unlock Even More Power with Premium AI Chatbot BB
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Upgrade to our premium plan to access exclusive features that enhance the capabilities and customization
              options of AI Chatbot BB.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="md:col-span-2">
              <Card className="border-none shadow-lg bg-white overflow-hidden">
                <div className="bg-primary-teal text-white p-4">
                  <h3 className="text-xl font-bold">Premium Plan Features</h3>
                </div>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {premiumFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-primary-teal/10 p-2 rounded-full mr-3 flex-shrink-0">{feature.icon}</div>
                        <div>
                          <h4 className="font-semibold text-neutral-darkgrey mb-1">{feature.title}</h4>
                          <p className="text-gray-700 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-none shadow-lg h-full">
                <CardHeader className="bg-neutral-offwhite">
                  <CardTitle className="text-xl font-bold text-neutral-darkgrey">Standard Plan</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-accent-green mr-2" />
                      <span className="text-gray-700">Keyword Activation</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-accent-green mr-2" />
                      <span className="text-gray-700">Intelligent LLM Routing</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-accent-green mr-2" />
                      <span className="text-gray-700">Community Building</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-accent-green mr-2" />
                      <span className="text-gray-700">Basic Analytics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-none shadow-lg h-full border-2 border-primary-teal">
                <CardHeader className="bg-primary-teal text-white">
                  <CardTitle className="text-xl font-bold">Premium Plan</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-accent-green mr-2" />
                      <span className="text-gray-700">All Standard Features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-accent-green mr-2" />
                      <span className="text-gray-700">Customizable Activation Keyword</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-accent-green mr-2" />
                      <span className="text-gray-700">Trusted Person Notifications</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-accent-green mr-2" />
                      <span className="text-gray-700">Mobile Number Integration</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-accent-green mr-2" />
                      <span className="text-gray-700">Custom Branding</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-accent-green mr-2" />
                      <span className="text-gray-700">Advanced Analytics Dashboard</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ChatbotPremium

