import { TUTORIALS } from "@/lib/data";
import TutorialCard from "@/components/TutorialCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tool Tutorials – Step-by-Step Guides for Every Tool",
  description:
    "Browse 500+ step-by-step tutorials for the best AI tools. Learn ChatGPT, Midjourney, Claude, Cursor, and more with beginner to advanced guides.",
};

export default function TutorialsPage({
  searchParams,
}: {
  searchParams: { difficulty?: string; tool?: string };
}) {
  const activeDifficulty = searchParams.difficulty || "all";
  const activeTool = searchParams.tool || "all";

  let tutorials = TUTORIALS;
  if (activeDifficulty !== "all") {
    tutorials = tutorials.filter((t) => t.difficulty === activeDifficulty);
  }
  if (activeTool !== "all") {
    tutorials = tutorials.filter((t) => t.toolSlug === activeTool);
  }

  const toolNames = [...new Set(TUTORIALS.map((t) => ({ slug: t.toolSlug, name: t.toolName })))].filter(
    (v, i, a) => a.findIndex((t) => t.slug === v.slug) === i
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-3">AI Tool Tutorials</h1>
        <p className="text-gray-400 text-lg">
          Step-by-step guides for every AI tool. From beginner basics to advanced workflows.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="text-gray-500 text-sm self-center mr-2">Difficulty:</span>
        {[
          { id: "all", label: "All Levels" },
          { id: "beginner", label: "Beginner" },
          { id: "intermediate", label: "Intermediate" },
          { id: "advanced", label: "Advanced" },
        ].map((d) => (
          <Link
            key={d.id}
            href={`/tutorials?difficulty=${d.id}`}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              activeDifficulty === d.id
                ? "bg-violet-600 text-white border-violet-600"
                : "bg-gray-900 text-gray-400 border-gray-700 hover:border-gray-500"
            }`}
          >
            {d.label}
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <span className="text-gray-500 text-sm self-center mr-2">Tool:</span>
        <Link
          href="/tutorials"
          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
            activeTool === "all"
              ? "bg-cyan-600 text-white border-cyan-600"
              : "bg-gray-900 text-gray-400 border-gray-700 hover:border-gray-500"
          }`}
        >
          All Tools
        </Link>
        {toolNames.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tutorials?tool=${tool.slug}`}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              activeTool === tool.slug
                ? "bg-cyan-600 text-white border-cyan-600"
                : "bg-gray-900 text-gray-400 border-gray-700 hover:border-gray-500"
            }`}
          >
            {tool.name}
          </Link>
        ))}
      </div>

      <p className="text-gray-500 text-sm mb-6">
        Showing <span className="text-gray-300 font-medium">{tutorials.length}</span> tutorials
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tutorials.map((tut) => (
          <TutorialCard key={tut.id} tutorial={tut} />
        ))}
      </div>
    </div>
  );
}
