"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageSquare, Phone } from "lucide-react"

const AgentCTA = () => {
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
    <section className="py-20 bg-primary-teal text-black font-medium">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Custom AI Agent?
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl mb-10">
            Let's discuss how our AI agent development services can help automate tasks, improve customer interactions,
            and drive efficiency in your business.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="bg-black text-white hover:bg-black/90">
              <Link href="/contact" className="flex items-center justify-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Schedule a Consultation
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-black/10">
              <Link href="/contact" className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AgentCTA

