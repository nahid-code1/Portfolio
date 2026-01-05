const SocialLinks = () => {
  const socialPlatforms = [
    { icon: 'fab fa-instagram', href: '#' },
    { icon: 'fab fa-linkedin-in', href: '#' },
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-facebook-f', href: '#' }
  ]

  return (
    <div className="hidden md:flex items-center gap-3">
      {socialPlatforms.map((platform, index) => (
        <a
          key={index}
          className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-gray-900 dark:hover:bg-primary dark:hover:text-gray-900 transition-all"
          href={platform.href}
        >
          <i className={platform.icon}></i>
        </a>
      ))}
      
      <button className="w-10 h-10 ml-2 rounded-full bg-primary flex items-center justify-center text-gray-900 hover:opacity-90 transition-opacity">
        <i className="fas fa-bars"></i>
      </button>
    </div>
  )
}

export default SocialLinks