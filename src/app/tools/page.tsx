import { AI_TOOLS } from "@/lib/data";
import { CATEGORIES } from "@/lib/types";
import ToolCard from "@/components/ToolCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools Directory 2025 – 200+ Reviewed",
  description:
    "Browse our complete directory of 200+ AI tools across writing, coding, image generation, video, and more. Filter by category, pricing, and rating.",
};

export default function ToolsPage({
  searchParams,
}: {
  searchParams: { category?: string; pricing?: string };
}) {
  const activeCategory = searchParams.category || "all";
  const activePricing = searchParams.pricing || "all";

  let tools = AI_TOOLS;
  if (activeCategory !== "all") {
    tools = tools.filter((t) => t.category === activeCategory);
  }
  if (activePricing !== "all") {
    tools = tools.filter((t) => t.pricing === activePricing);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-3">AI Tools Directory</h1>
        <p className="text-gray-400 text-lg">
          Discover and compare {AI_TOOLS.length}+ AI tools across every category.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          <Link
            href="/tools"
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              activeCategory === "all"
                ? "bg-violet-600 text-white border-violet-600"
                : "bg-gray-900 text-gray-400 border-gray-700 hover:border-gray-500"
            }`}
          >
            All Tools
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/tools?category=${cat.id}`}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                activeCategory === cat.id
                  ? "bg-violet-600 text-white border-violet-600"
                  : "bg-gray-900 text-gray-400 border-gray-700 hover:border-gray-500"
              }`}
            >
              {cat.icon} {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Pricing filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="text-gray-500 text-sm self-center mr-2">Pricing:</span>
        {[
          { id: "all", label: "All" },
          { id: "free", label: "Free" },
          { id: "freemium", label: "Freemium" },
          { id: "paid", label: "Paid" },
        ].map((p) => (
          <Link
            key={p.id}
            href={activeCategory !== "all" ? `/tools?category=${activeCategory}&pricing=${p.id}` : `/tools?pricing=${p.id}`}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              activePricing === p.id
                ? "bg-cyan-600 text-white border-cyan-600"
                : "bg-gray-900 text-gray-400 border-gray-700 hover:border-gray-500"
            }`}
          >
            {p.label}
          </Link>
        ))}
      </div>

      {/* Results count */}
      <p className="text-gray-500 text-sm mb-6">
        Showing <span className="text-gray-300 font-medium">{tools.length}</span> tools
      </p>

      {/* Tools Grid */}
      {tools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No tools found for this filter.</p>
          <Link href="/tools" className="text-violet-400 hover:text-violet-300 mt-3 inline-block text-sm">
            Clear filters →
          </Link>
        </div>
      )}
    </div>
  );
}
