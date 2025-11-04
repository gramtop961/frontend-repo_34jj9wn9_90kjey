import { Star } from 'lucide-react';

function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-medium mb-4">
              <Star size={14} />
              New: Lightning-fast dev previews
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Build, preview, and ship with AI superpowers
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Spin up full-stack apps in seconds. Iterate visually, collaborate live, and publish with confidence — all from your browser.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#features" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white font-medium shadow hover:bg-gray-800">
                Start building
              </a>
              <a href="#demo" className="inline-flex items-center justify-center rounded-md border px-5 py-3 text-gray-900 font-medium hover:bg-gray-50">
                Watch demo
              </a>
            </div>
          </div>
          <div>
            <div className="relative rounded-2xl border bg-white shadow-sm overflow-hidden">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-500/20 to-blue-400/20 blur-2xl" aria-hidden="true" />
              <img
                src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop"
                alt="Product preview"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500">Instant preview environment</p>
                <p className="mt-1 text-gray-900 font-medium">Edit code. See results live. Share a link.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
