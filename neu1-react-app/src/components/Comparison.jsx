import React, { useState, useRef, useEffect } from 'react'

const Comparison = ({ config }) => {
  const [activeFeature, setActiveFeature] = useState(0)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef(null)

  // Handle video load
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current
      
      const handleLoad = () => {
        setIsVideoLoaded(true)
      }
      
      const handleError = () => {
        console.error("Video failed to load")
        setIsVideoLoaded(true) // Still show content even if video fails
      }
      
      video.addEventListener('loadeddata', handleLoad)
      video.addEventListener('error', handleError)
      
      // Force video to load
      video.load()
      
      return () => {
        video.removeEventListener('loadeddata', handleLoad)
        video.removeEventListener('error', handleError)
      }
    }
  }, [])

  const features = [
    {
      id: 1,
      category: "Smart Living",
      neu1: {
        title: "Neu1 Smart Technology",
        icon: "⚡",
        gradient: "from-blue-500 to-cyan-400",
        items: [
          "IoT-enabled smart room controls",
          "Mobile app for facility management",
          "Facial recognition access",
          "Smart energy management",
          "Voice-controlled environment",
          "Predictive maintenance"
        ]
      },
      other: {
        title: "Traditional Living",
        icon: "🔑",
        gradient: "from-gray-500 to-gray-700",
        items: [
          "Manual switches and controls",
          "Physical keys and locks",
          "No app integration",
          "High energy consumption",
          "Reactive maintenance",
          "Limited automation"
        ]
      },
      comparison: {
        neu1Wins: "AI-powered automation saves 40% energy",
        difference: "62% more efficient"
      }
    },
    {
      id: 2,
      category: "Productivity",
      neu1: {
        title: "Neu1 Workspace",
        icon: "💼",
        gradient: "from-purple-500 to-pink-500",
        items: [
          "Dedicated coworking spaces",
          "Private meeting rooms",
          "High-speed fiber internet",
          "Ergonomic furniture",
          "24/7 access facilities",
          "Productivity workshops"
        ]
      },
      other: {
        title: "Basic Workspace",
        icon: "📄",
        gradient: "from-gray-500 to-gray-700",
        items: [
          "No dedicated work areas",
          "Shared common spaces only",
          "Limited internet access",
          "Basic furniture",
          "Restricted access hours",
          "No professional development"
        ]
      },
      comparison: {
        neu1Wins: "Boost productivity by 3.5x",
        difference: "71% faster internet"
      }
    },
    {
      id: 3,
      category: "Community",
      neu1: {
        title: "Neu1 Community",
        icon: "👥",
        gradient: "from-green-500 to-emerald-400",
        items: [
          "Curated networking events",
          "Professional workshops",
          "Social lounges and spaces",
          "Industry mixers",
          "Skill-sharing sessions",
          "Startup incubation support"
        ]
      },
      other: {
        title: "Basic Social",
        icon: "🏠",
        gradient: "from-gray-500 to-gray-700",
        items: [
          "Casual interactions only",
          "No organized events",
          "Limited social spaces",
          "Random roommate matching",
          "No professional network",
          "Isolated living experience"
        ]
      },
      comparison: {
        neu1Wins: "500+ successful connections made",
        difference: "89% higher satisfaction"
      }
    },
    {
      id: 4,
      category: "Wellness",
      neu1: {
        title: "Neu1 Wellness Hub",
        icon: "🧘",
        gradient: "from-orange-500 to-yellow-400",
        items: [
          "On-site fitness center",
          "Meditation zones",
          "Healthy meal plans",
          "Wellness workshops",
          "Sleep optimization rooms",
          "Mental health support"
        ]
      },
      other: {
        title: "Basic Amenities",
        icon: "🏋️",
        gradient: "from-gray-500 to-gray-700",
        items: [
          "Basic gym equipment",
          "No dedicated wellness areas",
          "Standard cafeteria food",
          "No wellness programs",
          "No sleep optimization",
          "Limited health support"
        ]
      },
      comparison: {
        neu1Wins: "Members report 35% better sleep",
        difference: "24/7 wellness support"
      }
    }
  ]

  const activeFeatureData = features[activeFeature]

  return (
    <section id="comparison" className="comparison-section py-20 relative overflow-hidden">
      {/* Video Background - Fixed */}
      <div className="absolute inset-0 overflow-hidden ">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover min-w-full min-h-full"
         
        >
          {/* VIDEO SOURCE CHANGED HERE - Use reload.mp4 from public/videos/ */}
          <source 
            src="feature (2).mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Loading overlay */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400">Loading experience...</p>
            </div>
          </div>
        )}
        
        {/* Gradient overlays for better transparency and text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/15 via-transparent to-purple-900/15"></div>
        
        {/* Transparent overlay - adjustable opacity */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Transparent Glass Overlay - Reduced blur for more transparency */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-white/2"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header with Glass Effect */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-blue-200 font-medium tracking-wide text-sm">
              THE FUTURE IS HERE
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-purple-300 bg-clip-text text-transparent">
              Neu1 vs Traditional
            </span>
          </h2>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 max-w-3xl mx-auto border border-white/10 hover:border-white/20 transition-all duration-300">
            <p className="text-gray-200 text-xl leading-relaxed">
              Experience the quantum leap from ordinary hostel living to premium intelligent co-living designed for the modern professional.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Feature Selection - Glass Effect */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="text-blue-300">✨</span>
                  Compare Categories
                </h3>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <button
                      key={feature.id}
                      onClick={() => setActiveFeature(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 backdrop-blur-lg ${
                        activeFeature === index
                          ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/40 shadow-lg shadow-blue-500/20'
                          : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className={`text-2xl transition-transform duration-300 ${
                            activeFeature === index ? 'scale-110' : ''
                          }`}>
                            {feature.neu1.icon}
                          </span>
                          <span className="font-semibold text-white">
                            {feature.category}
                          </span>
                        </div>
                        {activeFeature === index && (
                          <span className="text-blue-300 animate-pulse">→</span>
                        )}
                      </div>
                      {activeFeature === index && (
                        <div className="mt-3">
                          <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stats Card - Glass Effect */}
              <div className="bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h4 className="font-bold text-lg mb-4 text-white">The Impact</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200">
                    <span className="text-gray-200">Productivity Boost</span>
                    <span className="text-green-300 font-bold bg-green-500/20 px-3 py-1 rounded-full">+350%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200">
                    <span className="text-gray-200">Energy Savings</span>
                    <span className="text-cyan-300 font-bold bg-cyan-500/20 px-3 py-1 rounded-full">-40%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200">
                    <span className="text-gray-200">Community Growth</span>
                    <span className="text-pink-300 font-bold bg-pink-500/20 px-3 py-1 rounded-full">+89%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Comparison Cards */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Neu1 Card - Enhanced Glass Effect */}
              <div 
                className="relative group"
                onMouseEnter={() => setHoveredCard('neu1')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Main Card */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border-2 border-blue-400/30 p-8 h-full transition-all duration-300 hover:border-blue-300 hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                  {/* Badge */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-400 to-cyan-300 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg backdrop-blur-md border border-blue-300/30">
                      NEU1 ADVANTAGE
                    </div>
                  </div>

                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`text-5xl mb-4 bg-gradient-to-r ${activeFeatureData.neu1.gradient} bg-clip-text text-transparent`}>
                      {activeFeatureData.neu1.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {activeFeatureData.neu1.title}
                    </h3>
                    <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 border border-blue-400/30">
                      <p className="text-blue-200 text-sm">
                        {activeFeatureData.comparison.neu1Wins}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4">
                    {activeFeatureData.neu1.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group/item p-3 rounded-lg hover:bg-white/5 transition-all duration-200">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 flex items-center justify-center mt-0.5 shadow-lg shadow-blue-500/30">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <span className="text-gray-200 group-hover/item:text-white transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Gradient Bar */}
                  <div className="mt-8">
                    <div className="h-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 rounded-full"></div>
                    <div className="flex justify-between mt-2">
                      <span className="text-blue-200 text-sm">Innovation</span>
                      <span className="text-purple-200 text-sm">Excellence</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Traditional Card - Glass Effect */}
              <div 
                className="relative group"
                onMouseEnter={() => setHoveredCard('other')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600/15 via-transparent to-gray-800/15 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Main Card */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border-2 border-gray-500/30 p-8 h-full transition-all duration-300 hover:border-gray-400 hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-gray-500/20">
                  {/* Badge */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 px-6 py-2 rounded-full font-bold text-sm shadow-lg backdrop-blur-md border border-gray-500/30">
                      TRADITIONAL
                    </div>
                  </div>

                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`text-5xl mb-4 bg-gradient-to-r ${activeFeatureData.other.gradient} bg-clip-text text-transparent`}>
                      {activeFeatureData.other.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {activeFeatureData.other.title}
                    </h3>
                    <div className="inline-block px-4 py-1 rounded-full bg-gray-500/20 border border-gray-400/30">
                      <p className="text-gray-300 text-sm">
                        Standard offering
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4">
                    {activeFeatureData.other.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group/item p-3 rounded-lg hover:bg-white/5 transition-all duration-200">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center mt-0.5 shadow-lg shadow-gray-500/30">
                          <span className="text-gray-300 text-xs font-bold">✗</span>
                        </div>
                        <span className="text-gray-400 group-hover/item:text-gray-300 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Gradient Bar */}
                  <div className="mt-8">
                    <div className="h-2 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-full"></div>
                    <div className="flex justify-between mt-2">
                      <span className="text-gray-400 text-sm">Basic</span>
                      <span className="text-gray-400 text-sm">Limited</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Difference Highlight - Glass Effect */}
            <div className="mt-8">
              <div className="bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <h4 className="text-2xl font-bold text-white mb-2">
                      The Difference Maker
                    </h4>
                    <div className="bg-white/10 rounded-xl p-4 inline-block">
                      <p className="text-gray-200 font-semibold">
                        {activeFeatureData.comparison.difference} better than traditional living
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-5xl font-bold bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
                        ✓
                      </div>
                      <div className="text-sm text-blue-200 bg-blue-500/20 px-3 py-1 rounded-full mt-2">Neu1</div>
                    </div>
                    <div className="text-2xl text-gray-400">vs</div>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-gray-500">✗</div>
                      <div className="text-sm text-gray-400 bg-gray-500/20 px-3 py-1 rounded-full mt-2">Traditional</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive CTA */}
            <div className="mt-8 text-center">
              <button className="group relative bg-gradient-to-r from-blue-500/70 to-purple-500/70 text-white px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 backdrop-blur-lg border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 to-purple-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
                <span className="relative flex items-center justify-center gap-3">
                  <span className="drop-shadow-lg">Experience Neu1 Today</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </span>
              </button>
              <p className="text-gray-300 mt-4 text-sm bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
                Join 500+ professionals who've upgraded their living experience
              </p>
            </div>
          </div>
        </div>

        {/* Floating Stats - Glass Effect */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: "Energy Savings", value: "40%", color: "text-cyan-300", bg: "bg-cyan-500/15" },
            { label: "Productivity", value: "3.5x", color: "text-green-300", bg: "bg-green-500/15" },
            { label: "Community", value: "500+", color: "text-pink-300", bg: "bg-pink-500/15" },
            { label: "Satisfaction", value: "94%", color: "text-yellow-300", bg: "bg-yellow-500/15" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`${stat.bg} backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105`}
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2 drop-shadow-lg`}>{stat.value}</div>
              <div className="text-gray-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/3 rounded-full blur-3xl animate-pulse delay-500 pointer-events-none"></div>

      <style jsx>{`
        .comparison-section {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  )
}

export default Comparison