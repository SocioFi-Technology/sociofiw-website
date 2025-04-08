"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const OurStory = () => {
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

  const milestones = [
    {
      year: "2022",
      title: "Foundation",
      description: "SocioFi Technology was established with a vision to transform Bangladesh's industries through AI.",
    },
    {
      year: "2022",
      title: "First Client",
      description: "Partnered with our first enterprise client to develop a custom AI solution.",
    },
    {
      year: "2023",
      title: "FabricxAI Launch",
      description: "Launched our flagship product for the RMG industry, revolutionizing fabric inspection.",
    },
    {
      year: "2023",
      title: "Team Expansion",
      description: "Grew our team to include top AI researchers and engineers from Bangladesh.",
    },
    {
      year: "2023",
      title: "Incubation Program",
      description: "Launched our AI startup incubation program to nurture local talent.",
    },
    {
      year: "2024",
      title: "Growing Impact",
      description: "Continuing to expand our reach across multiple industries in Bangladesh.",
    },
  ]

  return (
    <section id="our-story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Badge className="mb-4 bg-secondary-gold/10 text-secondary-gold hover:bg-secondary-gold/20 border-none">
              Our Story
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Our Story: From Vision to Reality - Building AI for Bangladesh
            </h2>
            <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-6"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=500&text=SocioFi+Founding+Team+2022"
                  alt="SocioFi Technology founding team"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-6 text-gray-700">
                  SocioFi Technology began with a simple observation: Bangladeshi industries were rich in data, but
                  often lacked the tools to fully utilize it. We saw the immense potential of Artificial Intelligence,
                  particularly Large Language Models, to bridge this gap. Founded in 2022 by a team of AI enthusiasts
                  and industry experts, SocioFi's journey started in Dhaka, fueled by a vision to make cutting-edge AI
                  accessible and beneficial for businesses across Bangladesh.
                </p>
                <p className="text-lg text-gray-700">
                  Our early days were filled with{" "}
                  <span className="font-bold text-[#200404] text-[1.125em]">challenges</span> – introducing a new
                  technology to a market, building trust, and demonstrating the tangible value of AI. But we persevered,
                  driven by our belief in the transformative power of AI and our commitment to Bangladesh. Our first
                  major milestone was partnering with a leading garment manufacturer to optimize their production
                  processes, which validated our approach and paved the way for further innovation.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <h3 className="text-2xl font-bold mb-8 text-neutral-darkgrey text-center">Our Journey</h3>

            <div className="relative max-w-4xl mx-auto mt-12 px-4">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-teal/80 to-primary-teal/30 rounded-full"></div>

              {[
                {
                  year: "2022",
                  month: "January",
                  title: "Foundation",
                  description:
                    "SocioFi Technology was founded in Dhaka with a mission to bring AI innovation to Bangladesh.",
                  image: "/placeholder.svg?height=200&width=300&text=SocioFi+Foundation",
                },
                {
                  year: "2022",
                  month: "June",
                  title: "First Client",
                  description: "Partnered with a leading garment manufacturer to implement our first AI solution.",
                  image: "/placeholder.svg?height=200&width=300&text=First+Client+Partnership",
                },
                {
                  year: "2023",
                  month: "February",
                  title: "Fabricxai Launch",
                  description:
                    "Launched our flagship product Fabricxai, an AI-powered solution for the garment industry.",
                  image: "/placeholder.svg?height=200&width=300&text=Fabricxai+Launch",
                },
                {
                  year: "2023",
                  month: "August",
                  title: "Team Expansion",
                  description: "Grew our team to 15 AI specialists, data scientists, and industry experts.",
                  image: "/placeholder.svg?height=200&width=300&text=Team+Expansion",
                },
                {
                  year: "2024",
                  month: "January",
                  title: "Incubation Program",
                  description:
                    "Launched our incubation program to nurture the next generation of AI entrepreneurs in Bangladesh.",
                  image: "/placeholder.svg?height=200&width=300&text=Incubation+Program",
                },
                {
                  year: "Present",
                  month: "",
                  title: "Growing Impact",
                  description: "Continuing to expand our reach and impact across multiple industries in Bangladesh.",
                  image: "/placeholder.svg?height=200&width=300&text=Growing+Impact",
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative mb-12 flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="mb-4">
                        <Image
                          src={milestone.image || "/placeholder.svg"}
                          alt={milestone.title}
                          width={300}
                          height={200}
                          className="rounded-lg w-full h-auto"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-primary-teal mb-2">{milestone.title}</h4>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white border-4 border-primary-teal flex items-center justify-center z-10">
                      <div className="w-4 h-4 rounded-full bg-primary-teal"></div>
                    </div>
                    <div
                      className={`absolute top-12 whitespace-nowrap ${index % 2 === 0 ? "-translate-x-[calc(100%+16px)]" : "translate-x-4"}`}
                    >
                      <span className="bg-primary-teal text-white text-sm font-bold py-1 px-3 rounded-full">
                        {milestone.month ? `${milestone.month} ${milestone.year}` : milestone.year}
                      </span>
                    </div>
                  </div>

                  <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurStory

