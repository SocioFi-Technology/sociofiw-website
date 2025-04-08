"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const IndustryHero = () => {
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
              Industry Solutions
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-neutral-darkgrey"
          >
            Tailored AI Solutions for the Unique Needs of Bangladeshi Industries
          </motion.h1>

          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-secondary-gold rounded-full"></div>
          </motion.div>

          <motion.h3 variants={itemVariants} className="text-xl md:text-2xl mb-6 text-neutral-darkgrey">
            We develop bespoke AI solutions to address the specific challenges and unlock the potential of your
            industry.
          </motion.h3>

          <motion.p variants={itemVariants} className="text-lg mb-10 text-gray-700">
            At SocioFi Technology, we understand that each industry in Bangladesh faces unique challenges and
            opportunities. Our customized AI solutions are designed specifically for the local context, addressing the
            particular needs of key sectors such as garments, agriculture, manufacturing, and more. By combining our
            deep understanding of these industries with cutting-edge AI technology, we deliver solutions that drive real
            business results.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary-teal hover:bg-primary-teal/90 text-white">
              <Link href="/contact">
                Discuss Your Industry Needs
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-teal text-primary-teal hover:bg-primary-teal/10"
            >
              <Link href="#industry-focus">Explore Solutions</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-offwhite to-transparent"></div>
    </section>
  )
}

export default IndustryHero

