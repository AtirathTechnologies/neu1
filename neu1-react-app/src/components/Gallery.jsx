import React, { useState, useEffect, useRef } from 'react';

const Gallery = ({ onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop",
      title: "Luxury Bedrooms",
      description: "Experience comfort with premium finishes",
      icon: "🛏️"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop",
      title: "Workspace",
      description: "Productivity-focused modern environment",
      icon: "💼"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
      title: "Community Lounge",
      description: "Networking and relaxation areas",
      icon: "👥"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?w=1200&h=800&fit=crop",
      title: "Fitness Center",
      description: "State-of-the-art wellness facilities",
      icon: "💪"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&h=800&fit=crop",
      title: "Kitchen",
      description: "Gourmet culinary experience",
      icon: "👨‍🍳"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
      title: "Rooftop Lounge",
      description: "Stunning panoramic city views",
      icon: "🌆"
    }
  ];

  // Auto-play slider
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 4000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }

    if (isRightSwipe) {
      handlePrev();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === ' ') {
        toggleAutoPlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="gallery-container">
      {/* Header */}
      <div className="gallery-header">
        <h2 className="gallery-title">
          <span className="title-main">Our Spaces</span>
          <span className="title-sub">Visual Gallery</span>
        </h2>
        <p className="gallery-description">
          Explore our premium spaces through stunning visuals and immersive experiences
        </p>
      </div>

      {/* Main Slider */}
      <div className="slider-wrapper">
        {/* Previous Button */}
        <button 
          className="slider-btn prev-btn"
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Slider Container */}
        <div 
          className="slider-container"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="slider-track">
            {galleryItems.map((item, index) => {
              const position = index - currentIndex;
              let transformStyle = '';
              let zIndex = 1;
              let opacity = 0.5;
              let scale = 0.9;

              if (position === 0) {
                // Current slide
                transformStyle = 'translateX(0%) scale(1)';
                zIndex = 10;
                opacity = 1;
                scale = 1;
              } else if (position === -1 || (currentIndex === 0 && index === galleryItems.length - 1)) {
                // Previous slide
                transformStyle = 'translateX(-100%) scale(0.9)';
                zIndex = 5;
              } else if (position === 1 || (currentIndex === galleryItems.length - 1 && index === 0)) {
                // Next slide
                transformStyle = 'translateX(100%) scale(0.9)';
                zIndex = 5;
              } else {
                // Hidden slides
                transformStyle = 'translateX(200%) scale(0.8)';
                opacity = 0;
              }

              return (
                <div
                  key={item.id}
                  className={`slide ${position === 0 ? 'active' : ''}`}
                  style={{
                    transform: transformStyle,
                    zIndex: zIndex,
                    opacity: opacity,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onClick={() => position === 0 && onImageClick(item.image, item.title)}
                >
                  <div className="slide-image">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className="image-overlay"></div>
                  </div>
                  
                  <div className="slide-content">
                    <div className="slide-icon">{item.icon}</div>
                    <h3 className="slide-title">{item.title}</h3>
                    <p className="slide-description">{item.description}</p>
                    {position === 0 && (
                      <button 
                        className="view-btn"
                        onClick={() => onImageClick(item.image, item.title)}
                      >
                        View Fullscreen
                        <span className="btn-arrow">→</span>
                      </button>
                    )}
                  </div>
                  
                  <div className="slide-glow"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next Button */}
        <button 
          className="slider-btn next-btn"
          onClick={handleNext}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Controls */}
      <div className="gallery-controls">
        {/* Dots Navigation */}
        <div className="dots-container">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="dot-inner"></span>
            </button>
          ))}
        </div>

        {/* Auto-play Toggle */}
        <button 
          className="autoplay-btn"
          onClick={toggleAutoPlay}
          aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          <span className="autoplay-icon">
            {isAutoPlaying ? '⏸️' : '▶️'}
          </span>
          <span className="autoplay-text">
            {isAutoPlaying ? 'Pause' : 'Play'}
          </span>
        </button>
      </div>

      {/* Counter */}
      <div className="slide-counter">
        <span className="current-number">{String(currentIndex + 1).padStart(2, '0')}</span>
        <span className="separator">/</span>
        <span className="total-number">{String(galleryItems.length).padStart(2, '0')}</span>
      </div>

      {/* Thumbnail Navigation */}
      <div className="thumbnail-container">
        {galleryItems.map((item, index) => (
          <div 
            key={item.id}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="thumbnail-image"
            />
            <div className="thumbnail-overlay">
              <span className="thumbnail-number">{index + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div 
          className="progress-bar"
          style={{
            width: `${((currentIndex + 1) / galleryItems.length) * 100}%`,
            transition: 'width 0.3s ease'
          }}
        ></div>
      </div>

      <style jsx>{`
        /* Base Styles */
        .gallery-container {
          position: relative;
          padding: 4rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
          overflow: hidden;
        }

        /* Header */
        .gallery-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .gallery-title {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 1rem;
        }

        .title-main {
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .title-sub {
          font-size: 1.2rem;
          color: #6b7280;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .gallery-description {
          color: #9ca3af;
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Slider Wrapper */
        .slider-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        /* Slider Buttons */
        .slider-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
          z-index: 20;
        }

        .slider-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .slider-btn:active {
          transform: scale(0.95);
        }

        /* Slider Container */
        .slider-container {
          position: relative;
          width: 100%;
          max-width: 900px;
          height: 500px;
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .slider-track {
          position: relative;
          width: 100%;
          height: 100%;
        }

        /* Slide */
        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .slide.active {
          cursor: default;
        }

        .slide-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .slide-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .slide:hover .slide-image img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            transparent 100%
          );
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .slide.active .image-overlay {
          opacity: 0.6;
        }

        /* Slide Content */
        .slide-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          color: white;
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.4s ease 0.2s;
          z-index: 2;
        }

        .slide.active .slide-content {
          transform: translateY(0);
          opacity: 1;
        }

        .slide-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: inline-block;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .slide-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          line-height: 1.2;
        }

        .slide-description {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 1.5rem 0;
          max-width: 500px;
          line-height: 1.5;
        }

        .view-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateX(5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .view-btn:hover .btn-arrow {
          transform: translateX(5px);
        }

        /* Slide Glow */
        .slide-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at center,
            rgba(102, 126, 234, 0.2) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .slide.active .slide-glow {
          opacity: 1;
        }

        /* Controls */
        .gallery-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding: 0 1rem;
        }

        /* Dots */
        .dots-container {
          display: flex;
          gap: 0.75rem;
        }

        .dot {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 0;
          position: relative;
        }

        .dot-inner {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .dot:hover .dot-inner {
          background: rgba(255, 255, 255, 0.6);
          transform: scale(1.2);
        }

        .dot.active .dot-inner {
          width: 24px;
          border-radius: 12px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Auto-play Button */
        .autoplay-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .autoplay-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .autoplay-icon {
          font-size: 1.2rem;
        }

        .autoplay-text {
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* Counter */
        .slide-counter {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
          font-family: monospace;
        }

        .current-number {
          font-size: 3rem;
          font-weight: 700;
          color: white;
          line-height: 1;
        }

        .separator {
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .total-number {
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.7);
        }

        /* Thumbnails */
        .thumbnail-container {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          padding: 0 1rem;
        }

        .thumbnail {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          opacity: 0.5;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .thumbnail:hover {
          opacity: 0.8;
          transform: translateY(-3px);
        }

        .thumbnail.active {
          opacity: 1;
          border-color: #667eea;
          transform: scale(1.1);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }

        .thumbnail-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .thumbnail-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .thumbnail:hover .thumbnail-overlay {
          opacity: 1;
        }

        .thumbnail-number {
          color: white;
          font-weight: 600;
          font-size: 1.2rem;
        }

        /* Progress Bar */
        .progress-container {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 2px;
          transition: width 4s linear;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .gallery-container {
            padding: 2rem 1rem;
          }

          .title-main {
            font-size: 2.5rem;
          }

          .slider-container {
            height: 400px;
          }

          .slide-title {
            font-size: 1.5rem;
          }

          .slide-description {
            font-size: 0.9rem;
          }

          .slider-btn {
            width: 44px;
            height: 44px;
            position: absolute;
            z-index: 20;
          }

          .prev-btn {
            left: 10px;
          }

          .next-btn {
            right: 10px;
          }

          .gallery-controls {
            flex-direction: column;
            gap: 1.5rem;
          }

          .thumbnail {
            width: 60px;
            height: 60px;
          }

          .current-number {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .slider-container {
            height: 350px;
          }

          .slide-content {
            padding: 1.5rem;
          }

          .thumbnail-container {
            overflow-x: auto;
            justify-content: flex-start;
            padding: 0.5rem;
          }

          .thumbnail {
            flex-shrink: 0;
          }
        }

        /* Background */
        .gallery-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          z-index: -1;
        }
      `}</style>
    </section>
  );
};

export default Gallery;