import React from 'react'

const FloatingButtons = ({ config }) => {
  const handleCallClick = () => {
    const callNumber = config.call_number || '+919876543210'
    const telURL = `tel:${callNumber}`
    window.open(telURL, '_self')
  }

  const handleWhatsAppClick = () => {
    const whatsappNumber = config.whatsapp_number || '919876543210'
    const whatsappMessage = 'Hi! I am interested in learning more about Neu1 Co-Living spaces.'
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappURL, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      {/* Call Now Floating Button */}
      <div 
        className="call-float position-fixed d-flex align-items-center justify-content-center cursor-pointer"
        onClick={handleCallClick}
      >
        <span className="call-tooltip position-absolute">Call Now</span>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="#0A1A2F">
          <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19zM7.5 4H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"/>
        </svg>
      </div>

      {/* WhatsApp Floating Button */}
      <div 
        className="whatsapp-float position-fixed d-flex align-items-center justify-content-center cursor-pointer"
        onClick={handleWhatsAppClick}
      >
        <span className="whatsapp-tooltip position-absolute">Chat on WhatsApp</span>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="#0A1A2F">
          <path d="M16 0C7.164 0 0 7.164 0 16c0 2.825.744 5.488 2.048 7.792L.096 30.496l7.008-1.84A15.923 15.923 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.28c-2.432 0-4.8-.672-6.848-1.936l-.48-.288-5.056 1.328 1.36-4.928-.32-.512A13.216 13.216 0 012.72 16C2.72 8.64 8.64 2.72 16 2.72S29.28 8.64 29.28 16 23.36 29.28 16 29.28zm7.28-9.92c-.4-.192-2.368–1.168-2.736-1.296-.368-.144-.64-.192-.912.192-.272.4-1.04 1.296-1.28 1.568-.24.256-.464.288-.864.096-.4-.192-1.696-.624-3.232-2-.192-.192-2.016-1.808-2.016-1.808-.192-.288-.192-.592 0-.784.192-.192.4-.48.608-.72.192-.24.256-.4.4-.672.128-.272.064-.512-.032-.72-.096-.192-.912-2.192-1.248-3.008-.336-.8-.672-.688-.912-.704h-.784c-.272 0-.72.096-1.088.48-.368.4-1.408 1.376-1.408 3.36s1.44 3.888 1.648 4.16c.192.272 2.912 4.448 7.056 6.24.992.432 1.76.688 2.368.88.992.32 1.904.272 2.624.16.8-.112 2.368-.976 2.704-1.92.336-.928.336-1.744.24-1.92-.096-.176-.352-.272-.752-.48z"/>
        </svg>
      </div>

      <style jsx>{`
        .call-float {
          bottom: 105px;
          right: 30px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0B5ED7, #2BB0FF);
          box-shadow: 0 4px 20px rgba(11, 94, 215, 0.4);
          z-index: 999;
          transition: all 0.3s ease;
          animation: callPulse 2s ease-in-out infinite;
        }
        
        .call-float:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(43, 176, 255, 0.6);
          animation: none;
        }
        
        .call-tooltip {
          right: 70px;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          color: #0A1A2F;
          padding: 10px 16px;
          border-radius: 8px;
          font-weight: 600;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
        }
        
        .call-tooltip::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid white;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
        }
        
        .call-float:hover .call-tooltip {
          opacity: 1;
          right: 75px;
        }
        
        .whatsapp-float {
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0B5ED7, #2BB0FF);
          box-shadow: 0 4px 20px rgba(11, 94, 215, 0.4);
          z-index: 999;
          transition: all 0.3s ease;
          animation: whatsappPulse 2s ease-in-out infinite;
        }
        
        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(43, 176, 255, 0.6);
          animation: none;
        }
        
        .whatsapp-tooltip {
          right: 70px;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          color: #0A1A2F;
          padding: 10px 16px;
          border-radius: 8px;
          font-weight: 600;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
        }
        
        .whatsapp-tooltip::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid white;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
        }
        
        .whatsapp-float:hover .whatsapp-tooltip {
          opacity: 1;
          right: 75px;
        }
        
        @keyframes callPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(11, 94, 215, 0.4); }
          50% { box-shadow: 0 4px 30px rgba(43, 176, 255, 0.7); }
        }
        
        @keyframes whatsappPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(11, 94, 215, 0.4); }
          50% { box-shadow: 0 4px 30px rgba(43, 176, 255, 0.7); }
        }
        
        @media (max-width: 480px) {
          .call-float,
          .whatsapp-float {
            width: 50px;
            height: 50px;
            right: 20px;
          }
          
          .call-float {
            bottom: 90px;
          }
          
          .call-float svg,
          .whatsapp-float svg {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>
    </>
  )
}

export default FloatingButtons