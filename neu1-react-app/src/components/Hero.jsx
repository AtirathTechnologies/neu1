import React, { useState } from 'react'

const Hero = ({ config, onEnquiryClick }) => {
  const [isHovering, setIsHovering] = useState(false)
  
  // Theme colors for the website
  const themeColor = '#3b82f6' // Your website's primary color
  const themeColorLight = '#93c5fd' // Lighter version for text background
  const themeColorDark = '#1d4ed8' // Darker version for hover

  return (
    <section id="home" className="video-hero-container position-relative overflow-hidden">
      <video autoPlay muted loop playsInline className="video-hero position-absolute top-0 start-0 w-100 h-100">
        <source src={config.video_source} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <button 
        className="hero-explore-btn position-absolute bottom-3 start-50 translate-middle-x d-flex flex-column align-items-center justify-content-center"
        onClick={() => document.querySelector('#features').scrollIntoView({ behavior: 'smooth' })}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '10px',
          zIndex: 10
        }}
      >
        {/* Circular background for text */}
        {isHovering && (
          <div style={{
            backgroundColor: themeColor,
            color: 'white',
            padding: '12px 24px',
            borderRadius: '50px',
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '20px',
            boxShadow: `0 4px 12px ${themeColor}80`,
            animation: 'fadeIn 0.3s ease'
          }}>
            Explore Features
          </div>
        )}
        
        {/* Arrow button with theme color */}
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: themeColor,
          border: `2px solid ${themeColor}`,
          transition: 'all 0.3s ease',
          boxShadow: `0 4px 12px ${themeColor}80`
        }}>
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white"
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{
              transition: 'transform 0.3s ease',
              transform: isHovering ? 'translateY(5px)' : 'translateY(0)'
            }}
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </button>
      
      <div className="video-hero-content position-relative w-100 h-100 d-flex align-items-center justify-content-center"></div>
      
      <style jsx="true">{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .hero-explore-btn:hover {
          transform: translateX(-50%) scale(1.05);
        }
        
        .hero-explore-btn:active {
          transform: translateX(-50%) scale(0.95);
        }
        
        .hero-explore-btn:hover div:last-child {
          background-color: ${themeColorDark};
          border-color: ${themeColorDark};
          box-shadow: 0 6px 20px ${themeColorDark}80;
        }
      `}</style>
    </section>
  )
}

export default Hero