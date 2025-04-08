import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const ClientsSection = () => {
  // Placeholder client logos
  const clients = [
    { name: "Client 1", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Client 2", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Client 3", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Client 4", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Client 5", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Client 6", logo: "/placeholder.svg?height=80&width=160" },
  ]

  // Placeholder testimonials
  const testimonials = [
    {
      quote:
        "SocioFi's AI solutions have transformed our garment manufacturing process, increasing efficiency by 30% and reducing operational costs.",
      author: "Rahim Ahmed",
      position: "CEO, Bangladesh Garments Ltd.",
      company: "Bangladesh Garments Ltd.",
    },
    {
      quote:
        "The customized AI agent developed by SocioFi has revolutionized how we analyze data and make decisions. A true game-changer for our business.",
      author: "Fatima Khan",
      position: "CTO, AgriTech Solutions",
      company: "AgriTech Solutions",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary-teal/10 text-primary-teal hover:bg-primary-teal/20 border-none">
            Our Clients
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">Trusted by Leading Companies</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            We work with forward-thinking businesses across Bangladesh to implement AI solutions that drive growth.
          </p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mb-16">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={160}
                height={80}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-secondary-gold/10 text-secondary-gold hover:bg-secondary-gold/20 border-none">
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-neutral-darkgrey">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-8">
                <div className="text-4xl text-primary-teal mb-4">"</div>
                <p className="text-lg mb-6 text-gray-700 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="bg-primary-teal/10 h-12 w-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-teal font-bold">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-darkgrey">{testimonial.author}</h4>
                    <p className="text-gray-600">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsSection

