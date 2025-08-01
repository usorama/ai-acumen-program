import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'

/**
 * Action plan slide component for next steps
 */
function ActionPlanSlide({ slide, sessionData, isActive }) {
  const { title, subtitle, content } = slide
  const { immediate = [], shortTerm = [], longTerm = [] } = content || {}
  const [checkedItems, setCheckedItems] = useState(new Set())

  const toggleCheck = (itemId) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
      }
      return newSet
    })
  }

  const timeframes = [
    {
      title: 'Immediate Actions',
      subtitle: 'Start Today',
      items: immediate,
      color: 'red',
      icon: '⚡',
      timeframe: '0-1 weeks'
    },
    {
      title: 'Short-term Goals',
      subtitle: 'Next Month',
      items: shortTerm,
      color: 'yellow',
      icon: '🏃',
      timeframe: '1-3 months'
    },
    {
      title: 'Long-term Strategy',
      subtitle: 'Strategic Vision',
      items: longTerm,
      color: 'blue',
      icon: '🎯',
      timeframe: '3+ months'
    }
  ]

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

        {/* Action Plan Timeline */}
        <div className="space-y-8">
          {timeframes.map((timeframe, timeframeIndex) => (
            <motion.div
              key={timeframe.title}
              initial={{ opacity: 0, x: -50 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * timeframeIndex }}
              className="glass-effect rounded-xl p-6"
            >
              {/* Timeframe Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center text-2xl",
                    `bg-${timeframe.color}-500/20`
                  )}>
                    {timeframe.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-text">
                      {timeframe.title}
                    </h3>
                    <p className="text-dark-text-secondary">
                      {timeframe.subtitle}
                    </p>
                  </div>
                </div>
                <div className={cn(
                  "px-3 py-1 rounded-full text-sm font-semibold",
                  `bg-${timeframe.color}-500/20 text-${timeframe.color}-300`
                )}>
                  {timeframe.timeframe}
                </div>
              </div>

              {/* Action Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {timeframe.items.map((item, itemIndex) => {
                  const itemId = `${timeframeIndex}-${itemIndex}`
                  const isChecked = checkedItems.has(itemId)
                  
                  return (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : {}}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.3 + (timeframeIndex * 0.2) + (itemIndex * 0.1)
                      }}
                      className={cn(
                        "p-4 rounded-lg cursor-pointer transition-all duration-200",
                        "hover:bg-white/10 border border-white/10 hover:border-white/20",
                        isChecked && "bg-brand-primary/10 border-brand-primary/30"
                      )}
                      onClick={() => toggleCheck(itemId)}
                    >
                      <div className="flex items-start space-x-3">
                        {/* Checkbox */}
                        <div className={cn(
                          "w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-200",
                          isChecked 
                            ? "bg-brand-primary border-brand-primary"
                            : "border-white/30 hover:border-brand-primary/50"
                        )}>
                          {isChecked && (
                            <motion.svg
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </motion.svg>
                          )}
                        </div>

                        {/* Item Content */}
                        <div className="flex-1">
                          <p className={cn(
                            "text-dark-text font-medium transition-colors",
                            isChecked && "line-through opacity-75"
                          )}>
                            {item}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 glass-effect rounded-xl p-6"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-dark-text mb-4">
              Your Progress
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Overall Progress */}
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-primary mb-2">
                  {Math.round((checkedItems.size / (immediate.length + shortTerm.length + longTerm.length)) * 100)}%
                </div>
                <div className="text-sm text-dark-text-secondary">
                  Overall Complete
                </div>
              </div>

              {/* Individual Timeframes */}
              {timeframes.map((timeframe, index) => {
                const completed = timeframe.items.filter((_, itemIndex) => 
                  checkedItems.has(`${index}-${itemIndex}`)
                ).length
                
                return (
                  <div key={timeframe.title} className="text-center">
                    <div className={cn(
                      "text-2xl font-bold mb-2",
                      `text-${timeframe.color}-400`
                    )}>
                      {completed}/{timeframe.items.length}
                    </div>
                    <div className="text-sm text-dark-text-secondary">
                      {timeframe.title.replace(' Actions', '').replace(' Goals', '').replace(' Strategy', '')}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-6">
              <p className="text-dark-text-secondary text-sm">
                Click items to mark them as complete and track your progress
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ActionPlanSlide