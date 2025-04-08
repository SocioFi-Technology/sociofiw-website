"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"

const AboutHero = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

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
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-b from-white to-neutral-offwhite">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full geometric-bg" />
        <div className="absolute top-0 left-0 w-full h-full bangladesh-pattern" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        <div className="hero-animation" />
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <Badge className="mb-4 bg-primary-teal/10 text-primary-teal hover:bg-primary-teal/20 border-none">
              About Us
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-neutral-darkgrey"
          >
            About SocioFi Technology: Bangladesh's First AI Agent Company
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 font-medium text-primary-teal"
            style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
          >
            সোশিওফি টেকনোলজি: বাংলাদেশের প্রথম এআই এজেন্ট কোম্পানি
          </motion.h2>

          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-secondary-gold rounded-full"></div>
          </motion.div>

          <motion.h3 variants={itemVariants} className="text-xl md:text-2xl mb-6 text-neutral-darkgrey">
            Driving Bangladesh's digital future with customized AI solutions, empowering industries, and fostering local
            talent.
          </motion.h3>

          <motion.p variants={itemVariants} className="text-lg mb-10 text-gray-700">
            Welcome to SocioFi Technology, a pioneering force in Bangladesh's burgeoning tech landscape. We are proud to
            be the <strong>first company in Bangladesh dedicated to creating AI Agents for business purposes</strong>,
            leveraging the power of Large Language Models (LLMs) to deliver customized, industry-specific solutions. Our
            mission is to empower Bangladeshi businesses with cutting-edge AI, fostering innovation, efficiency, and
            data-driven decision-making. We are deeply rooted in Bangladesh, committed to its progress, and excited to
            be at the forefront of the AI revolution here.
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center">
            <a
              href="#our-story"
              className="flex flex-col items-center text-primary-teal hover:text-primary-teal/80 transition-colors"
            >
              <span className="mb-2">Explore Our Story Below</span>
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-offwhite to-transparent"></div>
    </section>
  )
}

export default AboutHero

