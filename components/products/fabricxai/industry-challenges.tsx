"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, AlertTriangle, Database, DollarSign, Truck, TrendingUp } from "lucide-react"

const IndustryChallenges = () => {
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

  const challenges = [
    {
      title: "Inefficient Production Planning",
      description:
        "Manual scheduling and resource allocation lead to bottlenecks, delays, and underutilized capacity in garment factories.",
      solution:
        "Fabricxai optimizes production schedules, resource allocation, and workflow to maximize efficiency and output.",
      icon: <Calendar className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Quality Control Issues",
      description:
        "Manual quality inspection is time-consuming, inconsistent, and often misses defects until late in the production process.",
      solution:
        "AI-powered quality inspection detects defects early, ensures consistent standards, and reduces waste and rework.",
      icon: <AlertTriangle className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Data Silos & Lack of Insights",
      description:
        "Valuable production data remains scattered across departments, making it difficult to gain actionable insights.",
      solution:
        "Fabricxai centralizes data and provides comprehensive analytics for informed decision-making across your operation.",
      icon: <Database className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "High Operational Costs",
      description:
        "Inefficiencies, waste, and manual processes contribute to high operational costs that eat into profit margins.",
      solution:
        "Automation and optimization reduce costs through improved resource utilization, reduced waste, and streamlined processes.",
      icon: <DollarSign className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Supply Chain Inefficiencies",
      description:
        "Poor inventory management and supply chain visibility lead to stockouts, excess inventory, and production delays.",
      solution:
        "Intelligent inventory management and supply chain optimization ensure materials are available when needed.",
      icon: <Truck className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Difficulty in Forecasting Demand",
      description:
        "Inaccurate demand forecasting results in either excess inventory or missed opportunities and rushed production.",
      solution:
        "AI-powered analytics improve demand forecasting accuracy, helping you plan production more effectively.",
      icon: <TrendingUp className="h-10 w-10 text-primary-teal" />,
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
              Industry Challenges
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Addressing the Key Challenges in Garment Manufacturing
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              The Bangladeshi garment industry faces unique challenges that impact efficiency, quality, and
              profitability. Fabricxai provides targeted solutions to overcome these obstacles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="bg-primary-teal/10 p-4 rounded-full mb-4">{challenge.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-neutral-darkgrey">{challenge.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{challenge.description}</p>
                    <div className="bg-accent-green/10 p-3 rounded-md">
                      <p className="text-accent-green font-medium text-sm">
                        <span className="font-bold">Fabricxai Solution:</span> {challenge.solution}
                      </p>
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

export default IndustryChallenges

