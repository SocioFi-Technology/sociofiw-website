import type { Metadata } from "next"
import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import ContactMap from "@/components/contact/contact-map"
import ContactSocial from "@/components/contact/contact-social"

export const metadata: Metadata = {
  title: "Contact SocioFi Technology - AI Solutions & Consultancy in Bangladesh",
  description:
    "Contact SocioFi Technology in Bangladesh for AI solutions, consultancy, incubation program inquiries, and more. Reach out to our team today.",
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <ContactHero />

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {/* Contact Form Section */}
            <ContactForm />
          </div>

          <div className="lg:w-1/3 space-y-8">
            {/* Contact Information Section */}
            <ContactInfo />

            {/* Social Media Section */}
            <ContactSocial />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <ContactMap />
    </div>
  )
}

