import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { scrollToElement } from '../utils/smoothScroll'

const HeroContent = () => {
  const handleResumeClick = () => {
    toast('Resume coming soon!', {
      icon: '📄',
    })
  }

  return (
    <motion.div 
      className="z-10 order-2 lg:order-1"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h3 
        className="text-primary font-display font-bold text-xl tracking-wide mb-2 uppercase"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Front End Developer
      </motion.h3>
      
      <motion.h1 
        className="text-6xl md:text-8xl font-display font-bold text-gray-900 dark:text-white leading-tight mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Nahidul <br /> Islam
      </motion.h1>
      
      <motion.p 
        className="text-gray-600 dark:text-gray-400 max-w-lg mb-10 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Passionate full-stack developer crafting innovative digital solutions with modern technologies. 
        Specialized in React, Node.js, and creating seamless user experiences.
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <button
          onClick={() => scrollToElement('#projects')}
          className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-gray-900 font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(243,201,107,0.3)]"
        >
          View Portfolio
          <i className="fas fa-arrow-right"></i>
        </button>
        
        <button
          onClick={handleResumeClick}
          className="inline-flex items-center gap-3 border-2 border-primary text-primary hover:bg-primary hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105"
        >
          Download Resume
          <i className="fas fa-download"></i>
        </button>
      </motion.div>
    </motion.div>
  )
}

export default HeroContent