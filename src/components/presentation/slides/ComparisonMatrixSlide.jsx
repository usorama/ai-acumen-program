import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'

/**
 * Comparison matrix slide component for detailed platform comparisons
 */
function ComparisonMatrixSlide({ slide, sessionData, isActive }) {
  const { title, subtitle, content } = slide
  const { categories = [], platforms = [] } = content || {}
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedPlatform, setSelectedPlatform] = useState(null)

  // Calculate weighted scores
  const calculateWeightedScore = (platform) => {
    return categories.reduce((total, category) => {
      const score = platform.scores?.[category.id] || 0
      const weight = category.weight || 0
      return total + (score * weight * 10) // Scale to 100
    }, 0)
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

        {/* Comparison Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect rounded-xl p-6 overflow-x-auto mb-8"
        >
          <table className="w-full min-w-[800px]">
            <thead>
              <tr>
                <th className="text-left p-4 font-semibold text-dark-text">Platform</th>
                {categories.map((category) => (
                  <th
                    key={category.id}
                    className={cn(
                      "text-center p-4 font-semibold text-dark-text cursor-pointer transition-colors hover:text-brand-primary",
                      selectedCategory === category.id && "text-brand-primary bg-brand-primary/10"
                    )}
                    onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                  >
                    <div>{category.name}</div>
                    <div className="text-xs text-dark-text-muted font-normal">
                      Weight: {Math.round(category.weight * 100)}%
                    </div>
                  </th>
                ))}
                <th className="text-center p-4 font-semibold text-dark-text">
                  Total Score
                </th>
              </tr>
            </thead>
            <tbody>
              {platforms.map((platform, platformIndex) => {
                const weightedScore = calculateWeightedScore(platform)
                return (
                  <motion.tr
                    key={platform.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isActive ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + (platformIndex * 0.1) }}
                    className={cn(
                      "border-t border-white/10 hover:bg-white/5 transition-colors cursor-pointer",
                      selectedPlatform === platform.id && "bg-brand-primary/10"
                    )}
                    onClick={() => setSelectedPlatform(selectedPlatform === platform.id ? null : platform.id)}
                  >
                    <td className="p-4">
                      <div className="font-semibold text-dark-text">{platform.name}</div>
                      <div className="text-sm text-dark-text-secondary">{platform.pricing}</div>
                    </td>
                    {categories.map((category) => {
                      const score = platform.scores?.[category.id] || 0
                      return (
                        <td key={category.id} className="p-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <span className="text-lg font-semibold text-dark-text">
                              {score}
                            </span>
                            <div className="flex space-x-0.5">
                              {[...Array(10)].map((_, i) => (
                                <div
                                  key={i}
                                  className={cn(
                                    "w-1 h-4 rounded-full",
                                    i < score ? "bg-brand-primary" : "bg-white/20"
                                  )}
                                />
                              ))}
                            </div>
                          </div>
                        </td>
                      )
                    })}
                    <td className="p-4 text-center">
                      <div className="text-xl font-bold text-brand-primary">
                        {Math.round(weightedScore)}
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2 mt-1">
                        <div
                          className="bg-brand-primary h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${weightedScore}%` }}
                        />
                      </div>
                    </td>
                  </motion.tr>
                )
              })}
            </tbody>
          </table>
        </motion.div>

        {/* Platform Details */}
        {selectedPlatform && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-xl p-6 mb-8"
          >
            {(() => {
              const platform = platforms.find(p => p.id === selectedPlatform)
              return (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-dark-text mb-4">
                      {platform.name} - Details
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <span className="font-semibold text-dark-text">Best For: </span>
                        <span className="text-dark-text-secondary">{platform.bestFor}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-dark-text">Limitations: </span>
                        <span className="text-dark-text-secondary">{platform.limitations}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-dark-text">Pricing: </span>
                        <span className="text-dark-text-secondary">{platform.pricing}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-text mb-3">Category Scores</h4>
                    <div className="space-y-2">
                      {categories.map((category) => {
                        const score = platform.scores?.[category.id] || 0
                        return (
                          <div key={category.id} className="flex items-center justify-between">
                            <span className="text-sm text-dark-text-secondary">{category.name}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-semibold text-dark-text">{score}/10</span>
                              <div className="w-16 bg-white/20 rounded-full h-2">
                                <div
                                  className="bg-brand-primary h-2 rounded-full"
                                  style={{ width: `${score * 10}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })()}
          </motion.div>
        )}

        {/* Category Details */}
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-xl p-6"
          >
            {(() => {
              const category = categories.find(c => c.id === selectedCategory)
              return (
                <div>
                  <h3 className="text-xl font-bold text-dark-text mb-4">
                    {category.name} - Category Analysis
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {platforms.map((platform) => {
                      const score = platform.scores?.[category.id] || 0
                      return (
                        <div key={platform.id} className="bg-white/5 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-dark-text">{platform.name}</span>
                            <span className="text-lg font-bold text-brand-primary">{score}/10</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div
                              className="bg-brand-primary h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${score * 10}%` }}
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })()}
          </motion.div>
        )}

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-8"
        >
          <p className="text-dark-text-muted text-sm">
            Click on platform rows or category headers to see detailed information
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default ComparisonMatrixSlide