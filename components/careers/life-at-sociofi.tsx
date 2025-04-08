"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const LifeAtSocioFi = () => {
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

  const testimonials = [
    {
      quote:
        "Working at SocioFi has been an incredible journey. I've had the opportunity to work on cutting-edge AI projects that are making a real difference in Bangladesh. The collaborative environment and focus on continuous learning have helped me grow both professionally and personally.",
      name: "Rahim Ahmed",
      position: "AI Engineer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "What I love most about SocioFi is the impact we're making. We're not just building technology for technology's sake – we're solving real problems for businesses in Bangladesh. It's incredibly rewarding to see our solutions in action and making a difference.",
      name: "Fatima Khan",
      position: "Data Scientist",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The culture at SocioFi is unlike any other company I've worked for. There's a genuine sense of camaraderie and shared purpose. Everyone is passionate about AI and committed to pushing the boundaries of what's possible in Bangladesh's tech landscape.",
      name: "Kamal Hassan",
      position: "Software Developer",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const images = [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
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
              Our Culture
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              A Glimpse into Life at SocioFi
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Discover what it's like to be part of the SocioFi team through the experiences of our employees and
              glimpses of our vibrant workplace culture.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <Quote className="h-10 w-10 text-primary-teal/30 mb-4" />
                    <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-darkgrey">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-neutral-darkgrey text-center">Team Activities & Workspace</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-md aspect-[4/3]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`SocioFi Team Activity ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default LifeAtSocioFi

