"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Flag, Database, Globe, Workflow, BarChart3, GraduationCap } from "lucide-react"

const WhyChooseSocioFi = () => {
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
      title: "Pioneering in Bangladesh",
      description:
        "As the first company in Bangladesh focused on AI Agents for business, we bring unparalleled expertise and a deep understanding of the local market.",
      icon: <Flag className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Customized & Industry-Specific Solutions",
      description:
        "We don't offer one-size-fits-all solutions. Our AI is tailored to the unique challenges and opportunities within your specific industry in Bangladesh.",
      icon: <Database className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Deep Understanding of LLMs",
      description:
        "We harness the power of Large Language Models and possess the vision to create our own LLM with the rich knowledge of Bangladesh.",
      icon: <Globe className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "End-to-End Solutions",
      description:
        "From initial consultation to development, implementation, and ongoing support, we provide comprehensive AI services to meet all your needs.",
      icon: <Workflow className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Focus on Data-Driven Results",
      description:
        "We help you unlock the power of your data to gain valuable insights and make informed decisions that drive business growth.",
      icon: <BarChart3 className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Commitment to Local Talent & Innovation",
      description:
        "We are dedicated to fostering AI talent within Bangladesh and contributing to the nation's technological advancement.",
      icon: <GraduationCap className="h-8 w-8 text-primary-teal" />,
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
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Why Partner with SocioFi for AI Transformation?
            </h2>
            <div className="w-24 h-1 bg-secondary-gold rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              We combine deep local knowledge with cutting-edge AI technology to deliver solutions that drive real
              results for businesses in Bangladesh.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-primary-teal/10 p-3 rounded-full mr-4">{benefit.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-neutral-darkgrey">{benefit.title}</h3>
                        <p className="text-gray-700">{benefit.description}</p>
                      </div>
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

export default WhyChooseSocioFi

