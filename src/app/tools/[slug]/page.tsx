import { AI_TOOLS, TUTORIALS } from "@/lib/data";
import TutorialCard from "@/components/TutorialCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tool = AI_TOOLS.find((t) => t.slug === params.slug);
  if (!tool) return {};
  return {
    title: `${tool.name} Review 2025 – Features, Pricing & Tutorials`,
    description: tool.description.slice(0, 160),
  };
}

export function generateStaticParams() {
  return AI_TOOLS.map((t) => ({ slug: t.slug }));
}

const PRICING_BADGE: Record<string, string> = {
  free: "bg-green-500/20 text-green-400 border-green-500/30",
  freemium: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  paid: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

export default function ToolDetailPage({ params }: { params: { slug: string } }) {
  const tool = AI_TOOLS.find((t) => t.slug === params.slug);
  if (!tool) notFound();

  const related = TUTORIALS.filter((t) => t.toolSlug === tool.slug).slice(0, 4);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <span>/</span>
        <Link href="/tools" className="hover:text-gray-300">Tools</Link>
        <span>/</span>
        <span className="text-gray-300">{tool.name}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        <div className="flex-1">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-3xl flex-shrink-0">
              🤖
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl font-bold text-white">{tool.name}</h1>
                <span className={`text-xs px-2.5 py-1 rounded-full border ${PRICING_BADGE[tool.pricing]}`}>
                  {tool.pricing === "freemium" ? "Freemium" : tool.pricing === "free" ? "Free" : "Paid"}
                </span>
                {tool.featured && (
                  <span className="bg-violet-500/20 text-violet-400 border border-violet-500/30 text-xs px-2.5 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-gray-400 mt-1">{tool.tagline}</p>
              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < Math.floor(tool.rating) ? "text-yellow-400" : "text-gray-600"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-yellow-400 font-semibold">{tool.rating}</span>
                <span className="text-gray-500 text-sm">({tool.reviewCount.toLocaleString()} reviews)</span>
              </div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">{tool.description}</p>

          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Visit {tool.name}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Pricing box */}
        <div className="lg:w-64 bg-gray-900 border border-gray-800 rounded-xl p-5 flex-shrink-0">
          <h3 className="text-white font-semibold mb-3">Pricing</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{tool.pricingDetail}</p>
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="text-gray-500 text-xs mb-1">Tags</div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {tool.tags.map((tag) => (
                <span key={tag} className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pros & Cons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
          <h3 className="text-green-400 font-semibold mb-4 flex items-center gap-2">
            <span>✓</span> Pros
          </h3>
          <ul className="space-y-2">
            {tool.pros.map((pro, i) => (
              <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-green-500 mt-0.5 flex-shrink-0">•</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
          <h3 className="text-red-400 font-semibold mb-4 flex items-center gap-2">
            <span>✗</span> Cons
          </h3>
          <ul className="space-y-2">
            {tool.cons.map((con, i) => (
              <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-red-500 mt-0.5 flex-shrink-0">•</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Use Cases */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4">Best Use Cases</h2>
        <div className="flex flex-wrap gap-3">
          {tool.useCases.map((useCase) => (
            <span key={useCase} className="bg-gray-900 border border-gray-700 text-gray-300 text-sm px-4 py-2 rounded-lg">
              {useCase}
            </span>
          ))}
        </div>
      </div>

      {/* Related Tutorials */}
      {related.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-white mb-6">{tool.name} Tutorials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {related.map((tut) => (
              <TutorialCard key={tut.id} tutorial={tut} />
            ))}
          </div>
          {related.length < tool.tutorialCount && (
            <div className="text-center mt-6">
              <Link href={`/tutorials?tool=${tool.slug}`} className="text-violet-400 hover:text-violet-300 text-sm">
                View all {tool.tutorialCount} tutorials for {tool.name} →
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
