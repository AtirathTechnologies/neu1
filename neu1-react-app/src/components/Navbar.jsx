import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = ({ 
  config, 
  onEnquiryClick,
  activeSection,
  setActiveSection,
  currentPath
}) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [underlineStyle, setUnderlineStyle] = useState({})
  const navRefs = useRef({})
  const containerRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  const navLinks = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/features', text: 'Hostel Features' },
    { path: '/why-neu1', text: 'Why Neu1' },
    { path: '/gallery', text: 'Gallery' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/terms', text: 'Terms & Conditions' },
  ]

  // Determine active link based on route or scroll
  const getActiveLink = () => {
    if (currentPath === '/') {
      // On home page, use scroll-based active section
      return activeSection
    } else {
      // On individual pages, use route-based active section
      const activeNav = navLinks.find(link => link.path === currentPath) || 
                        navLinks.find(link => link.path === '/') || 
                        navLinks[0]
      return activeNav.text
    }
  }

  const currentActiveLink = getActiveLink()

  // Update underline position
  const updateUnderlinePosition = () => {
    if (currentActiveLink && navRefs.current[currentActiveLink]) {
      const activeElement = navRefs.current[currentActiveLink]
      if (activeElement && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const activeRect = activeElement.getBoundingClientRect()
        
        setUnderlineStyle({
          width: `${activeRect.width}px`,
          left: `${activeRect.left - containerRect.left}px`,
          opacity: 1,
        })
      } else {
        // Fallback to first link if active element not found
        if (navRefs.current['Home']) {
          const activeElement = navRefs.current['Home']
          if (activeElement && containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect()
            const activeRect = activeElement.getBoundingClientRect()
            
            setUnderlineStyle({
              width: `${activeRect.width}px`,
              left: `${activeRect.left - containerRect.left}px`,
              opacity: 1,
            })
          }
        }
      }
    }
  }

  // Setup scroll detection for home page
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Update underline when active link changes or on resize
  useEffect(() => {
    updateUnderlinePosition()
    
    const handleResize = () => {
      updateUnderlinePosition()
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [currentActiveLink, currentPath])

  // Initial underline setup
  useEffect(() => {
    const timer = setTimeout(() => {
      updateUnderlinePosition()
    }, 300)
    
    return () => clearTimeout(timer)
  }, [])

  const handleLinkClick = (text, path) => {
    // Update active section
    if (setActiveSection) {
      setActiveSection(text)
    }
    
    setMobileMenuOpen(false)
    
    // Navigate to the route
    if (path !== currentPath) {
      navigate(path)
      
      // If navigating to home page, scroll to appropriate section
      if (path === '/') {
        const sectionId = text.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')
        const element = document.getElementById(`${sectionId}-section`)
        if (element) {
          setTimeout(() => {
            const navbarHeight = scrolled ? 70 : 80
            const offsetPosition = element.offsetTop - navbarHeight
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }, 100)
        }
      } else {
        // Scroll to top for individual pages
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      // Already on the page, just scroll to section (for home page)
      if (path === '/') {
        const sectionId = text.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')
        const element = document.getElementById(`${sectionId}-section`)
        if (element) {
          const navbarHeight = scrolled ? 70 : 80
          const offsetPosition = element.offsetTop - navbarHeight
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }
    }
  }

  // Scroll to section on home page based on navbar click
  const scrollToSection = (sectionName) => {
    if (currentPath === '/') {
      const sectionId = sectionName.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')
      const element = document.getElementById(`${sectionId}-section`)
      if (element) {
        const navbarHeight = scrolled ? 70 : 80
        const offsetPosition = element.offsetTop - navbarHeight
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-inner">
            {/* Logo */}
            <div className="navbar-brand">
              <Link 
                to="/" 
                className="nav-logo-link" 
                onClick={() => handleLinkClick('Home', '/')}
              >
                <div className="nav-logo-wrapper">
                  <img 
                    src={config.logo_source} 
                    alt="Neu1 Logo" 
                    className="nav-logo"
                  />
                </div>
              </Link>
            </div>

            {/* Spacer */}
            <div className="navbar-spacer"></div>

            {/* Desktop Navigation */}
            <div className="desktop-nav" ref={containerRef}>
              <div className="nav-links-wrapper">
                <div className="nav-links-container">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index} 
                      ref={el => navRefs.current[link.text] = el}
                      to={link.path}
                      className={`nav-link ${currentActiveLink === link.text ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault()
                        handleLinkClick(link.text, link.path)
                        scrollToSection(link.text)
                      }}
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Enquiry Button */}
            <div className="navbar-actions">
              <button className="navbar-enquiry-btn" onClick={onEnquiryClick}>
                Enquiry Form
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="navbar-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <span className="navbar-toggle-icon"></span>
              <span className="navbar-toggle-icon"></span>
              <span className="navbar-toggle-icon"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <div className="mobile-menu-brand">
              <img 
                src={config.logo_source} 
                alt="Neu1 Logo" 
                className="mobile-menu-logo"
              />
              <span className="mobile-menu-company">Neu1</span>
            </div>
            <button 
              className="mobile-menu-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div className="mobile-menu-content">
            {navLinks.map((link, index) => (
              <Link
                key={index} 
                to={link.path}
                className={`mobile-nav-link ${currentActiveLink === link.text ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link.text, link.path)
                  scrollToSection(link.text)
                  setMobileMenuOpen(false)
                }}
              >
                {link.text}
              </Link>
            ))}
            <button className="mobile-enquiry-btn" onClick={onEnquiryClick}>
              Enquiry Form
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar