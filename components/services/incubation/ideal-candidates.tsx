"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const IdealCandidates = () => {
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

  const candidateTraits = [
    "Young entrepreneurs with a passion for AI and technology",
    "Early-stage startups with AI-driven product ideas",
    "Technical teams with expertise in software development, data science, or machine learning",
    "Visionaries with innovative solutions to real problems in Bangladesh",
    "Committed individuals or teams ready to dedicate themselves full-time to their venture",
    "Problem-solvers focused on creating impactful AI solutions for local or global markets",
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
              Who Should Apply
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Are You the Next AI Innovator?
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              We're looking for passionate, talented individuals and teams who are committed to building innovative AI
              solutions.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div variants={itemVariants} className="lg:w-1/2 order-2 lg:order-1">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-neutral-darkgrey">Ideal Candidates</h3>

                  <div className="space-y-4">
                    {candidateTraits.map((trait, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-accent-green mr-3 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{trait}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:w-1/2 order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="AI Entrepreneurs"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IdealCandidates

