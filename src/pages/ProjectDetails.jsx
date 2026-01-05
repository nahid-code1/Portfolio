import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ThemeToggle from '../components/ThemeToggle'

const ProjectDetails = ({ isDark, toggleTheme }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)

  // Mock project data - in a real app, this would come from an API
  const projectsData = {
    1: {
      id: 1,
      title: "E-Commerce Platform",
      subtitle: "Full-Stack Web Application",
      description: "A comprehensive e-commerce solution built with modern web technologies, featuring user authentication, product management, shopping cart functionality, and integrated payment processing.",
      longDescription: "This e-commerce platform represents a complete online shopping solution designed to provide seamless user experiences for both customers and administrators. The application features a responsive React frontend with an intuitive user interface, robust Node.js backend with RESTful APIs, and secure payment integration using Stripe. The platform includes advanced features such as real-time inventory management, order tracking, user reviews and ratings, and comprehensive admin dashboard for managing products, orders, and customer data.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe", "Tailwind CSS", "JWT", "Cloudinary"],
      category: "Full Stack",
      liveLink: "https://ecommerce-demo.com",
      githubLink: "https://github.com/jacksonclark/ecommerce-platform",
      features: [
        "User Authentication & Authorization",
        "Product Catalog with Search & Filtering",
        "Shopping Cart & Wishlist",
        "Secure Payment Processing",
        "Order Management System",
        "Admin Dashboard",
        "Real-time Notifications",
        "Responsive Design"
      ],
      challenges: [
        "Implementing secure payment processing with Stripe integration",
        "Optimizing database queries for large product catalogs",
        "Building real-time inventory management system",
        "Ensuring responsive design across all device sizes"
      ],
      improvements: [
        "Add multi-language support",
        "Implement advanced analytics dashboard",
        "Add social media login options",
        "Integrate AI-powered product recommendations"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop"
      ]
    },
    2: {
      id: 2,
      title: "Task Management App",
      subtitle: "Collaborative Project Management Tool",
      description: "A collaborative project management application with real-time updates, team collaboration features, and an intuitive user interface for managing tasks and projects efficiently.",
      longDescription: "This task management application is designed to streamline team collaboration and project organization. Built with React and Firebase, it offers real-time synchronization across all devices, allowing team members to stay updated on project progress instantly. The application features drag-and-drop task management, team chat functionality, file sharing capabilities, and comprehensive project analytics. With its clean Material-UI design and responsive layout, users can manage their projects efficiently from any device.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io", "Redux", "Node.js", "Express.js"],
      category: "Web App",
      liveLink: "https://taskmanager-demo.com",
      githubLink: "https://github.com/jacksonclark/task-manager",
      features: [
        "Real-time Task Updates",
        "Drag & Drop Interface",
        "Team Collaboration",
        "File Sharing",
        "Project Analytics",
        "Time Tracking",
        "Notification System",
        "Mobile Responsive"
      ],
      challenges: [
        "Implementing real-time synchronization across multiple users",
        "Building intuitive drag-and-drop functionality",
        "Optimizing performance for large project datasets",
        "Creating responsive design for mobile devices"
      ],
      improvements: [
        "Add Gantt chart visualization",
        "Implement advanced reporting features",
        "Add integration with popular tools (Slack, Trello)",
        "Include AI-powered task prioritization"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
      ]
    },
    3: {
      id: 3,
      title: "Weather Dashboard",
      subtitle: "Interactive Weather Application",
      description: "A responsive weather application providing location-based forecasts, interactive maps, and detailed weather analytics with beautiful data visualizations.",
      longDescription: "This weather dashboard provides comprehensive weather information through an elegant and user-friendly interface. Built with React and integrated with the OpenWeather API, it offers current weather conditions, 7-day forecasts, and historical weather data. The application features interactive maps, detailed weather charts using Chart.js, and location-based services. Users can save multiple locations, receive weather alerts, and view detailed analytics including temperature trends, precipitation patterns, and air quality indices.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3", "Geolocation API", "Local Storage"],
      category: "Frontend",
      liveLink: "https://weather-dashboard-demo.com",
      githubLink: "https://github.com/jacksonclark/weather-dashboard",
      features: [
        "Current Weather Conditions",
        "7-Day Weather Forecast",
        "Interactive Weather Maps",
        "Location-based Services",
        "Weather Charts & Analytics",
        "Multiple Location Support",
        "Weather Alerts",
        "Responsive Design"
      ],
      challenges: [
        "Integrating multiple weather APIs for comprehensive data",
        "Creating responsive charts and visualizations",
        "Implementing accurate geolocation services",
        "Optimizing API calls to reduce loading times"
      ],
      improvements: [
        "Add weather-based activity suggestions",
        "Implement push notifications for weather alerts",
        "Add weather camera integration",
        "Include climate change data visualization"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop"
      ]
    }
  }

  useEffect(() => {
    const projectData = projectsData[id]
    if (projectData) {
      setProject(projectData)
    }
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h2>
          <button
            onClick={() => navigate('/')}
            className="bg-primary hover:bg-primary-dark text-gray-900 font-bold py-3 px-6 rounded-full transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body transition-colors duration-300 min-h-screen">
      <div className="lines-pattern dark:opacity-[0.05] opacity-[0.1] pointer-events-none"></div>
      
      {/* Navigation */}
      <nav className="w-full px-6 py-6 md:px-12 flex items-center justify-between relative z-50">
        <motion.button
          onClick={() => navigate('/')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-primary transition-colors"
        >
          <i className="fas fa-arrow-left"></i>
          <span className="font-medium">Back to Portfolio</span>
        </motion.button>
        
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-display font-bold text-gray-900 dark:text-white"
        >
          Project Details
        </motion.h1>
        
        <div className="w-24"></div> {/* Spacer for centering */}
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-12">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium bg-primary/10 px-4 py-2 rounded-full text-sm mb-4 inline-block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              {project.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-gray-900 font-bold py-4 px-8 rounded-full transition-all shadow-lg"
              >
                <i className="fas fa-external-link-alt"></i>
                View Live Demo
              </motion.a>
              
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 border-2 border-primary text-primary hover:bg-primary hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all"
              >
                <i className="fab fa-github"></i>
                View Source Code
              </motion.a>
            </div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl mb-16"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-6 md:px-12 py-12 bg-gray-50 dark:bg-card-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  Project Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-6">
                  {project.description}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.longDescription}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <i className="fas fa-check-circle text-primary"></i>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  Challenges & Solutions
                </h3>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <i className="fas fa-lightbulb text-primary mt-1"></i>
                      <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  Future Improvements
                </h3>
                <div className="space-y-4">
                  {project.improvements.map((improvement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <i className="fas fa-rocket text-primary mt-1"></i>
                      <span className="text-gray-700 dark:text-gray-300">{improvement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                  Project Links
                </h3>
                <div className="space-y-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary hover:text-primary-dark transition-colors"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary hover:text-primary-dark transition-colors"
                  >
                    <i className="fab fa-github"></i>
                    Source Code
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 md:px-12 py-12">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Project Gallery
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  )
}

export default ProjectDetails