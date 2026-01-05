import Logo from './Logo'
import NavigationLinks from './NavigationLinks'
import SocialLinks from './SocialLinks'

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-6 md:px-12 flex items-center justify-between relative z-50">
      <Logo />
      <NavigationLinks />
      <SocialLinks />
    </nav>
  )
}

export default Navbar