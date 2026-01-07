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
        "https://i.ibb.co.com/Y4kZxpbR/image1.png",
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
      challenges: [
        "Implementing secure role-based authentication and protected routes",
        "Managing real-time job updates across different user dashboards",
        "Ensuring responsive UI consistency across devices",
        "Handling complex job status workflows"
      ],
      futurePlans: [
        "Real-time chat system between clients and freelancers",
        "Payment gateway integration for secure transactions",
        "Advanced analytics for admin dashboard",
        "Notification system using WebSockets"
      ],
      gallery: [
        "https://i.ibb.co.com/Y4kZxpbR/image1.png",
        "https://i.ibb.co.com/QF3KGf4G/image2.png",
        "https://i.ibb.co.com/TBpkkVKd/image3.png"
      ]
    },
    2: {
      id: 1,
      title: "Book Store App",
      subtitle: "Full-Stack Web Application",
      description:
        "A comprehensive book service solution built with modern web technologies.",
      longDescription:
        "This online book store application delivers a complete digital bookstore experience, designed to simplify book browsing, purchasing, and management for users and administrators. The platform features a responsive React-based frontend with an intuitive interface, a secure backend powered by Node.js and RESTful APIs, and efficient database management for handling books, orders, and users. Key functionalities include advanced search and filtering, category-based book listings, shopping cart and checkout system, user authentication, and an admin dashboard for managing inventory and orders. The application focuses on performance, scalability, and user-friendly design to ensure a smooth and engaging shopping experience across all devices.",
      image:
        "https://i.ibb.co.com/Y7MB4N4r/Book-Store-Image1.png",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Tailwind CSS"
      ],
      category: "Full Stack",
      liveLink: "https://assingnmnet11.web.app/",
      githubLink:
        "https://github.com/nahid-code1/Bookstore-App-Client.git",
      features: [
        "User Authentication & Authorization",
        "Book Posting & Management",
        "Latest & All books Listing",
        "Search, Filter & Sort books",
        "Payment integration",
        "My orders (Update/Delete)",
        "My Books",
        "Protected Routes",
        "Dashboard Pages",
        "Fully Responsive Design"
      ],
      challenges: [
        "Implementing secure role-based authentication and protected routes",
        "Managing real-time book updates across different user dashboards",
        "Ensuring responsive UI consistency across devices",
        "Handling complex book status workflows"
      ],
      futurePlans: [
        "Real-time chat system between users and librarians",
        "Advanced analytics for admin dashboard",
        "Notification system using WebSockets"
      ],
      gallery: [
        "https://i.ibb.co.com/Y7MB4N4r/Book-Store-Image1.png",
        "https://i.ibb.co.com/JFb1svYR/Book-Store-Image2.png",
        "https://i.ibb.co.com/3yjPzhd9/Book-Store-Image3.png"
      ]
    },
    3: {
      id: 1,
      title: "App Store",
      subtitle: "Full-Stack Web Application",
      description:
        "A comprehensive applciation solution built with modern web technologies.",
      longDescription:
        "This App Store platform allows users to browse, search, and view apps, manage downloads, and access personalized content through secure authentication, dashboards, and a responsive interface.",
      image:
        "https://i.ibb.co.com/WvrHkH5m/Appstore.jpg",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Tailwind CSS"
      ],
      category: "Full Stack",
      liveLink: "https://gleaming-mandazi-1d61b8.netlify.app/",
      githubLink:
        "https://github.com/nahid-code1/App-Store.git",
      features: [
        "User Authentication & Authorization",
        "App Instalation feature",
        "Latest app Listing",
        "Search, Filter & Sort apps",
        "Ratings overview",
        "Designated routes",
        "Protected Routes",
        "Fully Responsive Design"
      ],
      challenges: [
        "Implementing secure role-based authentication and protected routes",
        "Managing real-time search implementation updates",
        "Ensuring responsive UI consistency across devices",
        "Handling complex app status workflows"
      ],
      futurePlans: [
        "Real-time chat system between users and developers",
        "Payment gateway integration for secure transactions",
        "Advanced analytics for admin dashboard",
        "Notification system using WebSockets"
      ],
      gallery: [
        "https://i.ibb.co.com/SDhcdhvV/Appstore1.jpg",
"https://i.ibb.co.com/RTMQwHXJ/Appstore2.jpg",
"https://i.ibb.co.com/kgc9804s/Appstore4.jpg",
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
          <h2 className="text-2xl font-bold mb-3">Overview</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            {project.longDescription}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {project.features.map((item, i) => (
              <li key={i} className="flex gap-2">
                ✅ {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Technologies</h2>
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

        {/* NEW SECTION */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Challenges Faced
            </h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              {project.challenges.map((item, i) => (
                <li key={i}>⚠️ {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Future Improvements
            </h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              {project.futurePlans.map((item, i) => (
                <li key={i}>🚀 {item}</li>
              ))}
            </ul>
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
