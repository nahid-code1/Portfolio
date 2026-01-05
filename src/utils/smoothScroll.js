// Enhanced smooth scrolling utility
export const smoothScrollTo = (targetId, offset = 80) => {
  const element = document.querySelector(targetId)
  if (!element) return

  const targetPosition = element.offsetTop - offset
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  const duration = Math.min(Math.abs(distance) / 2, 1000) // Dynamic duration based on distance, max 1s

  let start = null

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  }

  const animation = (currentTime) => {
    if (start === null) start = currentTime
    const timeElapsed = currentTime - start
    const progress = Math.min(timeElapsed / duration, 1)

    const ease = easeInOutCubic(progress)
    window.scrollTo(0, startPosition + distance * ease)

    if (progress < 1) {
      requestAnimationFrame(animation)
    }
  }

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion) {
    // Instant scroll for users who prefer reduced motion
    window.scrollTo(0, targetPosition)
  } else {
    // Smooth animated scroll
    requestAnimationFrame(animation)
  }
}

// Simple smooth scroll with native behavior as fallback
export const scrollToElement = (targetId, offset = 80) => {
  const element = document.querySelector(targetId)
  if (!element) return

  const targetPosition = element.offsetTop - offset
  
  // Use native smooth scrolling if supported
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  } else {
    // Fallback to custom smooth scroll for older browsers
    smoothScrollTo(targetId, offset)
  }
}