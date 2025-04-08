"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

const BlogNewsletter = () => {
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
      <Card className="border-none shadow-md bg-primary-teal/5">
        <CardHeader>
          <CardTitle className="text-xl text-neutral-darkgrey">Stay Updated: Subscribe to Our Newsletter</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.p variants={itemVariants} className="text-gray-700 mb-4">
            Don't miss out on the latest AI trends and insights from SocioFi Technology. Subscribe to our newsletter to
            receive regular updates directly to your inbox.
          </motion.p>
          <motion.div variants={itemVariants} className="space-y-3">
            <Input type="email" placeholder="Your email address" className="bg-white" />
            <Button className="w-full bg-primary-teal hover:bg-primary-teal/90 text-white">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default BlogNewsletter

