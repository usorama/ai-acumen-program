import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { usePresentation } from '../../lib/PresentationContext'
import { getSessionById, getNextSession, getPreviousSession } from '../../data/sessions'
import { cn } from '../../lib/utils'

/**
 * Slide control component with navigation and keyboard shortcuts
 */
function SlideControls() {
  const { 
    currentSlide, 
    nextSlide, 
    prevSlide, 
    setSlide,
    completeSession,
    addAchievement
  } = usePresentation()
  
  const { sessionId } = useParams()
  const navigate = useNavigate()
  const sessionNumber = parseInt(sessionId)
  
  const [isVisible, setIsVisible] = useState(true)
  const [hideTimeout, setHideTimeout] = useState(null)

  // Get current session data
  const session = getSessionById(sessionNumber)
  const nextSession = getNextSession(sessionNumber)
  const previousSession = getPreviousSession(sessionNumber)

  const totalSlides = session?.slides?.length || 0
  const isFirstSlide = currentSlide === 0
  const isLastSlide = currentSlide === totalSlides - 1
  const canGoNext = !isLastSlide
  const canGoPrev = !isFirstSlide

  // Auto-hide controls after inactivity
  useEffect(() => {
    const resetHideTimer = () => {
      setIsVisible(true)
      if (hideTimeout) {
        clearTimeout(hideTimeout)
      }
      const timeout = setTimeout(() => {
        setIsVisible(false)
      }, 3000)
      setHideTimeout(timeout)
    }

    const handleMouseMove = () => resetHideTimer()
    const handleMouseLeave = () => {
      const timeout = setTimeout(() => {
        setIsVisible(false)
      }, 1000)
      setHideTimeout(timeout)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    
    resetHideTimer()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (hideTimeout) {
        clearTimeout(hideTimeout)
      }
    }
  }, [hideTimeout])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Don't interfere with input fields
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return
      }

      switch (event.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
          event.preventDefault()
          handleNextSlide()
          break
        case 'ArrowLeft':
          event.preventDefault()
          handlePrevSlide()
          break
        case 'Home':
          event.preventDefault()
          setSlide(0)
          break
        case 'End':
          event.preventDefault()
          setSlide(totalSlides - 1)
          break
        case 'Escape':
          event.preventDefault()
          setIsVisible(!isVisible)
          break
        default:
          // Number keys for direct slide navigation
          if (event.key >= '1' && event.key <= '9') {
            const slideNumber = parseInt(event.key) - 1
            if (slideNumber < totalSlides) {
              event.preventDefault()
              setSlide(slideNumber)
            }
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide, totalSlides, isVisible, setSlide])

  const handleNextSlide = () => {
    if (canGoNext) {
      nextSlide()
      
      // Add engagement achievement for slide progression
      if (Math.random() < 0.1) { // 10% chance
        addAchievement({
          type: 'engagement_high',
          title: 'Active Learner',
          description: 'Engaged with presentation content',
          icon: '🎯',
          points: 50
        })
      }
    } else if (isLastSlide && nextSession) {
      // Complete current session and move to next
      completeSession(sessionNumber)
      navigate(`/session/${nextSession.id}`)
    }
  }

  const handlePrevSlide = () => {
    if (canGoPrev) {
      prevSlide()
    } else if (isFirstSlide && previousSession) {
      // Go to previous session's last slide
      navigate(`/session/${previousSession.id}`)
    }
  }

  const handleCompleteSession = () => {
    completeSession(sessionNumber)
    
    // Add session completion achievement
    addAchievement({
      type: 'session_completed',
      title: `Session ${sessionNumber} Complete!`,
      description: 'Successfully completed session content',
      icon: '🎉',
      points: 100
    })

    if (nextSession) {
      navigate(`/session/${nextSession.id}`)
    } else {
      // Completed all sessions!
      addAchievement({
        type: 'program_completed',
        title: 'AI Master!',
        description: 'Completed the entire AI Acumen Program',
        icon: '👑',
        points: 1000
      })
      navigate('/')
    }
  }

  if (!session) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="glass-effect rounded-xl p-4 shadow-brand-lg"
          onMouseEnter={() => setIsVisible(true)}
        >
          <div className="flex items-center space-x-4">
            {/* Previous Button */}
            <motion.button
              onClick={handlePrevSlide}
              disabled={!canGoPrev && !previousSession}
              className={cn(
                "p-3 rounded-lg transition-all duration-200 focus-brand",
                canGoPrev || previousSession
                  ? "bg-white/10 hover:bg-white/20 text-dark-text hover:text-brand-primary"
                  : "bg-white/5 text-dark-text-muted cursor-not-allowed"
              )}
              whileHover={canGoPrev || previousSession ? { scale: 1.05 } : {}}
              whileTap={canGoPrev || previousSession ? { scale: 0.95 } : {}}
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Slide Counter */}
            <div className="flex items-center space-x-2 px-4">
              <span className="text-sm font-semibold text-dark-text">
                {currentSlide + 1}
              </span>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-sm text-dark-text-secondary">
                {totalSlides}
              </span>
            </div>

            {/* Progress Dots (for mobile) */}
            <div className="hidden sm:flex items-center space-x-1">
              {session.slides?.slice(0, 8).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSlide(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-200",
                    index === currentSlide
                      ? "bg-brand-primary scale-125"
                      : index < currentSlide
                        ? "bg-brand-primary/50 hover:bg-brand-primary/70"
                        : "bg-white/20 hover:bg-white/30"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
              {totalSlides > 8 && (
                <span className="text-xs text-dark-text-muted">...</span>
              )}
            </div>

            {/* Next/Complete Button */}
            {!isLastSlide ? (
              <motion.button
                onClick={handleNextSlide}
                className="btn-primary px-6 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next slide"
              >
                <span>Next</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            ) : (
              <motion.button
                onClick={handleCompleteSession}
                className="btn-primary px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Complete session"
              >
                <span>Complete Session</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.button>
            )}
          </div>

          {/* Keyboard Shortcuts Hint */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-3 pt-3 border-t border-white/10"
          >
            <div className="flex items-center justify-center space-x-4 text-xs text-dark-text-muted">
              <div className="flex items-center space-x-1">
                <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">←</kbd>
                <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">→</kbd>
                <span>Navigate</span>
              </div>
              <div className="flex items-center space-x-1">
                <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">Space</kbd>
                <span>Next</span>
              </div>
              <div className="flex items-center space-x-1">
                <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">Esc</kbd>
                <span>Hide</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SlideControls