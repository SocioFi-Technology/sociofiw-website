"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const OurCommitment = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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

  const commitments = [
    "Supporting young entrepreneurs in the AI sector",
    "Creating job opportunities in the tech industry",
    "Helping local businesses improve efficiency through AI",
    "Partnering with universities for AI research and education",
    "Training students in cutting-edge AI technologies",
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
            <Badge className="mb-4 bg-accent-green/10 text-accent-green hover:bg-accent-green/20 border-none">
              Our Commitment
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Committed to Bangladesh: Building a Brighter Future with AI
            </h2>
            <div className="w-24 h-1 bg-secondary-gold rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              We're not just a tech company, but a Bangladeshi company deeply invested in the nation's future and
              technological advancement through empowering the next generation.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div variants={itemVariants} className="lg:w-1/2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="SocioFi's vision for Bangladesh"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-6 text-neutral-darkgrey">Our Vision for Impact</h3>

              <div className="space-y-4 mb-8">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent-green mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{commitment}</p>
                  </div>
                ))}
              </div>

              <Card className="border-none shadow-md bg-white">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4 text-primary-teal">Incubation Program</h4>
                  <p className="text-gray-700 mb-4">
                    Our upcoming initiative for nurturing the next generation of AI entrepreneurs in Bangladesh. We plan
                    to provide mentorship, resources, and funding to help turn innovative ideas into successful AI
                    startups.
                  </p>
                  <p className="text-gray-700">
                    Through this program, we aim to build a thriving AI ecosystem in Bangladesh and create opportunities
                    for talented individuals to contribute to the nation's technological advancement.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurCommitment

