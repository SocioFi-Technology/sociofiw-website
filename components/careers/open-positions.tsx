"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Code, LineChart, Users, Briefcase } from "lucide-react"
import Link from "next/link"

const OpenPositions = () => {
  const [activeTab, setActiveTab] = useState("all")
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

  const positions = {
    all: [
      {
        title: "AI Engineer",
        category: "technical",
        description:
          "Join our core AI team to develop and deploy cutting-edge AI models and solutions for various industries. We are looking for a skilled engineer with experience in machine learning and deep learning.",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
      },
      {
        title: "Machine Learning Specialist",
        category: "technical",
        description:
          "Work on developing and optimizing machine learning models for our AI products. You'll be responsible for data preprocessing, model training, and performance evaluation.",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
      },
      {
        title: "Software Developer (Full Stack)",
        category: "technical",
        description:
          "Develop robust and scalable applications that integrate with our AI solutions. Experience with React, Node.js, and database technologies is required.",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
      },
      {
        title: "UI/UX Designer",
        category: "technical",
        description:
          "Create intuitive and engaging user interfaces for our AI products. You'll work closely with our development team to ensure a seamless user experience.",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
      },
      {
        title: "Business Development Manager",
        category: "business",
        description:
          "Lead our business development efforts to identify new opportunities, build relationships with potential clients, and drive growth in key industries.",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
      },
      {
        title: "AI Solutions Consultant",
        category: "business",
        description:
          "Work with clients to understand their needs and develop customized AI solutions. You'll be the bridge between our technical team and clients.",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
      },
      {
        title: "Marketing Specialist",
        category: "business",
        description:
          "Develop and implement marketing strategies to promote our AI products and services. Experience in digital marketing and content creation is preferred.",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
      },
      {
        title: "Data Scientist Intern",
        category: "internship",
        description:
          "Assist our data science team in analyzing data, developing models, and extracting insights. This is a great opportunity for students or recent graduates to gain hands-on experience.",
        location: "Dhaka, Bangladesh",
        type: "Internship",
      },
    ],
    technical: [],
    business: [],
    internship: [],
  }

  // Populate category-specific arrays
  positions.all.forEach((position) => {
    if (position.category === "technical") positions.technical.push(position)
    if (position.category === "business") positions.business.push(position)
    if (position.category === "internship") positions.internship.push(position)
  })

  return (
    <section id="open-positions" className="py-20 bg-neutral-offwhite">
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
              Join Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Current Openings: Find Your Next Opportunity at SocioFi
            </h2>
            <div className="w-24 h-1 bg-secondary-gold rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Explore our current job openings and find the perfect role to match your skills and passion. We're looking
              for talented individuals to join our team and help shape the future of AI in Bangladesh.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto mb-8">
                <TabsTrigger
                  value="all"
                  className="flex items-center gap-2 data-[state=active]:bg-primary-teal data-[state=active]:text-white"
                >
                  <Briefcase className="h-5 w-5" />
                  <span>All Positions</span>
                </TabsTrigger>
                <TabsTrigger
                  value="technical"
                  className="flex items-center gap-2 data-[state=active]:bg-primary-teal data-[state=active]:text-white"
                >
                  <Code className="h-5 w-5" />
                  <span>Technical</span>
                </TabsTrigger>
                <TabsTrigger
                  value="business"
                  className="flex items-center gap-2 data-[state=active]:bg-primary-teal data-[state=active]:text-white"
                >
                  <LineChart className="h-5 w-5" />
                  <span>Business</span>
                </TabsTrigger>
                <TabsTrigger
                  value="internship"
                  className="flex items-center gap-2 data-[state=active]:bg-primary-teal data-[state=active]:text-white"
                >
                  <Users className="h-5 w-5" />
                  <span>Internships</span>
                </TabsTrigger>
              </TabsList>

              {Object.keys(positions).map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  {positions[category].length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {positions[category].map((position, index) => (
                        <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-center mb-2">
                              <Badge
                                className={`mr-2 ${
                                  position.type === "Internship"
                                    ? "bg-accent-green/20 text-accent-green"
                                    : "bg-primary-teal/20 text-primary-teal"
                                }`}
                              >
                                {position.type}
                              </Badge>
                              <Badge
                                className={`${
                                  position.category === "technical"
                                    ? "bg-secondary-gold/20 text-secondary-gold"
                                    : "bg-accent-green/20 text-accent-green"
                                }`}
                              >
                                {position.category.charAt(0).toUpperCase() + position.category.slice(1)}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-neutral-darkgrey">{position.title}</h3>
                            <div className="flex items-center mb-4 text-gray-600">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span className="text-sm">{position.location}</span>
                            </div>
                            <p className="text-gray-700 mb-4">{position.description}</p>
                          </CardContent>
                          <CardFooter className="px-6 pb-6 pt-0">
                            <Button asChild className="w-full bg-primary-teal hover:bg-primary-teal/90 text-white">
                              <Link href="/contact">Apply Now</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card className="border-none shadow-md">
                      <CardContent className="p-6 text-center">
                        <p className="text-gray-700">No positions currently available in this category.</p>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Don't see a position that matches your skills? We're always looking for talented individuals to join our
              team.
            </p>
            <Button asChild className="bg-primary-teal hover:bg-primary-teal/90 text-white">
              <Link href="/contact">Submit Your Resume</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default OpenPositions

