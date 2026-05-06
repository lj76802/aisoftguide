import { TUTORIALS, AI_TOOLS } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tut = TUTORIALS.find((t) => t.slug === params.slug);
  if (!tut) return {};
  return {
    title: tut.title,
    description: tut.excerpt,
  };
}

export function generateStaticParams() {
  return TUTORIALS.map((t) => ({ slug: t.slug }));
}

const DIFFICULTY_COLORS = {
  beginner: "text-green-400 bg-green-500/10 border-green-500/20",
  intermediate: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  advanced: "text-red-400 bg-red-500/10 border-red-500/20",
};

const TUTORIAL_CONTENT: Record<string, string[]> = {
  "how-to-use-chatgpt-beginners-guide": [
    "## Getting Started with ChatGPT",
    "ChatGPT is an AI assistant developed by OpenAI. To get started, visit chat.openai.com and create a free account. You'll need to provide an email address and phone number for verification.",
    "## Creating Your Account",
    "1. Go to **chat.openai.com**\n2. Click **Sign Up** in the top right\n3. Enter your email address\n4. Set a password (minimum 8 characters)\n5. Verify your email\n6. Complete phone verification",
    "## Your First Conversation",
    "Once you're logged in, you'll see a text input box at the bottom of the screen. This is where you type your messages to ChatGPT. Start with something simple like:\n\n> *'Hello! Can you tell me what you can help me with?'*\n\nChatGPT will respond immediately with a helpful explanation of its capabilities.",
    "## Writing Effective Prompts",
    "The quality of ChatGPT's responses depends heavily on how you phrase your prompts. Here are the key principles:\n\n**Be specific**: Instead of \"write an email\", try \"write a professional email to a client apologizing for a delayed delivery, keeping it under 150 words\"\n\n**Provide context**: Tell ChatGPT who you are, what you're trying to accomplish, and any constraints\n\n**Use examples**: If you want a specific format, show ChatGPT an example",
    "## Key Features to Know",
    "**Code interpreter**: ChatGPT Plus can run Python code, analyze data, and create charts\n\n**Image generation**: With DALL-E 3 integration, you can generate images from text descriptions\n\n**Custom instructions**: Set persistent instructions so ChatGPT always knows your preferences\n\n**Memory**: ChatGPT can remember details from past conversations (opt-in feature)",
    "## Tips for Best Results",
    "1. **Be conversational**: You can ask follow-up questions and clarifications\n2. **Iterate**: If the first response isn't quite right, ask for revisions\n3. **Role-play**: Ask ChatGPT to act as an expert in a specific field\n4. **Chain prompts**: Break complex tasks into multiple steps",
  ],
  "midjourney-v6-tutorial-complete-guide": [
    "## Introduction to Midjourney V6",
    "Midjourney V6 is the latest version of the popular AI image generation model. It produces significantly more realistic and detailed images compared to previous versions. This guide will teach you everything you need to create stunning AI artwork.",
    "## Setting Up Discord",
    "Midjourney operates exclusively through Discord. If you don't have a Discord account:\n\n1. Download Discord from **discord.com**\n2. Create a free account\n3. Join the Midjourney Discord server at **discord.gg/midjourney**\n4. Subscribe to a Midjourney plan at **midjourney.com**",
    "## Your First Image",
    "In any Discord channel where Midjourney is active, type:\n\n```\n/imagine prompt: a beautiful sunset over mountains, golden hour, photorealistic\n```\n\nMidjourney will generate 4 image variations in about 60 seconds.",
    "## Understanding Parameters",
    "Midjourney V6 supports powerful parameters to control your output:\n\n**--ar** (aspect ratio): `--ar 16:9` for widescreen, `--ar 1:1` for square\n\n**--stylize** (0-1000): Higher values = more artistic, lower = more literal\n\n**--chaos** (0-100): Controls variation between the 4 images\n\n**--quality** (0.25-1): Render quality (1 = best, slowest)",
    "## Writing Better Prompts",
    "A great Midjourney prompt has several components:\n\n1. **Subject**: What you want to see\n2. **Style**: Photography, illustration, oil painting, etc.\n3. **Lighting**: Golden hour, studio lighting, neon lights\n4. **Mood**: Cinematic, peaceful, dramatic\n5. **Technical**: Camera type, lens, resolution\n\nExample: *'portrait of a woman in a red dress, cinematic lighting, shallow depth of field, shot on Canon 5D, hyperrealistic --ar 2:3 --stylize 200'*",
    "## Advanced Techniques",
    "**Style reference (--sref)**: Use an image as a style guide\n**Character reference (--cref)**: Keep a character consistent across images\n**Remix mode**: Edit specific parts of generated images\n**Vary (Subtle/Strong)**: Make small or large variations of your favorite result",
  ],
};

