import React from 'react'

const GalleryModal = ({ show, onHide, imageSrc, altText }) => {
  if (!show) return null

  return (
    <div className={`modal ${show ? 'active' : ''}`} onClick={onHide}>
      <div className="modal-content gallery-modal-content position-relative" onClick={e => e.stopPropagation()}>
        <div className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h2 className="font-grotesk fs-4 fw-bold mb-1">Gallery View</h2>
              <p className="text-gray-300 fs-6">Premium co-living spaces</p>
            </div>
            <button 
              className="close-btn border-0 bg-transparent text-gray-400 hover:text-white transition-colors"
              onClick={onHide}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
          
          <div className="mb-4">
            <img 
              src={imageSrc} 
              alt={altText}
              className="gallery-modal-image w-100 rounded-3"
              style={{ maxHeight: '70vh', objectFit: 'contain' }}
            />
          </div>
          
          <div className="text-center">
            <button 
              className="px-4 py-2 rounded-pill border-2 border-accent/30 text-accent fw-semibold bg-transparent"
              onClick={onHide}
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gallery-modal-content {
          max-width: 90vw;
          max-height: 90vh;
          width: auto;
          height: auto;
          background: linear-gradient(135deg, #0A1A2F 0%, #0E2F4F 50%, #0B5ED7 100%);
          border: 1px solid rgba(43, 176, 255, 0.2);
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          animation: modalPopIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </div>
  )
}

export default GalleryModal