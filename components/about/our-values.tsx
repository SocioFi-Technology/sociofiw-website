"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Users, Shield, Flag, Handshake } from "lucide-react"

const OurValues = () => {
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

  const values = [
    {
      title: "Innovation",
      description:
        "We are driven by a relentless pursuit of innovation, constantly exploring the frontiers of AI and developing cutting-edge solutions for our clients.",
      explanation:
        "At SocioFi, innovation means staying ahead of AI trends, investing in R&D, and finding creative solutions to complex problems. We embrace new technologies and methodologies to deliver the best possible outcomes.",
      icon: <Lightbulb className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Customer Focus",
      description:
        "We are deeply committed to understanding our clients' unique needs and delivering customized solutions that drive tangible results and lasting value.",
      explanation:
        "We take time to understand each industry's specific challenges, collaborate closely with clients, and focus on delivering measurable ROI through our AI solutions.",
      icon: <Users className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Integrity & Ethics",
      description:
        "We uphold the highest standards of integrity and ethical conduct in all our operations. Trust, transparency, and responsible AI development are paramount to us.",
      explanation:
        "We prioritize data privacy, develop AI with fairness in mind, communicate transparently, and build long-term trust with all stakeholders.",
      icon: <Shield className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Bangladesh First",
      description:
        "We are deeply committed to the progress of Bangladesh and strive to contribute to the nation's technological advancement and economic growth.",
      explanation:
        "Our solutions address local challenges, we invest in local talent, and we're committed to positioning Bangladesh as a competitive player in the global AI landscape.",
      icon: <Flag className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Collaboration & Teamwork",
      description:
        "We believe in the power of collaboration and teamwork, both within our organization and in partnership with our clients and the wider community.",
      explanation:
        "We foster an environment of open communication, knowledge sharing, and collaborative problem-solving, extending beyond our team to work with clients and partners.",
      icon: <Handshake className="h-10 w-10 text-primary-teal" />,
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
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Our Values: The Foundation of SocioFi - Integrity, Innovation, and Impact
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              These core values guide everything we do at SocioFi Technology, from how we develop AI solutions to how we
              interact with our clients and community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="bg-primary-teal/10 p-4 rounded-full mb-4">{value.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-neutral-darkgrey">{value.title}</h3>
                    </div>
                    <p className="text-gray-700 font-medium mb-4">{value.description}</p>
                    <p className="text-gray-600 text-sm">{value.explanation}</p>
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

export default OurValues

