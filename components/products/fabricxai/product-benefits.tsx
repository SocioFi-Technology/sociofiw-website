"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Zap, CheckCircle, BarChart3, Workflow, Award, Recycle } from "lucide-react"

const ProductBenefits = () => {
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
      title: "Significant Cost Reduction",
      description:
        "Reduce operational expenses through automation, optimized resource utilization, and minimized waste.",
      stats: "Up to 15-20% reduction in operational costs",
      icon: <DollarSign className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Improved Production Efficiency",
      description: "Increase output, shorten lead times, and streamline your entire manufacturing process.",
      stats: "25-30% improvement in production efficiency",
      icon: <Zap className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Enhanced Product Quality",
      description: "Ensure consistent quality standards and minimize defects with AI-powered quality control.",
      stats: "Defect reduction of up to 40%",
      icon: <CheckCircle className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Better Data Utilization & Decision Making",
      description:
        "Gain deep insights from your production data to make informed decisions that drive profitability and growth.",
      stats: "100% visibility into production metrics",
      icon: <BarChart3 className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Smoother & More Efficient Operations",
      description: "Optimize workflows, reduce manual errors, and improve overall operational efficiency.",
      stats: "50% reduction in production bottlenecks",
      icon: <Workflow className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Increased Profitability & Competitiveness",
      description: "Boost your bottom line and gain a competitive edge in the global garment market.",
      stats: "Potential profit margin increase of 5-10%",
      icon: <Award className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Improved Resource Utilization",
      description: "Optimize the use of raw materials, energy, and human resources for sustainable operations.",
      stats: "15-25% improvement in resource utilization",
      icon: <Recycle className="h-10 w-10 text-primary-teal" />,
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
              Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Transform Your Garment Factory with Tangible Benefits
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Implementing Fabricxai delivers measurable improvements across all aspects of your garment manufacturing
              operation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className={index === benefits.length - 1 && benefits.length % 3 === 1 ? "lg:col-span-3" : ""}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="bg-primary-teal/10 p-4 rounded-full mb-4">{benefit.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-neutral-darkgrey">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{benefit.description}</p>
                    <div className="bg-secondary-gold/10 p-3 rounded-md">
                      <p className="text-secondary-gold font-medium text-sm">
                        <span className="font-bold">Potential Impact:</span> {benefit.stats}
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

export default ProductBenefits

