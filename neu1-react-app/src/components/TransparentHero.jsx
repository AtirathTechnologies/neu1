import React, { useState } from 'react'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCheck, FaUser, FaExternalLinkAlt } from 'react-icons/fa'

const TransparentHero = ({ onEnquiryClick, config }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeField, setActiveField] = useState('')

  // Location for Google Maps
  const locationAddress = "Tech Park Road, Whitefield, Bangalore, Karnataka 560066"
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationAddress)}`

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFocus = (fieldName) => {
    setActiveField(fieldName)
  }

  const handleBlur = () => {
    setActiveField('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <section className="transparent-hero-section">
      <div className="transparent-hero-overlay"></div>
      
      <div className="container">
        {/* Centered Title at Top */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="main-title">Get In Touch</h1>
            <p className="main-subtitle">
              Reach out to us for any questions or to schedule a personal tour
            </p>
          </div>
        </div>

        <div className="row align-items-stretch">
          
          {/* Left Column: Contact Form */}
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="contact-form-card h-100 p-4 p-lg-5">
              <div className="mb-4">
                <h2 className="section-title mb-3">Send Us a Message</h2>
                <p className="section-subtitle">
                  Fill out the form below and our team will contact you to arrange a personal tour.
                </p>
              </div>
              
              {isSubmitted ? (
                <div className="success-message text-center p-4 d-flex flex-column justify-content-center h-100">
                  <div className="success-icon mb-3">
                    <FaCheck />
                  </div>
                  <h3 className="mb-2">Thank You!</h3>
                  <p className="mb-4">We'll contact you shortly to schedule your tour.</p>
                  <button 
                    className="btn btn-outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="d-flex flex-column h-100">
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('name')}
                          onBlur={handleBlur}
                          className={`form-control form-input ${activeField === 'name' ? 'active' : ''}`}
                          placeholder="Your Name"
                          required
                        />
                        <div className="input-icon">
                          <FaUser className={`icon ${activeField === 'name' ? 'icon-active' : ''}`} />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('email')}
                          onBlur={handleBlur}
                          className={`form-control form-input ${activeField === 'email' ? 'active' : ''}`}
                          placeholder="Email Address"
                          required
                        />
                        <div className="input-icon">
                          <FaEnvelope className={`icon ${activeField === 'email' ? 'icon-active' : ''}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group mb-4">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('phone')}
                      onBlur={handleBlur}
                      className={`form-control form-input ${activeField === 'phone' ? 'active' : ''}`}
                      placeholder="Phone Number"
                      required
                    />
                    <div className="input-icon">
                      <FaPhone className={`icon ${activeField === 'phone' ? 'icon-active' : ''}`} />
                    </div>
                  </div>
                  
                  <div className="form-group mb-4 flex-grow-1">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      className={`form-control message-textarea ${activeField === 'message' ? 'active' : ''}`}
                      placeholder="Your message or preferred tour time"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-100 mt-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : 'Request Tour'}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Right Column: Contact Information */}
          <div className="col-lg-5">
            <div className="contact-info-card h-100 p-4 p-lg-5">
              <div className="mb-4">
                <h2 className="section-title mb-3">Contact Information</h2>
                <p className="section-subtitle">
                  Reach out to our community team for any questions or concerns.
                </p>
              </div>
              
              <div className="contact-list d-flex flex-column justify-content-between h-100">
                <div>
                  <div className="contact-item mb-3">
                    <div className="contact-icon phone-icon">
                      <FaPhone />
                    </div>
                    <div className="contact-content">
                      <h4 className="contact-title">PHONE</h4>
                      <a 
                        href={`tel:${config?.call_number || '+919876543210'}`} 
                        className="contact-link"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-item mb-3">
                    <div className="contact-icon whatsapp-icon">
                      <FaWhatsapp />
                    </div>
                    <div className="contact-content">
                      <h4 className="contact-title">WHATSAPP</h4>
                      <a 
                        href={`https://wa.me/${config?.whatsapp_number || '919876543210'}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-link"
                      >
                        Message on WhatsApp 
                        <FaExternalLinkAlt className="ms-2 external-link-icon" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-item mb-3">
                    <div className="contact-icon email-icon">
                      <FaEnvelope />
                    </div>
                    <div className="contact-content">
                      <h4 className="contact-title">EMAIL</h4>
                      <a 
                        href={`mailto:${config?.email_recipient || 'enquiry@neu1.com'}`} 
                        className="contact-link"
                      >
                        enquiry@neu1.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-item mb-3">
                    <div className="contact-icon location-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="contact-content">
                      <h4 className="contact-title">LOCATION</h4>
                      <a 
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="location-link"
                      >
                        <div className="location-content">
                          <p className="contact-text mb-1">
                            Tech Park Road, Whitefield
                          </p>
                          <p className="contact-text mb-1">
                            Bangalore, Karnataka
                          </p>
                          <p className="contact-text mb-2">
                            560066
                          </p>
                          <div className="map-preview mt-2">
                            <span className="map-link-text">Open in Google Maps</span>
                            <FaExternalLinkAlt className="ms-2 external-link-icon" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="border-top pt-3 mt-3">
                  <p className="small-text mb-0">
                    <strong>Office Hours:</strong> Monday - Saturday, 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .transparent-hero-section {
          position: relative;
          padding: 100px 0 80px;
          background: linear-gradient(135deg, rgba(10, 26, 47, 0.95) 0%, rgba(14, 47, 79, 0.95) 100%);
        }
        
        .transparent-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(10, 26, 47, 0.95) 0%, 
            rgba(11, 94, 215, 0.85) 50%, 
            rgba(14, 47, 79, 0.95) 100%
          );
          opacity: 0.95;
        }
        
        .main-title {
          font-size: 3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          display: inline-block;
        }
        
        .main-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #0B5ED7 0%, #2BB0FF 100%);
          border-radius: 2px;
        }
        
        .main-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.2rem;
          max-width: 600px;
          margin: 2rem auto 0;
          line-height: 1.6;
        }
        
        .contact-form-card,
        .contact-info-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          min-height: 650px;
          display: flex;
          flex-direction: column;
        }
        
        .h-100 {
          height: 100% !important;
        }
        
        .section-title {
          font-size: 1.6rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }
        
        .section-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }
        
        .form-group {
          position: relative;
        }
        
        .form-input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          padding: 20px 20px 20px 60px;
          border-radius: 12px;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          width: 100%;
          margin-bottom: 0;
          height: 65px;
          font-weight: 400;
          line-height: 1.5;
        }
        
        .form-input.active {
          background: rgba(255, 255, 255, 0.08);
          border-color: #2BB0FF;
          box-shadow: 0 0 0 3px rgba(43, 176, 255, 0.2);
        }
        
        .form-input:focus {
          background: rgba(255, 255, 255, 0.08);
          border-color: #2BB0FF;
          box-shadow: 0 0 0 3px rgba(43, 176, 255, 0.2);
          outline: none;
        }
        
        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
          font-size: 1.05rem;
          font-weight: 400;
        }
        
        .message-textarea {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          padding: 22px;
          border-radius: 12px;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          width: 100%;
          min-height: 200px;
          height: 100%;
          max-height: 250px;
          resize: vertical;
          font-weight: 400;
          line-height: 1.6;
          display: block;
          overflow-y: auto;
        }
        
        .message-textarea.active {
          background: rgba(255, 255, 255, 0.08);
          border-color: #2BB0FF;
          box-shadow: 0 0 0 3px rgba(43, 176, 255, 0.2);
        }
        
        .message-textarea:focus {
          background: rgba(255, 255, 255, 0.08);
          border-color: #2BB0FF;
          box-shadow: 0 0 0 3px rgba(43, 176, 255, 0.2);
          outline: none;
        }
        
        .message-textarea::placeholder {
          color: rgba(255, 255, 255, 0.5);
          font-size: 1.05rem;
          font-weight: 400;
          line-height: 1.6;
        }
        
        .input-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
          pointer-events: none;
          z-index: 2;
        }
        
        .icon {
          font-size: 1.3rem;
          transition: all 0.3s ease;
        }
        
        .icon-active {
          color: #2BB0FF;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #0B5ED7 0%, #2BB0FF 100%);
          border: none;
          color: white;
          padding: 20px;
          font-size: 1.2rem;
          font-weight: 600;
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          margin-top: 10px;
          height: 65px;
        }
        
        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(11, 94, 215, 0.4);
        }
        
        .btn-primary:active:not(:disabled) {
          transform: translateY(0);
        }
        
        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none !important;
        }
        
        .spinner-border {
          width: 1.2rem;
          height: 1.2rem;
          border-width: 2px;
        }
        
        .btn-outline {
          background: transparent;
          border: 2px solid #0B5ED7;
          color: #0B5ED7;
          padding: 12px 28px;
          border-radius: 10px;
          font-weight: 500;
          font-size: 1.05rem;
          transition: all 0.3s ease;
        }
        
        .btn-outline:hover {
          background: rgba(11, 94, 215, 0.1);
          transform: translateY(-1px);
        }
        
        .success-message {
          background: rgba(40, 167, 69, 0.1);
          border: 1px solid rgba(40, 167, 69, 0.2);
          border-radius: 12px;
          height: 100%;
        }
        
        .success-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          background: rgba(40, 167, 69, 0.2);
          border-radius: 50%;
          color: #28a745;
          font-size: 2rem;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.4);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(40, 167, 69, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(40, 167, 69, 0);
          }
        }
        
        .success-message h3 {
          color: #28a745;
          font-size: 2rem;
          font-weight: 600;
          animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .success-message p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.1rem;
          animation: fadeIn 0.5s ease 0.2s both;
        }
        
        .contact-list {
          height: 100%;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px;
          border-radius: 12px;
          transition: all 0.3s ease;
          margin-bottom: 16px;
        }
        
        .contact-item:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(5px);
        }
        
        .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 12px;
          color: white;
          flex-shrink: 0;
          transition: all 0.3s ease;
          font-size: 1.2rem;
        }
        
        /* Phone Icon Gradient */
        .phone-icon {
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
        }
        
        /* WhatsApp Icon Gradient */
        .whatsapp-icon {
          background: linear-gradient(135deg, #25D366 0%, #075E54 100%);
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
        }
        
        /* Email Icon Gradient */
        .email-icon {
          background: linear-gradient(135deg, #EA4335 0%, #B23121 100%);
          box-shadow: 0 4px 15px rgba(234, 67, 53, 0.3);
        }
        
        /* Location Icon Gradient */
        .location-icon {
          background: linear-gradient(135deg, #4285F4 0%, #0B5ED7 100%);
          box-shadow: 0 4px 15px rgba(66, 133, 244, 0.3);
        }
        
        .contact-item:hover .contact-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }
        
        .contact-content {
          flex: 1;
        }
        
        .contact-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .contact-link {
          color: #ffffff;
          font-size: 1.15rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          line-height: 1.4;
        }
        
        .contact-link:hover {
          color: #2BB0FF;
          text-decoration: underline;
        }
        
        .external-link-icon {
          font-size: 0.9rem;
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        
        .contact-link:hover .external-link-icon {
          opacity: 1;
          transform: translateX(2px);
        }
        
        .location-link {
          text-decoration: none;
          color: inherit;
          display: block;
          transition: all 0.3s ease;
        }
        
        .location-link:hover {
          transform: translateX(3px);
        }
        
        .location-content {
          position: relative;
        }
        
        .contact-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.05rem;
          line-height: 1.4;
          margin: 0;
          transition: color 0.3s ease;
        }
        
        .location-link:hover .contact-text {
          color: #2BB0FF;
        }
        
        .map-preview {
          display: inline-flex;
          align-items: center;
          background: rgba(66, 133, 244, 0.1);
          padding: 10px 16px;
          border-radius: 10px;
          font-size: 0.95rem;
          color: #4285F4;
          transition: all 0.3s ease;
        }
        
        .location-link:hover .map-preview {
          background: rgba(66, 133, 244, 0.2);
          transform: translateY(-1px);
        }
        
        .map-link-text {
          font-weight: 500;
        }
        
        .border-top {
          border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
        }
        
        .small-text {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
          margin: 0;
          line-height: 1.5;
        }
        
        .flex-grow-1 {
          flex-grow: 1 !important;
        }
        
        .mt-2 {
          margin-top: 8px !important;
        }
        
        @media (max-width: 768px) {
          .transparent-hero-section {
            padding: 80px 0 60px;
          }
          
          .main-title {
            font-size: 2.2rem;
          }
          
          .main-subtitle {
            font-size: 1rem;
            padding: 0 20px;
          }
          
          .section-title {
            font-size: 1.4rem;
          }
          
          .contact-form-card,
          .contact-info-card {
            padding: 24px !important;
            min-height: auto;
            margin-bottom: 20px;
          }
          
          .contact-item {
            padding: 14px;
            margin-bottom: 14px;
          }
          
          .contact-icon {
            width: 48px;
            height: 48px;
            font-size: 1.1rem;
          }
          
          .form-input {
            padding: 18px 18px 18px 55px;
            font-size: 1.05rem;
            height: 60px;
          }
          
          .message-textarea {
            min-height: 180px;
            padding: 20px;
            font-size: 1.05rem;
            max-height: 220px;
          }
          
          .btn-primary {
            padding: 18px;
            font-size: 1.1rem;
            height: 60px;
          }
        }
        
        @media (max-width: 576px) {
          .transparent-hero-section {
            padding: 60px 0 40px;
          }
          
          .main-title {
            font-size: 1.8rem;
          }
          
          .main-subtitle {
            font-size: 0.9rem;
          }
          
          .section-title {
            font-size: 1.3rem;
          }
          
          .form-input {
            padding: 16px 16px 16px 50px;
            font-size: 1rem;
            height: 58px;
          }
          
          .input-icon {
            left: 16px;
          }
          
          .icon {
            font-size: 1.2rem;
          }
          
          .contact-icon {
            width: 44px;
            height: 44px;
            font-size: 1rem;
          }
          
          .contact-link {
            font-size: 1.05rem;
          }
          
          .contact-text {
            font-size: 1rem;
          }
          
          .btn-primary {
            padding: 16px;
            font-size: 1rem;
            height: 58px;
          }
          
          .message-textarea {
            padding: 18px;
            font-size: 1rem;
            min-height: 150px;
            max-height: 200px;
          }
        }
      `}</style>
    </section>
  )
}

export default TransparentHero