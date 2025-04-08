"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ChevronRight } from "lucide-react"

const LatestPosts = () => {
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

  const blogPosts = [
    {
      title: "How AI is Revolutionizing Agriculture in Bangladesh",
      excerpt:
        "Discover how AI-powered solutions are helping farmers in Bangladesh improve crop yields, reduce waste, and adapt to changing climate conditions.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Industry Solutions",
      author: "Rahim Ahmed",
      date: "March 10, 2023",
      slug: "ai-revolutionizing-agriculture-bangladesh",
    },
    {
      title: "The Future of AI Agents: What's Next for Intelligent Assistants",
      excerpt:
        "Explore the evolving landscape of AI agents and how they're becoming more sophisticated, context-aware, and capable of handling complex tasks.",
      image: "/placeholder.svg?height=300&width=500",
      category: "AI Trends",
      author: "Fatima Khan",
      date: "March 5, 2023",
      slug: "future-of-ai-agents",
    },
    {
      title: "Building AI Solutions for Bangladesh's Unique Challenges",
      excerpt:
        "Learn about the specific considerations and approaches needed when developing AI solutions tailored to Bangladesh's unique context and needs.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Company News",
      author: "Kamal Hassan",
      date: "February 25, 2023",
      slug: "ai-solutions-bangladesh-unique-challenges",
    },
    {
      title: "Ethical AI Development: Ensuring Responsible Innovation",
      excerpt:
        "Understand the importance of ethical considerations in AI development and how SocioFi is committed to responsible AI practices.",
      image: "/placeholder.svg?height=300&width=500",
      category: "AI Ethics",
      author: "Nusrat Jahan",
      date: "February 18, 2023",
      slug: "ethical-ai-development-responsible-innovation",
    },
    {
      title: "Leveraging LLMs for Business Growth: Practical Applications",
      excerpt:
        "Discover practical ways businesses can implement Large Language Models to enhance customer service, content creation, and data analysis.",
      image: "/placeholder.svg?height=300&width=500",
      category: "LLM Technology",
      author: "Imran Khan",
      date: "February 10, 2023",
      slug: "leveraging-llms-business-growth",
    },
  ]

  return (
    <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-darkgrey">All the Latest from Our Blog</h2>
        <div className="w-16 h-1 bg-primary-teal rounded-full mb-6"></div>
      </div>

      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative h-48 md:h-auto">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="md:w-2/3">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-primary-teal/10 text-primary-teal hover:bg-primary-teal/20 border-none">
                      {post.category}
                    </Badge>
                    <Link href={`/blog/${post.slug}`} className="block">
                      <h3 className="text-xl font-bold mb-2 text-neutral-darkgrey hover:text-primary-teal transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <div className="flex items-center mr-4">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    <Button
                      asChild
                      variant="ghost"
                      className="p-0 text-primary-teal hover:text-primary-teal/80 hover:bg-transparent"
                    >
                      <Link href={`/blog/${post.slug}`} className="flex items-center">
                        Read More
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button className="bg-primary-teal hover:bg-primary-teal/90 text-white">Load More Articles</Button>
      </div>
    </motion.div>
  )
}

export default LatestPosts

