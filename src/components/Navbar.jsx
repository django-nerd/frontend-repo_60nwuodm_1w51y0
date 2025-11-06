import { Mail, Settings } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center shadow-sm">
            <Mail className="h-5 w-5" />
          </div>
          <span className="font-semibold text-gray-900 text-lg">AutoMailer</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#workflow" className="hover:text-gray-900 transition-colors">Workflow</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
            <Settings className="h-4 w-4" />
            <span>Docs</span>
          </button>
          <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md shadow-sm hover:bg-black/90">
            <span>Start free</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
