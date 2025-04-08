"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Factory, Lightbulb, GraduationCap, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const ServiceCategories = () => {
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

  const services = [
    {
      title: "Intelligent AI Agent Development",
      description:
        "Create customized AI agents to automate tasks, enhance customer interactions, provide intelligent assistance, and streamline your business processes.",
      icon: <Brain className="h-12 w-12 text-primary-teal" />,
      link: "/services/ai-agent-development",
      linkText: "Learn More",
    },
    {
      title: "Customized AI Solutions for Industries",
      description:
        "We develop bespoke AI solutions tailored to the specific needs and challenges of various industries in Bangladesh, including garments, agriculture, manufacturing, and more.",
      icon: <Factory className="h-12 w-12 text-primary-teal" />,
      link: "/services/customized-industry-solutions",
      linkText: "Explore Industry Solutions",
    },
    {
      title: "Strategic AI Consultancy",
      description:
        "Our expert consultants provide guidance and support to help you understand, plan, and implement AI strategies within your business, ensuring seamless integration and maximum impact.",
      icon: <Lightbulb className="h-12 w-12 text-primary-teal" />,
      link: "/services/ai-consultancy",
      linkText: "Discover Our Consultancy Services",
    },
    {
      title: "Incubation Program for Young Entrepreneurs",
      description:
        "We nurture the next generation of Bangladeshi tech leaders by providing resources, mentorship, and support to help young entrepreneurs build innovative AI-powered products.",
      icon: <GraduationCap className="h-12 w-12 text-primary-teal" />,
      link: "/services/incubation-program",
      linkText: "Learn About Our Incubation Program",
    },
  ]

  return (
    <section id="service-categories" className="py-20 bg-white">
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
              Our Comprehensive Suite of AI Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Explore Our AI Services: Tailored Solutions for Your Needs
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              We offer a range of specialized AI services designed to address the unique challenges and opportunities of
              businesses in Bangladesh. Explore our offerings below to find the right solution for your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="bg-primary-teal/10 p-4 rounded-full w-fit mb-4">{service.icon}</div>
                    <CardTitle className="text-2xl text-neutral-darkgrey">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 text-base">{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="ghost"
                      className="p-0 text-primary-teal hover:text-primary-teal/80 hover:bg-transparent"
                    >
                      <Link href={service.link} className="flex items-center">
                        {service.linkText}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceCategories

