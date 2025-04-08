"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

const ContactSocial = () => {
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

  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com/company/sociofi-technology" },
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, url: "https://facebook.com/sociofi.tech" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, url: "https://twitter.com" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, url: "https://www.instagram.com./sociofi_technology/" },
    { name: "YouTube", icon: <Youtube className="h-5 w-5" />, url: "https://youtube.com" },
  ]

  return (
    <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle className="text-xl text-neutral-darkgrey">Stay Connected</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3 justify-center">
            {socialLinks.map((social, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-teal/10 text-primary-teal hover:bg-primary-teal hover:text-white transition-colors"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.p variants={itemVariants} className="text-center mt-4 text-gray-700">
            Follow us on social media for the latest updates, insights, and news about AI in Bangladesh.
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ContactSocial

