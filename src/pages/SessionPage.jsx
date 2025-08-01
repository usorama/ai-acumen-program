import React, { useEffect, useMemo, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { usePresentation } from '../lib/PresentationContext'
import { getSessionById } from '../data/sessions'
import SlideContainer from '../components/presentation/SlideContainer'
import { cn } from '../lib/utils'

/**
 * Main session page that displays slides with navigation
 */
function SessionPage() {
  const { sessionId } = useParams()
  const navigate = useNavigate()
  const { 
    currentSlide, 
    setSession, 
    setSlide,
    presentationMode 
  } = usePresentation()

  const [slideDirection, setSlideDirection] = useState('next')
  const [isLoading, setIsLoading] = useState(true)

  const sessionNumber = parseInt(sessionId)
  const session = useMemo(() => getSessionById(sessionNumber), [sessionNumber])

  // Set current session when component mounts or sessionId changes
  useEffect(() => {
    if (sessionNumber && session) {
      setSession(sessionNumber)
      setIsLoading(false)
    } else if (sessionNumber && !session) {
      // Invalid session ID, redirect to home
      navigate('/')
    }
  }, [sessionNumber, session, setSession, navigate])

  // Track slide changes for direction animation
  const [prevSlide, setPrevSlide] = useState(currentSlide)
  useEffect(() => {
    if (currentSlide !== prevSlide) {
      setSlideDirection(currentSlide > prevSlide ? 'next' : 'prev')
      setPrevSlide(currentSlide)
    }
  }, [currentSlide, prevSlide])

  // Handle session completion tracking
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // User returned to tab, could track engagement
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  // Loading state
  if (isLoading || !session) {
    return (
      <div className="flex items-center justify-center h-screen bg-dark-bg">
        <div className="text-center">
          <motion.div
            className="w-16 h-16 border-4 border-brand-primary/20 border-t-brand-primary rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-dark-text-secondary"
          >
            Loading session content...
          </motion.p>
        </div>
      </div>
    )
  }

  const currentSlideData = session.slides?.[currentSlide]

  if (!currentSlideData) {
    return (
      <div className="flex items-center justify-center h-screen bg-dark-bg">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-dark-text mb-2">Slide Not Found</h2>
          <p className="text-dark-text-secondary mb-4">
            The requested slide could not be loaded.
          </p>
          <button
            onClick={() => setSlide(0)}
            className="btn-primary"
          >
            Go to First Slide
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={cn(
      "relative w-full h-full",
      presentationMode ? "h-screen overflow-hidden" : "min-h-screen"
    )}>
      {/* Slide Content */}
      <AnimatePresence mode="wait" custom={slideDirection}>
        <SlideContainer
          key={`${session.id}-${currentSlide}`}
          slide={currentSlideData}
          sessionData={session}
          isActive={true}
          direction={slideDirection}
        />
      </AnimatePresence>

      {/* Presentation Mode Overlay */}
      {presentationMode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 pointer-events-none z-10"
        />
      )}

      {/* Session Metadata (Hidden, for SEO and accessibility) */}
      <div className="sr-only">
        <h1>AI Acumen Program - Session {sessionNumber}: {session.title}</h1>
        <p>{session.description}</p>
        <nav aria-label="Session navigation">
          <p>
            Slide {currentSlide + 1} of {session.slides?.length || 0}: {currentSlideData.title}
          </p>
        </nav>
      </div>

      {/* Error Boundary Fallback */}
      {session.slides?.length === 0 && (
        <div className="flex items-center justify-center h-screen bg-dark-bg">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-dark-text mb-2">No Slides Available</h2>
            <p className="text-dark-text-secondary mb-6">
              This session doesn't have any slides configured yet.
            </p>
            <div className="space-y-2">
              <button
                onClick={() => navigate('/')}
                className="btn-primary w-full"
              >
                Return to Home
              </button>
              <p className="text-xs text-dark-text-muted">
                Session ID: {sessionNumber} • Title: {session.title}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Performance Monitoring (Development only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-2 left-2 text-xs text-dark-text-muted bg-dark-bg-secondary/80 rounded px-2 py-1 opacity-50 hover:opacity-100 transition-opacity">
          <div>Session: {sessionNumber}</div>
          <div>Slide: {currentSlide + 1}/{session.slides?.length || 0}</div>
          <div>Type: {currentSlideData.type}</div>
        </div>
      )}
    </div>
  )
}

export default SessionPage