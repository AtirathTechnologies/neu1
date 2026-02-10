import React from 'react'

const Footer = ({ config, onEnquiryClick }) => {
  const socialLinks = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
        </svg>
      )
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ]

  const exploreLinks = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About Us" },
    { href: "#features", text: "Features" },
    { href: "#comparison", text: "Why Neu1" },
    { href: "#gallery", text: "Gallery" },
    { href: "#pricing", text: "Pricing" },
    { href: "#terms", text: "Terms" }
  ]

  const legalLinks = [
    { href: "#", text: "Privacy Policy" },
    { href: "#terms", text: "Terms of Service" },
    { href: "#", text: "Cookie Policy" },
    { href: "#", text: "Refund Policy" }
  ]

  const contactInfo = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      label: "Location",
      value: "Cyberabad, Hyderabad"
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      label: "Email",
      value: "hello@neu1.co"
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
      label: "Phone",
      value: "+91 98765 43210"
    }
  ]

  return (
    <footer className="position-relative overflow-hidden bg-dark py-5">
      <div className="position-absolute top-0 start-0 end-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"></div>
      
      <div className="container position-relative z-2">
        {/* Main footer content */}
        <div className="row g-4 g-md-5 mb-5">
          {/* Brand section */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2  d-flex align-items-center justify-content-center font-grotesk fw-bold fs-5">
  <img 
    src="living (1).png" 
    alt="Logo"
    className="w-30 h-30 object-contain"
  />
</div>
              <div>
                <span className="font-grotesk fs-4 fw-bold">NEU1</span>
                <p className="text-gray-300 fs-7 mb-0 mt-1">Co-Living Redefined</p>
              </div>
            </div>
            <p className="text-gray-300 fs-6 mb-4">
              The ultimate lifestyle operating system for modern professionals. Redefining co-living with innovation, community, and excellence.
            </p>
            <div className="d-flex gap-3 mb-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href="#"
                  className="social-link position-relative w-10 h-10 rounded-2 bg-gradient-to-br from-dark-secondary to-dark d-flex align-items-center justify-content-center overflow-hidden"
                >
                  <div className="social-link-overlay position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-br from-primary to-accent opacity-0"></div>
                  <div className="position-relative z-2 w-4 h-4 text-gray-400">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
            <button 
              className="btn-primary px-4 py-3 rounded-pill fs-6 w-100"
              onClick={onEnquiryClick}
            >
              Book Your Space Now
            </button>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-3 col-6">
            <h3 className="font-grotesk fw-bold text-white mb-4 fs-6 text-uppercase position-relative d-inline-block">
              Explore
              <span className="position-absolute bottom-0 start-0 w-8 h-1 bg-gradient-to-r from-accent to-transparent"></span>
            </h3>
            <ul className="list-unstyled">
              {exploreLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="text-gray-300 hover:text-accent transition-all fs-6 d-flex align-items-center gap-2 text-decoration-none">
                    <span className="w-1 h-1 rounded-circle bg-gray-600"></span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-lg-2 col-md-3 col-6">
            <h3 className="font-grotesk fw-bold text-white mb-4 fs-6 text-uppercase position-relative d-inline-block">
              Legal
              <span className="position-absolute bottom-0 start-0 w-8 h-1 bg-gradient-to-r from-accent to-transparent"></span>
            </h3>
            <ul className="list-unstyled">
              {legalLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="text-gray-300 hover:text-accent transition-all fs-6 d-flex align-items-center gap-2 text-decoration-none">
                    <span className="w-1 h-1 rounded-circle bg-gray-600"></span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6">
            <h3 className="font-grotesk fw-bold text-white mb-4 fs-6 text-uppercase position-relative d-inline-block">
              Get in Touch
              <span className="position-absolute bottom-0 start-0 w-8 h-1 bg-gradient-to-r from-accent to-transparent"></span>
            </h3>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item p-3 rounded-3 bg-dark/30 border border-dark-secondary">
                  <div className="d-flex align-items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-2 bg-gradient-to-br from-primary/10 to-accent/10 d-flex align-items-center justify-content-center">
                      <div className="w-5 h-5 text-accent">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400 fs-7 mb-1">
                        {info.label}
                      </div>
                      <div className="text-gray-300 fs-6">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 border-top border-dark-secondary/50 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="font-grotesk text-gray-400 fs-6 d-flex align-items-center gap-2 mb-0">
            <span>©</span> 2024 Neu1 Co-Living. All rights reserved.
          </p>
          <div className="d-flex align-items-center gap-2">
            <span className="text-gray-500 fs-7">Powered by</span>
            <span className="font-grotesk fw-bold">Innovation & Community</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .social-link {
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          transform: scale(1.1);
        }
        
        .social-link:hover .social-link-overlay {
          opacity: 1;
        }
        
        .social-link:hover div {
          color: #0A1A2F !important;
        }
        
        .contact-item {
          transition: all 0.3s ease;
        }
        
        .contact-item:hover {
          border-color: rgba(43, 176, 255, 0.3) !important;
        }
        
        @media (max-width: 768px) {
          .footer-logo-img {
            width: 150px !important;
          }
        }
        
        @media (max-width: 480px) {
          .footer-logo-img {
            width: 120px !important;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer