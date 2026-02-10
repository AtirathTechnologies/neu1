import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Pricing = ({ config, onEnquiryClick }) => {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [showComparison, setShowComparison] = useState(false)
  const [showCustomPlanModal, setShowCustomPlanModal] = useState(false)
  const [customPlanFeatures, setCustomPlanFeatures] = useState({})
  const [hoveredPlan, setHoveredPlan] = useState(null)
  const [activeTab, setActiveTab] = useState('monthly')

  const pricingPlans = [
    {
      id: 'basic',
      name: "Basic",
      monthlyPrice: config.basic_price,
      yearlyPrice: `$${Math.round(parseFloat(config.basic_price.replace('$', '')) * 11)}`,
      popular: false,
      tagline: "Essential Living",
      icon: "🛏️",
      features: [
        { name: "Fully Furnished Room", included: true },
        { name: "High-Speed Wi-Fi", included: true, speed: "100 Mbps" },
        { name: "Weekly Housekeeping", included: true },
        { name: "24/7 Security", included: true },
        { name: "Common Kitchen Access", included: true },
        { name: "Gym Access", included: false },
        { name: "Laundry Services", included: false },
        { name: "Private Workspace", included: false }
      ],
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 'premium',
      name: "Premium",
      monthlyPrice: config.premium_price,
      yearlyPrice: `$${Math.round(parseFloat(config.premium_price.replace('$', '')) * 11)}`,
      popular: true,
      tagline: "Enhanced Experience",
      icon: "⭐",
      features: [
        { name: "All Basic Features", included: true },
        { name: "Premium Room Location", included: true },
        { name: "Coworking Space Access", included: true },
        { name: "Laundry Services (5kg/week)", included: true },
        { name: "Gym & Fitness Access", included: true },
        { name: "Priority Support", included: true },
        { name: "Monthly Events", included: true },
        { name: "Private Workspace", included: false }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 'elite',
      name: "Elite",
      monthlyPrice: config.elite_price,
      yearlyPrice: `$${Math.round(parseFloat(config.elite_price.replace('$', '')) * 11)}`,
      popular: false,
      tagline: "Ultimate Luxury",
      icon: "👑",
      features: [
        { name: "All Premium Features", included: true },
        { name: "Deluxe Room with Balcony", included: true },
        { name: "Private Workspace", included: true },
        { name: "Unlimited Laundry", included: true },
        { name: "Rooftop Lounge Access", included: true },
        { name: "Concierge Services", included: true },
        { name: "Personal Assistant", included: true },
        { name: "Airport Transfers", included: true }
      ],
      color: "from-amber-500 to-orange-500"
    }
  ]

  const allFeatures = [
    "Fully Furnished Room",
    "High-Speed Wi-Fi",
    "Weekly Housekeeping",
    "24/7 Security",
    "Common Kitchen Access",
    "Gym Access",
    "Laundry Services",
    "Private Workspace",
    "Premium Room Location",
    "Coworking Space Access",
    "Priority Support",
    "Monthly Events",
    "Deluxe Room with Balcony",
    "Unlimited Laundry",
    "Rooftop Lounge Access",
    "Concierge Services",
    "Personal Assistant",
    "Airport Transfers"
  ]

  const CustomPlanModal = () => (
    <AnimatePresence>
      {showCustomPlanModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
          onClick={() => setShowCustomPlanModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-gray-900 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-3xl font-bold text-white font-grotesk">Build Your Custom Plan</h3>
                <p className="text-gray-400 mt-2">Select features to create your perfect living experience</p>
              </div>
              <button
                onClick={() => setShowCustomPlanModal(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {allFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl cursor-pointer transition-all ${customPlanFeatures[feature] ? 'bg-gradient-to-r from-primary/20 to-accent/20 border border-accent' : 'bg-gray-800/50 border border-gray-700'}`}
                  onClick={() => setCustomPlanFeatures(prev => ({
                    ...prev,
                    [feature]: !prev[feature]
                  }))}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${customPlanFeatures[feature] ? 'bg-accent' : 'bg-gray-700'}`}>
                      {customPlanFeatures[feature] && (
                        <svg className="w-4 h-4 text-dark" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7"/>
                        </svg>
                      )}
                    </div>
                    <span className="text-white">{feature}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-6 mb-8">
              <h4 className="text-xl font-bold text-white mb-4">Custom Plan Summary</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Selected Features</span>
                  <span className="text-white">{Object.values(customPlanFeatures).filter(Boolean).length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Base Price</span>
                  <span className="text-white">$899/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Additional Features</span>
                  <span className="text-white">+ $149/month</span>
                </div>
                <div className="border-t border-gray-700 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="text-xl font-bold text-white">Estimated Total</span>
                    <span className="text-2xl font-bold text-accent">$1,048/month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                className="flex-1 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-dark font-bold text-lg hover:opacity-90 transition-opacity"
                onClick={() => {
                  onEnquiryClick({ type: 'custom', features: customPlanFeatures })
                  setShowCustomPlanModal(false)
                }}
              >
                Request Custom Plan
              </button>
              <button
                className="flex-1 py-4 rounded-xl border-2 border-gray-600 text-white font-bold text-lg hover:border-accent transition-colors"
                onClick={() => setShowCustomPlanModal(false)}
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  const PlanComparisonModal = () => (
    <AnimatePresence>
      {showComparison && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
          onClick={() => setShowComparison(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-gray-900 rounded-3xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold text-white font-grotesk">Compare Plans</h3>
              <button
                onClick={() => setShowComparison(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left p-4 text-gray-400 font-medium">Features</th>
                    {pricingPlans.map(plan => (
                      <th key={plan.id} className="text-center p-4">
                        <div className="flex flex-col items-center">
                          <span className="text-xl font-bold text-white">{plan.name}</span>
                          <span className="text-sm text-gray-400">{plan.tagline}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((feature, idx) => (
                    <tr key={idx} className="border-t border-gray-800">
                      <td className="p-4 text-gray-300">{feature}</td>
                      {pricingPlans.map(plan => (
                        <td key={plan.id} className="text-center p-4">
                          {plan.features.some(f => f.name.includes(feature) || feature.includes(f.name)) ? (
                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20">
                              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <path d="M5 13l4 4L19 7"/>
                              </svg>
                            </div>
                          ) : (
                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20">
                              <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <path d="M6 18L18 6M6 6l12 12"/>
                              </svg>
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  const PlanDetailsModal = () => (
    <AnimatePresence>
      {selectedPlan && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
          onClick={() => setSelectedPlan(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className={`bg-gradient-to-br ${selectedPlan.color} rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto`}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{selectedPlan.icon}</span>
                  <h3 className="text-3xl font-bold text-white font-grotesk">{selectedPlan.name}</h3>
                </div>
                <p className="text-white/80">{selectedPlan.tagline}</p>
              </div>
              <button
                onClick={() => setSelectedPlan(null)}
                className="text-white hover:text-dark text-2xl"
              >
                ×
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <div className="flex items-end gap-2 mb-4">
                <span className="text-5xl font-bold text-white">{activeTab === 'monthly' ? selectedPlan.monthlyPrice : selectedPlan.yearlyPrice}</span>
                <span className="text-white/80 text-lg">/month{activeTab === 'yearly' && ' (billed annually)'}</span>
              </div>
              {activeTab === 'yearly' && (
                <div className="text-green-400 text-sm font-medium bg-green-500/10 inline-block px-3 py-1 rounded-full">
                  Save 2 months free!
                </div>
              )}
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-bold text-white">What's Included</h4>
              {selectedPlan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-white">{feature.name}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                className="flex-1 py-4 rounded-xl bg-white text-dark font-bold text-lg hover:opacity-90 transition-opacity"
                onClick={() => {
                  onEnquiryClick({ plan: selectedPlan, billing: activeTab })
                  setSelectedPlan(null)
                }}
              >
                Select This Plan
              </button>
              <button
                className="flex-1 py-4 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-colors"
                onClick={() => setSelectedPlan(null)}
              >
                View Other Plans
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <section id="pricing" className="relative overflow-hidden py-20" style={{ 
      background: 'linear-gradient(180deg, #0E2F4F 0%, #0A1A2F 100%)' 
    }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-primary/10 border border-accent/20 mb-6"
          >
            <span className="text-accent font-grotesk text-lg font-medium">Choose Your Journey</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-grotesk text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Tailored <span className="text-accent">Living</span> Experiences
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-xl max-w-3xl mx-auto mb-8"
          >
            Select from our curated plans or build your own perfect living space
          </motion.p>

          {/* Billing Toggle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 bg-gray-800/50 rounded-full p-2 mb-12"
          >
            <button
              className={`px-6 py-3 rounded-full text-lg font-semibold transition-all ${activeTab === 'monthly' ? 'bg-white text-dark' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab('monthly')}
            >
              Monthly Billing
            </button>
            <button
              className={`px-6 py-3 rounded-full text-lg font-semibold transition-all ${activeTab === 'yearly' ? 'bg-white text-dark' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab('yearly')}
            >
              Yearly Billing
              <span className="ml-2 text-sm bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setShowComparison(true)}
            className="px-6 py-3 rounded-full border-2 border-gray-600 text-white hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
            </svg>
            Compare All Plans
          </button>
          <button
            onClick={() => setShowCustomPlanModal(true)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-accent border border-accent/30 hover:border-accent transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 4v16m8-8H4"/>
            </svg>
            Build Custom Plan
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              className="relative"
            >
              <div className={`pricing-card h-full rounded-3xl p-8 relative overflow-hidden transition-all duration-500 ${plan.popular ? 'border-2 border-accent transform md:scale-105' : 'border border-gray-700'} ${hoveredPlan === plan.id ? 'shadow-2xl' : ''}`}
                   style={{
                     background: plan.popular 
                       ? 'linear-gradient(145deg, rgba(11, 94, 215, 0.1), rgba(0, 184, 255, 0.05))'
                       : 'rgba(255, 255, 255, 0.03)',
                     backdropFilter: 'blur(10px)',
                     transform: hoveredPlan === plan.id ? 'translateY(-10px)' : 'none'
                   }}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-dark px-4 py-2 rounded-full text-sm font-bold z-10">
                    MOST POPULAR
                  </div>
                )}

                <div className="relative z-2">
                  {/* Plan Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{plan.icon}</span>
                        <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                      </div>
                      <p className="text-gray-400">{plan.tagline}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-white">
                        {activeTab === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    {activeTab === 'yearly' && (
                      <p className="text-green-400 text-sm mt-2">Billed annually • Save 20%</p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.slice(0, 6).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path d="M5 13l4 4L19 7"/>
                          </svg>
                        </div>
                        <span className={`${feature.name.includes("All ") ? 'font-bold text-white' : 'text-gray-300'}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                    {plan.features.length > 6 && (
                      <button
                        onClick={() => setSelectedPlan(plan)}
                        className="text-accent hover:text-primary transition-colors text-sm font-medium flex items-center gap-1"
                      >
                        + {plan.features.length - 6} more features
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M9 5l7 7-7 7"/>
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <button
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${plan.popular ? 'bg-gradient-to-r from-primary to-accent text-dark hover:shadow-lg hover:shadow-primary/25' : 'bg-white/10 text-white hover:bg-white/20'} hover:scale-[1.02]`}
                      onClick={() => onEnquiryClick({ plan, billing: activeTab })}
                    >
                      Choose {plan.name}
                    </button>
                    <button
                      className="w-full py-3 rounded-xl border border-gray-600 text-gray-400 hover:text-white hover:border-accent transition-colors text-sm font-medium"
                      onClick={() => setSelectedPlan(plan)}
                    >
                      View Details
                    </button>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 transition-opacity duration-500 ${hoveredPlan === plan.id ? 'opacity-10' : ''}`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 border border-gray-700"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Need Something Special?</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Our team can create a completely customized plan tailored to your specific needs and preferences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowCustomPlanModal(true)}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-dark font-bold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all"
            >
              Build Your Dream Space
            </button>
            <button
              onClick={() => onEnquiryClick({ type: 'consultation' })}
              className="px-8 py-4 rounded-full border-2 border-accent text-accent font-bold text-lg hover:bg-accent/10 transition-colors"
            >
              Schedule Consultation
            </button>
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            All prices include utilities, maintenance, and 24/7 support. No hidden charges. Cancel anytime.
          </p>
        </div>
      </div>

      {/* Modals */}
      <CustomPlanModal />
      <PlanComparisonModal />
      <PlanDetailsModal />

      <style jsx>{`
        .pricing-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }
        
        .pricing-card:hover {
          box-shadow: 0 20px 60px rgba(11, 94, 215, 0.3);
        }
        
        .pricing-card.popular {
          box-shadow: 0 20px 60px rgba(11, 94, 215, 0.4);
        }
        
        @media (max-width: 768px) {
          .pricing-card.popular {
            transform: none;
          }
        }
        
        /* Scrollbar styling for modals */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(11, 94, 215, 0.5);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(11, 94, 215, 0.7);
        }
      `}</style>
    </section>
  )
}

export default Pricing