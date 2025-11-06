import { Workflow, Trigger, BarChart3, ShieldCheck } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="h-10 w-10 rounded-md bg-blue-600 text-white grid place-items-center">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-gray-600 text-sm">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">Everything you need to automate emails</h2>
        <p className="text-gray-600 mt-2">Build workflows, trigger messages, and track results – no code required.</p>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Feature icon={Workflow} title="Visual workflows" desc="Design journeys with delays, branches, and fallbacks." />
        <Feature icon={Trigger} title="Smart triggers" desc="Send based on signups, purchases, or custom events." />
        <Feature icon={BarChart3} title="Deep analytics" desc="Monitor opens, clicks, bounces, and ROI in real time." />
        <Feature icon={ShieldCheck} title="Secure & compliant" desc="DKIM, SPF, and GDPR-ready infrastructure." />
      </div>
    </section>
  )
}

export default Features
