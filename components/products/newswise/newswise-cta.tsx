"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function NewsWiseCta() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-teal/20 to-accent-green/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-darkgrey">
            Ready to Experience the Future of News?
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Discover a smarter way to stay informed with NewsWise. Sign up for early access or learn more about our
            subscription plans today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-primary-teal hover:bg-primary-teal/90 text-white px-6 py-2 text-lg">
              Sign Up for Early Access
            </Button>
            <Button
              variant="outline"
              className="border-primary-teal text-primary-teal hover:bg-primary-teal/10 px-6 py-2 text-lg"
            >
              Learn More About Subscription
            </Button>
          </div>
          <p className="mt-6 text-gray-600">
            For enterprise solutions or partnerships,{" "}
            <a href="/contact" className="text-primary-teal hover:underline">
              contact us
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  )
}

