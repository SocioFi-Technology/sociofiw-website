"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, useScroll } from "framer-motion"

const Milestones = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("space-y-8", className)} {...props} />,
)
Milestones.displayName = "Milestones"

const MilestoneTrack = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("relative ml-3", className)} {...props} />,
)
MilestoneTrack.displayName = "MilestoneTrack"

const MilestoneLine = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { scrollYProgress } = useScroll()

    return (
      <>
        <div ref={ref} className={cn("absolute h-full w-0.5 bg-gray-200", className)} {...props} />
        <motion.div className="absolute h-full w-0.5 bg-primary-teal origin-top" style={{ scaleY: scrollYProgress }} />
      </>
    )
  },
)
MilestoneLine.displayName = "MilestoneLine"

const MilestoneItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("relative pb-12 pl-8", className)} {...props} />,
)
MilestoneItem.displayName = "MilestoneItem"

const MilestoneDot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "absolute left-0 -translate-x-1/2 h-4 w-4 rounded-full border-2 border-primary-teal bg-white",
        className,
      )}
      {...props}
    />
  ),
)
MilestoneDot.displayName = "MilestoneDot"

const MilestoneTime = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "absolute left-0 -translate-x-[calc(100%+12px)] flex items-center justify-center w-10 h-10 rounded-full bg-primary-teal text-white font-medium",
        className,
      )}
      {...props}
    />
  ),
)
MilestoneTime.displayName = "MilestoneTime"

const MilestoneContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("bg-white p-6 rounded-lg shadow-md", className)}
      {...props}
    />
  ),
)
MilestoneContent.displayName = "MilestoneContent"

export { Milestones, MilestoneTrack, MilestoneLine, MilestoneItem, MilestoneDot, MilestoneTime, MilestoneContent }

