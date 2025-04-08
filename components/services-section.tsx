import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Factory, Users, Lightbulb, ChevronRight } from "lucide-react"

const ServicesSection = () => {
  const services = [
    {
      title: "AI Agent Development",
      description:
        "Custom AI agents designed to automate tasks, provide insights, and enhance decision-making for your business.",
      icon: <Brain className="h-10 w-10 text-primary-teal" />,
      link: "/services/ai-agent-development",
    },
    {
      title: "Customized Industry Solutions",
      description:
        "Tailored AI solutions for garments, agriculture, manufacturing, and other key industries in Bangladesh.",
      icon: <Factory className="h-10 w-10 text-primary-teal" />,
      link: "/services/industry-solutions",
    },
    {
      title: "AI Consultancy",
      description:
        "Strategic guidance on implementing AI in your business, from initial assessment to full implementation.",
      icon: <Lightbulb className="h-10 w-10 text-primary-teal" />,
      link: "/services/ai-consultancy",
    },
    {
      title: "Incubation Program",
      description:
        "Nurturing the next generation of AI entrepreneurs in Bangladesh with mentorship, resources, and support.",
      icon: <Users className="h-10 w-10 text-primary-teal" />,
      link: "/services/incubation-program",
    },
  ]

  return (
    <section className="py-16 geometric-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-secondary-gold/10 text-secondary-gold hover:bg-secondary-gold/20 border-none">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">Our Key Services</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            We offer a comprehensive range of AI solutions tailored to meet the unique needs of businesses in
            Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="service-card border-none shadow-md hover:shadow-lg">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-neutral-darkgrey">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 text-primary-teal hover:text-primary-teal/80 hover:bg-transparent"
                >
                  <Link href={service.link} className="flex items-center">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-primary-teal hover:bg-primary-teal/90 text-white">
            <Link href="/services">
              View All Services
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

