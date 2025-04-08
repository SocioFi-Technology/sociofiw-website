"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"

const ContactForm = () => {
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
          <CardTitle className="text-2xl text-neutral-darkgrey">Send Us a Message</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Your Name <span className="text-red-500">*</span>
                </Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">
                  Your Email <span className="text-red-500">*</span>
                </Label>
                <Input id="email" type="email" placeholder="Enter your email address" required />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Enter your company name" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <Label htmlFor="inquiry-type">
                Inquiry Type <span className="text-red-500">*</span>
              </Label>
              <Select required>
                <SelectTrigger id="inquiry-type">
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="services">Services Inquiry</SelectItem>
                  <SelectItem value="fabricxai">Product Inquiry - Fabricxai</SelectItem>
                  <SelectItem value="internal-app">Product Inquiry - Internal App</SelectItem>
                  <SelectItem value="chatbot">Product Inquiry - AI Chatbot BB</SelectItem>
                  <SelectItem value="incubation">Incubation Program Inquiry</SelectItem>
                  <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                  <SelectItem value="career">Career Inquiry</SelectItem>
                  <SelectItem value="general">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <Label htmlFor="message">
                Message <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="Please describe your inquiry in detail..."
                className="min-h-[150px]"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button type="submit" className="w-full bg-primary-teal hover:bg-primary-teal/90 text-white">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ContactForm

