import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { usePresentation } from '../../lib/PresentationContext'
import { getSessionById, getNextSession, getPreviousSession } from '../../data/sessions'
import { cn } from '../../lib/utils'

/**
 * Minimal presentation mode controls with auto-hide
 */
function PresentationControls() {
  const { 
    currentSlide, 
    nextSlide, 
    prevSlide,
    presentationMode,
    setPresentationMode
  } = usePresentation()
  
  const { sessionId } = useParams()
  const navigate = useNavigate()
  const sessionNumber = parseInt(sessionId)
  
  const [isVisible, setIsVisible] = useState(true)
  const hideTimeoutRef = useRef(null)

  // Get current session data
  const session = getSessionById(sessionNumber)
  const totalSlides = session?.slides?.length || 0
  const isFirstSlide = currentSlide === 0
  const isLastSlide = currentSlide === totalSlides - 1

  // Auto-hide controls after inactivity
  useEffect(() => {
    const resetHideTimer = () => {
      setIsVisible(true)
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false)
      }, 3000)
    }

    // Show controls on mouse movement
    const handleMouseMove = () => {
      resetHideTimer()
    }

    // Show controls on keyboard activity
    const handleKeyPress = () => {
      resetHideTimer()
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('keydown', handleKeyPress)
    
    // Initial timer
    resetHideTimer()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('keydown', handleKeyPress)
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
          if (!isLastSlide) {
            event.preventDefault()
            nextSlide()
          }
          break
        case 'ArrowLeft':
          if (!isFirstSlide) {
            event.preventDefault()
            prevSlide()
          }
          break
        default:
          break
      }
    }

    if (presentationMode) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [presentationMode, nextSlide, prevSlide, isFirstSlide, isLastSlide])

  if (!presentationMode) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-0 bottom-0 z-50 pointer-events-none"
        >
          {/* Bottom Controls */}
          <div className="flex items-center justify-between px-8 pb-8">
            {/* Left: Navigation Arrows */}
            <div className="flex items-center gap-4 pointer-events-auto">
              <button
                onClick={prevSlide}
                disabled={isFirstSlide}
                className={cn(
                  "p-3 rounded-full bg-white/10 backdrop-blur-sm transition-all",
                  isFirstSlide 
                    ? "opacity-30 cursor-not-allowed" 
                    : "hover:bg-white/20 hover:scale-110"
                )}
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                disabled={isLastSlide}
                className={cn(
                  "p-3 rounded-full bg-white/10 backdrop-blur-sm transition-all",
                  isLastSlide 
                    ? "opacity-30 cursor-not-allowed" 
                    : "hover:bg-white/20 hover:scale-110"
                )}
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Center: Slide Progress */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => nextSlide()} // You might want to add setSlide functionality
                  className={cn(
                    "w-2 h-2 rounded-full transition-all pointer-events-auto",
                    index === currentSlide
                      ? "w-8 bg-white"
                      : "bg-white/40 hover:bg-white/60"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Right: Slide Counter */}
            <div className="text-white/80 font-medium">
              {currentSlide + 1} / {totalSlides}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PresentationControls