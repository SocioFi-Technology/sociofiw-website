"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function NewsWiseHowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
            The Intelligence Behind Your Personalized News
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Understanding how NewsWise learns and adapts to deliver your perfect news experience.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10 order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-primary-teal/10 to-accent-green/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-neutral-darkgrey">Learning Your Preferences</h3>
                <p className="text-gray-700">
                  NewsWise utilizes advanced AI algorithms to understand your interests based on your interactions with
                  the app. This includes the topics you follow, the articles you read, the sources you prefer, and any
                  feedback you provide.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary-teal/10 to-accent-green/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-neutral-darkgrey">Continuous Improvement</h3>
                <p className="text-gray-700">
                  Our system continuously learns and refines your personalized news feed to ensure you are always
                  presented with the most relevant and engaging content.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary-teal/10 to-accent-green/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-neutral-darkgrey">Privacy and Security</h3>
                <p className="text-gray-700">
                  Your privacy is important to us. We ensure that your data is handled securely and ethically in the
                  personalization process.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="NewsWise AI personalization process"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-teal/10 rounded-full z-[-1]"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-green/10 rounded-full z-[-1]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

