"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Lightbulb, TrendingUp, Globe, Users, Heart, Clock } from "lucide-react"

const WhyWorkHere = () => {
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
      title: "Mission-Driven Work",
      description:
        "Be part of a company with a clear mission: to empower Bangladeshi industries with AI and drive the nation's technological progress. Your work will have a tangible impact on the local economy and society.",
      icon: <Target className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Innovation Focus",
      description:
        "Immerse yourself in a culture of continuous innovation. We encourage creativity, experimentation, and the exploration of cutting-edge AI technologies, including Large Language Models.",
      icon: <Lightbulb className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Growth Opportunities",
      description:
        "We are committed to the professional development of our team members. Benefit from opportunities for learning, mentorship, and career advancement as SocioFi continues to grow.",
      icon: <TrendingUp className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Impact on Bangladesh's Tech Landscape",
      description:
        "Play a vital role in shaping the future of AI in Bangladesh. Contribute to groundbreaking projects and help establish Bangladesh as a leader in the global AI arena.",
      icon: <Globe className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Collaborative & Supportive Team",
      description:
        "Join a diverse and talented team of individuals who are passionate about AI and dedicated to collaboration, mutual support, and knowledge sharing.",
      icon: <Users className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Open & Inclusive Culture",
      description:
        "We foster an open, inclusive, and respectful work environment where everyone's ideas are valued and contributions are recognized.",
      icon: <Heart className="h-10 w-10 text-primary-teal" />,
    },
    {
      title: "Modern & Flexible Work Environment",
      description:
        "We offer a modern and flexible work arrangement with opportunities for remote work to support a healthy work-life balance.",
      icon: <Clock className="h-10 w-10 text-primary-teal" />,
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
            <Badge className="mb-4 bg-secondary-gold/10 text-secondary-gold hover:bg-secondary-gold/20 border-none">
              Why Work With Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Life at SocioFi: Innovation, Impact, and Growth
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Discover what makes SocioFi Technology a unique and rewarding place to build your career in AI and
              technology.
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
                    <p className="text-gray-700">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="SocioFi Team Collaboration"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-neutral-darkgrey">Our Team Culture</h3>
              <p className="text-lg mb-6 text-gray-700">
                At SocioFi Technology, we believe that our team is our greatest asset. We've built a culture that values
                innovation, collaboration, and continuous learning. Our diverse team brings together expertise in AI,
                software development, business strategy, and industry knowledge to create solutions that make a real
                difference.
              </p>
              <p className="text-lg text-gray-700">
                We celebrate achievements together, support each other through challenges, and are united by our shared
                mission to drive AI innovation in Bangladesh. When you join SocioFi, you become part of a family that is
                passionate about technology and committed to excellence.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyWorkHere

