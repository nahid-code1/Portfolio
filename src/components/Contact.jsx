import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "nahidulislam.work@gmail.com",
      link: "mailto:nahidulislam.work@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+8801849965711",
      link: "tel:+8801849965711",
      description: "Call me for urgent matters"
    },
    {
      icon: "fab fa-whatsapp",
      title: "WhatsApp",
      value: "+8801849965711",
      link: "https://wa.me/1849965711",
      description: "Quick chat on WhatsApp"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: "#",
      description: "Available for remote work"
    }
  ]

  const socialLinks = [
    { icon: 'fab fa-github', href: 'https://github.com/nahid-code1', label: 'GitHub' },
    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/md-nahidul-islam22/', label: 'LinkedIn' },
    { icon: 'fab fa-twitter', href: 'https://twitter.com', label: 'Twitter' },
    { icon: 'fab fa-instagram', href: 'https://instagram.com', label: 'Instagram' }
  ]

  return (
    <section id="contact" className="py-20 px-6 md:px-12 relative bg-gray-50 dark:bg-card-dark">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to bring your ideas to life? I'm always excited to work on new projects 
            and collaborate with amazing people. Let's create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm currently available for freelance work and full-time opportunities. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group bg-white dark:bg-background-dark p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-primary dark:hover:border-primary transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                      <i className={`${contact.icon} text-primary group-hover:text-gray-900 text-xl transition-colors duration-300`}></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-bold text-gray-900 dark:text-white mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-primary font-medium mb-1">
                        {contact.value}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-8"
            >
              <h4 className="font-display font-bold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-200 dark:bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 transition-all duration-300 shadow-lg"
                    title={social.label}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Send Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
                <i className="fas fa-paper-plane ml-2"></i>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact