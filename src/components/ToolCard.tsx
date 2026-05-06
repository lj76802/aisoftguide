import Link from 'next/link';
import { AiTool } from '@/lib/types';

interface ToolCardProps {
  tool: AiTool;
}

const PRICING_COLORS = {
  free: 'bg-green-500/20 text-green-400 border-green-500/30',
  freemium: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  paid: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
};

const CATEGORY_ICONS: Record<string, string> = {
  writing: '✍️',
  image: '🎨',
  coding: '💻',
  video: '🎬',
  productivity: '⚡',
  research: '🔍',
  chatbot: '🤖',
  seo: '📈',
};

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link href={`/tools/${tool.slug}`} className="group block">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-violet-500/50 hover:bg-gray-800/50 transition-all duration-200 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-xl flex-shrink-0">
              {CATEGORY_ICONS[tool.category] || '🤖'}
            </div>
            <div>
              <h3 className="font-semibold text-white group-hover:text-violet-300 transition-colors">{tool.name}</h3>
              <div className="flex items-center gap-1 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3 h-3 ${i < Math.floor(tool.rating) ? 'text-yellow-400' : 'text-gray-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-gray-500 text-xs ml-1">{tool.rating}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            {tool.featured && (
              <span className="bg-violet-500/20 text-violet-400 border border-violet-500/30 text-xs px-2 py-0.5 rounded-full">
                Featured
              </span>
            )}
            {tool.isNew && (
              <span className="bg-green-500/20 text-green-400 border border-green-500/30 text-xs px-2 py-0.5 rounded-full">
                New
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1 mb-4">
          {tool.tagline}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className={`text-xs px-2 py-0.5 rounded-full border ${PRICING_COLORS[tool.pricing]}`}>
            {tool.pricing === 'freemium' ? 'Freemium' : tool.pricing === 'free' ? 'Free' : 'Paid'}
          </span>
          {tool.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="bg-gray-800 text-gray-400 border border-gray-700 text-xs px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-800">
          <span className="text-gray-500 text-xs">{tool.tutorialCount} tutorials</span>
          <span className="text-violet-400 text-xs font-medium group-hover:text-violet-300">
            View details →
          </span>
        </div>
      </div>
    </Link>
  );
}
