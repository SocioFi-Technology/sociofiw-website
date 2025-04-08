"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Database, Code, LineChart, Zap } from "lucide-react"

const SolutionsApproach = () => {
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

  const steps = [
    {
      title: "Industry Immersion",
      description:
        "We begin by deeply understanding your industry, business processes, and specific challenges through interviews, site visits, and data analysis.",
      icon: <Users className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Data Assessment",
      description:
        "We evaluate your existing data sources, quality, and infrastructure to determine what's needed for effective AI implementation.",
      icon: <Database className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Solution Design",
      description:
        "Our team designs a customized AI solution that addresses your specific needs, leveraging the most appropriate technologies and approaches.",
      icon: <Code className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Iterative Development",
      description:
        "We develop the solution through an iterative process, continuously refining it based on feedback and performance metrics.",
      icon: <LineChart className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Implementation & Integration",
      description:
        "We seamlessly integrate the AI solution into your existing systems and processes, ensuring minimal disruption to your operations.",
      icon: <Zap className="h-8 w-8 text-primary-teal" />,
    },
  ]

  return (
    <section className="py-20 bg-white">
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
              Our Approach
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Developing AI that Understands Your Business
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Our methodology for creating customized solutions emphasizes collaboration, deep understanding of business
              processes, and iterative development.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div variants={itemVariants} className="lg:w-1/2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our approach to customized solutions"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="lg:w-1/2">
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="bg-primary-teal/10 p-3 rounded-full mr-4">{step.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-neutral-darkgrey">{step.title}</h3>
                          <p className="text-gray-700">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionsApproach

