"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download, ExternalLink, MessageSquare } from "lucide-react"

const ProductCTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

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

  return (
    <section className="py-20 bg-primary-teal text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Take the Next Step Towards Intelligent Garment Manufacturing
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl mb-10 text-white/90">
            Ready to experience the transformative power of Fabricxai for your garment business in Bangladesh? Contact
            us today for a personalized demo or to discuss your specific requirements.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="bg-white text-primary-teal hover:bg-white/90">
              <Link href="/contact" className="flex items-center justify-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Request a Free Demo
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact" className="flex items-center justify-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Contact Us for Pricing
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="#" className="flex items-center justify-center">
                <Download className="mr-2 h-5 w-5" />
                Download Brochure
              </a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <p className="text-white/80 mb-4">Visit our dedicated Fabricxai website for more information:</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="secondary" size="sm">
                <a href="https://fabricxai.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  fabricxai.com
                </a>
              </Button>
              <Button asChild variant="secondary" size="sm">
                <a
                  href="https://app.fabricxai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  app.fabricxai.com
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductCTA

