"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const BlogHero = () => {
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
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-b from-white to-neutral-offwhite">
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
              Our Blog
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-neutral-darkgrey"
          >
            Insights & Updates on AI in Bangladesh and Beyond
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 font-medium text-primary-teal"
            style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
          >
            বাংলাদেশ এবং বিশ্বজুড়ে এআই-এর অন্তর্দৃষ্টি ও আপডেট
          </motion.h2>

          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-secondary-gold rounded-full"></div>
          </motion.div>

          <motion.h3 variants={itemVariants} className="text-xl md:text-2xl mb-6 text-neutral-darkgrey">
            Stay informed about the latest trends in Artificial Intelligence, Large Language Models, data-driven
            decision-making, and industry solutions, with a special focus on the advancements and impact of AI in
            Bangladesh.
          </motion.h3>

          <motion.p variants={itemVariants} className="text-lg mb-10 text-gray-700">
            Welcome to the SocioFi Technology Blog, your go-to source for the latest insights, news, and analysis in the
            world of Artificial Intelligence. We share our expertise on AI trends in Bangladesh and globally, delve into
            the intricacies of Large Language Models, explore the power of data-driven decision-making, and provide
            updates on our company's journey and the exciting developments in the AI landscape.
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-offwhite to-transparent"></div>
    </section>
  )
}

export default BlogHero

