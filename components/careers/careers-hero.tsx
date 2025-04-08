"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const CareersHero = () => {
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
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-b from-white to-neutral-offwhite">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full geometric-bg" />
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
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <Badge className="mb-4 bg-primary-teal/10 text-primary-teal hover:bg-primary-teal/20 border-none">
              Careers
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-neutral-darkgrey"
          >
            Join SocioFi Technology: Build the Future of AI in Bangladesh
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 font-medium text-primary-teal"
            style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
          >
            সোশিওফি টেকনোলজিতে যোগদান করুন: বাংলাদেশে এআই-এর ভবিষ্যৎ তৈরি করুন
          </motion.h2>

          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-secondary-gold rounded-full"></div>
          </motion.div>

          <motion.h3 variants={itemVariants} className="text-xl md:text-2xl mb-6 text-neutral-darkgrey">
            Be part of Bangladesh's first AI Agent company, where innovation meets impact. Explore exciting career
            opportunities and contribute to the nation's technological advancement.
          </motion.h3>

          <motion.p variants={itemVariants} className="text-lg mb-10 text-gray-700">
            Welcome to the SocioFi Technology Careers page. We are a rapidly growing company at the forefront of AI
            innovation in Bangladesh, and we are looking for talented and passionate individuals to join our team. If
            you are driven by a desire to work on challenging and impactful projects, collaborate with a brilliant team,
            and contribute to the growth of Bangladesh's tech landscape, we encourage you to explore our opportunities.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary-teal hover:bg-primary-teal/90 text-white">
              <a href="#open-positions">
                View Open Positions
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-teal text-primary-teal hover:bg-primary-teal/10"
            >
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-offwhite to-transparent"></div>
    </section>
  )
}

export default CareersHero

