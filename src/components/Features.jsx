import { Shield, Zap, Code, Globe } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Blazing fast',
    desc: 'Optimized build tooling and instant reloads keep you in flow.'
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Secure by default',
    desc: 'Isolated sandboxes ensure safe, reliable experimentation.'
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: 'Full-stack ready',
    desc: 'Frontend + API templates let you ship real products quickly.'
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: 'Share instantly',
    desc: 'Every preview gets a unique URL for effortless collaboration.'
  }
];

function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Everything you need to build fast</h2>
          <p className="mt-3 text-gray-600">A streamlined toolkit that helps you go from idea to live app in minutes, not weeks.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow transition-shadow">
              <div className="h-10 w-10 rounded-md bg-gray-900 text-white flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
