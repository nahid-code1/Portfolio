import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollToElement } from '../utils/smoothScroll'

const NavigationLinks = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleNavClick = (href) => {
    scrollToElement(href)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8 font-medium text-sm">
        {navItems.map((item, index) => (
          <button
            key={item.name}
            onClick={() => handleNavClick(item.href)}
            className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-900 dark:text-white text-2xl z-50 relative"
        >
          <motion.i 
            className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-background-light dark:bg-background-dark z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-2xl font-display font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavigationLinks