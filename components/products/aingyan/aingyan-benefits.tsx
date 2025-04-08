"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Image from "next/image"

export default function AingyanBenefits() {
  const benefits = [
    {
      title: "Easy Access to Legal Information",
      description:
        "Quickly find answers to your basic legal questions without having to navigate complex legal documents.",
    },
    {
      title: "Improved Understanding of Your Rights and Responsibilities",
      description:
        "Gain a better understanding of the laws that govern Bangladesh and your obligations as a citizen or resident.",
    },
    {
      title: "Empowerment in Everyday Situations",
      description: "Be better equipped to handle common legal issues and understand your options.",
    },
    {
      title: "Save Time and Resources",
      description:
        "Get initial information quickly, potentially saving you time and the cost of initial consultations for basic queries.",
    },
    {
      title: "Increased Legal Awareness",
      description: "Become more informed about the legal landscape of Bangladesh.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary-teal/5 to-accent-green/5 dark:from-primary-teal/10 dark:to-accent-green/10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-darkgrey dark:text-white">
                Empowering You with Legal Knowledge
              </h2>
              <p className="text-xl text-primary-teal dark:text-primary-teal/90">
                Why Choose AinGyan for Your Legal Information Needs?
              </p>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="mr-4 mt-1">
                    <Check className="h-6 w-6 text-accent-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-darkgrey dark:text-white">{benefit.title}</h3>
                    <p className="text-neutral-darkgrey/80 dark:text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[500px] h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Benefits of using AinGyan"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

