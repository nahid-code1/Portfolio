import { motion } from 'framer-motion'
import profile from '../profile.jpg'

const HeroImage = () => {
  return (
    <motion.div 
      className="relative flex items-center justify-center order-1 lg:order-2 h-[500px] w-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="absolute w-[450px] h-[450px] md:w-[600px] md:h-[600px] border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center">
        {/* Orbiting Elements */}
        <div className="absolute w-full h-full animate-spin-slow">
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-5 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full shadow-lg border-4 border-white dark:border-background-dark"></div>
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-5 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full shadow-lg border-4 border-white dark:border-background-dark"></div>
        </div>
        
        {/* Profile Image */}
        <div className="w-[350px] h-[350px] md:w-[480px] md:h-[480px] rounded-full overflow-hidden border-8 border-gray-200 dark:border-[#1a1a1a] relative z-10 shadow-2xl">
          <img
            alt="Jackson Clark Portrait"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            src={profile}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default HeroImage