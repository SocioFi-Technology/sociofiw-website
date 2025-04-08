"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Server, Code, TrendingUp, Network, DollarSign } from "lucide-react"

const ProgramBenefits = () => {
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
      title: "Mentorship from AI Experts",
      description:
        "One-on-one guidance from experienced AI professionals and industry experts who understand the Bangladeshi context.",
      icon: <Users className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Access to Technical Resources",
      description:
        "Cloud computing credits, AI development tools, and infrastructure to build and test your AI solutions.",
      icon: <Server className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Product Development Support",
      description: "Technical assistance with AI model development, software engineering, and product design.",
      icon: <Code className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Business Strategy Guidance",
      description: "Help with business model development, market research, and go-to-market strategies.",
      icon: <TrendingUp className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Networking Opportunities",
      description:
        "Connections to potential customers, partners, investors, and the broader AI ecosystem in Bangladesh.",
      icon: <Network className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Potential Seed Funding",
      description:
        "Opportunity to receive seed investment for promising startups that demonstrate significant potential.",
      icon: <DollarSign className="h-10 w-10 text-primary-teal" />,
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
            <Badge className="mb-4 bg-primary-teal/10 text-primary-teal hover:bg-primary-teal/20 border-none">
              Program Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Benefits of Joining the SocioFi Incubation Program
            </h2>
            <div className="w-24 h-1 bg-secondary-gold rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Our program provides comprehensive support to help you build a successful AI-powered business.
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
                    <p className="text-gray-700 text-center">{benefit.description}</p>
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

export default ProgramBenefits

