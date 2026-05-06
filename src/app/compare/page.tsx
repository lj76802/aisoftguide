import { AI_TOOLS } from "@/lib/data";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tool Comparisons 2025 – ChatGPT vs Claude, Midjourney vs DALL-E & More",
  description:
    "Side-by-side AI tool comparisons. Find out which AI writing assistant, image generator, or coding tool is best for your needs.",
};

const COMPARISONS = [
  {
    id: "chatgpt-vs-claude",
    tool1: "chatgpt",
    tool2: "claude",
    category: "AI Chatbot",
    summary: "Both are powerful conversational AI. ChatGPT excels at integrations; Claude wins on long context and safety.",
  },
  {
    id: "midjourney-vs-dalle-3",
    tool1: "midjourney",
    tool2: "dall-e-3",
    category: "Image Generation",
    summary: "Midjourney produces more artistic and stylized results; DALL-E 3 is better for literal, accurate illustrations.",
  },
  {
    id: "github-copilot-vs-cursor",
    tool1: "github-copilot",
    tool2: "cursor",
    category: "AI Coding",
    summary: "Copilot integrates into any IDE; Cursor is a full AI-first code editor with better chat and refactoring.",
  },
];

const COMPARISON_DATA: Record<string, {
  winner: string;
  criteria: { name: string; tool1: string; tool2: string; winner: "tool1" | "tool2" | "tie" }[];
}> = {
  "chatgpt-vs-claude": {
    winner: "tie",
    criteria: [
      { name: "Response Quality", tool1: "⭐⭐⭐⭐⭐", tool2: "⭐⭐⭐⭐⭐", winner: "tie" },
      { name: "Context Window", tool1: "128K tokens", tool2: "200K tokens", winner: "tool2" },
      { name: "Integrations", tool1: "1000+ plugins", tool2: "Limited", winner: "tool1" },
      { name: "Free Tier", tool1: "Yes (GPT-3.5)", tool2: "Yes (limited)", winner: "tool1" },
      { name: "Pricing (Pro)", tool1: "$20/mo", tool2: "$20/mo", winner: "tie" },
      { name: "Code Generation", tool1: "Excellent", tool2: "Excellent", winner: "tie" },
      { name: "Safety/Honesty", tool1: "Good", tool2: "Best-in-class", winner: "tool2" },
      { name: "Multimodal", tool1: "Yes (DALL-E, Vision)", tool2: "Yes (Vision)", winner: "tool1" },
    ],
  },
  "midjourney-vs-dalle-3": {
    winner: "tool1",
    criteria: [
      { name: "Artistic Quality", tool1: "⭐⭐⭐⭐⭐", tool2: "⭐⭐⭐⭐", winner: "tool1" },
      { name: "Photorealism", tool1: "Excellent", tool2: "Very Good", winner: "tool1" },
      { name: "Prompt Accuracy", tool1: "Good", tool2: "Excellent", winner: "tool2" },
      { name: "Text in Images", tool1: "Poor", tool2: "Good", winner: "tool2" },
      { name: "Free Tier", tool1: "No", tool2: "Via ChatGPT", winner: "tool2" },
      { name: "Pricing", tool1: "From $10/mo", tool2: "ChatGPT Plus $20/mo", winner: "tool1" },
      { name: "Customization", tool1: "Extensive params", tool2: "Limited", winner: "tool1" },
      { name: "Output Consistency", tool1: "Good", tool2: "Excellent", winner: "tool2" },
    ],
  },
  "github-copilot-vs-cursor": {
    winner: "tool2",
    criteria: [
      { name: "IDE Support", tool1: "All major IDEs", tool2: "Built-in (VS Code fork)", winner: "tool1" },
      { name: "Code Completion", tool1: "Excellent", tool2: "Excellent", winner: "tie" },
      { name: "Chat Interface", tool1: "Good", tool2: "Best-in-class", winner: "tool2" },
      { name: "Codebase Context", tool1: "Good", tool2: "Excellent", winner: "tool2" },
      { name: "Agent Mode", tool1: "Limited", tool2: "Yes (Cursor Agent)", winner: "tool2" },
      { name: "Free Tier", tool1: "Free for students", tool2: "Free tier available", winner: "tie" },
      { name: "Pricing", tool1: "$10/mo individual", tool2: "$20/mo Pro", winner: "tool1" },
      { name: "Team Features", tool1: "Excellent", tool2: "Good", winner: "tool1" },
    ],
  },
};

