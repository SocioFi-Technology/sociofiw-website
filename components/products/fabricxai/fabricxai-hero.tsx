"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ExternalLink, Play } from "lucide-react"

const FabricxaiHero = () => {
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
                Our Flagship Product
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-neutral-darkgrey"
            >
              Fabricxai: AI-Powered Garment Automation for Efficiency and Insights
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl mb-8 font-medium text-primary-teal"
              style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
            >
              ফ্যাব্রিক্সএআই: দক্ষতা এবং অন্তর্দৃষ্টির জন্য এআই-চালিত গার্মেন্টস অটোমেশন
            </motion.h2>

            <motion.div variants={itemVariants} className="flex justify-start mb-8">
              <div className="w-24 h-1 bg-secondary-gold rounded-full"></div>
            </motion.div>

            <motion.h3 variants={itemVariants} className="text-xl md:text-2xl mb-6 text-neutral-darkgrey">
              Unlock unprecedented efficiency, gain deep data-driven insights, and optimize every step of your garment
              manufacturing process with Fabricxai.
            </motion.h3>

            <motion.p variants={itemVariants} className="text-lg mb-10 text-gray-700">
              Introducing Fabricxai, SocioFi Technology's flagship product designed to revolutionize the garment
              industry in Bangladesh. Fabricxai is an all-in-one AI-powered platform that provides comprehensive
              automation, data-driven decision-making capabilities, and actionable insights to improve efficiency,
              optimize resource utilization, and ensure smooth operations across your entire garment manufacturing
              process. From production planning to quality control and supply chain management, Fabricxai empowers you
              to harness the power of your data and make informed decisions that drive profitability and growth.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary-teal hover:bg-primary-teal/90 text-white">
                <a href="#demo-video" className="flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-teal text-primary-teal hover:bg-primary-teal/10"
              >
                <a href="https://fabricxai.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Visit Fabricxai Website
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-secondary-gold text-secondary-gold hover:bg-secondary-gold/10"
              >
                <a
                  href="https://app.fabricxai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Login to App
                </a>
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
              <Image
                src="/placeholder.svg?height=600&width=700"
                alt="Fabricxai AI Garment Automation Software Interface"
                width={700}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <Badge className="bg-accent-green text-white">Designed for Bangladesh's Garment Industry</Badge>
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

export default FabricxaiHero

