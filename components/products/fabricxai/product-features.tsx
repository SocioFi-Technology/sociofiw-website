"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Search, BarChart3, Package, Settings, PieChart, Truck, LayoutDashboard } from "lucide-react"

const ProductFeatures = () => {
  const [activeTab, setActiveTab] = useState("planning")
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

  const features = [
    {
      id: "planning",
      title: "AI-Powered Production Planning & Scheduling",
      description:
        "Optimize your production schedules, manage resources effectively, and reduce bottlenecks with intelligent AI-driven planning.",
      icon: <Calendar className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Intelligent scheduling algorithms that optimize production flow",
        "Resource allocation based on real-time availability and capacity",
        "Automatic adjustment of schedules based on changing priorities",
        "Early identification and resolution of potential bottlenecks",
        "Integration with order management for seamless planning",
      ],
    },
    {
      id: "quality",
      title: "Automated Quality Inspection",
      description:
        "Leverage AI-powered image recognition to automate quality checks, identify defects early, and ensure consistent product standards.",
      icon: <Search className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Computer vision technology for automated defect detection",
        "Real-time quality monitoring throughout production",
        "Consistent quality standards across all production lines",
        "Detailed defect classification and tracking",
        "Historical quality data analysis for continuous improvement",
      ],
    },
    {
      id: "monitoring",
      title: "Real-time Production Monitoring & Analytics",
      description:
        "Gain complete visibility into your production processes with real-time data monitoring, performance analytics, and customizable dashboards.",
      icon: <BarChart3 className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Real-time monitoring of production metrics and KPIs",
        "Automated alerts for deviations from targets",
        "Performance comparison across production lines",
        "Trend analysis for continuous improvement",
        "Mobile access to critical production data",
      ],
    },
    {
      id: "inventory",
      title: "Intelligent Inventory Management",
      description:
        "Optimize inventory levels, reduce carrying costs, and prevent stockouts with AI-powered demand forecasting and inventory management.",
      icon: <Package className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "AI-driven demand forecasting for optimal inventory levels",
        "Automated reordering based on production schedules",
        "Real-time inventory visibility across locations",
        "Reduction in excess inventory and carrying costs",
        "Prevention of stockouts and production delays",
      ],
    },
    {
      id: "maintenance",
      title: "Predictive Maintenance for Machinery",
      description:
        "Anticipate potential machinery failures with AI-driven predictive maintenance, minimizing downtime and maximizing operational efficiency.",
      icon: <Settings className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Early detection of potential machinery failures",
        "Scheduled maintenance based on actual usage and condition",
        "Reduction in unplanned downtime and production disruptions",
        "Extended machinery lifespan through optimal maintenance",
        "Maintenance history tracking and analysis",
      ],
    },
    {
      id: "insights",
      title: "Data-Driven Insights & Reporting",
      description:
        "Unlock valuable insights from your production data with automated reports, trend analysis, and actionable recommendations for improvement.",
      icon: <PieChart className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Automated generation of key performance reports",
        "Trend analysis across all aspects of production",
        "Actionable insights for continuous improvement",
        "Customizable reporting for different stakeholders",
        "Data visualization for easier understanding and decision-making",
      ],
    },
    {
      id: "supply",
      title: "Supply Chain Optimization",
      description:
        "Streamline your supply chain, optimize logistics, and improve collaboration with suppliers through AI-powered insights.",
      icon: <Truck className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "End-to-end supply chain visibility",
        "Supplier performance tracking and analysis",
        "Optimization of logistics and transportation",
        "Improved collaboration with suppliers through shared data",
        "Reduction in lead times and supply chain costs",
      ],
    },
    {
      id: "dashboards",
      title: "Customizable Dashboards & Reporting",
      description:
        "Tailor the Fabricxai interface to your specific needs with customizable dashboards and reporting features that provide the information you need at a glance.",
      icon: <LayoutDashboard className="h-10 w-10 text-primary-teal" />,
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Fully customizable dashboards for different user roles",
        "Drag-and-drop interface for easy dashboard configuration",
        "Real-time data visualization with interactive charts",
        "Role-based access control for information security",
        "Export capabilities for sharing reports externally",
      ],
    },
  ]

  return (
    <section className="py-20 bg-neutral-offwhite">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Badge className="mb-4 bg-primary-teal/10 text-primary-teal hover:bg-primary-teal/20 border-none">
              Key Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Powerful Features Designed for Garment Industry Excellence
            </h2>
            <div className="w-24 h-1 bg-secondary-gold rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Fabricxai offers a comprehensive suite of features specifically designed to address the unique needs of
              the Bangladeshi garment industry.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue="planning" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto mb-8 overflow-x-auto">
                {features.slice(0, 8).map((feature) => (
                  <TabsTrigger
                    key={feature.id}
                    value={feature.id}
                    className="flex items-center gap-2 text-neutral-darkgrey hover:text-primary-teal data-[state=active]:bg-primary-teal data-[state=active]:text-white transition-colors duration-200"
                  >
                    {feature.icon}
                    <span className="hidden md:inline text-sm">{feature.title.split(" ")[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {features.map((feature) => (
                <TabsContent key={feature.id} value={feature.id} className="mt-0">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-0">
                      <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2">
                          <Image
                            src={feature.image || "/placeholder.svg"}
                            alt={feature.title}
                            width={600}
                            height={400}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="lg:w-1/2 p-8">
                          <div className="flex items-start mb-4">
                            <div className="bg-primary-teal/10 p-3 rounded-full mr-4 flex-shrink-0">{feature.icon}</div>
                            <h3 className="text-2xl font-bold text-neutral-darkgrey">{feature.title}</h3>
                          </div>
                          <p className="text-gray-700 mb-6">{feature.description}</p>

                          <h4 className="font-semibold text-primary-teal mb-3">Key Capabilities:</h4>
                          <ul className="space-y-2">
                            {feature.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary-teal mr-2 font-bold">•</span>
                                <span className="text-gray-700">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductFeatures

