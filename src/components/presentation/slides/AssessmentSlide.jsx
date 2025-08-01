import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'

/**
 * Assessment slide component for interactive evaluations
 */
function AssessmentSlide({ slide, sessionData, isActive }) {
  const { title, subtitle, content } = slide
  const { categories = [], scoring = {} } = content || {}
  const [responses, setResponses] = useState({})
  const [showResults, setShowResults] = useState(false)

  const handleResponse = (questionId, value) => {
    setResponses(prev => ({ ...prev, [questionId]: value }))
  }

  const calculateScore = () => {
    let totalScore = 0
    let totalWeight = 0

    categories.forEach(category => {
      const categoryScore = category.questions.reduce((sum, question) => {
        return sum + (responses[question.id] || 0)
      }, 0)
      const avgCategoryScore = categoryScore / category.questions.length
      totalScore += avgCategoryScore * category.weight * 100
      totalWeight += category.weight
    })

    return totalWeight > 0 ? totalScore / totalWeight : 0
  }

  const getScoreLevel = (score) => {
    return scoring.ranges?.find(range => score >= range.min && score <= range.max) || scoring.ranges?.[0]
  }

  const score = calculateScore()
  const level = getScoreLevel(score)

  return (
    <div className="min-h-screen bg-dark-bg presentation-padding">
      <div className="max-w-4xl mx-auto">
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

        {!showResults ? (
          <div className="space-y-8">
            {/* Assessment Categories */}
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
                className="glass-effect rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-dark-text">
                    {category.name}
                  </h3>
                  <div className="text-sm text-dark-text-secondary">
                    Weight: {Math.round(category.weight * 100)}%
                  </div>
                </div>

                <div className="space-y-4">
                  {category.questions.map((question, questionIndex) => (
                    <div key={question.id} className="space-y-2">
                      <p className="text-dark-text font-medium">
                        {question.text}
                      </p>
                      <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((value) => (
                          <button
                            key={value}
                            onClick={() => handleResponse(question.id, value)}
                            className={cn(
                              "w-12 h-12 rounded-full border-2 transition-all duration-200",
                              "hover:scale-110 focus:scale-110",
                              responses[question.id] === value
                                ? "bg-brand-primary border-brand-primary text-white"
                                : "border-white/20 text-dark-text-secondary hover:border-brand-primary/50"
                            )}
                          >
                            {value}
                          </button>
                        ))}
                      </div>
                      <div className="flex justify-between text-xs text-dark-text-muted">
                        <span>Strongly Disagree</span>
                        <span>Strongly Agree</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <button
                onClick={() => setShowResults(true)}
                className="btn-primary px-8 py-3"
                disabled={Object.keys(responses).length === 0}
              >
                Calculate Results
              </button>
            </motion.div>
          </div>
        ) : (
          /* Results */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Overall Score */}
            <div className="glass-effect rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-dark-text mb-4">
                Your AI Readiness Score
              </h3>
              <div className="text-6xl font-bold text-brand-primary mb-4">
                {Math.round(score)}
              </div>
              <div className={cn(
                "text-xl font-semibold mb-2",
                `text-${level?.color}-400`
              )}>
                {level?.level}
              </div>
              <p className="text-dark-text-secondary">
                {level?.description}
              </p>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="w-full bg-white/20 rounded-full h-4">
                  <motion.div
                    className="bg-brand-primary h-4 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${score}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="glass-effect rounded-xl p-6">
              <h4 className="text-xl font-bold text-dark-text mb-6">Category Breakdown</h4>
              <div className="space-y-4">
                {categories.map((category) => {
                  const categoryScore = category.questions.reduce((sum, question) => {
                    return sum + (responses[question.id] || 0)
                  }, 0) / category.questions.length * 20 // Convert to percentage

                  return (
                    <div key={category.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-dark-text">{category.name}</span>
                        <span className="text-brand-primary font-semibold">
                          {Math.round(categoryScore)}%
                        </span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <motion.div
                          className="bg-brand-primary h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${categoryScore}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowResults(false)}
                className="btn-secondary px-6 py-3"
              >
                Retake Assessment
              </button>
              <button className="btn-primary px-6 py-3">
                Download Report
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AssessmentSlide