"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { MessageSquare } from "lucide-react"

const AppHero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-white to-neutral-offwhite">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full geometric-bg" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        <div className="hero-animation" />
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:w-1/2"
          >
            <motion.div variants={itemVariants}>
              <Badge className="mb-4 bg-primary-teal/10 text-primary-teal hover:bg-primary-teal/20 border-none">
                Internal Business App
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-neutral-darkgrey"
            >
              Internal App Customized for Your Business: Enhanced Collaboration & Efficiency
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl mb-8 font-medium text-primary-teal"
              style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
            >
              আপনার ব্যবসার জন্য কাস্টমাইজড অভ্যন্তরীণ অ্যাপ: উন্নত সহযোগিতা ও দক্ষতা
            </motion.h2>

            <motion.div variants={itemVariants} className="flex justify-start mb-8">
              <div className="w-24 h-1 bg-secondary-gold rounded-full"></div>
            </motion.div>

            <motion.h3 variants={itemVariants} className="text-xl md:text-2xl mb-6 text-neutral-darkgrey">
              Empower your team with a tailored internal application that centralizes information, streamlines tasks,
              and fosters seamless communication.
            </motion.h3>

            <motion.p variants={itemVariants} className="text-lg mb-10 text-gray-700">
              Introducing SocioFi Technology's customized Internal App, designed to revolutionize how your business
              operates from the inside out. We create a bespoke application tailored to your unique workflows and data
              needs, providing your employees with secure, role-based access to critical information, efficient task
              management tools, and AI-powered assistance to enhance productivity and collaboration across your
              organization.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary-teal hover:bg-primary-teal/90 text-white">
                <Link href="/contact" className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Request a Custom App Quote
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-teal text-primary-teal hover:bg-primary-teal/10"
              >
                <Link href="#app-features">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-white rounded-lg shadow-lg p-4 rotate-6 z-10">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Internal App Mobile Interface"
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div className="relative z-20">
                <Image
                  src="/placeholder.svg?height=600&width=700"
                  alt="Internal App Desktop Interface"
                  width={700}
                  height={600}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <Badge className="bg-accent-green text-white">Tailored for Your Business</Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-offwhite to-transparent"></div>
    </section>
  )
}

export default AppHero

