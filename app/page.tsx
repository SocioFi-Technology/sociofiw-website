import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Cpu,
  Rocket,
  BarChart3,
  ChevronRight,
  Brain,
  Factory,
  Users,
  Lightbulb,
  Flag,
  PuzzleIcon,
  Map,
  Clock,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import ClientsSection from "@/components/clients-section"

export const metadata = {
  title: "SocioFi Technology - AI Agents & Solutions for Business in Bangladesh",
  description:
    "SocioFi Technology is Bangladesh's leading AI Agent company, providing customized AI solutions for industries, an incubation program for entrepreneurs, and innovative products like Fabricxai.",
}

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection />

      {/* Who We Are Section */}
      <section className="py-16 bg-neutral-offwhite">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="SocioFi Team"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <Badge className="mb-4 bg-primary-keppel/10 text-primary-keppel hover:bg-primary-keppel/20 border-none">
                Who We Are
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-darkgrey">About SocioFi Technology</h2>
              <p className="text-lg mb-6 text-gray-700">
                At SocioFi Technology, we're pioneering the future of AI in Bangladesh. Our mission is to{" "}
                <span className="font-bold text-primary-keppel">empower local industries</span> with{" "}
                <span className="font-bold text-primary-keppel">customized AI solutions</span> that address unique
                challenges and drive innovation. As the first AI Agent company in the country, we combine deep local
                knowledge with cutting-edge technology to create solutions that are tailored to the Bangladeshi context.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                We focus on developing intelligent AI agents, providing{" "}
                <span className="font-bold text-primary-keppel">industry-specific</span> solutions, offering strategic
                <span className="font-bold text-primary-keppel"> AI consultancy</span>, and nurturing the next
                generation of AI entrepreneurs through our incubation program.
              </p>
              <Button asChild className="bg-primary-keppel hover:bg-primary-keppel/90 text-white">
                <Link href="/about">
                  Read More About Our Story
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Key Services Section */}
      <section className="py-16 geometric-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary-gold/10 text-secondary-gold hover:bg-secondary-gold/20 border-none">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">Our AI Services</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              We offer a comprehensive range of AI solutions tailored to meet the unique needs of businesses in
              Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="service-card border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4">
                  <Brain className="h-10 w-10 text-primary-keppel" />
                </div>
                <CardTitle className="text-xl text-neutral-darkgrey">AI Agent Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base">
                  Custom AI agents designed to automate tasks, provide insights, and enhance decision-making for your
                  business.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 text-primary-keppel hover:text-primary-keppel/80 hover:bg-transparent"
                >
                  <Link href="/services/ai-agent-development" className="flex items-center">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="service-card border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4">
                  <Factory className="h-10 w-10 text-primary-keppel" />
                </div>
                <CardTitle className="text-xl text-neutral-darkgrey">Customized Industry Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base">
                  Tailored AI solutions for garments, agriculture, manufacturing, and other key industries in
                  Bangladesh.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 text-primary-keppel hover:text-primary-keppel/80 hover:bg-transparent"
                >
                  <Link href="/services/customized-industry-solutions" className="flex items-center">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="service-card border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4">
                  <Lightbulb className="h-10 w-10 text-primary-keppel" />
                </div>
                <CardTitle className="text-xl text-neutral-darkgrey">AI Consultancy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base">
                  Strategic guidance on implementing AI in your business, from initial assessment to full
                  implementation.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 text-primary-keppel hover:text-primary-keppel/80 hover:bg-transparent"
                >
                  <Link href="/services/ai-consultancy" className="flex items-center">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="service-card border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4">
                  <Users className="h-10 w-10 text-primary-keppel" />
                </div>
                <CardTitle className="text-xl text-neutral-darkgrey">Incubation Program</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base">
                  Nurturing the next generation of AI entrepreneurs in Bangladesh with mentorship, resources, and
                  support.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 text-primary-keppel hover:text-primary-keppel/80 hover:bg-transparent"
                >
                  <Link href="/services/incubation-program" className="flex items-center">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-primary-keppel hover:bg-primary-keppel/90 text-white">
              <Link href="/services">
                View All Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Product - Fabricxai */}
      <section className="py-16 bg-gradient-to-r from-primary-keppel/10 to-accent-green/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent-green/10 text-accent-green hover:bg-accent-green/20 border-none">
              Flagship Product
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Flagship Product: <span className="text-primary-keppel">fabricXai</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              AI-powered automation solution designed specifically for Bangladesh's garment industry
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Fabricxai Product"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-neutral-darkgrey">Revolutionizing the Garment Industry</h3>
              <p className="text-lg mb-6 text-gray-700">
                Fabricxai combines AI-powered automation with deep industry knowledge to streamline operations, reduce
                costs, and improve efficiency in garment manufacturing.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary-keppel/10 p-2 rounded-full mr-4">
                    <Cpu className="h-6 w-6 text-primary-keppel" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-darkgrey">Intelligent Automation</h4>
                    <p className="text-gray-700">Automate repetitive tasks and streamline production workflows</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-keppel/10 p-2 rounded-full mr-4">
                    <BarChart3 className="h-6 w-6 text-primary-keppel" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-darkgrey">Data-Driven Insights</h4>
                    <p className="text-gray-700">Make informed decisions with real-time analytics and reporting</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-keppel/10 p-2 rounded-full mr-4">
                    <Rocket className="h-6 w-6 text-primary-keppel" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-darkgrey">Efficiency Boost</h4>
                    <p className="text-gray-700">Increase productivity and reduce operational costs</p>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-primary-keppel hover:bg-primary-keppel/90 text-white">
                <Link href="/products/fabricxai">
                  Explore Fabricxai
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Other Innovative Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary-gold/10 text-secondary-gold hover:bg-secondary-gold/20 border-none">
              Our Products
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
              Explore Our Other AI Solutions
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Discover our range of innovative AI products designed to solve specific business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary-keppel/10 p-4 rounded-full mb-4">
                    <Cpu className="h-12 w-12 text-primary-keppel" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-neutral-darkgrey">Internal Business App</h3>
                  <p className="text-gray-700 mb-6">
                    Custom-built internal applications that streamline your business processes, improve communication,
                    and enhance productivity.
                  </p>
                  <Button asChild className="bg-primary-keppel hover:bg-primary-keppel/90 text-white">
                    <Link href="/products/internal-business-app">
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary-keppel/10 p-4 rounded-full mb-4">
                    <Users className="h-12 w-12 text-primary-keppel" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-neutral-darkgrey">AI Chatbot BB</h3>
                  <p className="text-gray-700 mb-6">
                    Intelligent conversational AI designed specifically for Bangladeshi businesses to enhance customer
                    service and support.
                  </p>
                  <Button asChild className="bg-primary-keppel hover:bg-primary-keppel/90 text-white">
                    <Link href="/products/ai-chatbot-bb">
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose SocioFi */}
      <section className="py-16 bangladesh-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent-green/10 text-accent-green hover:bg-accent-green/20 border-none">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">Why Partner with SocioFi?</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              We combine deep local knowledge with cutting-edge AI technology to deliver solutions that drive real
              results for Bangladeshi businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-primary-keppel/10 p-3 rounded-full mr-4">
                    <Flag className="h-8 w-8 text-primary-keppel" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-darkgrey">Pioneering in Bangladesh</h3>
                    <p className="text-gray-700">
                      The first AI agent company in Bangladesh, leading the way in AI innovation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-primary-keppel/10 p-3 rounded-full mr-4">
                    <PuzzleIcon className="h-8 w-8 text-primary-keppel" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-darkgrey">
                      Customized, Industry-Specific AI
                    </h3>
                    <p className="text-gray-700">
                      Solutions tailored to the unique challenges of Bangladeshi industries.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-primary-keppel/10 p-3 rounded-full mr-4">
                    <Map className="h-8 w-8 text-primary-keppel" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-darkgrey">Deep Local Knowledge</h3>
                    <p className="text-gray-700">Understanding of local context combined with global AI expertise.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-primary-keppel/10 p-3 rounded-full mr-4">
                    <Rocket className="h-8 w-8 text-primary-keppel" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-darkgrey">Future-Ready Solutions</h3>
                    <p className="text-gray-700">
                      Preparing businesses for the evolving AI landscape and competitive advantage.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-primary-keppel/10 p-3 rounded-full mr-4">
                    <BarChart3 className="h-8 w-8 text-primary-keppel" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-darkgrey">Data-Driven Results</h3>
                    <p className="text-gray-700">
                      Measurable outcomes and insights that drive business growth and efficiency.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-primary-keppel/10 p-3 rounded-full mr-4">
                    <Clock className="h-8 w-8 text-primary-keppel" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-darkgrey">Commitment to Bangladesh</h3>
                    <p className="text-gray-700">
                      Dedicated to advancing AI adoption and digital transformation in Bangladesh.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest from Our Blog */}
      <section className="py-16 bg-neutral-offwhite">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary-keppel/10 text-primary-keppel hover:bg-primary-keppel/20 border-none">
              Our Blog
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">Latest from Our Blog</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Stay updated with the latest insights, trends, and news in AI and technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="AI in Agriculture"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-primary-keppel/10 text-primary-keppel hover:bg-primary-keppel/20 border-none">
                  Industry Solutions
                </Badge>
                <Link href="/blog/ai-revolutionizing-agriculture-bangladesh">
                  <h3 className="text-xl font-bold mb-2 text-neutral-darkgrey hover:text-primary-keppel transition-colors">
                    How AI is Revolutionizing Agriculture in Bangladesh
                  </h3>
                </Link>
                <p className="text-gray-700 mb-4 line-clamp-2">
                  Discover how AI-powered solutions are helping farmers in Bangladesh improve crop yields, reduce waste,
                  and adapt to changing climate conditions.
                </p>
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 text-primary-keppel hover:text-primary-keppel/80 hover:bg-transparent"
                >
                  <Link href="/blog/ai-revolutionizing-agriculture-bangladesh" className="flex items-center">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Future of AI Agents"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-primary-keppel/10 text-primary-keppel hover:bg-primary-keppel/20 border-none">
                  AI Trends
                </Badge>
                <Link href="/blog/future-of-ai-agents">
                  <h3 className="text-xl font-bold mb-2 text-neutral-darkgrey hover:text-primary-keppel transition-colors">
                    The Future of AI Agents: What's Next for Intelligent Assistants
                  </h3>
                </Link>
                <p className="text-gray-700 mb-4 line-clamp-2">
                  Explore the evolving landscape of AI agents and how they're becoming more sophisticated,
                  context-aware, and capable of handling complex tasks.
                </p>
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 text-primary-keppel hover:text-primary-keppel/80 hover:bg-transparent"
                >
                  <Link href="/blog/future-of-ai-agents" className="flex items-center">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="AI Solutions for Bangladesh"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-primary-keppel/10 text-primary-keppel hover:bg-primary-keppel/20 border-none">
                  Company News
                </Badge>
                <Link href="/blog/ai-solutions-bangladesh-unique-challenges">
                  <h3 className="text-xl font-bold mb-2 text-neutral-darkgrey hover:text-primary-keppel transition-colors">
                    Building AI Solutions for Bangladesh's Unique Challenges
                  </h3>
                </Link>
                <p className="text-gray-700 mb-4 line-clamp-2">
                  Learn about the specific considerations and approaches needed when developing AI solutions tailored to
                  Bangladesh's unique context and needs.
                </p>
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 text-primary-keppel hover:text-primary-keppel/80 hover:bg-transparent"
                >
                  <Link href="/blog/ai-solutions-bangladesh-unique-challenges" className="flex items-center">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-primary-keppel hover:bg-primary-keppel/90 text-white">
              <Link href="/blog">
                View All Blog Posts
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gradient-to-r from-primary-keppel/10 to-secondary-gold/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Badge className="mb-4 bg-secondary-gold/10 text-secondary-gold hover:bg-secondary-gold/20 border-none">
                Careers
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-darkgrey">
                Join Our Team: Build the Future of AI with Us
              </h2>
              <p className="text-lg mb-6 text-gray-700">
                At SocioFi Technology, we're looking for talented individuals who are passionate about AI and want to
                make a difference in Bangladesh's technological landscape. Join us in our mission to empower industries
                through innovative AI solutions.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                We offer a dynamic work environment, competitive compensation, opportunities for growth and learning,
                and the chance to work on cutting-edge AI projects.
              </p>
              <Button asChild className="bg-primary-keppel hover:bg-primary-keppel/90 text-white">
                <Link href="/careers">
                  View Open Positions
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="SocioFi Team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientsSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary-keppel text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the AI revolution in Bangladesh. Let's build intelligent solutions tailored to your industry needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-primary-keppel hover:bg-white/90">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

