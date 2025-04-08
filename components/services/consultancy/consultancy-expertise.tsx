"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Database, Compass, Search, Cpu, Users, GraduationCap } from "lucide-react"

const ConsultancyExpertise = () => {
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

  const expertiseAreas = [
    {
      title: "AI Strategy Development",
      description:
        "We help you create a comprehensive AI strategy aligned with your business goals and industry context.",
      icon: <Compass className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "AI Implementation Roadmap",
      description:
        "We develop detailed roadmaps for implementing AI in your organization, with clear milestones and timelines.",
      icon: <BarChart3 className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Data Strategy & Management",
      description:
        "We help you develop effective data strategies and management practices to support your AI initiatives.",
      icon: <Database className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Identifying AI Opportunities",
      description: "We analyze your business processes to identify high-impact opportunities for AI implementation.",
      icon: <Search className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Evaluating AI Technologies",
      description: "We help you assess and select the most appropriate AI technologies and solutions for your needs.",
      icon: <Cpu className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Change Management for AI",
      description: "We guide you through the organizational changes needed for successful AI adoption.",
      icon: <Users className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Training & Workshops",
      description: "We provide training and workshops to build AI literacy and capabilities within your organization.",
      icon: <GraduationCap className="h-10 w-10 text-primary-teal" />,
    },
  ]

  return (
    <section id="consultancy-expertise" className="py-20 bg-white">
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
              Our Expertise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Expert Guidance for Your AI Initiatives
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Our consultants offer expertise across a wide range of AI-related areas to help you navigate your AI
              transformation journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className={
                  index === expertiseAreas.length - 1 && expertiseAreas.length % 3 === 1 ? "lg:col-span-3" : ""
                }
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="bg-primary-teal/10 p-4 rounded-full mb-4">{area.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-neutral-darkgrey">{area.title}</h3>
                    </div>
                    <p className="text-gray-700 text-center">{area.description}</p>
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

export default ConsultancyExpertise

