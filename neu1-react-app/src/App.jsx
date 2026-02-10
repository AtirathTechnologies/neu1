import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Comparison from './components/Comparison'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Terms from './components/Terms'
import TransparentHero from './components/TransparentHero'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import VideoLoader from './components/VideoLoader'
import EnquiryModal from './components/EnquiryModal'
import GalleryModal from './components/GalleryModal'

const defaultConfig = {
  site_title: 'NEU1',
  hero_tagline: 'Living. Rewritten.',
  hero_subtitle: 'A Lifestyle Operating System for modern professionals',
  basic_price: '₹12,999',
  premium_price: '₹18,999',
  elite_price: '₹24,999',
  whatsapp_number: '919876543210',
  call_number: '+919876543210',
  email_recipient: 'enquiry@neu1.com',
  video_source: 'hero (4).mp4',
  logo_source: 'living (1).png',
  splash_video_source: 'living (2).mp4',
  about_video_source: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-exterior-3319-large.mp4',
  features_video_source: 'co-living.mp4',
  glitch_video_source: 'reload.mp4',
  comparison_video_source: 'glich.mp4',
  footer_logo_source: 'living (1).png'
}

// Scroll Context for Home Page
const ScrollContext = React.createContext()

// Custom hook for scroll detection
const useScrollDetection = (setActiveSection) => {
  const sectionRefs = React.useRef({})
  const scrollTimeout = React.useRef(null)

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-15% 0px -15% 0px', // Adjusted for better detection
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          const sectionMap = {
            'hero-section': 'Home',
            'about-section': 'About',
            'features-section': 'Hostel Features',
            'why-neu1-section': 'Why Neu1',
            'gallery-section': 'Gallery',
            'pricing-section': 'Pricing',
            'terms-section': 'Terms & Conditions',
            'footer-section': 'Footer' // Added footer section
          }
          
          if (sectionMap[sectionId] && setActiveSection) {
            if (scrollTimeout.current) {
              clearTimeout(scrollTimeout.current)
            }
            
            // Immediate update for smoother scrolling
            scrollTimeout.current = setTimeout(() => {
              setActiveSection(sectionMap[sectionId])
            }, 50) // Reduced timeout
          }
        }
      })
    }, observerOptions)

    // Observe all sections
    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => {
      observer.disconnect()
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [setActiveSection])

  return { sectionRefs }
}

// Home Page Component with Scroll Detection
const HomePage = ({ config, onEnquiryClick, openGalleryModal, setActiveSection }) => {
  const { sectionRefs } = useScrollDetection(setActiveSection)

  return (
    <>
      <section 
        id="hero-section" 
        ref={el => sectionRefs.current['hero-section'] = el}
      >
        <Hero config={config} onEnquiryClick={onEnquiryClick} />
      </section>
      
      <section 
        id="about-section"
        ref={el => sectionRefs.current['about-section'] = el}
      >
        <About config={config} />
      </section>
      
      <section 
        id="features-section"
        ref={el => sectionRefs.current['features-section'] = el}
      >
        <Features />
      </section>
      
      <section 
        id="why-neu1-section"
        ref={el => sectionRefs.current['why-neu1-section'] = el}
      >
        <Comparison config={config} />
      </section>
      
      <section 
        id="gallery-section"
        ref={el => sectionRefs.current['gallery-section'] = el}
      >
        <Gallery onImageClick={openGalleryModal} />
      </section>
      
      <section 
        id="pricing-section"
        ref={el => sectionRefs.current['pricing-section'] = el}
      >
        <Pricing config={config} onEnquiryClick={onEnquiryClick} />
      </section>
      
      <section 
        id="terms-section"
        ref={el => sectionRefs.current['terms-section'] = el}
      >
        <Terms />
      </section>
      
      {/* Footer as a tracked section */}
      <section 
        id="footer-section"
        ref={el => sectionRefs.current['footer-section'] = el}
      >
        <Footer config={config} onEnquiryClick={onEnquiryClick} />
      </section>
    </>
  )
}

// Individual Page Component
const IndividualPage = ({ title, subtitle, children }) => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">{subtitle}</p>
      </div>
      <div className="page-content">
        {children}
      </div>
    </div>
  )
}

