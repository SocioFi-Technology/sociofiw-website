"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Factory, BarChart3, Newspaper, Lightbulb, Shield } from "lucide-react"

const BlogCategories = () => {
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

  const categories = [
    {
      name: "AI Trends in Bangladesh",
      icon: <Brain className="h-5 w-5 text-primary-teal" />,
      slug: "ai-trends-bangladesh",
    },
    {
      name: "LLM Technology",
      icon: <Brain className="h-5 w-5 text-primary-teal" />,
      slug: "llm-technology",
    },
    {
      name: "Data-Driven Decision Making",
      icon: <BarChart3 className="h-5 w-5 text-primary-teal" />,
      slug: "data-driven-decision-making",
    },
    {
      name: "Industry Solutions",
      icon: <Factory className="h-5 w-5 text-primary-teal" />,
      slug: "industry-solutions",
    },
    {
      name: "Company News",
      icon: <Newspaper className="h-5 w-5 text-primary-teal" />,
      slug: "company-news",
    },
    {
      name: "Entrepreneurship & Incubation",
      icon: <Lightbulb className="h-5 w-5 text-primary-teal" />,
      slug: "entrepreneurship-incubation",
    },
    {
      name: "AI Ethics",
      icon: <Shield className="h-5 w-5 text-primary-teal" />,
      slug: "ai-ethics",
    },
  ]

  return (
    <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle className="text-xl text-neutral-darkgrey">Explore Our Blog by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <motion.li key={index} variants={itemVariants}>
                <Link
                  href={`/blog/category/${category.slug}`}
                  className="flex items-center p-2 rounded-md hover:bg-primary-teal/10 transition-colors"
                >
                  <div className="mr-3">{category.icon}</div>
                  <span className="text-gray-700">{category.name}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default BlogCategories

