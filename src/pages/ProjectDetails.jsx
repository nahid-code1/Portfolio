import { motion } from "framer-motion"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import ThemeToggle from "../components/ThemeToggle"

const ProjectDetails = ({ isDark, toggleTheme }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)

  const projectsData = {
    1: {
      id: 1,
      title: "Freelance Platform",
      subtitle: "Full-Stack Web Application",
      description:
        "A comprehensive freelance solution built with modern web technologies.",
      longDescription:
        "This freelance marketplace platform connects job posters and freelancers. Built with React, Node.js, Express, MongoDB, Firebase authentication, protected routes, dashboards, and responsive UI. Users can post jobs, browse listings, accept jobs posted by others, and manage activities through private dashboards.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Tailwind CSS"
      ],
      category: "Full Stack",
      liveLink: "https://freelance-app-d4a34.web.app/",
      githubLink:
        "https://github.com/nahid-code1/Freelance-App-Client.git",
      features: [
        "User Authentication & Authorization",
        "Job Posting & Management",
        "Latest & All Jobs Listing",
        "Search, Filter & Sort Jobs",
        "Job Acceptance System",
        "My Added Jobs (Update/Delete)",
        "My Accepted Jobs",
        "Protected Routes",
        "Dashboard Pages",
        "Fully Responsive Design"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop"
      ]
    }
  }

  useEffect(() => {
    const foundProject = projectsData[Number(id)]
    setProject(foundProject || null)
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-primary text-black rounded"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-white transition-colors">
      {/* NAV */}
      <nav className="px-6 py-6 flex justify-between items-center">
        <button
          onClick={() => navigate("/")}
          className="text-primary font-medium"
        >
          ← Back
        </button>
        <h1 className="text-xl font-bold">Project Details</h1>
        <div className="w-20" />
      </nav>

      {/* HERO */}
      <section className="px-6 py-12 text-center">
        <span className="text-primary text-sm font-medium">
          {project.category}
        </span>
        <h1 className="text-4xl font-bold mt-3">
          {project.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-3">
          {project.subtitle}
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href={project.liveLink}
            target="_blank"
            className="px-6 py-3 bg-primary text-black rounded"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            className="px-6 py-3 border border-primary text-primary rounded"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* IMAGE */}
      <div className="max-w-5xl mx-auto px-6">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* DETAILS */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        <div>
          <h2 className="text-2xl font-bold mb-3">
            Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            {project.longDescription}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Key Features
          </h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {project.features.map((item, i) => (
              <li key={i} className="flex gap-2">
                ✅ {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Project Gallery
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {project.gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="project"
              className="rounded-lg shadow"
            />
          ))}
        </div>
      </section>

      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  )
}

export default ProjectDetails
