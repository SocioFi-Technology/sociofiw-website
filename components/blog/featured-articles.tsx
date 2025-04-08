"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ChevronRight } from "lucide-react"

const FeaturedArticles = () => {
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

  const featuredArticles = [
    {
      title: "The Rise of AI in Bangladesh's Garment Industry: Transforming Production and Quality Control",
      excerpt:
        "Explore how AI technologies are revolutionizing Bangladesh's garment sector, improving efficiency, reducing waste, and enhancing quality control processes.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Industry Solutions",
      author: "Rahim Ahmed",
      date: "March 15, 2023",
      slug: "rise-of-ai-in-bangladesh-garment-industry",
    },
    {
      title: "Understanding Large Language Models: A Comprehensive Guide for Bangladeshi Businesses",
      excerpt:
        "Learn about the fundamentals of Large Language Models (LLMs), their capabilities, limitations, and how businesses in Bangladesh can leverage them for growth.",
      image: "/placeholder.svg?height=400&width=600",
      category: "LLM Technology",
      author: "Fatima Khan",
      date: "February 28, 2023",
      slug: "understanding-large-language-models-guide",
    },
    {
      title: "Data-Driven Decision Making: How AI is Empowering Bangladeshi Entrepreneurs",
      excerpt:
        "Discover how AI-powered analytics and insights are helping entrepreneurs in Bangladesh make more informed business decisions and drive sustainable growth.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Data-Driven Decision Making",
      author: "Kamal Hassan",
      date: "January 20, 2023",
      slug: "data-driven-decision-making-bangladeshi-entrepreneurs",
    },
  ]

  return (
    <section className="py-16 bg-white">
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
              Featured Insights
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Featured Insights: Must-Read Articles
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Explore our most impactful and informative articles on AI innovation, industry solutions, and
              technological advancements in Bangladesh.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary-teal text-white">{article.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <div className="flex items-center mr-4">
                        <User className="h-4 w-4 mr-1" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${article.slug}`} className="block">
                      <h3 className="text-xl font-bold mb-3 text-neutral-darkgrey hover:text-primary-teal transition-colors">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-gray-700 mb-4">{article.excerpt}</p>
                    <Button
                      asChild
                      variant="ghost"
                      className="p-0 text-primary-teal hover:text-primary-teal/80 hover:bg-transparent"
                    >
                      <Link href={`/blog/${article.slug}`} className="flex items-center">
                        Read More
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
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

export default FeaturedArticles

