"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, LineChart, DollarSign, Maximize, Award } from "lucide-react"

const AgentBenefits = () => {
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
      title: "Increased Efficiency & Automation",
      description:
        "Automate repetitive tasks and streamline workflows, allowing your team to focus on higher-value activities.",
      icon: <Zap className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Improved Customer Service & Engagement",
      description:
        "Provide 24/7 support in Bengali and English, with personalized interactions that enhance customer satisfaction.",
      icon: <Users className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Data-Driven Insights & Decision Making",
      description:
        "Extract valuable insights from your data to inform strategic decisions and identify new opportunities.",
      icon: <LineChart className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Reduced Operational Costs",
      description:
        "Lower costs associated with manual processes and human error while increasing operational efficiency.",
      icon: <DollarSign className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Enhanced Scalability & Flexibility",
      description: "Easily scale your operations up or down without proportional increases in staffing or resources.",
      icon: <Maximize className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Competitive Advantage",
      description:
        "Stay ahead of competitors by leveraging cutting-edge AI technology tailored to the Bangladeshi market.",
      icon: <Award className="h-8 w-8 text-primary-teal" />,
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
              Unlock the Advantages of AI Agents
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Implementing AI agents in your business can deliver significant benefits across multiple areas of
              operation.
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
                    <p className="text-gray-700">{benefit.description}</p>
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

export default AgentBenefits

