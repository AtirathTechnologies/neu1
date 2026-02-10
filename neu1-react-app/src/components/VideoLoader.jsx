import React, { useEffect, useState } from 'react'

const VideoLoader = ({ isReload }) => {
  const [showVideo, setShowVideo] = useState(true)
  const [videoEnded, setVideoEnded] = useState(false)

  useEffect(() => {
    if (isReload) {
      // For reload, show for 2 seconds then fade out
      const timer = setTimeout(() => {
        setShowVideo(false)
      }, 2000)
      return () => clearTimeout(timer)
    } else {
      // For normal load, wait for video to end or timeout
      const timer = setTimeout(() => {
        setShowVideo(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isReload])

  const handleVideoEnd = () => {
    setVideoEnded(true)
    setShowVideo(false)
  }

  return (
    <>
      {/* Glitch Video for reload */}
      {isReload && showVideo && (
        <video
          id="glitchVideo"
          autoPlay
          muted
          playsInline
          className="glitch-video position-fixed top-0 start-0 w-100 h-100 object-fit-cover"
          onEnded={handleVideoEnd}
        >
          <source src="reload.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Splash Video for first load */}
      {!isReload && showVideo && (
        <video
          id="splashVideo"
          autoPlay
          muted
          playsInline
          className="splash-video position-fixed top-0 start-0 w-100 h-100 object-fit-cover"
          onEnded={handleVideoEnd}
        >
          <source src="living (2).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <style jsx>{`
        .glitch-video {
          z-index: 9999;
          background: #0A1A2F;
          opacity: 1;
          transition: opacity 0.8s ease;
        }
        
        .glitch-video.fade-out {
          opacity: 0;
          pointer-events: none;
        }
        
        .splash-video {
          z-index: 9998;
          background: #0A1A2F;
          opacity: 1;
          transition: opacity 1s ease-out;
        }
        
        .splash-video.fade-out {
          opacity: 0;
          pointer-events: none;
        }
      `}</style>
    </>
  )
}

export default VideoLoader