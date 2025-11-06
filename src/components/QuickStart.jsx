import { Send, Clock, FileText } from 'lucide-react'
import { useState, useEffect } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function QuickStart() {
  const [form, setForm] = useState({ from_address: '', subject: '', schedule: 'now' })
  const [templates, setTemplates] = useState([])
  const [campaigns, setCampaigns] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch(`${API}/templates`).then(r => r.json()).then(setTemplates).catch(() => {})
    fetch(`${API}/campaigns`).then(r => r.json()).then(setCampaigns).catch(() => {})
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const payload = {
        from_address: form.from_address || 'noreply@example.com',
        subject: form.subject || 'Welcome to AutoMailer!',
        schedule: form.schedule,
        to: [],
      }
      const res = await fetch(`${API}/sends`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      alert(`Scheduled! id: ${data.id}`)
    } catch (err) {
      alert(`Error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="workflow" className="mx-auto max-w-7xl px-6 pb-20">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Send className="h-5 w-5 text-blue-600" />
            Send your first automated email
          </h3>
          <p className="text-gray-600 text-sm mt-1">A quick sandbox to experience the flow.</p>
          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">From address</label>
              <input name="from_address" value={form.from_address} onChange={handleChange} placeholder="noreply@yourdomain.com" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input name="subject" value={form.subject} onChange={handleChange} placeholder="Welcome to the community!" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Schedule</label>
              <div className="mt-1 grid grid-cols-3 gap-2">
                <button type="button" onClick={() => setForm((f) => ({ ...f, schedule: 'now' }))} className={`px-3 py-2 rounded-md border text-sm ${form.schedule === 'now' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-800'}`}>Now</button>
                <button type="button" onClick={() => setForm((f) => ({ ...f, schedule: '1h' }))} className={`px-3 py-2 rounded-md border text-sm ${form.schedule === '1h' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-800'}`}>In 1 hour</button>
                <button type="button" onClick={() => setForm((f) => ({ ...f, schedule: 'tomorrow' }))} className={`px-3 py-2 rounded-md border text-sm ${form.schedule === 'tomorrow' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-800'}`}>Tomorrow</button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button disabled={loading} type="submit" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md shadow-sm hover:bg-black/90 disabled:opacity-60">
                <Send className="h-4 w-4" />
                {loading ? 'Scheduling...' : 'Schedule'}
              </button>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Clock className="h-4 w-4" />
                <span>Avg setup time: 2 mins</span>
              </div>
            </div>
          </form>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm" id="sandbox">
          <h3 className="text-lg font-semibold text-gray-900">Live data</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800">Templates</h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-700">
                {templates.length === 0 && <li className="text-gray-500">None yet</li>}
                {templates.map(t => (
                  <li key={t.id || t._id} className="flex items-center justify-between border rounded-md px-3 py-2">
                    <span className="truncate">{t.name}</span>
                    <span className="text-gray-500">{t.subject}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Campaigns</h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-700">
                {campaigns.length === 0 && <li className="text-gray-500">None yet</li>}
                {campaigns.map(c => (
                  <li key={c.id || c._id} className="flex items-center justify-between border rounded-md px-3 py-2">
                    <span className="truncate">{c.name}</span>
                    <span className="text-gray-500 capitalize">{c.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 rounded-lg border bg-gray-50 p-4 text-gray-600 text-sm">
            Tip: Use the API to create templates and campaigns, then schedule sends here.
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuickStart
