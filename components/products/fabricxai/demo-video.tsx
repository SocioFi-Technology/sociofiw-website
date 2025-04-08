"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Play } from "lucide-react"

const DemoVideo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    <section id="demo-video" className="py-20 bg-gradient-to-r from-primary-teal/5 to-accent-green/5">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Badge className="mb-4 bg-secondary-gold/10 text-secondary-gold hover:bg-secondary-gold/20 border-none">
              Demo Video
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Experience the Power of Fabricxai - Watch Our Demo
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              See how Fabricxai works in a real-world garment factory setting and discover how it can transform your
              operations.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Fabricxai Demo Video"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="bg-white/20 p-6 rounded-full backdrop-blur-sm cursor-pointer hover:bg-white/30 transition-colors">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-2 text-neutral-darkgrey">
                    Fabricxai in Action: Transforming Garment Manufacturing
                  </h3>
                  <p className="text-gray-700">
                    This demonstration showcases how Fabricxai integrates with existing garment factory operations to
                    improve efficiency, quality control, and decision-making. Watch as we walk through the key features
                    and their real-world impact.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2 text-neutral-darkgrey">Production Planning Demo</h3>
                <p className="text-gray-700 text-sm">
                  See how Fabricxai optimizes production schedules and resource allocation for maximum efficiency.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2 text-neutral-darkgrey">Quality Control Demo</h3>
                <p className="text-gray-700 text-sm">
                  Watch our AI-powered quality inspection system detect defects in real-time with high accuracy.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2 text-neutral-darkgrey">Analytics Dashboard Demo</h3>
                <p className="text-gray-700 text-sm">
                  Explore how Fabricxai's analytics dashboard provides actionable insights for better decision-making.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default DemoVideo

