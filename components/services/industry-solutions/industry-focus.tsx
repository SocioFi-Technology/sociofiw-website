"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Shirt, Leaf, Factory, ShoppingBag } from "lucide-react"

const IndustryFocus = () => {
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

  const industries = [
    {
      name: "Garment Industry",
      description:
        "Bangladesh's largest export sector, facing challenges in quality control, supply chain optimization, production efficiency, and demand forecasting.",
      icon: <Shirt className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Agriculture",
      description:
        "A vital sector employing a significant portion of the population, with challenges in crop yield prediction, pest and disease detection, and efficient resource management.",
      icon: <Leaf className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Manufacturing",
      description:
        "A growing sector with challenges in predictive maintenance, process optimization, quality assurance, and supply chain management.",
      icon: <Factory className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "E-commerce",
      description:
        "A rapidly expanding sector with needs for personalized recommendations, fraud detection, inventory management, and customer service automation.",
      icon: <ShoppingBag className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="industry-focus" className="py-20 bg-white">
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
              Our Industry Focus
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Empowering Key Industries with AI Innovation
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              We focus on developing AI solutions for the most important industries in Bangladesh, addressing their
              unique challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-none shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6">
                        <div className="flex items-center">
                          <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm mr-3">{industry.icon}</div>
                          <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-700">{industry.description}</p>
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

export default IndustryFocus

