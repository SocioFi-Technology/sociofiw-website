"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function AingyanCta() {
  return (
    <section
      id="cta"
      className="w-full py-12 md:py-24 bg-gradient-to-r from-primary-teal/10 to-accent-green/10 dark:from-primary-teal/5 dark:to-accent-green/5"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-darkgrey dark:text-white">
            Start Exploring the Laws of Bangladesh Today!
          </h2>
          <p className="text-xl text-neutral-darkgrey/80 dark:text-gray-300 max-w-[600px]">
            Empower yourself with a better understanding of the legal system in Bangladesh. Sign up for access to
            AinGyan and start exploring the laws that matter to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary-teal px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary-teal/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-teal disabled:pointer-events-none disabled:opacity-50 dark:bg-primary-teal dark:hover:bg-primary-teal/90"
            >
              Sign Up for AinGyan Access
            </Link>
          </div>
          <Link
            href="/contact"
            className="text-primary-teal hover:text-primary-teal/80 text-sm mt-4 dark:text-primary-teal/90 dark:hover:text-primary-teal"
          >
            Contact Us for Institutional Access
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

