import { motion } from 'framer-motion'
import HeroContent from './HeroContent'
import HeroImage from './HeroImage'

const Hero = () => {
  return (
    <section id="hero" className="flex-grow flex items-center justify-center relative px-6 md:px-12 py-12 min-h-screen">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  )
}

export default Hero