"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const ServicesHero = () => {
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
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <Badge className="mb-4 bg-primary-teal/10 text-primary-teal hover:bg-primary-teal/20 border-none">
              Our Services
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-neutral-darkgrey"
          >
            Empowering Your Business with Intelligent AI Solutions
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 font-medium text-primary-teal"
            style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
          >
            বুদ্ধিমান এআই সমাধানের মাধ্যমে আপনার ব্যবসার ক্ষমতায়ন
          </motion.h2>

          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-secondary-gold rounded-full"></div>
          </motion.div>

          <motion.h3 variants={itemVariants} className="text-xl md:text-2xl mb-6 text-neutral-darkgrey">
            Drive efficiency, make data-driven decisions, and innovate for the future with SocioFi Technology's
            customized AI services.
          </motion.h3>

          <motion.p variants={itemVariants} className="text-lg mb-10 text-gray-700">
            Welcome to SocioFi Technology's Services page. As Bangladesh's first company dedicated to AI Agents for
            business, we offer a comprehensive suite of services designed to help your organization leverage the
            transformative power of Artificial Intelligence. Whether you're looking to automate tasks, gain deeper
            insights from your data, implement AI into your existing software, or nurture the next generation of tech
            talent, SocioFi has the expertise and solutions you need to succeed.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary-teal hover:bg-primary-teal/90 text-white">
              <Link href="/contact">
                Request a Free Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-teal text-primary-teal hover:bg-primary-teal/10"
            >
              <Link href="#service-categories">Explore Our Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-offwhite to-transparent"></div>
    </section>
  )
}

export default ServicesHero

