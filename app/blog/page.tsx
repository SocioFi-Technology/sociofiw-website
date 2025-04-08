import type { Metadata } from "next"
import BlogHero from "@/components/blog/blog-hero"
import FeaturedArticles from "@/components/blog/featured-articles"
import LatestPosts from "@/components/blog/latest-posts"
import BlogCategories from "@/components/blog/blog-categories"
import BlogSearch from "@/components/blog/blog-search"
import BlogNewsletter from "@/components/blog/blog-newsletter"

export const metadata: Metadata = {
  title: "AI Insights, Trends & News from Bangladesh and Beyond | SocioFi Technology Blog",
  description:
    "Read the latest insights, trends, and news about AI in Bangladesh and globally from SocioFi Technology. Learn about LLM technology, data-driven decisions, and industry solutions.",
}

export default function BlogPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <BlogHero />

      {/* Featured Articles Section */}
      <FeaturedArticles />

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {/* Latest Posts Section */}
            <LatestPosts />
          </div>

          <div className="lg:w-1/3 space-y-8">
            {/* Blog Search Section */}
            <BlogSearch />

            {/* Blog Categories Section */}
            <BlogCategories />

            {/* Newsletter Section */}
            <BlogNewsletter />
          </div>
        </div>
      </div>
    </div>
  )
}

