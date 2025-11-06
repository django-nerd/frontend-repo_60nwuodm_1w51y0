import { Send, Clock, FileText } from 'lucide-react'
import { useState } from 'react'

function QuickStart() {
  const [form, setForm] = useState({ from: '', subject: '', schedule: 'now' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Preview:\nFrom: ${form.from || 'noreply@example.com'}\nSubject: ${form.subject || 'Welcome to AutoMailer!'}\nSchedule: ${form.schedule}`)
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
              <input name="from" value={form.from} onChange={handleChange} placeholder="noreply@yourdomain.com" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
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
              <button type="submit" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md shadow-sm hover:bg-black/90">
                <Send className="h-4 w-4" />
                Preview
              </button>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Clock className="h-4 w-4" />
                <span>Avg setup time: 2 mins</span>
              </div>
            </div>
          </form>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600" />
            What you'll get
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li>• A production-grade layout for an email automation tool.</li>
            <li>• Sandbox to simulate sender, subject, and schedule.</li>
            <li>• Clean, responsive design using Tailwind CSS.</li>
            <li>• Ready to connect to your backend for real sending.</li>
          </ul>
          <div className="mt-6 rounded-lg border bg-gray-50 p-4 text-gray-600 text-sm">
            Tip: Hook this form up to your API to create campaigns, templates, and schedules.
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuickStart
