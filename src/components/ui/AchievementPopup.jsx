import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn, createConfetti } from '../../lib/utils'
import { getRarityColor } from '../../data/achievements'

/**
 * Achievement popup notification component
 */
function AchievementPopup({ achievement, onDismiss, autoHideDuration = 5000 }) {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    // Create confetti effect for rare+ achievements
    if (achievement.rarity === 'rare' || achievement.rarity === 'epic' || achievement.rarity === 'legendary') {
      createConfetti({
        count: achievement.rarity === 'legendary' ? 100 : achievement.rarity === 'epic' ? 75 : 50,
        colors: ['#1B9AAA', '#6AD5CB', '#58B09C', '#A1E8CC']
      })
    }

    // Auto-hide timer
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, autoHideDuration)

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev - (100 / (autoHideDuration / 100))
        return newProgress <= 0 ? 0 : newProgress
      })
    }, 100)

    return () => {
      clearTimeout(hideTimer)
      clearInterval(progressInterval)
    }
  }, [autoHideDuration, achievement.rarity])

  const handleDismiss = () => {
    setIsVisible(false)
    setTimeout(() => {
      if (onDismiss) onDismiss(achievement.id)
    }, 300)
  }

  const rarityConfig = {
    common: {
      bgClass: 'bg-gray-500/20',
      borderClass: 'border-gray-500/30',
      textClass: 'text-gray-300',
      glowClass: 'shadow-gray-500/20'
    },
    uncommon: {
      bgClass: 'bg-green-500/20',
      borderClass: 'border-green-500/30',
      textClass: 'text-green-300',
      glowClass: 'shadow-green-500/20'
    },
    rare: {
      bgClass: 'bg-blue-500/20',
      borderClass: 'border-blue-500/30',
      textClass: 'text-blue-300',
      glowClass: 'shadow-blue-500/20'
    },
    epic: {
      bgClass: 'bg-purple-500/20',
      borderClass: 'border-purple-500/30',
      textClass: 'text-purple-300',
      glowClass: 'shadow-purple-500/20'
    },
    legendary: {
      bgClass: 'bg-yellow-500/20',
      borderClass: 'border-yellow-500/30',
      textClass: 'text-yellow-300',
      glowClass: 'shadow-yellow-500/20'
    }
  }

  const config = rarityConfig[achievement.rarity] || rarityConfig.common

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ 
            x: 400, 
            opacity: 0, 
            scale: 0.8,
            rotate: 5 
          }}
          animate={{ 
            x: 0, 
            opacity: 1, 
            scale: 1,
            rotate: 0 
          }}
          exit={{ 
            x: 400, 
            opacity: 0, 
            scale: 0.8,
            rotate: -5 
          }}
          transition={{ 
            type: "spring", 
            damping: 20, 
            stiffness: 300,
            duration: 0.5
          }}
          className={cn(
            "fixed top-4 right-4 z-50 w-80 max-w-sm",
            "glass-effect-strong rounded-xl border-2",
            config.bgClass,
            config.borderClass,
            config.glowClass,
            "shadow-2xl overflow-hidden cursor-pointer group"
          )}
          onClick={handleDismiss}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 overflow-hidden">
            <motion.div
              className={cn("h-full", `bg-${achievement.rarity === 'legendary' ? 'yellow' : achievement.rarity === 'epic' ? 'purple' : achievement.rarity === 'rare' ? 'blue' : 'brand'}-400`)}
              initial={{ width: "100%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>

          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleDismiss()
            }}
            className="absolute top-2 right-2 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Dismiss achievement"
          >
            <svg className="w-3 h-3 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-4">
            {/* Header */}
            <div className="flex items-start space-x-3 mb-3">
              {/* Achievement Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", damping: 15 }}
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center text-2xl",
                  config.bgClass,
                  config.borderClass,
                  "border shadow-lg"
                )}
              >
                {achievement.icon}
              </motion.div>

              {/* Achievement Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-bold text-white text-sm truncate"
                  >
                    {achievement.title}
                  </motion.h3>
                  
                  {/* Rarity Badge */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className={cn(
                      "px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide",
                      config.bgClass,
                      config.textClass,
                      config.borderClass,
                      "border"
                    )}
                  >
                    {achievement.rarity}
                  </motion.span>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-dark-text-secondary text-xs leading-relaxed"
                >
                  {achievement.description}
                </motion.p>
              </div>
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-between pt-2 border-t border-white/10"
            >
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span className="text-brand-primary font-semibold text-sm">
                  +{achievement.points} points
                </span>
              </div>

              <div className="text-xs text-dark-text-muted">
                {new Date(achievement.timestamp).toLocaleTimeString()}
              </div>
            </motion.div>
          </div>

          {/* Animated Border Effect for Legendary */}
          {achievement.rarity === 'legendary' && (
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-yellow-400/50"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(251, 191, 36, 0.4)",
                  "0 0 0 10px rgba(251, 191, 36, 0)",
                  "0 0 0 0 rgba(251, 191, 36, 0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          )}

          {/* Sparkle Effects for Epic and Legendary */}
          {(achievement.rarity === 'epic' || achievement.rarity === 'legendary') && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={cn(
                    "absolute w-1 h-1 rounded-full",
                    achievement.rarity === 'legendary' ? 'bg-yellow-400' : 'bg-purple-400'
                  )}
                  initial={{
                    x: Math.random() * 300,
                    y: Math.random() * 200,
                    opacity: 0
                  }}
                  animate={{
                    x: Math.random() * 300,
                    y: Math.random() * 200,
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AchievementPopup