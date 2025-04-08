"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function NewsWiseHero() {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-gradient-to-r from-primary-teal/5 to-accent-green/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-darkgrey">
              NewsWise: Your Personalized & Intelligent News Portal
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-600 font-light">
              নিউজওয়াইজ: আপনার ব্যক্তিগতকৃত ও বুদ্ধিমান নিউজ পোর্টাল
            </p>
            <p className="text-lg mb-8 text-gray-700">
              Stay informed with news tailored to your interests, backed by reliable references, and explained in a way
              that suits your understanding – all with NewsWise, designed for the discerning news consumer in
              Bangladesh.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary-teal hover:bg-primary-teal/90 text-white">Get Early Access</Button>
              <Button variant="outline" className="border-primary-teal text-primary-teal hover:bg-primary-teal/10">
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="NewsWise personalized news feed interface"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-teal/20 to-transparent rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

