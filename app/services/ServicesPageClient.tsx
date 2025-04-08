"use client"

import { useState } from "react"
import ServicesHero from "@/components/services/services-hero"
import ServiceCategories from "@/components/services/service-categories"
import WhyChooseSocioFi from "@/components/services/why-choose-sociofi"
import ServicesCTA from "@/components/services/services-cta"
import { Pagination } from "@/components/ui/pagination"

export default function ServicesPageClient() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 3

  const handlePageChange = (page: number) => {
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" })
    setCurrentPage(page)
  }

  return (
    <div className="pt-16">
      {/* Hero Section - Always visible on all pages */}
      <ServicesHero />

      {/* Page 1 Content */}
      {currentPage === 1 && (
        <>
          <ServiceCategories />
          <WhyChooseSocioFi />
        </>
      )}

      {/* Page 2 Content */}
      {currentPage === 2 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-neutral-darkgrey">
                Our Service Process
              </h2>
              <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-10"></div>

              <div className="space-y-12">
                <div className="bg-neutral-offwhite p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-primary-teal">1. Discovery & Assessment</h3>
                  <p className="text-gray-700">
                    We begin by thoroughly understanding your business, challenges, and goals. Our team conducts a
                    comprehensive assessment to identify opportunities where AI can create the most value for your
                    organization.
                  </p>
                </div>

                <div className="bg-neutral-offwhite p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-primary-teal">2. Strategy & Solution Design</h3>
                  <p className="text-gray-700">
                    Based on our assessment, we develop a tailored AI strategy and design custom solutions that address
                    your specific needs. We prioritize practical applications that deliver measurable results.
                  </p>
                </div>

                <div className="bg-neutral-offwhite p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-primary-teal">3. Development & Implementation</h3>
                  <p className="text-gray-700">
                    Our expert team develops and implements the AI solutions, ensuring seamless integration with your
                    existing systems. We follow agile methodologies to deliver value incrementally and adapt to changing
                    requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Page 3 Content */}
      {currentPage === 3 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-neutral-darkgrey">
                Service Completion & Support
              </h2>
              <div className="w-24 h-1 bg-primary-teal rounded-full mx-auto mb-10"></div>

              <div className="space-y-12">
                <div className="bg-neutral-offwhite p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-primary-teal">4. Training & Knowledge Transfer</h3>
                  <p className="text-gray-700">
                    We provide comprehensive training to your team, ensuring they understand how to use and maximize the
                    benefits of the AI solutions. Our goal is to empower your organization with the knowledge to
                    leverage AI effectively.
                  </p>
                </div>

                <div className="bg-neutral-offwhite p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-primary-teal">5. Monitoring & Optimization</h3>
                  <p className="text-gray-700">
                    After implementation, we continuously monitor the performance of the AI solutions and make necessary
                    adjustments to optimize results. We use data-driven insights to refine and improve the solutions
                    over time.
                  </p>
                </div>

                <div className="bg-neutral-offwhite p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-primary-teal">6. Ongoing Support & Partnership</h3>
                  <p className="text-gray-700">
                    We provide ongoing support and maintenance to ensure the long-term success of your AI initiatives.
                    Our partnership approach means we're committed to your continued growth and adaptation in the
                    evolving AI landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Section - Always visible on all pages */}
      <ServicesCTA />

      {/* Pagination */}
      <div className="container mx-auto px-4">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  )
}

