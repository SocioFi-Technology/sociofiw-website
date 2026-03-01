"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

const ContactInfo = () => {
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
    <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle className="text-xl text-neutral-darkgrey">Connect with Us Directly</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <motion.div variants={itemVariants} className="flex items-start">
            <div className="bg-primary-teal/10 p-3 rounded-full mr-4">
              <Mail className="h-5 w-5 text-primary-teal" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-darkgrey mb-1">Email</h3>
              <a href="mailto:info@sociofitechnology.com" className="text-primary-teal hover:underline">
                info@sociofitechnology.com
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-start">
            <div className="bg-primary-teal/10 p-3 rounded-full mr-4">
              <Phone className="h-5 w-5 text-primary-teal" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-darkgrey mb-1">Phone</h3>
              <a href="tel:+8801743036425" className="text-primary-teal hover:underline">
                +880 174 303 6425
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-start">
            <div className="bg-primary-teal/10 p-3 rounded-full mr-4">
              <MapPin className="h-5 w-5 text-primary-teal" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-darkgrey mb-1">Address</h3>
              <p className="text-gray-700">
                21 Jigatola
                <br />
                Dhaka, 1212
                <br />
                Bangladesh
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4 border-t border-gray-200">
            <h3 className="font-semibold text-neutral-darkgrey mb-2">Office Hours</h3>
            <p className="text-gray-700">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 2:00 PM
              <br />
              Sunday: Closed
            </p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ContactInfo

