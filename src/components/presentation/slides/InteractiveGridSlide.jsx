import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../../lib/utils'

/**
 * Interactive grid slide component for displaying multiple items with detailed views
 */
function InteractiveGridSlide({ slide, sessionData, isActive }) {
  const { title, subtitle, content } = slide
  const items = content?.items || []
  const [selectedItem, setSelectedItem] = useState(null)
  const [hoveredItem, setHoveredItem] = useState(null)

  const handleItemClick = (item) => {
    setSelectedItem(selectedItem?.id === item.id ? null : item)
  }

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

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isActive ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 + (index * 0.1),
                ease: "easeOut"
              }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleItemClick(item)}
            >
              <div className={cn(
                "glass-effect rounded-xl p-6 h-full transition-all duration-300",
                "border border-white/10 hover:border-brand-primary/50",
                "transform hover:scale-105 hover:shadow-brand-lg",
                selectedItem?.id === item.id && "ring-2 ring-brand-primary bg-brand-primary/10",
                item.color
              )}>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{item.logo}</div>
                  <div className="text-xs text-dark-text-muted">
                    {item.marketPosition}
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-dark-text mb-2 group-hover:text-brand-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-dark-text-secondary mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-dark-text-muted uppercase tracking-wide mb-2">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {item.features?.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white/10 px-2 py-1 rounded-full text-dark-text-secondary"
                      >
                        {feature}
                      </span>
                    ))}
                    {item.features?.length > 3 && (
                      <span className="text-xs text-dark-text-muted">
                        +{item.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                {item.stats && (
                  <div className="border-t border-white/10 pt-3">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {Object.entries(item.stats).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-semibold text-brand-primary">{value}</div>
                          <div className="text-dark-text-muted capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hover Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                  className="absolute top-2 right-2 w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center"
                >
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed View Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-effect-strong rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{selectedItem.logo}</div>
                    <div>
                      <h2 className="text-2xl font-bold text-dark-text">
                        {selectedItem.title}
                      </h2>
                      <p className="text-dark-text-secondary">
                        {selectedItem.marketPosition}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <svg className="w-6 h-6 text-dark-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <h3 className="font-semibold text-dark-text mb-3">Overview</h3>
                      <p className="text-dark-text-secondary leading-relaxed">
                        {selectedItem.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="font-semibold text-dark-text mb-3">Key Features</h3>
                      <div className="space-y-2">
                        {selectedItem.features?.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-brand-primary rounded-full" />
                            <span className="text-dark-text-secondary">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Strengths */}
                    <div>
                      <h3 className="font-semibold text-dark-text mb-3">Core Strengths</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.strengths?.map((strength, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-brand-primary/20 text-brand-primary rounded-full text-sm"
                          >
                            {strength}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Statistics */}
                    {selectedItem.stats && (
                      <div>
                        <h3 className="font-semibold text-dark-text mb-3">Key Statistics</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(selectedItem.stats).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-white/5 rounded-lg">
                              <div className="text-xl font-bold text-brand-primary">{value}</div>
                              <div className="text-sm text-dark-text-muted capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Additional Info */}
                    <div className="space-y-4">
                      <div className="p-4 bg-brand-primary/10 rounded-lg border border-brand-primary/20">
                        <h4 className="font-semibold text-brand-primary mb-2">Market Position</h4>
                        <p className="text-dark-text-secondary text-sm">
                          {selectedItem.marketPosition}
                        </p>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <span className="text-dark-text-secondary">Best Suited For:</span>
                        <span className="font-semibold text-dark-text">
                          {selectedItem.bestFor || 'Enterprise Solutions'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-effect rounded-xl p-6"
        >
          <div className="text-center">
            <h3 className="font-semibold text-dark-text mb-4">
              Click on any platform above to explore detailed information
            </h3>
            <div className="flex items-center justify-center space-x-8 text-sm text-dark-text-secondary">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-brand-primary rounded-full" />
                <span>{items.length} platforms compared</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-brand-secondary rounded-full" />
                <span>Interactive exploration</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-brand-accent rounded-full" />
                <span>Detailed analysis available</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default InteractiveGridSlide