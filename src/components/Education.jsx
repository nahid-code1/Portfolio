import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const educationData = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Southeast University",
      period: "2024-Current",
      description: "Specialized in Computer Science and Engineering",
      achievements: ["Best Presentator", "Ai workshop certification", "Programming Competition Winner"]
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Uttara Goverment College",
      period: "2021 - 2023",
      description: "Science stream with Mathematics, Physics.",
      achievements: ["Mathematics Excellence Award"]
    }
  ]

  return (
    <section id="education" className="py-20 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-background-dark shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                  <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <i className="fas fa-graduation-cap text-gray-900"></i>
                      </div>
                      <span className="text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    
                    <h4 className="text-lg font-medium text-primary mb-3">
                      {edu.institution}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-gray-900 dark:text-white text-sm">
                        Key Achievements:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <span
                            key={achIndex}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education