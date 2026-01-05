import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import ProjectDetails from './pages/ProjectDetails'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const HomePage = () => (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body transition-colors duration-300 min-h-screen overflow-x-hidden relative">
      <div className="lines-pattern dark:opacity-[0.05] opacity-[0.1] pointer-events-none"></div>
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      {/* <Experience /> */}
      <Projects />
      <Contact />
      <Footer />
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  )

  return (
    <Router>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: isDark ? '#161616' : '#ffffff',
            color: isDark ? '#E5E7EB' : '#1F2937',
            border: `1px solid ${isDark ? '#374151' : '#E5E7EB'}`,
          },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetails isDark={isDark} toggleTheme={toggleTheme} />} />
      </Routes>
    </Router>
  )
}

export default App