import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-md flex items-center justify-center text-white font-bold text-xs">
                AI
              </div>
              <span className="font-bold text-white">AiSoft<span className="text-violet-400">Guide</span></span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your guide to the best AI tools. Honest reviews, step-by-step tutorials, and expert comparisons.
            </p>
          </div>

          {/* AI Tools */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">AI Tools</h4>
            <ul className="space-y-2">
              {['Writing Tools', 'Image Generators', 'Coding Assistants', 'Video AI', 'Productivity'].map((item) => (
                <li key={item}>
                  <Link href="/tools" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tutorials */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Tutorials</h4>
            <ul className="space-y-2">
              {['ChatGPT Guide', 'Midjourney Tips', 'Claude AI', 'Cursor Editor', 'ElevenLabs'].map((item) => (
                <li key={item}>
                  <Link href="/tutorials" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              {['About', 'Contact', 'Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
                <li key={item}>
                  <Link href="/" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© 2025 AiSoftGuide. All rights reserved.</p>
          <p className="text-gray-600 text-sm">Built for AI enthusiasts, by AI enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
}
