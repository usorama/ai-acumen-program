import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'

/**
 * Takeaways slide component for key points summary
 */
function TakeawaysSlide({ slide, sessionData, isActive }) {
  const { title, subtitle, content } = slide
  const takeaways = content?.takeaways || []

  const priorityConfig = {
    high: {
      bg: 'bg-red-500/20',
      border: 'border-red-500/30',
      text: 'text-red-300',
      icon: '🔥'
    },
    medium: {
      bg: 'bg-yellow-500/20',
      border: 'border-yellow-500/30',
      text: 'text-yellow-300',
      icon: '⚡'
    },
    low: {
      bg: 'bg-blue-500/20',
      border: 'border-blue-500/30',
      text: 'text-blue-300',
      icon: '💡'
    }
  }

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

        {/* Takeaways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {takeaways.map((takeaway, index) => {
            const config = priorityConfig[takeaway.priority] || priorityConfig.medium
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isActive ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 * index,
                  ease: "easeOut"
                }}
                className="group"
              >
                <div className={cn(
                  "glass-effect rounded-xl p-6 h-full transition-all duration-300",
                  "hover:shadow-brand-lg hover:scale-105 border-2",
                  config.bg,
                  config.border
                )}>
                  {/* Priority Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={cn(
                      "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide",
                      config.bg,
                      config.text,
                      config.border,
                      "border"
                    )}>
                      {takeaway.priority} Priority
                    </div>
                    <div className="text-2xl">
                      {takeaway.icon}
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-dark-text group-hover:text-brand-primary transition-colors">
                      {takeaway.title}
                    </h3>
                    <p className="text-dark-text-secondary leading-relaxed">
                      {takeaway.description}
                    </p>
                  </div>

                  {/* Visual Enhancement */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-2">
                      <div className={cn("w-2 h-2 rounded-full", config.text.replace('text-', 'bg-'))} />
                      <span className="text-xs text-dark-text-muted">
                        {takeaway.priority === 'high' ? 'Critical for success' : 
                         takeaway.priority === 'medium' ? 'Important to consider' : 
                         'Good to know'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-effect rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-dark-text mb-6">
            Remember These Key Points
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* High Priority Count */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-red-300">
                  {takeaways.filter(t => t.priority === 'high').length}
                </span>
              </div>
              <div className="text-sm text-dark-text-secondary">
                Critical Points
              </div>
            </div>

            {/* Medium Priority Count */}
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-yellow-300">
                  {takeaways.filter(t => t.priority === 'medium').length}
                </span>
              </div>
              <div className="text-sm text-dark-text-secondary">
                Important Points
              </div>
            </div>

            {/* Low Priority Count */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-blue-300">
                  {takeaways.filter(t => t.priority === 'low').length}
                </span>
              </div>
              <div className="text-sm text-dark-text-secondary">
                Supporting Points
              </div>
            </div>
          </div>

          <p className="text-dark-text-secondary">
            Focus on the high-priority takeaways for immediate implementation
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default TakeawaysSlide