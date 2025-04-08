"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, TrendingUp, Clock, Target, Zap, Users } from "lucide-react"

const ConsultancyBenefits = () => {
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
      title: "Expert Guidance & Strategic Insights",
      description:
        "Gain access to our team's deep expertise in AI and industry knowledge to inform your strategic decisions.",
      icon: <Lightbulb className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Reduced Risk & Increased ROI",
      description:
        "Minimize the risks associated with AI implementation and maximize the return on your AI investments.",
      icon: <TrendingUp className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Faster & More Efficient AI Adoption",
      description: "Accelerate your AI journey with proven methodologies and avoid common pitfalls.",
      icon: <Clock className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Alignment of AI with Business Goals",
      description:
        "Ensure your AI initiatives are directly aligned with and supportive of your core business objectives.",
      icon: <Target className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Access to Cutting-Edge AI Knowledge",
      description:
        "Stay informed about the latest AI trends, technologies, and best practices relevant to your industry.",
      icon: <Zap className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Development of Sustainable AI Capability",
      description: "Build internal AI capabilities and knowledge that will serve your organization long-term.",
      icon: <Users className="h-8 w-8 text-primary-teal" />,
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
              Why Choose SocioFi for AI Consulting?
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Our consultancy services deliver significant benefits that help you maximize the value of your AI
              initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-primary-teal/10 p-3 rounded-full mr-4">{benefit.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-neutral-darkgrey">{benefit.title}</h3>
                        <p className="text-gray-700">{benefit.description}</p>
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

export default ConsultancyBenefits

