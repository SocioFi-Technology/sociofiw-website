"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Cpu, MessageSquare, Smartphone, ChevronRight, Newspaper, Scale, Lightbulb, Code } from "lucide-react"
import { Pagination } from "@/components/ui/pagination"

export default function ProductsPageClient() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 3

  // All products data
  const allProducts = [
    // Page 1 Products
    {
      title: "Fabricxai",
      description:
        "AI-powered automation solution designed specifically for Bangladesh's garment industry. Improve efficiency, gain data-driven insights, and optimize your garment business.",
      icon: <Cpu className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=500",
      link: "/products/fabricxai",
    },
    {
      title: "Internal Business App",
      description:
        "Customized internal application that centralizes information, streamlines tasks, and fosters seamless communication, designed specifically for the way your business in Bangladesh operates.",
      icon: <Smartphone className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=500",
      link: "/products/internal-business-app",
    },
    {
      title: "AI Chatbot BB",
      description:
        "Intelligent chatbot with keyword activation, smart LLM routing, and dynamic community building, designed to enhance communication and knowledge sharing within your organization.",
      icon: <MessageSquare className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=500",
      link: "/products/ai-chatbot-bb",
    },
    // Page 2 Products
    {
      title: "NewsWise",
      description:
        "Personalized news portal with AI-powered summarization and explanations. Get news tailored to your interests with reliable references and clear context, designed for the discerning news consumer.",
      icon: <Newspaper className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=500",
      link: "/products/newswise",
      page: 2,
    },
    {
      title: "AinGyan",
      description:
        "Your accessible guide to Bangladesh's legal system. Get clear answers to basic legal queries about Bangladeshi laws and regulations, empowering you with essential legal knowledge.",
      icon: <Scale className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=500",
      link: "/products/aingyan",
      page: 2,
    },
    {
      title: "AI Learning Platform",
      description:
        "Interactive educational platform that teaches AI concepts in Bengali. Learn at your own pace with practical exercises and real-world examples tailored to the Bangladeshi context.",
      icon: <Lightbulb className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=500",
      link: "/products/ai-learning-platform",
      page: 2,
    },
    // Page 3 Products
    {
      title: "BanglaCode Assistant",
      description:
        "AI-powered coding assistant that understands Bengali instructions and generates code. Perfect for Bangladeshi developers who prefer to express programming concepts in their native language.",
      icon: <Code className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=500",
      link: "/products/bangla-code-assistant",
      page: 3,
    },
    {
      title: "AgriTech AI",
      description:
        "Smart agricultural solution that provides Bangladeshi farmers with AI-driven insights on crop management, weather predictions, and pest control strategies to maximize yield and sustainability.",
      icon: <Cpu className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=500",
      link: "/products/agritech-ai",
      page: 3,
    },
    {
      title: "HealthAssist BD",
      description:
        "AI health assistant that provides basic medical information and guidance in Bengali. Connects users with healthcare professionals and resources across Bangladesh.",
      icon: <MessageSquare className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=500",
      link: "/products/health-assist-bd",
      page: 3,
    },
  ]

  // Filter products based on current page
  const getProductsForPage = (page: number) => {
    if (page === 1) {
      return allProducts.slice(0, 3) // First 3 products
    } else if (page === 2) {
      return allProducts.slice(3, 6) // Next 3 products
    } else {
      return allProducts.slice(6, 9) // Last 3 products
    }
  }

  const handlePageChange = (page: number) => {
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" })
    setCurrentPage(page)
  }

  const currentProducts = getProductsForPage(currentPage)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-b from-white to-neutral-offwhite dark:from-neutral-darkgrey dark:to-neutral-darkgrey/90">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full geometric-bg" />
        </div>

        <div className="container mx-auto px-4 z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary-teal/10 text-primary-teal hover:bg-primary-teal/20 border-none">
              Our Products
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-darkgrey dark:text-white">
              Innovative AI-Powered Products for Modern Businesses
            </h1>
            <div className="w-24 h-1 bg-secondary-gold rounded-full mx-auto mb-6"></div>
            <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
              Discover SocioFi Technology's suite of cutting-edge AI products designed to transform businesses in
              Bangladesh through automation, efficiency, and intelligent insights.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white dark:bg-neutral-darkgrey">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-neutral-darkgrey/50">
                    <div className="relative h-48">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-6">
                          <h2 className="text-2xl font-bold text-white">{product.title}</h2>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="bg-primary-teal/10 p-3 rounded-full mr-4 dark:bg-primary-teal/20">
                          {product.icon}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{product.description}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full bg-primary-teal hover:bg-primary-teal/90 text-white">
                        <Link href={product.link} className="flex items-center justify-center">
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              className="mt-12"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to learn more about our products and how they can help your business thrive in the digital
            age.
          </p>
          <Button asChild className="bg-white text-primary-teal hover:bg-white/90">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

