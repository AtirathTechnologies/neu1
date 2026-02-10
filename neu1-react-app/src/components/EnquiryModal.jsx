import React, { useState } from 'react'

const EnquiryModal = ({ show, onHide, config }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    check_in_date: '',
    duration: '',
    room_preference: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Open WhatsApp with form data
      const whatsappNumber = config.whatsapp_number || '919876543210'
      const whatsappMessage = `*New Booking Request from Neu1*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Check-in:* ${formData.check_in_date}\n*Duration:* ${formData.duration}\n*Room:* ${formData.room_preference}\n*Message:* ${formData.message}`
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
      window.open(whatsappURL, '_blank', 'noopener,noreferrer')

      // Open email client
      const emailRecipient = config.email_recipient || 'enquiry@neu1.com'
      const emailSubject = `New Booking Request from ${formData.name}`
      const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCheck-in Date: ${formData.check_in_date}\nDuration: ${formData.duration}\nRoom Preference: ${formData.room_preference}\n\nMessage:\n${formData.message}`
      const mailtoURL = `mailto:${emailRecipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      window.open(mailtoURL, '_blank', 'noopener,noreferrer')

      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          check_in_date: '',
          duration: '',
          room_preference: '',
          message: ''
        })
        onHide()
      }, 2000)
    } catch (error) {
      console.error('Submission error:', error)
      alert('Failed to submit request. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (!show) return null

  return (
    <div className="modal-overlay" onClick={onHide}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="header-content">
            <h2 className="modal-title">Book Your Stay</h2>
            <p className="modal-subtitle">Fill in your details and we'll get back to you within 24 hours</p>
          </div>
          <button 
            className="modal-close-btn"
            onClick={onHide}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <svg className="form-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <svg className="form-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                <svg className="form-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="form-group">
              <label htmlFor="check_in_date" className="form-label">
                <svg className="form-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Check-in Date *
              </label>
              <input
                type="date"
                id="check_in_date"
                name="check_in_date"
                required
                value={formData.check_in_date}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="duration" className="form-label">
                <svg className="form-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Duration *
              </label>
              <select
                id="duration"
                name="duration"
                required
                value={formData.duration}
                onChange={handleInputChange}
                className="form-input form-select"
              >
                <option value="">Select duration</option>
                <option value="1-month">1 Month</option>
                <option value="3-months">3 Months</option>
                <option value="6-months">6 Months</option>
                <option value="12-months">12 Months</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="room_preference" className="form-label">
                <svg className="form-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
                Room Preference *
              </label>
              <select
                id="room_preference"
                name="room_preference"
                required
                value={formData.room_preference}
                onChange={handleInputChange}
                className="form-input form-select"
              >
                <option value="">Select plan</option>
                <option value="basic">Basic - ₹12,999/mo</option>
                <option value="premium">Premium - ₹18,999/mo</option>
                <option value="elite">Elite - ₹24,999/mo</option>
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message" className="form-label">
              <svg className="form-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
              </svg>
              Additional Requirements
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleInputChange}
              className="form-input form-textarea"
              placeholder="Tell us anything specific you need..."
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="submit-button"
          >
            {submitting ? (
              <>
                <span className="spinner"></span>
                Submitting...
              </>
            ) : (
              'Submit Booking Request'
            )}
          </button>

          <div className="form-footer">
            <p className="footer-text">
              By submitting, you agree to our Terms & Conditions. We'll contact you within 24 hours to confirm your booking.
            </p>
          </div>
        </form>

        {success && (
          <div className="success-toast">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 13l4 4L19 7"/>
            </svg>
            <span>Booking submitted successfully!</span>
          </div>
        )}
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(10, 26, 47, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-container {
          background: linear-gradient(135deg, #0A1A2F 0%, #0E2F4F 50%, #0B5ED7 100%);
          background-size: 200% 200%;
          border: 1px solid rgba(43, 176, 255, 0.15);
          border-radius: 16px;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.4s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-header {
          padding: 24px 32px;
          border-bottom: 1px solid rgba(43, 176, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
        }

        .header-content {
          flex: 1;
        }

        .modal-title {
          font-size: 24px;
          font-weight: 700;
          color: white;
          margin: 0 0 8px 0;
          font-family: 'Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .modal-subtitle {
          font-size: 14px;
          color: #94A3B8;
          margin: 0;
          line-height: 1.5;
        }

        .modal-close-btn {
          background: rgba(43, 176, 255, 0.1);
          border: 1px solid rgba(43, 176, 255, 0.2);
          border-radius: 8px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94A3B8;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .modal-close-btn:hover {
          color: white;
          background: rgba(43, 176, 255, 0.2);
          transform: rotate(90deg);
        }

        .modal-form {
          padding: 32px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 24px;
        }

        @media (max-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #94A3B8;
          margin-bottom: 8px;
        }

        .form-icon {
          opacity: 0.7;
        }

        .form-input {
          background: rgba(10, 26, 47, 0.6);
          border: 1px solid rgba(43, 176, 255, 0.2);
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 15px;
          color: white;
          transition: all 0.3s ease;
          width: 100%;
          font-family: inherit;
        }

        .form-input::placeholder {
          color: #64748B;
        }

        .form-input:focus {
          outline: none;
          border-color: #0B5ED7;
          box-shadow: 0 0 0 3px rgba(11, 94, 215, 0.1);
          background: rgba(10, 26, 47, 0.8);
        }

        .form-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748B'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          background-size: 16px;
          padding-right: 40px;
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
          line-height: 1.5;
        }

        .submit-button {
          background: linear-gradient(135deg, #0B5ED7 0%, #2BB0FF 100%);
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          padding: 16px;
          width: 100%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 24px;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(11, 94, 215, 0.3);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .form-footer {
          border-top: 1px solid rgba(43, 176, 255, 0.1);
          padding-top: 20px;
        }

        .footer-text {
          font-size: 13px;
          color: #64748B;
          text-align: center;
          line-height: 1.5;
          margin: 0;
        }

        .success-toast {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: linear-gradient(135deg, #10B981 0%, #34D399 100%);
          color: white;
          padding: 16px 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 500;
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
          animation: slideIn 0.3s ease;
          z-index: 2000;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Custom scrollbar */
        .modal-container::-webkit-scrollbar {
          width: 8px;
        }

        .modal-container::-webkit-scrollbar-track {
          background: rgba(10, 26, 47, 0.3);
          border-radius: 4px;
        }

        .modal-container::-webkit-scrollbar-thumb {
          background: rgba(43, 176, 255, 0.3);
          border-radius: 4px;
        }

        .modal-container::-webkit-scrollbar-thumb:hover {
          background: rgba(43, 176, 255, 0.5);
        }

        /* Date picker styling */
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(0.5);
          cursor: pointer;
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        input[type="date"]::-webkit-calendar-picker-indicator:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  )
}

export default EnquiryModal