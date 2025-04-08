"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function AingyanHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary-teal/10 to-accent-green/10 dark:from-primary-teal/5 dark:to-accent-green/5">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-neutral-darkgrey dark:text-white">
                AinGyan: Your Accessible Guide to Bangladesh Law
              </h1>
              <p className="text-xl md:text-2xl font-medium text-primary-teal dark:text-primary-teal/90">
                আইনজ্ঞান: বাংলাদেশের আইনি ব্যবস্থার আপনার সহজলভ্য গাইড
              </p>
            </div>
            <p className="max-w-[600px] text-neutral-darkgrey md:text-xl dark:text-gray-300">
              Get clear and concise answers to your basic legal queries about the laws and rules of Bangladesh with
              AinGyan, your trusted resource for understanding the legal landscape.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#features"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-teal px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary-teal/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-teal disabled:pointer-events-none disabled:opacity-50 dark:bg-primary-teal dark:hover:bg-primary-teal/90"
              >
                Explore Features
              </Link>
              <Link
                href="#cta"
                className="inline-flex h-10 items-center justify-center rounded-md border border-primary-teal bg-white px-8 text-sm font-medium text-primary-teal shadow-sm transition-colors hover:bg-gray-100 hover:text-primary-teal focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-teal disabled:pointer-events-none disabled:opacity-50 dark:bg-transparent dark:border-primary-teal dark:text-primary-teal dark:hover:bg-primary-teal/10"
              >
                Get Access
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[500px] h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="AinGyan - Legal Information Platform"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg text-neutral-darkgrey dark:text-gray-300 max-w-3xl mx-auto">
            Introducing AinGyan by SocioFi Technology, your comprehensive resource for understanding the legal system of
            Bangladesh. Whether you have basic questions about specific laws, regulations, or legal procedures, AinGyan
            provides you with accessible and reliable information at your fingertips. Empower yourself with legal
            knowledge and navigate the complexities of the Bangladeshi legal framework with ease.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

