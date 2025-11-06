import { Rocket, CheckCircle2 } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 pointer-events-none" aria-hidden>
        <div className="absolute right-[-20%] top-[-20%] h-[600px] w-[600px] rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute left-[-10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-200/40 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">New • Automation Suite</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Automated email system for your team in minutes
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Design, schedule, and send transactional and marketing emails with smart triggers, templates, and analytics.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-md shadow hover:bg-blue-700">
              <Rocket className="h-5 w-5" />
              Launch demo
            </button>
            <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-md shadow border">
              View templates
            </button>
          </div>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Drag & drop editor</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Event-based triggers</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> SMTP + API sending</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Open & click analytics</li>
          </ul>
        </div>
        <div className="bg-white/70 backdrop-blur rounded-xl border shadow-sm p-4">
          <div className="rounded-lg border bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">Campaign</p>
                <p className="font-semibold">Welcome Series</p>
              </div>
              <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">Active</span>
            </div>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Subscribers</span>
                <span className="font-medium">12,408</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Open rate</span>
                <span className="font-medium">46%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Click rate</span>
                <span className="font-medium">8.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
