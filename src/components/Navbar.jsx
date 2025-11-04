import { useState } from 'react';
import { Rocket } from 'lucide-react';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white">
              <Rocket size={20} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-gray-900">Vibe</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Log in</button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800">Get Started</button>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block px-2 py-2 rounded hover:bg-gray-100 text-gray-700">Features</a>
            <a href="#pricing" className="block px-2 py-2 rounded hover:bg-gray-100 text-gray-700">Pricing</a>
            <a href="#faq" className="block px-2 py-2 rounded hover:bg-gray-100 text-gray-700">FAQ</a>
            <div className="pt-2 flex gap-2">
              <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 border rounded-md">Log in</button>
              <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
