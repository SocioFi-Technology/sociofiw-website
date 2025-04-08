"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, MessageSquare, Shield, Workflow, BarChart3, GraduationCap, Maximize } from "lucide-react"

const AppBenefits = () => {
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
      title: "Increased Employee Productivity",
      description:
        "Provide your team with the tools and information they need to work efficiently, reducing time spent searching for data and managing tasks.",
      stats: "Up to 30% improvement in employee productivity",
      icon: <Zap className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Improved Internal Communication",
      description: "Foster seamless communication and collaboration across departments and teams.",
      stats: "Reduce communication gaps by up to 40%",
      icon: <MessageSquare className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Enhanced Data Security & Control",
      description:
        "Ensure sensitive business information is securely stored and accessed only by authorized personnel.",
      stats: "100% role-based access control",
      icon: <Shield className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Streamlined Workflows & Processes",
      description: "Optimize internal processes and eliminate bottlenecks, leading to greater efficiency.",
      stats: "25-35% reduction in process completion time",
      icon: <Workflow className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Better Decision Making",
      description: "Empower your team with easy access to relevant data and insights for informed decision-making.",
      stats: "Improve decision accuracy by up to 45%",
      icon: <BarChart3 className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Improved Employee Onboarding",
      description: "Help new employees quickly access essential information and learn from past experiences.",
      stats: "Reduce onboarding time by up to 50%",
      icon: <GraduationCap className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Scalability & Flexibility",
      description: "The app can be customized and adapted as your business grows and evolves.",
      stats: "100% adaptable to changing business needs",
      icon: <Maximize className="h-10 w-10 text-primary-teal" />,
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
              Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Unlock the Advantages of a Tailored Internal Solution
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              A customized internal app delivers significant benefits that can transform your organization's efficiency,
              communication, and overall performance.
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

export default AppBenefits

