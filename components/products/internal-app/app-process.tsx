"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ClipboardList, Palette, Code, TestTube, GraduationCap } from "lucide-react"

const AppProcess = () => {
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
      title: "Requirement Gathering & Analysis",
      description:
        "We begin by deeply understanding your specific business needs, workflows, and challenges through interviews, workshops, and process analysis.",
      icon: <ClipboardList className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Custom Design & UX",
      description:
        "Our team designs an intuitive, user-friendly interface tailored to your brand and optimized for your team's specific needs and workflows.",
      icon: <Palette className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Development & Integration",
      description:
        "We develop your custom app with the features you need, integrating it with your existing systems and data sources for seamless operation.",
      icon: <Code className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Testing & Deployment",
      description:
        "Rigorous testing ensures your app works flawlessly across all devices, followed by a smooth deployment process to your organization.",
      icon: <TestTube className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Training & Ongoing Support",
      description:
        "We provide comprehensive training for your team and ongoing support to ensure you get the most from your custom internal app.",
      icon: <GraduationCap className="h-8 w-8 text-primary-teal" />,
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
            <Badge className="mb-4 bg-primary-teal/10 text-primary-teal hover:bg-primary-teal/20 border-none">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Our Process for Building Your Bespoke Solution
            </h2>
            <div className="w-24 h-1 bg-secondary-gold rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              We follow a collaborative, structured approach to create an internal app that perfectly meets your
              organization's needs.
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

export default AppProcess

