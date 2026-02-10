import React, { useState } from 'react'

const Terms = () => {
  const [expandedTerm, setExpandedTerm] = useState(null)

  const terms = [
    {
      id: 1,
      number: "01",
      title: "Booking & Payment",
      summary: "Payment procedures and cancellation policies",
      description: "A 50% advance payment is required at the time of booking. We charge a refundable security deposit which will be returned within 14 business days after checkout. Full refunds are available for cancellations made 7 or more days prior to check-in.",
      details: [
        "50% advance payment required at booking",
        "Refundable security deposit held during stay",
        "Full refund for cancellations 7+ days prior",
        "50% refund for cancellations 3-7 days prior",
        "No refund for cancellations within 3 days"
      ],
      icon: "💳",
      category: "Financial"
    },
    {
      id: 2,
      number: "02",
      title: "Occupancy Rules",
      summary: "Guest policies and property usage",
      description: "Each room is designed for single occupancy. All guest visits must be approved in advance. Smoking is prohibited inside all premises, and pets are not allowed except for certified service animals with proper documentation.",
      details: [
        "Maximum one occupant per room",
        "Guest visits require prior approval",
        "No smoking inside buildings",
        "Pets not permitted (service animals excepted)",
        "Visitor hours: 9:00 AM to 9:00 PM"
      ],
      icon: "👤",
      category: "Living"
    },
    {
      id: 3,
      number: "03",
      title: "Maintenance & Housekeeping",
      summary: "Property care and service response",
      description: "Weekly housekeeping services are included in your stay. Please report any damages or maintenance issues immediately. We guarantee a 24-hour response time for maintenance requests during business days.",
      details: [
        "Weekly housekeeping service included",
        "Immediate damage reporting required",
        "24-hour maintenance response (business days)",
        "Emergency hotline available 24/7",
        "Scheduled maintenance may occur"
      ],
      icon: "🛠️",
      category: "Services"
    },
    {
      id: 4,
      number: "04",
      title: "Community Guidelines",
      summary: "Shared living expectations",
      description: "Quiet hours are observed from 10:00 PM to 7:00 AM. All residents are expected to maintain cleanliness in common areas. Participation in community events is encouraged but always optional.",
      details: [
        "Quiet hours: 10:00 PM to 7:00 AM",
        "Common areas must be kept clean",
        "Respectful behavior towards all residents",
        "Community events are optional",
        "Noise complaints may result in warnings"
      ],
      icon: "🤝",
      category: "Community"
    },
    {
      id: 5,
      number: "05",
      title: "Liability & Insurance",
      summary: "Responsibility and coverage",
      description: "Residents are responsible for their personal belongings. Management is not liable for loss or theft of personal items. We strongly recommend obtaining renters insurance for additional protection.",
      details: [
        "Personal belongings are resident's responsibility",
        "Management not liable for loss or theft",
        "$100,000 liability insurance recommended",
        "Building insurance covers structural damage only",
        "Fire safety equipment provided"
      ],
      icon: "🛡️",
      category: "Legal"
    },
    {
      id: 6,
      number: "06",
      title: "Termination Policy",
      summary: "Ending your agreement",
      description: "A 30-day written notice is required for checkout. Management reserves the right to terminate agreements for policy violations. These terms may be updated periodically with proper notice.",
      details: [
        "30-day written notice required for termination",
        "Policy violations may lead to termination",
        "Terms subject to change with 30-day notice",
        "Early termination fees may apply",
        "Security deposit return conditions apply"
      ],
      icon: "📄",
      category: "Administrative"
    }
  ]

  const toggleTerm = (id) => {
    setExpandedTerm(expandedTerm === id ? null : id)
  }

  return (
    <section id="terms" className="position-relative overflow-hidden py-5" style={{ 
      background: 'linear-gradient(180deg, #0A1A2F 0%, #0E2F4F 100%)' 
    }}>
      <div className="container position-relative z-1">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="d-inline-block px-4 py-2 rounded-pill bg-primary/10 border border-accent/20 mb-4">
            <span className="text-accent font-grotesk fs-6 fw-medium">Legal Information</span>
          </div>
          <h2 className="font-grotesk fs-1 fw-bold mb-4">
            Terms & <span className="text-accent">Conditions</span>
          </h2>
          <p className="text-gray-300 fs-5">
            Please read these terms carefully before booking with us
          </p>
        </div>

        {/* Terms List */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="space-y-4">
              {terms.map((term) => {
                const isExpanded = expandedTerm === term.id

                return (
                  <div
                    key={term.id}
                    className={`glass-card rounded-4 border transition-all ${
                      isExpanded 
                        ? 'border-accent/30 shadow-lg' 
                        : 'border-accent/10 hover:border-accent/20 hover:shadow-md'
                    }`}
                    style={{
                      background: 'rgba(15, 23, 42, 0.7)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {/* Term Header */}
                    <div 
                      className="p-4 p-md-5 cursor-pointer"
                      onClick={() => toggleTerm(term.id)}
                    >
                      <div className="d-flex align-items-start justify-content-between">
                        <div className="d-flex align-items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-3 bg-gradient-to-br from-primary/20 to-accent/20 border border-accent/20 d-flex align-items-center justify-content-center fs-4">
                            {term.icon}
                          </div>
                          
                          <div className="flex-grow-1">
                            <div className="d-flex align-items-center gap-3 mb-2">
                              <span className="text-accent bg-accent/10 px-3 py-1 rounded-pill fs-7 fw-medium">
                                {term.category}
                              </span>
                              <span className="text-gray-400 font-monospace fs-7">
                                {term.number}
                              </span>
                            </div>
                            
                            <h3 className="font-grotesk fs-4 fw-bold text-white mb-2">
                              {term.title}
                            </h3>
                            
                            <p className="text-gray-300 mb-0">
                              {term.summary}
                            </p>
                          </div>
                        </div>
                        
                        <div className="d-flex align-items-center gap-3 ms-4">
                          <div className={`transition-all ${isExpanded ? 'rotate-180' : ''}`}>
                            <svg className="text-gray-400" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="border-top border-accent/10 px-4 px-md-5 py-4">
                        <div className="row">
                          <div className="col-md-6 mb-4 mb-md-0">
                            <h4 className="text-gray-400 fs-7 fw-medium text-uppercase mb-3">
                              Description
                            </h4>
                            <p className="text-gray-300 leading-relaxed">
                              {term.description}
                            </p>
                          </div>
                          
                          <div className="col-md-6">
                            <h4 className="text-gray-400 fs-7 fw-medium text-uppercase mb-3">
                              Key Points
                            </h4>
                            <ul className="list-unstyled space-y-2">
                              {term.details.map((detail, index) => (
                                <li key={index} className="d-flex align-items-start gap-3">
                                  <div className="flex-shrink-0 w-5 h-5 rounded-circle bg-accent/10 d-flex align-items-center justify-content-center mt-1">
                                    <div className="w-2 h-2 rounded-circle bg-accent"></div>
                                  </div>
                                  <span className="text-gray-300">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass-card {
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .glass-card:hover {
          background: linear-gradient(135deg, rgba(10, 26, 47, 0.8) 0%, rgba(14, 47, 79, 0.6) 100%);
        }
        
        .space-y-4 > * + * {
          margin-top: 1rem;
        }
        
        .space-y-2 > * + * {
          margin-top: 0.5rem;
        }
        
        .leading-relaxed {
          line-height: 1.625;
        }
        
        .rotate-180 {
          transform: rotate(180deg);
        }
        
        .font-monospace {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }
        
        .text-uppercase {
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .fs-7 {
          font-size: 0.875rem;
        }
        
        @media (max-width: 768px) {
          .fs-1 {
            font-size: 2rem !important;
          }
          
          .fs-5 {
            font-size: 1rem !important;
          }
          
          .py-5 {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
          }
        }
        
        .btn-outline-accent {
          border-color: rgba(34, 211, 238, 0.3);
          color: #22d3ee;
        }
        
        .btn-outline-accent:hover {
          background-color: rgba(34, 211, 238, 0.1);
          border-color: rgba(34, 211, 238, 0.5);
        }
        
        .bg-gradient-to-br {
          background: linear-gradient(135deg, var(--tw-gradient-stops));
        }
        
        .from-primary\/20 {
          --tw-gradient-from: rgba(59, 130, 246, 0.2);
        }
        
        .to-accent\/20 {
          --tw-gradient-to: rgba(34, 211, 238, 0.2);
        }
        
        .border-accent\/10 {
          border-color: rgba(34, 211, 238, 0.1);
        }
        
        .border-accent\/20 {
          border-color: rgba(34, 211, 238, 0.2);
        }
        
        .border-accent\/30 {
          border-color: rgba(34, 211, 238, 0.3);
        }
        
        .bg-accent\/10 {
          background-color: rgba(34, 211, 238, 0.1);
        }
        
        .shadow-lg {
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2);
        }
        
        .shadow-md {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
        }
        
        .hover\:shadow-md:hover {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  )
}

export default Terms