// Main Content Component
const MainContent = ({ 
  config, 
  onEnquiryClick, 
  openGalleryModal,
  showContent 
}) => {
  const location = useLocation()
  const [activeSection, setActiveSection] = useState('Home')
  
  return (
    <div className={`w-full ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar 
        config={config} 
        onEnquiryClick={onEnquiryClick}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        currentPath={location.pathname}
      />
      
      <Routes location={location}>
        {/* Home Page (Default Route) with scroll detection */}
        <Route path="/" element={
          <ScrollContext.Provider value={{ activeSection, setActiveSection }}>
            <HomePage 
              config={config} 
              onEnquiryClick={onEnquiryClick}
              openGalleryModal={openGalleryModal}
              setActiveSection={setActiveSection}
            />
          </ScrollContext.Provider>
        } />
        
        {/* Individual Pages */}
        <Route path="/about" element={
          <IndividualPage 
            title="About NEU1" 
            subtitle="Discover Our Vision and Mission"
          >
            <About config={config} />
          </IndividualPage>
        } />
        
        <Route path="/features" element={
          <IndividualPage 
            title="Hostel Features" 
            subtitle="Premium Amenities for Modern Living"
          >
            <Features />
          </IndividualPage>
        } />
        
        <Route path="/why-neu1" element={
          <IndividualPage 
            title="Why Choose NEU1" 
            subtitle="The Ultimate Co-Living Experience"
          >
            <Comparison config={config} />
          </IndividualPage>
        } />
        
        <Route path="/gallery" element={
          <IndividualPage 
            title="Gallery" 
            subtitle="Experience Our Spaces"
          >
            <Gallery onImageClick={openGalleryModal} />
          </IndividualPage>
        } />
        
        <Route path="/pricing" element={
          <IndividualPage 
            title="Pricing & Plans" 
            subtitle="Choose Your Perfect Package"
          >
            <Pricing config={config} onEnquiryClick={onEnquiryClick} />
          </IndividualPage>
        } />
        
        <Route path="/terms" element={
          <IndividualPage 
            title="Terms & Conditions" 
            subtitle="Our Policies and Guidelines"
          >
            <Terms />
          </IndividualPage>
        } />
        
        <Route path="/transparent-hero" element={
          <IndividualPage 
            title="Transparent Experience" 
            subtitle="See Through Our Values"
          >
            <TransparentHero onEnquiryClick={onEnquiryClick} />
          </IndividualPage>
        } />
        
        {/* Additional routes for footer links */}
        <Route path="/privacy" element={
          <IndividualPage 
            title="Privacy Policy" 
            subtitle="How We Protect Your Data"
          >
            <div className="terms-content">
              <h2>Privacy Policy Content</h2>
              <p>Your privacy policy content goes here...</p>
            </div>
          </IndividualPage>
        } />
        
        <Route path="/cookies" element={
          <IndividualPage 
            title="Cookie Policy" 
            subtitle="Our Use of Cookies"
          >
            <div className="terms-content">
              <h2>Cookie Policy Content</h2>
              <p>Your cookie policy content goes here...</p>
            </div>
          </IndividualPage>
        } />
        
        <Route path="/refund" element={
          <IndividualPage 
            title="Refund Policy" 
            subtitle="Our Refund Guidelines"
          >
            <div className="terms-content">
              <h2>Refund Policy Content</h2>
              <p>Your refund policy content goes here...</p>
            </div>
          </IndividualPage>
        } />
      </Routes>
      
      {/* Only show FloatingButtons on home page */}
      {location.pathname === '/' && <FloatingButtons config={config} />}
    </div>
  )
}

function App() {
  const [config] = useState(defaultConfig)
  const [showEnquiryModal, setShowEnquiryModal] = useState(false)
  const [showGalleryModal, setShowGalleryModal] = useState(false)
  const [galleryImage, setGalleryImage] = useState('')
  const [galleryAlt, setGalleryAlt] = useState('')
  const [isReload, setIsReload] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const openEnquiryModal = () => setShowEnquiryModal(true)
  const closeEnquiryModal = () => setShowEnquiryModal(false)

  const openGalleryModal = (imageSrc, altText) => {
    setGalleryImage(imageSrc)
    setGalleryAlt(altText)
    setShowGalleryModal(true)
  }

  const closeGalleryModal = () => setShowGalleryModal(false)

  useEffect(() => {
    const checkIfReload = () => {
      const navigationEntries = performance.getEntriesByType('navigation')
      if (navigationEntries.length > 0) {
        const navEntry = navigationEntries[0]
        if (navEntry.type === 'reload') {
          return true
        }
      }
      
      if (performance.navigation && performance.navigation.type === 1) {
        return true
      }
      
      if (sessionStorage.getItem('pageReloaded') === 'true') {
        sessionStorage.removeItem('pageReloaded')
        return true
      }
      
      return false
    }

    setIsReload(checkIfReload())
    
    const timer = setTimeout(() => {
      setShowContent(true)
    }, isReload ? 2000 : 5000)

    // Prevent scroll jump from hash links
    const handleHashClick = (e) => {
      if (e.target.closest('a[href^="#"]')) {
        e.preventDefault()
      }
    }

    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('pageReloaded', 'true')
    })

    document.addEventListener('click', handleHashClick)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('beforeunload', () => {
        sessionStorage.setItem('pageReloaded', 'true')
      })
      document.removeEventListener('click', handleHashClick)
    }
  }, [isReload])

  return (
    <Router>
      <VideoLoader isReload={isReload} />
      
      <MainContent
        config={config}
        onEnquiryClick={openEnquiryModal}
        openGalleryModal={openGalleryModal}
        showContent={showContent}
      />

      <EnquiryModal 
        show={showEnquiryModal} 
        onHide={closeEnquiryModal} 
        config={config}
      />
      
      <GalleryModal
        show={showGalleryModal}
        onHide={closeGalleryModal}
        imageSrc={galleryImage}
        altText={galleryAlt}
      />
    </Router>
  )
}

export default App