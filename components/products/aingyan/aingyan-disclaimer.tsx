"use client"

import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"

export default function AingyanDisclaimer() {
  return (
    <section className="w-full py-12 md:py-16 bg-white dark:bg-neutral-darkgrey/10">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="max-w-3xl mx-auto bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-8 w-8 text-amber-600 dark:text-amber-500 mr-3" />
            <h2 className="text-2xl font-bold text-neutral-darkgrey dark:text-white">
              Please Note: This is Not Legal Advice
            </h2>
          </div>
          <div className="space-y-4 text-neutral-darkgrey/90 dark:text-gray-300">
            <p>
              The information provided by AinGyan is intended for general knowledge and informational purposes only, and
              does not constitute legal advice. For specific legal advice or assistance with complex legal matters,
              please consult with a qualified legal professional in Bangladesh.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

