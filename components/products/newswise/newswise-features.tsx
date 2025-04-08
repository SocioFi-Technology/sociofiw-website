"use client"

import { motion } from "framer-motion"
import { Newspaper, Link2, FileText, HelpCircle, Filter, Bookmark, Smartphone } from "lucide-react"

const features = [
  {
    icon: <Newspaper className="h-10 w-10 text-primary-teal" />,
    title: "Personalized News Feed",
    description:
      "Receive a news feed that is uniquely tailored to your interests. Our intelligent system learns your preferences over time to deliver the news that matters most to you.",
  },
  {
    icon: <Link2 className="h-10 w-10 text-primary-teal" />,
    title: "News with Reliable References",
    description:
      "Every news article presented on NewsWise comes with clear references and sources, allowing you to verify the information and delve deeper into the original reporting.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary-teal" />,
    title: "Customizable Summarization",
    description:
      "Need a quick overview? NewsWise lets you summarize any news article to get the key takeaways in a concise format, saving you time and effort.",
  },
  {
    icon: <HelpCircle className="h-10 w-10 text-primary-teal" />,
    title: "AI-Powered Explanation",
    description:
      "Struggling to understand a complex news story? Use our AI-powered explanation feature to get a clear and easy-to-understand breakdown of the article, clarifying any jargon or intricate details.",
  },
  {
    icon: <Filter className="h-10 w-10 text-primary-teal" />,
    title: "Topic and Source Filtering",
    description:
      "Fine-tune your news feed by filtering specific topics and choosing your preferred news sources, giving you greater control over the information you consume.",
  },
  {
    icon: <Bookmark className="h-10 w-10 text-primary-teal" />,
    title: "Save and Share Articles",
    description:
      "Save interesting articles to read later and easily share important news with your network through various social media platforms or direct links.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary-teal" />,
    title: "Multi-Device Accessibility",
    description:
      "Access your personalized news feed on any device – desktop, tablet, or smartphone – ensuring you stay informed wherever you are.",
  },
]

export default function NewsWiseFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkgrey">
            Discover the Power of Personalized and Intelligent News
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            NewsWise combines cutting-edge AI with user-friendly design to deliver a news experience tailored just for
            you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-darkgrey">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

