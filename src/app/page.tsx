import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import TutorialCard from "@/components/TutorialCard";
import { AI_TOOLS, TUTORIALS } from "@/lib/data";
import { CATEGORIES } from "@/lib/types";

export default function Home() {
  const featuredTools = AI_TOOLS.filter((t) => t.featured).slice(0, 6);
  const featuredTutorials = TUTORIALS.filter((t) => t.featured).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950 pt-20 pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-gray-950 to-cyan-900/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-violet-300 text-sm font-medium">200+ AI Tools Reviewed & Compared</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-white">Find the Best</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              AI Tools & Tutorials
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover, compare, and master AI tools with step-by-step tutorials. Save hours of research with our curated directory.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tools"
              className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-base w-full sm:w-auto"
            >
              Browse All AI Tools
            </Link>
            <Link
              href="/tutorials"
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-base border border-gray-700 w-full sm:w-auto"
            >
              View Tutorials
            </Link>
          </div>
          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-14">
            {[
              { label: "AI Tools", value: "200+" },
              { label: "Tutorials", value: "500+" },
              { label: "Monthly Readers", value: "50K+" },
              { label: "Tool Categories", value: "15+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-950 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/tools?category=${cat.id}`}
                className="flex flex-col items-center gap-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-violet-500/50 rounded-xl p-4 transition-all group"
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-gray-400 group-hover:text-gray-200 text-xs text-center leading-tight transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Featured AI Tools</h2>
              <p className="text-gray-500 text-sm mt-1">Editor&apos;s picks for the best AI tools right now</p>
            </div>
            <Link href="/tools" className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Popular Tutorials</h2>
              <p className="text-gray-500 text-sm mt-1">Step-by-step guides to master AI tools</p>
            </div>
            <Link href="/tutorials" className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredTutorials.map((tut) => (
              <TutorialCard key={tut.id} tutorial={tut} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-violet-900/30 to-cyan-900/20 border border-violet-500/20 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Stay Ahead of AI</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Get weekly roundups of the newest AI tools, tutorials, and industry insights. No spam, ever.
            </p>
            <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-none focus:border-violet-500 text-sm"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
              >
                Subscribe Free
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}