import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experienceData = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2023 - Present",
      type: "Full-time",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting system solutions.",
      technologies: ["React", "Node.js", "AWS", "MongoDB", "TypeScript"],
      achievements: [
        "Improved application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Inc",
      period: "2022 - 2023",
      type: "Full-time",
      description: "Developed and maintained multiple client projects, focusing on modern web technologies and responsive design principles.",
      technologies: ["React", "Express.js", "PostgreSQL", "Docker"],
      achievements: [
        "Delivered 15+ successful projects",
        "Reduced bug reports by 60%",
        "Implemented automated testing"
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "StartupHub",
      period: "2021 - 2022",
      type: "Internship",
      description: "Worked on user interface development and gained hands-on experience with modern frontend frameworks and design systems.",
      technologies: ["React", "JavaScript", "CSS3", "Figma"],
      achievements: [
        "Built 5 responsive web applications",
        "Improved UI/UX design skills",
        "Collaborated with design team"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-6 md:px-12 relative bg-gray-50 dark:bg-card-dark">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-background-dark rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      exp.type === 'Full-time' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {exp.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-primary mb-2">
                    {exp.company}
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <i className="fas fa-calendar-alt"></i>
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <i className="fas fa-code text-primary"></i>
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <i className="fas fa-trophy text-primary"></i>
                    Key Achievements
                  </h5>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2"
                      >
                        <i className="fas fa-check-circle text-primary mt-0.5 text-xs"></i>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience