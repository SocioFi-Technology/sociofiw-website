"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, PenTool, Map, Wrench, BarChart3 } from "lucide-react"

const ConsultingProcess = () => {
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
      title: "Discovery & Assessment",
      description:
        "Understanding your business goals, challenges, and existing infrastructure through interviews, workshops, and data analysis.",
      icon: <Search className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Strategy Development",
      description:
        "Defining your AI vision, identifying key opportunities, and creating a tailored AI strategy aligned with your business objectives.",
      icon: <PenTool className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Planning & Roadmapping",
      description:
        "Developing a detailed plan for AI implementation, including timelines, resources, and key milestones.",
      icon: <Map className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Implementation Support",
      description: "Providing guidance and support during the AI solution development and deployment phases.",
      icon: <Wrench className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Evaluation & Optimization",
      description: "Measuring the impact of AI initiatives and providing recommendations for continuous improvement.",
      icon: <BarChart3 className="h-8 w-8 text-primary-teal" />,
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
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Our Collaborative Approach to AI Consulting
            </h2>
            <div className="w-24 h-1 bg-secondary-gold rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              We follow a structured, collaborative process to help you successfully navigate your AI journey.
            </p>
          </motion.div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-center">
                <div className="hidden md:flex items-center justify-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-primary-teal border-2 border-primary-teal">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && <div className="h-16 w-0.5 bg-primary-teal/30 my-2"></div>}
                </div>

                <Card className="w-full ml-0 md:ml-6 border-none shadow-md">
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ConsultingProcess

