"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const BlogSearch = () => {
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
          <CardTitle className="text-xl text-neutral-darkgrey">Find Articles on Specific Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div variants={itemVariants} className="flex items-center space-x-2">
            <div className="relative flex-grow">
              <Input type="text" placeholder="Search our blog..." className="pr-10" />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-full text-gray-400 hover:text-primary-teal"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default BlogSearch

