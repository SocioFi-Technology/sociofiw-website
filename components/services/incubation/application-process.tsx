"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Users, Presentation, CheckSquare, Rocket } from "lucide-react"

const ApplicationProcess = () => {
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
      title: "Online Application",
      description:
        "Submit your application through our online portal, including your team information, product idea, and vision.",
      icon: <FileText className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Initial Screening",
      description: "Our team reviews all applications and selects promising candidates for the next round.",
      icon: <CheckSquare className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Interview",
      description:
        "Selected applicants are invited for an interview to discuss their ideas, technical capabilities, and business vision.",
      icon: <Users className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Pitch Presentation",
      description:
        "Finalists present their ideas to a panel of judges, including SocioFi leadership and industry experts.",
      icon: <Presentation className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Program Acceptance",
      description: "Selected startups are invited to join the incubation program and begin their journey.",
      icon: <Rocket className="h-8 w-8 text-primary-teal" />,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary-teal/5 to-accent-green/5">
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
              How to Apply
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Take the First Step: Apply to Our Incubation Program
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Our application process is designed to identify passionate entrepreneurs with innovative AI ideas and the
              commitment to bring them to life.
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

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <Card className="border-none shadow-md bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-primary-teal">Application Deadlines</h3>
                <p className="text-gray-700 mb-4">
                  We accept applications twice a year for our incubation program cohorts:
                </p>
                <ul className="space-y-2 text-gray-700 list-disc list-inside mb-4">
                  <li>January Cohort: Applications open from October 1 to November 30</li>
                  <li>July Cohort: Applications open from April 1 to May 31</li>
                </ul>
                <p className="text-gray-700">
                  Early applications are encouraged, as we review submissions on a rolling basis.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ApplicationProcess

