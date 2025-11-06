function Footer() {
  return (
    <footer className="border-t bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} AutoMailer. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Status</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
