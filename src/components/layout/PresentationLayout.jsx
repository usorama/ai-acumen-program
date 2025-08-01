import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePresentation } from '../../lib/PresentationContext'
import { cn } from '../../lib/utils'
import Navigation from '../ui/Navigation'
import ProgressBar from '../ui/ProgressBar'
import SlideControls from '../ui/SlideControls'
import AchievementPopup from '../ui/AchievementPopup'

/**
 * Main presentation layout component
 * Provides the overall structure with navigation, progress tracking, and controls
 */
function PresentationLayout({ children }) {
  const { 
    isNavigationOpen, 
    presentationMode, 
    achievements,
    toggleNavigation 
  } = usePresentation()

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Don't interfere with input fields
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return
      }

      switch (event.key) {
        case 'Escape':
          if (presentationMode) {
            // Exit presentation mode
            event.preventDefault()
          }
          break
        case 'F11':
          // Handle fullscreen toggle
          event.preventDefault()
          if (document.fullscreenElement) {
            document.exitFullscreen()
          } else {
            document.documentElement.requestFullscreen()
          }
          break
        case 'n':
        case 'N':
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault()
            toggleNavigation()
          }
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [presentationMode, toggleNavigation])

  // Handle presentation mode changes
  useEffect(() => {
    if (presentationMode) {
      document.body.classList.add('presentation-mode')
    } else {
      document.body.classList.remove('presentation-mode')
    }

    return () => {
      document.body.classList.remove('presentation-mode')
    }
  }, [presentationMode])

  return (
    <div className={cn(
      "min-h-screen bg-dark-bg text-dark-text transition-all duration-300",
      presentationMode && "presentation-mode"
    )}>
      {/* Navigation Sidebar */}
      <AnimatePresence>
        {isNavigationOpen && !presentationMode && (
          <motion.div
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-80 z-40"
          >
            <Navigation />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className={cn(
        "transition-all duration-300",
        isNavigationOpen && !presentationMode ? "ml-80" : "ml-0"
      )}>
        {/* Top Progress Bar */}
        {!presentationMode && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="sticky top-0 z-30 bg-dark-bg/95 backdrop-blur-sm border-b border-white/10"
          >
            <ProgressBar />
          </motion.div>
        )}

        {/* Main Content */}
        <main className={cn(
          "relative",
          presentationMode ? "h-screen" : "min-h-screen"
        )}>
          {children}
        </main>

        {/* Slide Controls */}
        {!presentationMode && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed bottom-6 right-6 z-30"
          >
            <SlideControls />
          </motion.div>
        )}
      </div>

      {/* Achievement Notifications */}
      <AnimatePresence>
        {achievements.map((achievement) => (
          <AchievementPopup
            key={achievement.id}
            achievement={achievement}
          />
        ))}
      </AnimatePresence>

      {/* Navigation Toggle Button (when sidebar is closed) */}
      {!isNavigationOpen && !presentationMode && (
        <motion.button
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={toggleNavigation}
          className={cn(
            "fixed top-4 left-4 z-50 p-3 rounded-lg",
            "bg-white/10 backdrop-blur-sm border border-white/20",
            "hover:bg-white/20 transition-all duration-200",
            "focus-brand group"
          )}
          aria-label="Open navigation"
        >
          <svg
            className="w-6 h-6 text-dark-text group-hover:text-brand-primary transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </motion.button>
      )}

      {/* Presentation Mode Overlay */}
      {presentationMode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-20 pointer-events-none"
        />
      )}

      {/* Loading Overlay (can be used for transitions) */}
      <AnimatePresence>
        {/* Could add loading state here if needed */}
      </AnimatePresence>

      {/* Accessibility Enhancements */}
      <div className="sr-only" role="status" aria-live="polite" id="slide-announcer">
        {/* Screen reader announcements for slide changes */}
      </div>

      {/* Keyboard Shortcuts Help (Hidden by default, shown on demand) */}
      <div 
        className="sr-only"
        role="region" 
        aria-label="Keyboard shortcuts"
        id="keyboard-shortcuts"
      >
        <h3>Available Keyboard Shortcuts:</h3>
        <ul>
          <li>Left/Right Arrow: Navigate slides</li>
          <li>Space/Enter: Next slide</li>
          <li>Escape: Exit presentation mode</li>
          <li>F11: Toggle fullscreen</li>
          <li>Ctrl/Cmd + N: Toggle navigation</li>
        </ul>
      </div>
    </div>
  )
}

export default PresentationLayout