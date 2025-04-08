"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageSquare, Phone, FileText } from "lucide-react"

const AppCTA = () => {
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
            Ready to Streamline Your Internal Operations?
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl mb-10 text-white/90">
            Discover how a customized internal app from SocioFi Technology can revolutionize your business in
            Bangladesh. Contact us today to discuss your specific needs and get a personalized quote.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="bg-white text-primary-teal hover:bg-white/90">
              <Link href="/contact" className="flex items-center justify-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Request a Custom App Quote
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact" className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="#" className="flex items-center justify-center">
                <FileText className="mr-2 h-5 w-5" />
                Download Case Study
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AppCTA

