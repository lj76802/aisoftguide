import Link from 'next/link';
import { Tutorial } from '@/lib/types';

interface TutorialCardProps {
  tutorial: Tutorial;
}

const DIFFICULTY_COLORS = {
  beginner: 'text-green-400 bg-green-500/10 border-green-500/20',
  intermediate: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  advanced: 'text-red-400 bg-red-500/10 border-red-500/20',
};

export default function TutorialCard({ tutorial }: TutorialCardProps) {
  return (
    <Link href={`/tutorials/${tutorial.slug}`} className="group block">
      <article className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-violet-500/50 hover:bg-gray-800/50 transition-all duration-200 h-full flex flex-col">
        {/* Meta */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs px-2 py-0.5 rounded-full border ${DIFFICULTY_COLORS[tutorial.difficulty]}`}>
            {tutorial.difficulty}
          </span>
          <span className="text-gray-600 text-xs">•</span>
          <span className="text-gray-500 text-xs">{tutorial.readTime} min read</span>
          {tutorial.featured && (
            <>
              <span className="text-gray-600 text-xs">•</span>
              <span className="text-violet-400 text-xs font-medium">⭐ Featured</span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="font-semibold text-white group-hover:text-violet-300 transition-colors mb-2 leading-snug">
          {tutorial.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1 mb-4">
          {tutorial.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-800">
          <span className="text-gray-500 text-xs">
            For <span className="text-gray-300">{tutorial.toolName}</span>
          </span>
          <span className="text-violet-400 text-xs font-medium group-hover:text-violet-300">
            Read guide →
          </span>
        </div>
      </article>
    </Link>
  );
}
