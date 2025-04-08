"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Database, Package, FileText, ShoppingCart, Factory } from "lucide-react"

const AgentExamples = () => {
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

  const examples = [
    {
      title: "Customer Support Chatbots",
      description:
        "Multilingual chatbots that can handle customer inquiries in Bengali and English, providing 24/7 support.",
      icon: <MessageSquare className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Data Analysis Agents",
      description:
        "AI agents that analyze sales and marketing data to identify trends and provide actionable insights.",
      icon: <Database className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Inventory Management Assistants",
      description:
        "Intelligent assistants that monitor inventory levels, predict shortages, and automate reordering processes.",
      icon: <Package className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Automated Report Generation",
      description: "AI agents that gather data from multiple sources and generate comprehensive, insightful reports.",
      icon: <FileText className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Personalized Recommendation Engines",
      description: "AI systems that analyze customer behavior to provide personalized product recommendations.",
      icon: <ShoppingCart className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Process Automation Agents",
      description:
        "AI agents that streamline manufacturing processes, identify inefficiencies, and suggest improvements.",
      icon: <Factory className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=200&width=300",
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
              Examples
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Transform Your Operations with Tailored AI Agents
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Explore the various types of AI agents we can develop to address specific needs in your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-none shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={example.image || "/placeholder.svg"}
                      alt={example.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-white">{example.title}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="bg-primary-teal/10 p-3 rounded-full mr-4">{example.icon}</div>
                      <p className="text-gray-700">{example.description}</p>
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

export default AgentExamples

