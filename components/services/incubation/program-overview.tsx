"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Calendar, Users, Target } from "lucide-react"

const ProgramOverview = () => {
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

  const programDetails = [
    {
      title: "Duration",
      description:
        "6-month intensive program with structured phases for ideation, development, and market preparation.",
      icon: <Clock className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Schedule",
      description: "Two cohorts per year, with applications opening in January and July.",
      icon: <Calendar className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Cohort Size",
      description: "Each cohort accepts 5-10 startups to ensure personalized attention and support.",
      icon: <Users className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Focus Areas",
      description:
        "AI solutions for key industries in Bangladesh, including garments, agriculture, manufacturing, and e-commerce.",
      icon: <Target className="h-8 w-8 text-primary-teal" />,
    },
  ]

  return (
    <section id="program-overview" className="py-20 bg-white">
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
              Program Overview
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              What Our Incubation Program Offers
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Our comprehensive program is designed to provide everything you need to transform your AI idea into a
              successful business.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div variants={itemVariants} className="lg:w-1/2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="SocioFi Incubation Program"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-6 text-neutral-darkgrey">Program Structure</h3>

              <div className="space-y-6 mb-8">
                {programDetails.map((detail, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="bg-primary-teal/10 p-3 rounded-full mr-4">{detail.icon}</div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2 text-neutral-darkgrey">{detail.title}</h4>
                          <p className="text-gray-700">{detail.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-lg text-gray-700">
                Our program is structured to provide comprehensive support throughout your startup journey, from initial
                concept to market-ready product. We focus on building both technical AI capabilities and essential
                business skills to ensure your venture's success.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProgramOverview

