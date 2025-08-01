import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'

/**
 * Agenda slide component for session overview
 */
function AgendaSlide({ slide, sessionData, isActive }) {
  const { title, content } = slide
  const items = content?.items || []

  return (
    <div className="min-h-screen bg-dark-bg presentation-padding">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-dark-text mb-6">
            {title}
          </h1>
          {sessionData && (
            <p className="text-xl text-dark-text-secondary">
              Session {sessionData.id}: {sessionData.title}
            </p>
          )}
        </motion.div>

        {/* Agenda Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isActive ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + (index * 0.1),
                ease: "easeOut"
              }}
              className="group cursor-pointer"
            >
              <div className="glass-effect rounded-xl p-8 h-full transition-all duration-300 hover:shadow-brand-lg hover:scale-105 border border-white/10 group-hover:border-brand-primary/30">
                {/* Icon and Duration */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center text-2xl group-hover:bg-brand-primary/30 transition-colors">
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-dark-text-secondary">Duration</div>
                    <div className="text-lg font-semibold text-brand-primary">
                      {item.duration}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-dark-text mb-4 group-hover:text-brand-primary transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                {item.description && (
                  <p className="text-dark-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                )}

                {/* Interactive Elements */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    {/* Learning Type */}
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-primary rounded-full" />
                      <span className="text-xs text-dark-text-muted">
                        {item.type || 'Interactive'}
                      </span>
                    </div>

                    {/* Engagement Level */}
                    <div className="flex items-center space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            "w-2 h-2 rounded-full",
                            i < (item.engagement || 2) 
                              ? "bg-brand-primary" 
                              : "bg-white/20"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Session Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-effect rounded-xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Total Duration */}
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-dark-text mb-2">Total Duration</h4>
              <p className="text-2xl font-bold text-brand-primary">
                {items.reduce((total, item) => {
                  const minutes = parseInt(item.duration.replace(/\D/g, '')) || 0
                  return total + minutes
                }, 0)} min
              </p>
            </div>

            {/* Interactive Elements */}
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-dark-text mb-2">Interactive Elements</h4>
              <p className="text-2xl font-bold text-brand-secondary">
                {items.length}
              </p>
            </div>

            {/* Learning Objectives */}
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecapinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="font-semibold text-dark-text mb-2">Key Objectives</h4>
              <p className="text-2xl font-bold text-brand-accent">
                {sessionData?.learningObjectives?.length || 4}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <p className="text-dark-text-muted text-sm">
            Use arrow keys or the controls below to navigate through the session
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default AgendaSlide