function getWinnerLabel(id: string, data: typeof COMPARISON_DATA[string]) {
  if (data.winner === "tie") return "Tie – Both Excellent";
  const tools = AI_TOOLS;
  const comp = COMPARISONS.find((c) => c.id === id)!;
  const slug = data.winner === "tool1" ? comp.tool1 : comp.tool2;
  const tool = tools.find((t) => t.slug === slug);
  return `Winner: ${tool?.name}`;
}

export default function ComparePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-3">AI Tool Comparisons</h1>
        <p className="text-gray-400 text-lg">
          Side-by-side breakdowns to help you choose the right AI tool for your workflow.
        </p>
      </div>

      {COMPARISONS.map((comp) => {
        const tool1 = AI_TOOLS.find((t) => t.slug === comp.tool1);
        const tool2 = AI_TOOLS.find((t) => t.slug === comp.tool2);
        const data = COMPARISON_DATA[comp.id];
        if (!tool1 || !tool2 || !data) return null;

        return (
          <div key={comp.id} className="mb-16">
            {/* Comparison header */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-2xl">🤖</div>
                <div>
                  <Link href={`/tools/${tool1.slug}`} className="text-white font-bold text-lg hover:text-violet-400">
                    {tool1.name}
                  </Link>
                  <div className="text-gray-500 text-xs">{tool1.tagline}</div>
                </div>
              </div>
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 font-bold text-sm">
                VS
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-2xl">🤖</div>
                <div>
                  <Link href={`/tools/${tool2.slug}`} className="text-white font-bold text-lg hover:text-violet-400">
                    {tool2.name}
                  </Link>
                  <div className="text-gray-500 text-xs">{tool2.tagline}</div>
                </div>
              </div>
              <div className="ml-auto">
                <span className="bg-violet-500/20 text-violet-400 border border-violet-500/30 text-xs px-3 py-1.5 rounded-full">
                  {comp.category}
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-5">{comp.summary}</p>

            {/* Comparison table */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mb-4">
              {/* Table header */}
              <div className="grid grid-cols-7 gap-0">
                <div className="col-span-3 px-5 py-3 bg-gray-800/50 text-gray-500 text-xs font-medium uppercase">Criteria</div>
                <div className="col-span-2 px-5 py-3 bg-violet-500/10 border-l border-gray-700 text-violet-400 text-xs font-medium text-center">{tool1.name}</div>
                <div className="col-span-2 px-5 py-3 bg-cyan-500/10 border-l border-gray-700 text-cyan-400 text-xs font-medium text-center">{tool2.name}</div>
              </div>

              {data.criteria.map((row, i) => (
                <div key={i} className={`grid grid-cols-7 gap-0 border-t border-gray-800 ${i % 2 === 0 ? "" : "bg-gray-900/50"}`}>
                  <div className="col-span-3 px-5 py-3 text-gray-300 text-sm">{row.name}</div>
                  <div className={`col-span-2 px-5 py-3 border-l border-gray-800 text-sm text-center ${row.winner === "tool1" ? "text-green-400 font-medium" : "text-gray-400"}`}>
                    {row.winner === "tool1" && <span className="mr-1">✓</span>}{row.tool1}
                  </div>
                  <div className={`col-span-2 px-5 py-3 border-l border-gray-800 text-sm text-center ${row.winner === "tool2" ? "text-green-400 font-medium" : "text-gray-400"}`}>
                    {row.winner === "tool2" && <span className="mr-1">✓</span>}{row.tool2}
                  </div>
                </div>
              ))}
            </div>

            {/* Verdict */}
            <div className="bg-violet-500/5 border border-violet-500/20 rounded-xl px-5 py-4 flex items-center gap-3">
              <span className="text-violet-400 text-lg">🏆</span>
              <div>
                <span className="text-violet-400 font-semibold text-sm">{getWinnerLabel(comp.id, data)}</span>
                <span className="text-gray-500 text-sm ml-3">
                  {comp.id === "chatgpt-vs-claude"
                    ? "Choose ChatGPT for plugins; Claude for long documents and accuracy."
                    : comp.id === "midjourney-vs-dalle-3"
                    ? "Choose Midjourney for artistic work; DALL-E 3 for precise illustration."
                    : "Choose Cursor for AI-first workflows; Copilot if you prefer staying in your IDE."}
                </span>
              </div>
            </div>
          </div>
        );
      })}

      {/* CTA */}
      <div className="bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Browse All AI Tools</h2>
        <p className="text-gray-400 mb-5">Find the perfect tool for your workflow from our full directory.</p>
        <Link href="/tools" className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors inline-block">
          Explore Tools →
        </Link>
      </div>
    </div>
  );
}
