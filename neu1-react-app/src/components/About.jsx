import React from 'react'

const About = ({ config }) => {
  return (
    <section id="about" className="about-section position-relative overflow-hidden py-5">
      {/* Video Background */}
      <div className="video-background">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="background-video"
        >
          <source 
            src="f3.mp4" 
            type="video/mp4" 
          />
          {/* Fallback video sources - choose one that suits your theme */}
          {/* 
          Alternative video options (remove comments to use):
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-geometric-shapes-rotating-against-white-background-46691-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-mesh-of-grid-lines-rotating-against-a-white-background-46680-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-a-grid-of-polygons-rotating-46689-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-grid-of-lines-rotating-fast-46696-large.mp4" type="video/mp4" />
          */}
        </video>
        <div className="video-overlay"></div>
      </div>
      
      {/* Subtle Animated Grid Pattern */}
      <div className="animated-grid position-absolute top-0 start-0 w-100 h-100"></div>
      
      <div className="container position-relative z-3">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="content-wrapper">
              {/* Animated Badge */}
              <div className="badge-animation-wrapper mb-4">
                <div className="d-inline-block px-4 py-2 rounded-pill bg-primary/10 border border-accent/20">
                  <span className="text-accent font-grotesk fs-6 fw-medium">About Neu1</span>
                </div>
                <div className="badge-glow"></div>
              </div>
              
              {/* Title with Gradient Animation */}
              <h2 className="font-grotesk fs-1 fw-bold mb-4 title-animation">
                Redefining <span className="gradient-text">Modern Living</span>
              </h2>
              
              {/* Animated Content Items */}
              <div className="content-items">
                {[
                  "Premium Infrastructure: State-of-the-art facilities designed for comfort and productivity",
                  "Community Focus: Connect with like-minded professionals and entrepreneurs",
                  "Smart Technology: IoT-enabled rooms with app-based controls for seamless living",
                  "Prime Locations: Strategically located near tech hubs and business districts"
                ].map((text, index) => (
                  <div key={index} className="content-item fade-in-item" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="item-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="url(#gradient)" strokeWidth="2"/>
                        <path d="M8 12L11 15L16 9" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0B5ED7"/>
                            <stop offset="100%" stopColor="#2BB0FF"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="item-text">
                      <strong className="text-white">{text.split(':')[0]}:</strong> {text.split(':')[1]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {/* Animated Image Container */}
            <div className="image-container slide-in-right">
              <div className="image-wrapper pulse-animation">
                <img 
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop" 
                  alt="Modern co-living space" 
                  className="main-image"
                />
                {/* Floating Elements around image */}
                <div className="floating-element fe-1"></div>
                <div className="floating-element fe-2"></div>
                <div className="floating-element fe-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background: transparent;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        /* Video Background */
        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          overflow: hidden;
        }

        .background-video {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          object-fit: cover;
          
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
         
          mix-blend-mode: multiply;
        }

        /* Animated Grid Pattern */
        .animated-grid {
          background-image: 
            linear-gradient(rgba(11, 94, 215, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(11, 94, 215, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
          pointer-events: none;
          z-index: 2;
          opacity: 0.5;
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        /* Container z-index to appear above video */
        .container {
          z-index: 3 !important;
        }

        /* Title Animation */
        .title-animation {
          opacity: 0;
          animation: titleFadeIn 1s ease-out forwards;
          animation-delay: 0.3s;
        }

        @keyframes titleFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .gradient-text {
          background: linear-gradient(135deg, #0B5ED7 0%, #2BB0FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          display: inline-block;
        }

        .gradient-text::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #0B5ED7, #2BB0FF);
          transform: scaleX(0);
          transform-origin: left;
          animation: underlineExpand 1s ease-out forwards;
          animation-delay: 1s;
        }

        @keyframes underlineExpand {
          to {
            transform: scaleX(1);
          }
        }

        /* Badge Animation */
        .badge-animation-wrapper {
          position: relative;
          display: inline-block;
        }

        .badge-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 150%;
          background: radial-gradient(circle, rgba(11, 94, 215, 0.3) 0%, rgba(11, 94, 215, 0) 70%);
          border-radius: 50px;
          animation: badgePulse 2s ease-in-out infinite;
          z-index: -1;
        }

        @keyframes badgePulse {
          0%, 100% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        /* Content Items Animation */
        .content-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateX(-20px);
        }

        .fade-in-item {
          animation: itemSlideIn 0.6s ease-out forwards;
        }

        @keyframes itemSlideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .item-icon {
          flex-shrink: 0;
          animation: iconRotate 3s ease-in-out infinite;
        }

        @keyframes iconRotate {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(10deg);
          }
          75% {
            transform: rotate(-5deg);
          }
        }

        /* Image Container Animation */
        .image-container {
          position: relative;
          padding: 20px;
        }

        .image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(11, 94, 215, 0.3);
          box-shadow: 0 10px 40px rgba(11, 94, 215, 0.3);
          background: rgba(10, 26, 47, 0.4);
          backdrop-filter: blur(10px);
        }

        .main-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
          border-radius: 20px;
        }

        .image-wrapper:hover .main-image {
          transform: scale(1.05);
        }

        .pulse-animation {
          animation: softPulse 4s ease-in-out infinite;
        }

        @keyframes softPulse {
          0%, 100% {
            box-shadow: 0 10px 40px rgba(11, 94, 215, 0.3);
          }
          50% {
            box-shadow: 0 15px 50px rgba(11, 94, 215, 0.5);
          }
        }

        /* Floating Elements */
        .floating-element {
          position: absolute;
          background: rgba(11, 94, 215, 0.15);
          border: 1px solid rgba(11, 94, 215, 0.4);
          border-radius: 10px;
          animation: elementFloat 8s ease-in-out infinite;
          backdrop-filter: blur(5px);
        }

        .fe-1 {
          top: -15px;
          left: -15px;
          width: 30px;
          height: 30px;
          animation-delay: 0s;
        }

        .fe-2 {
          top: -10px;
          right: -10px;
          width: 40px;
          height: 40px;
          animation-delay: 2s;
          border-radius: 50%;
        }

        .fe-3 {
          bottom: -20px;
          left: 50%;
          width: 25px;
          height: 25px;
          animation-delay: 4s;
        }

        @keyframes elementFloat {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(5px, -10px) rotate(90deg);
          }
          50% {
            transform: translate(-5px, 5px) rotate(180deg);
          }
          75% {
            transform: translate(10px, -5px) rotate(270deg);
          }
        }

        /* Slide In Animation */
        .slide-in-right {
          opacity: 0;
          transform: translateX(50px);
          animation: slideInRight 1s ease-out forwards;
          animation-delay: 0.5s;
        }

        @keyframes slideInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Typography */
        .font-grotesk {
          font-family: 'Space Grotesk', sans-serif;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .about-section {
            padding: 100px 0 60px;
            min-height: auto;
          }
          
          .animated-grid {
            opacity: 0.3;
          }
          
          .video-overlay {
            background: linear-gradient(135deg, 
              rgba(10, 26, 47, 0.9) 0%, 
              rgba(11, 30, 58, 0.95) 100%
            );
          }
        }

        @media (max-width: 768px) {
          .image-container {
            padding: 10px;
          }
          
          .floating-element {
            display: none;
          }
          
          .background-video {
            filter: brightness(0.6) contrast(1.2);
          }
        }

        /* Optimize video loading */
        @media (prefers-reduced-motion: reduce) {
          .background-video {
            display: none;
          }
          
          .video-overlay {
            background: linear-gradient(135deg, #0A1A2F 0%, #0B1E3A 100%);
          }
        }
      `}</style>
    </section>
  )
}

export default About