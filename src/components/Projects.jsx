import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const navigate = useNavigate()

  const projectsData = [
    {
      id: 1,
      title: "Freelance Platform",
      description: "A comprehensive freelance solution built with modern web technologies.",
      image: "https://optim.tildacdn.net/tild3937-6631-4563-b963-303835663430/-/resize/824x/-/format/webp/freelance_platform_s.png.webp",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "Full Stack",
      featured: true
    },
    {
      id: 2,
      title: "Book Store App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and intuitive UI.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/f1/11/82/photo6jpg.jpg?w=900&h=500&s=1",
      technologies: ["React", "Firebase", "Tan-stack", "MongoDB"],
      category: "Web App",
      featured: true
    },
    {
      id: 3,
      title: "App Store",
      description: "A responsive software application with multiple apps to download, feature and showase.",
      image: "https://web.dailyjanakantha.com/wp-content/uploads/2025/09/App-STore-teaser-002.jpg",
      technologies: ["React", "Firebase", "Chart", "CSS3"],
      category: "Frontend",
      featured: true
    }
  ]

  const handleViewDetails = (projectId) => {
    navigate(`/project/${projectId}`)
  }

  return (
    <section id="projects" className="py-20 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my recent work, demonstrating expertise in modern web technologies 
            and creative problem-solving approaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative bg-white dark:bg-card-dark rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-primary text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </span>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleViewDetails(project.id)}
                    className="bg-primary hover:bg-primary-dark text-gray-900 font-bold py-2 px-6 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-primary text-sm font-medium bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleViewDetails(project.id)}
                  className="w-full flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-gray-900 text-gray-700 dark:text-gray-300 font-medium py-3 px-4 rounded-xl transition-all duration-300 group-hover:bg-primary group-hover:text-gray-900"
                >
                  View Project
                  <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform duration-300"></i>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-3 border-2 border-primary text-primary hover:bg-primary hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105">
            View All Projects
            <i className="fas fa-external-link-alt"></i>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects