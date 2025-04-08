"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { UserCheck, Calendar, FileText, MessageSquare, Lightbulb, LayoutDashboard, Bell } from "lucide-react"

const AppFeatures = () => {
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

  const features = [
    {
      title: "Role-Based Access & Information Retrieval",
      description:
        "Ensure data security and relevance with role-based access controls. Employees can only retrieve information and functionalities pertinent to their specific roles and responsibilities.",
      icon: <UserCheck className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Task & Meeting Management",
      description:
        "Stay organized with a clear overview of running tasks, upcoming deadlines, and integrated meeting links, improving team coordination and project management.",
      icon: <Calendar className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Secure Document Access",
      description:
        "Provide authorized users with secure access to essential documents and PDFs directly within the app, eliminating the need to search through multiple platforms.",
      icon: <FileText className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Integrated AI Chat & Email",
      description:
        "Get instant answers and send emails directly from the app. Chat with our intelligent AI to retrieve the latest information and communicate efficiently without switching between applications.",
      icon: <MessageSquare className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "AI-Powered Problem Solving Assistance",
      description:
        "Empower new employees with access to a knowledge base of previously solved problems. If a new challenge arises, the app can suggest solutions based on similar issues encountered by experienced team members.",
      icon: <Lightbulb className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Customizable Dashboards & Reporting",
      description:
        "Gain insights into team performance and project progress with customizable dashboards and reports tailored to your business's key metrics.",
      icon: <LayoutDashboard className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Announcements & Internal Communication",
      description:
        "Keep your team informed with important announcements, company updates, and internal communications broadcast directly through the app.",
      icon: <Bell className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="app-features" className="py-20 bg-white">
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
              Key Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Powerful Features to Streamline Your Internal Operations
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Our customized internal app offers a comprehensive suite of features designed to enhance productivity,
              improve communication, and streamline operations within your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className={index === features.length - 1 && features.length % 3 === 1 ? "lg:col-span-3" : ""}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6">
                        <div className="flex items-center">
                          <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm mr-3">{feature.icon}</div>
                          <h3 className="text-xl font-bold text-white">{feature.title.split(":")[0]}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-700">{feature.description}</p>
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

export default AppFeatures

