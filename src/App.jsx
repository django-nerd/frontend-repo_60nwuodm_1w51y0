import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import QuickStart from './components/QuickStart'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <QuickStart />
      <Footer />
    </div>
  )
}

export default App
