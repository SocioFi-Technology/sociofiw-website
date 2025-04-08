import type { Metadata } from "next"
import AboutHero from "@/components/about/about-hero"
import OurStory from "@/components/about/our-story"
import MissionVision from "@/components/about/mission-vision"
import OurValues from "@/components/about/our-values"
import OurTeam from "@/components/about/our-team"
import OurApproach from "@/components/about/our-approach"
import OurCommitment from "@/components/about/our-commitment"
import CallToAction from "@/components/about/call-to-action"

export const metadata: Metadata = {
  title: "About SocioFi Technology - Bangladesh's Leading AI Agent Company | Driving Innovation for Industries",
  description:
    "Learn about SocioFi Technology, Bangladesh's first AI Agent company. Discover our mission, team, and commitment to empowering Bangladeshi industries with customized AI solutions.",
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <AboutHero />

      {/* Our Story Section */}
      <OurStory />

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Our Values Section */}
      <OurValues />

      {/* Meet Our Team Section */}
      <OurTeam />

      {/* Our Approach to AI Section */}
      <OurApproach />

      {/* Our Commitment to Bangladesh Section */}
      <OurCommitment />

      {/* Call to Action Section */}
      <CallToAction />
    </div>
  )
}

