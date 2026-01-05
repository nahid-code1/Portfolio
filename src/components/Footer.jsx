import { motion } from 'framer-motion'
import { scrollToElement } from '../utils/smoothScroll'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { icon: 'fab fa-github', href: 'https://github.com/nahid-code1', label: 'GitHub' },
    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/md-nahidul-islam22/', label: 'LinkedIn' },
    { icon: 'fab fa-twitter', href: 'https://twitter.com', label: 'Twitter' },
    { icon: 'fab fa-instagram', href: 'https://instagram.com', label: 'Instagram' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="lines-pattern"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="px-6 md:px-12 py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">N</span>
                    </div>
                    <span className="text-2xl font-display font-bold">Nahidul Islam</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed max-w-md">
                    Full-stack developer passionate about creating innovative digital solutions. 
                    Specialized in modern web technologies and user-centric design.
                  </p>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 transition-all duration-300"
                      title={social.label}
                    >
                      <i className={social.icon}></i>
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Quick Links */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-display font-bold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    {quickLinks.map((link, index) => (
                      <li key={index}>
                        <button
                          onClick={() => scrollToElement(link.href)}
                          className="text-gray-400 hover:text-primary transition-colors duration-300 text-left"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Contact Info */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-display font-bold mb-4">Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <i className="fas fa-envelope text-primary w-4"></i>
                      <a 
                        href="mailto:jackson.clark@email.com"
                        className="text-gray-400 hover:text-primary transition-colors duration-300"
                      >
                        jackson.clark@email.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="fas fa-phone text-primary w-4"></i>
                      <a 
                        href="tel:+15551234567"
                        className="text-gray-400 hover:text-primary transition-colors duration-300"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="fas fa-map-marker-alt text-primary w-4"></i>
                      <span className="text-gray-400">San Francisco, CA</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 px-6 md:px-12 py-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between gap-4"
            >
              <p className="text-gray-400 text-sm">
                © {currentYear} Jackson Clark. All rights reserved.
              </p>
              
              <div className="flex items-center gap-6 text-sm">
                <button className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </button>
                <button className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Terms of Service
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-6 right-6 w-12 h-12 bg-primary hover:bg-primary-dark rounded-full flex items-center justify-center text-gray-900 shadow-lg transition-all duration-300"
          title="Back to top"
        >
          <i className="fas fa-arrow-up"></i>
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer