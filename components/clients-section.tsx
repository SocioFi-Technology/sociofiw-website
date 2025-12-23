import Image from "next/image"
import { Badge } from "@/components/ui/badge"

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
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
      </div>
    </section>
  )
}

export default ClientsSection

