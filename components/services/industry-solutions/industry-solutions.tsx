"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shirt, Leaf, Factory, ShoppingBag } from "lucide-react"
import Image from "next/image"

const IndustrySolutions = () => {
  const [activeTab, setActiveTab] = useState("garment")
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

  const solutions = {
    garment: [
      {
        title: "Fabricxai",
        description:
          "Our flagship AI-powered solution for the garment industry, optimizing production processes and quality control.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "AI-Powered Quality Inspection",
        description:
          "Computer vision systems that detect defects in fabrics and finished garments with higher accuracy than manual inspection.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Predictive Maintenance for Machinery",
        description:
          "AI systems that predict when machinery will need maintenance, reducing downtime and extending equipment life.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Demand Forecasting Models",
        description:
          "Advanced algorithms that analyze market trends and historical data to predict future demand for different product lines.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    agriculture: [
      {
        title: "AI-Powered Image Analysis for Crop Health",
        description:
          "Computer vision systems that analyze images of crops to detect diseases, pests, and nutrient deficiencies early.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Predictive Models for Yield Optimization",
        description:
          "AI algorithms that analyze soil conditions, weather patterns, and crop data to predict yields and suggest improvements.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Smart Irrigation Systems",
        description:
          "AI-controlled irrigation systems that optimize water usage based on soil moisture, weather forecasts, and crop needs.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Market Price Prediction",
        description:
          "Models that analyze market trends to help farmers determine the best time to sell their produce for maximum profit.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    manufacturing: [
      {
        title: "AI-Powered Anomaly Detection",
        description:
          "Systems that detect unusual patterns in machinery operation, identifying potential failures before they occur.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Process Optimization Algorithms",
        description:
          "AI solutions that analyze production processes to identify inefficiencies and suggest improvements.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "AI-Driven Quality Control",
        description:
          "Computer vision systems that inspect products for defects with greater accuracy and consistency than manual inspection.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Supply Chain Optimization",
        description:
          "AI models that analyze supply chain data to reduce costs, minimize delays, and improve overall efficiency.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    ecommerce: [
      {
        title: "Personalized Recommendation Engines",
        description:
          "AI systems that analyze customer behavior to provide personalized product recommendations, increasing sales and customer satisfaction.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Fraud Detection Systems",
        description:
          "AI algorithms that identify potentially fraudulent transactions, protecting both businesses and customers.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Inventory Management AI",
        description: "Systems that predict inventory needs, optimize stock levels, and automate reordering processes.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Customer Service Chatbots",
        description:
          "AI-powered chatbots that handle customer inquiries in Bengali and English, providing 24/7 support.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }

  return (
    <section className="py-20 bg-neutral-offwhite">
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
              Industry Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Driving Innovation and Efficiency in Your Sector
            </h2>
            <div className="w-24 h-1 bg-secondary-gold rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Explore our customized AI solutions designed specifically for key industries in Bangladesh.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue="garment" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto mb-8">
                <TabsTrigger
                  value="garment"
                  className="flex items-center gap-2 data-[state=active]:bg-primary-teal data-[state=active]:text-white"
                >
                  <Shirt className="h-5 w-5" />
                  <span className="hidden md:inline">Garment</span>
                </TabsTrigger>
                <TabsTrigger
                  value="agriculture"
                  className="flex items-center gap-2 data-[state=active]:bg-primary-teal data-[state=active]:text-white"
                >
                  <Leaf className="h-5 w-5" />
                  <span className="hidden md:inline">Agriculture</span>
                </TabsTrigger>
                <TabsTrigger
                  value="manufacturing"
                  className="flex items-center gap-2 data-[state=active]:bg-primary-teal data-[state=active]:text-white"
                >
                  <Factory className="h-5 w-5" />
                  <span className="hidden md:inline">Manufacturing</span>
                </TabsTrigger>
                <TabsTrigger
                  value="ecommerce"
                  className="flex items-center gap-2 data-[state=active]:bg-primary-teal data-[state=active]:text-white"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span className="hidden md:inline">E-commerce</span>
                </TabsTrigger>
              </TabsList>

              {Object.keys(solutions).map((industry) => (
                <TabsContent key={industry} value={industry} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {solutions[industry].map((solution, index) => (
                      <Card key={index} className="border-none shadow-md overflow-hidden">
                        <div className="relative h-40">
                          <Image
                            src={solution.image || "/placeholder.svg"}
                            alt={solution.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-neutral-darkgrey">{solution.title}</h3>
                          <p className="text-gray-700">{solution.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default IndustrySolutions

