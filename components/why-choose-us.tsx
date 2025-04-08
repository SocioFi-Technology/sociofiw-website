import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Flag, PuzzleIcon as PuzzlePiece, Map, Rocket, BarChart3 } from "lucide-react"

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Pioneering in Bangladesh",
      description: "The first AI agent company in Bangladesh, leading the way in AI innovation.",
      icon: <Flag className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Customized, Industry-Specific AI",
      description: "Solutions tailored to the unique challenges of Bangladeshi industries.",
      icon: <PuzzlePiece className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Deep Local Knowledge",
      description: "Understanding of local context combined with global AI expertise.",
      icon: <Map className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Future-Ready Solutions",
      description: "Preparing businesses for the evolving AI landscape and competitive advantage.",
      icon: <Rocket className="h-8 w-8 text-primary-teal" />,
    },
    {
      title: "Data-Driven Results",
      description: "Measurable outcomes and insights that drive business growth and efficiency.",
      icon: <BarChart3 className="h-8 w-8 text-primary-teal" />,
    },
  ]

  return (
    <section className="py-16 bangladesh-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent-green/10 text-accent-green hover:bg-accent-green/20 border-none">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">Why Choose SocioFi?</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            We combine deep local knowledge with cutting-edge AI technology to deliver solutions that drive real
            results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-primary-teal/10 p-3 rounded-full mr-4">{reason.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-darkgrey">{reason.title}</h3>
                    <p className="text-gray-700">{reason.description}</p>
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

export default WhyChooseUs

