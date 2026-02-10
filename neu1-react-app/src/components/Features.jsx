import React, { useState, useRef, useEffect } from 'react'

const Features = () => {
  const [featuresExpanded, setFeaturesExpanded] = useState(false)
  const hiddenFeaturesRef = useRef(null)

  const visibleFeatures = [
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      title: "Fully Furnished Rooms",
      description: "Modern furniture, premium bedding, and ergonomic workspaces in every room with smart lighting controls",
      badge: "Luxury",
      tags: ["✓ Smart Lighting", "24/7 Access"]
    },
    {
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
      title: "High-Speed Wi-Fi",
      description: "Blazing fast 1 Gbps fiber internet with zero dead zones throughout the property for seamless work",
      badge: "Connectivity",
      tags: ["✓ 1 Gbps Speed", "Unlimited Data"]
    },
    {
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
      title: "Coworking Spaces",
      description: "Dedicated work pods, meeting rooms, and collaboration areas designed for maximum productivity",
      badge: "Productivity",
      tags: ["✓ 24/7 Access", "Meeting Rooms"]
    }
  ]

  const hiddenFeaturesList = [
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      title: "Smart Access Control",
      description: "Keyless entry with facial recognition and mobile app-based room access for ultimate convenience",
      badge: "Security",
      tags: ["✓ Facial Recognition", "Mobile App"]
    },
    {
      image: "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?w=800&h=600&fit=crop",
      title: "24/7 Fitness Center",
      description: "Round-the-clock CCTV surveillance, security personnel, and modern gym facilities",
      badge: "Wellness",
      tags: ["✓ CCTV Monitoring", "Modern Gym"]
    },
    {
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop",
      title: "Gourmet Kitchen",
      description: "Fully-equipped communal kitchen with premium appliances and elegant dining spaces",
      badge: "Gourmet",
      tags: ["✓ Premium Appliances", "Communal Dining"]
    },
    {
      image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
      title: "Smart Laundry Services",
      description: "Automated laundry facilities with app-based scheduling and premium detergents",
      badge: "Convenience",
      tags: ["✓ App Scheduling", "24/7 Access"]
    },
    {
      image: "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?w=800&h=600&fit=crop",
      title: "Rooftop Lounge",
      description: "Panoramic city views with premium seating, barbecue area, and social events",
      badge: "Social",
      tags: ["✓ City Views", "Social Events"]
    },
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      title: "Premium Housekeeping",
      description: "Daily room cleaning, linen changes, and premium cleaning supplies included",
      badge: "Service",
      tags: ["✓ Daily Cleaning", "Premium Supplies"]
    }
  ]

  useEffect(() => {
    if (featuresExpanded && hiddenFeaturesRef.current) {
      setTimeout(() => {
        hiddenFeaturesRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  }, [featuresExpanded])

  const handleViewAllClick = () => {
    setFeaturesExpanded(!featuresExpanded);
  }

  const FeatureCard = ({ feature, index }) => (
    <div className="feature-card" style={{ '--delay': `${index * 100}ms` }}>
      <div className="feature-image-container">
        <img src={feature.image} alt={feature.title} className="feature-image" />
        <div className="feature-overlay">
          <span className="feature-badge">{feature.badge}</span>
        </div>
      </div>
      <div className="feature-content">
        <h3 className="feature-title">{feature.title}</h3>
        <p className="feature-description">{feature.description}</p>
        <div className="feature-tags">
          <span className="feature-tag-primary">{feature.tags[0]}</span>
          <span className="feature-tag-secondary">{feature.tags[1]}</span>
        </div>
      </div>
    </div>
  )

  return (
    <section id="features" className="features-section">
      {/* Video Background - FIXED SOURCE */}
      <div className="features-video-bg">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          className="features-video"
        >
          {/* Option 1: Use a video from your public folder */}
          <source src="/videos/co-living.mp4" type="video/mp4" />
          
          {/* Option 2: Use an online video as fallback (Uncomment if needed) */}
          {/* <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-living-room-with-a-sofa-and-picture-frame-44577-large.mp4" type="video/mp4" /> */}
          
          {/* Option 3: Multiple fallback sources */}
          <source src="/co-living.mp4" type="video/mp4" />
          <source src="co-living.mp4" type="video/mp4" />
          
          Your browser does not support the video tag.
        </video>
        <div className="features-video-overlay"></div>
      </div>
      
      <div className="features-container">
        <div className="features-header">
          <div className="features-badge">
            <span className="features-badge-text">Premium Features</span>
          </div>
          <h2 className="features-title">
            High-End <span className="features-title-highlight">Co-Living</span> Features
          </h2>
          <p className="features-subtitle">
            Experience luxury and convenience with our thoughtfully designed amenities
          </p>
        </div>

        {/* Visible Features */}
        <div className="features-grid">
          {visibleFeatures.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="features-view-all">
          <button 
            className="view-all-btn"
            onClick={handleViewAllClick}
          >
            {featuresExpanded ? 'Show Less Features' : 'View All Features →'}
          </button>
        </div>

        {/* Hidden Features */}
        <div 
          ref={hiddenFeaturesRef}
          className={`hidden-features ${featuresExpanded ? 'expanded' : ''}`}
        >
          <div className="features-grid">
            {hiddenFeaturesList.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features