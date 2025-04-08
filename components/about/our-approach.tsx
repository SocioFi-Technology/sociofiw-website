"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Settings, Shield, BarChart3, GraduationCap, Globe } from "lucide-react"

const OurApproach = () => {
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

  const approaches = [
    {
      title: "Customization & Industry Focus",
      description:
        "We develop tailored AI solutions for specific Bangladeshi industries, understanding their unique challenges and requirements.",
      icon: <Settings className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Ethical AI Development",
      description:
        "We prioritize responsible AI practices, ensuring data privacy, fairness, transparency, and bias mitigation in all our solutions.",
      icon: <Shield className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Focus on Practical Impact & ROI",
      description:
        "Our AI solutions are designed to deliver tangible business results - improved efficiency, data-driven decisions, and measurable ROI.",
      icon: <BarChart3 className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Building Local AI Expertise",
      description:
        "We're committed to developing AI talent within Bangladesh through hiring, training, and our incubation program.",
      icon: <GraduationCap className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "LLM Expertise & Local Knowledge",
      description:
        "We combine expertise in Large Language Models with deep understanding of the Bangladeshi context and industry nuances.",
      icon: <Globe className="h-10 w-10 text-primary-teal" />,
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
            <Badge className="mb-4 bg-secondary-gold/10 text-secondary-gold hover:bg-secondary-gold/20 border-none">
              Our Approach
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Our Approach to AI: Intelligent Solutions, Responsibly Developed
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              At SocioFi Technology, we approach AI development with a focus on customization, ethics, and practical
              impact for Bangladeshi businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approaches.map((approach, index) => (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="bg-primary-teal/10 p-3 rounded-full mr-4">{approach.icon}</div>
                      <h3 className="text-xl font-bold text-neutral-darkgrey pt-2">{approach.title}</h3>
                    </div>
                    <p className="text-gray-700">{approach.description}</p>
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

export default OurApproach