export default function TutorialDetailPage({ params }: { params: { slug: string } }) {
  const tutorial = TUTORIALS.find((t) => t.slug === params.slug);
  if (!tutorial) notFound();

  const tool = AI_TOOLS.find((t) => t.slug === tutorial.toolSlug);
  const sections = TUTORIAL_CONTENT[tutorial.slug] || [
    "## Overview",
    tutorial.excerpt,
    "## Getting Started",
    "This comprehensive guide will walk you through everything you need to know to use " + tutorial.toolName + " effectively.",
    "## Key Features",
    "Explore the main features and learn how to use each one to maximize your productivity.",
    "## Step-by-Step Instructions",
    "Follow these steps carefully to achieve the best results with " + tutorial.toolName + ".",
    "## Tips & Best Practices",
    "Here are expert tips to help you get the most out of " + tutorial.toolName + " based on real-world usage.",
    "## Common Mistakes to Avoid",
    "These are the most frequent mistakes beginners make and how to avoid them.",
    "## Conclusion",
    "You now have all the knowledge you need to start using " + tutorial.toolName + " like a pro. Practice regularly and don't hesitate to experiment!",
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <span>/</span>
        <Link href="/tutorials" className="hover:text-gray-300">Tutorials</Link>
        <span>/</span>
        <span className="text-gray-300 truncate max-w-[200px]">{tutorial.title}</span>
      </nav>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <span className={`text-xs px-2.5 py-1 rounded-full border ${DIFFICULTY_COLORS[tutorial.difficulty]}`}>
          {tutorial.difficulty}
        </span>
        <span className="text-gray-500 text-sm">{tutorial.readTime} min read</span>
        <span className="text-gray-500 text-sm">•</span>
        <span className="text-gray-500 text-sm">Updated {tutorial.updatedAt}</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
        {tutorial.title}
      </h1>

      <p className="text-gray-400 text-lg leading-relaxed mb-8">{tutorial.excerpt}</p>

      {/* Tool link */}
      {tool && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-10 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-xl">🤖</div>
          <div className="flex-1">
            <div className="text-white font-medium text-sm">{tool.name}</div>
            <div className="text-gray-500 text-xs">{tool.tagline}</div>
          </div>
          <Link
            href={`/tools/${tool.slug}`}
            className="text-violet-400 hover:text-violet-300 text-xs font-medium"
          >
            View tool →
          </Link>
        </div>
      )}

      {/* Article Content */}
      <article className="prose prose-invert prose-violet max-w-none">
        {sections.map((section, i) => {
          if (section.startsWith("## ")) {
            return (
              <h2 key={i} className="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-gray-800">
                {section.replace("## ", "")}
              </h2>
            );
          }
          const html = section
            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
            .replace(/\*(.*?)\*/g, '<em class="text-gray-300">$1</em>')
            .replace(/`(.*?)`/g, '<code class="bg-gray-800 text-violet-300 px-1.5 py-0.5 rounded text-sm">$1</code>')
            .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto text-sm text-gray-300 my-4"><code>$1</code></pre>')
            .replace(/^> (.*)/gm, '<blockquote class="border-l-4 border-violet-500 pl-4 text-gray-400 italic my-4">$1</blockquote>')
            .replace(/^(\d+)\. (.*)/gm, '<li class="text-gray-300 text-sm ml-4">$2</li>')
            .replace(/^• (.*)/gm, '<li class="text-gray-300 text-sm ml-4 list-disc">$1</li>');
          return (
            <div
              key={i}
              className="text-gray-300 leading-relaxed text-base mb-4"
              dangerouslySetInnerHTML={{ __html: html.replace(/\n/g, "<br />") }}
            />
          );
        })}
      </article>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-800 flex items-center justify-between">
        <Link href="/tutorials" className="text-violet-400 hover:text-violet-300 text-sm">
          ← All Tutorials
        </Link>
        {tool && (
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Try {tool.name} Free
          </a>
        )}
      </div>
    </div>
  );
}
