"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Telescope } from "lucide-react"

const MissionVision = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
    <section className="py-20 bg-neutral-offwhite">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Badge className="mb-4 bg-primary-keppel/10 text-primary-keppel hover:bg-primary-keppel/20 border-none">
              Our Mission & Vision
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Our Mission & Vision: AI for Progress - Bangladesh at the Heart
            </h2>
            <div className="w-24 h-1 bg-secondary-azure rounded-full mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-keppel/10 p-3 rounded-full mr-4">
                      <Target className="h-8 w-8 text-primary-keppel" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-darkgrey">Our Mission</h3>
                  </div>

                  <p className="text-lg font-semibold mb-6 text-primary-keppel">
                    To empower Bangladeshi industries of all sizes with customized AI solutions, fostering data-driven
                    decision-making, enhancing efficiency, and driving sustainable growth.
                  </p>

                  <p className="text-gray-700 mb-4">
                    We are dedicated to building AI expertise within Bangladesh and contributing to the nation's
                    technological advancement on a global stage.
                  </p>

                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary-keppel mr-2">•</span>
                      <span>Creating customized AI solutions for specific industry needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-keppel mr-2">•</span>
                      <span>Enabling data-driven decision making across businesses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-keppel mr-2">•</span>
                      <span>Developing local AI talent and expertise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-keppel mr-2">•</span>
                      <span>Driving sustainable growth through technology</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision Card */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-secondary-azure/10 p-3 rounded-full mr-4">
                      <Telescope className="h-8 w-8 text-secondary-azure" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-darkgrey">Our Vision</h3>
                  </div>

                  <p className="text-lg font-semibold mb-6 text-[#34a494]">
                    To see Bangladesh become a regional leader in AI innovation and adoption, with SocioFi Technology at
                    the forefront, driving economic prosperity and social progress through intelligent technology.
                  </p>

                  <p className="text-gray-700 mb-4">
                    We envision a future where Bangladeshi businesses are globally competitive, powered by AI, and
                    contributing to a thriving digital economy.
                  </p>

                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-secondary-azure mr-2">•</span>
                      <span>Bangladesh as a regional AI innovation hub</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-azure mr-2">•</span>
                      <span>Globally competitive Bangladeshi businesses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-azure mr-2">•</span>
                      <span>Economic growth through AI adoption</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-azure mr-2">•</span>
                      <span>A thriving digital economy and ecosystem</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionVision

