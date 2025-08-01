import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'

/**
 * Industry showcase slide component
 */
function IndustryShowcaseSlide({ slide, sessionData, isActive }) {
  const { title, subtitle, content } = slide
  const industries = content?.industries || []

  return (
    <div className="min-h-screen bg-dark-bg presentation-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className={cn(
                "glass-effect rounded-xl p-6 h-full transition-all duration-300",
                "hover:shadow-brand-lg hover:scale-105",
                industry.color
              )}>
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-dark-text mb-2">
                    {industry.name}
                  </h3>
                  <div className="text-sm text-brand-primary font-semibold">
                    {industry.impact}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-dark-text mb-2">Applications</h4>
                    <ul className="space-y-1">
                      {industry.applications?.slice(0, 3).map((app, idx) => (
                        <li key={idx} className="text-sm text-dark-text-secondary flex items-start">
                          <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-dark-text-secondary">Market Growth</span>
                      <span className="font-semibold text-brand-primary">{industry.growth}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IndustryShowcaseSlide