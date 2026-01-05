import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                My Programming Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My journey into programming began during college when I discovered the power of creating 
                digital solutions. What started as curiosity quickly became a passion for building 
                applications that solve real-world problems.
              </p>
              
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4 mt-8">
                Work Interests
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm passionate about full-stack development, particularly in creating seamless user 
                experiences with React and building robust backend systems with Node.js. I love working 
                on projects that challenge me to learn new technologies and solve complex problems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Beyond Code
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or enjoying outdoor activities. I believe in maintaining a healthy work-life 
                balance and continuous learning.
              </p>
              
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4 mt-8">
                Personality & Values
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a detail-oriented developer who values clean code, user-centric design, and 
                collaborative teamwork. I believe in writing code that not only works but is also 
                maintainable and scalable for future development.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-display font-bold text-primary">10+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-display font-bold text-primary">4+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Months Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-display font-bold text-primary">10+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Technologies</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-display font-bold text-primary">100%</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About