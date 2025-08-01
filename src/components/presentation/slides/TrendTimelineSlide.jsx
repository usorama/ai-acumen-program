import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'

/**
 * Trend timeline slide component
 */
function TrendTimelineSlide({ slide, sessionData, isActive }) {
  const { title, subtitle, content } = slide
  const timeline = content?.timeline || []

  return (
    <div className="min-h-screen bg-dark-bg presentation-padding">
      <div className="max-w-6xl mx-auto">
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

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary to-brand-secondary" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -50 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="relative flex items-start space-x-6"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {item.year}
                </div>

                {/* Content */}
                <div className="flex-1 glass-effect rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-dark-text">
                      {item.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-sm text-dark-text-secondary">Probability</div>
                      <div className="text-lg font-bold text-brand-primary">
                        {item.probability}%
                      </div>
                    </div>
                  </div>

                  <p className="text-dark-text-secondary mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-dark-text mb-2">Key Technologies</h4>
                      <div className="space-y-1">
                        {item.technologies?.map((tech, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                            <span className="text-sm text-dark-text-secondary">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-text mb-2">Expected Impact</h4>
                      <p className="text-sm text-dark-text-secondary">
                        {item.impact}
                      </p>
                    </div>
                  </div>

                  {/* Probability Bar */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-dark-text-secondary">Likelihood</span>
                      <span className="text-brand-primary font-semibold">{item.probability}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <motion.div
                        className="bg-brand-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={isActive ? { width: `${item.probability}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + (0.2 * index) }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendTimelineSlide