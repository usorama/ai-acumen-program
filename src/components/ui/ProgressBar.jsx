import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { usePresentation } from '../../lib/PresentationContext'
import { getSessionById, getNextSession, getPreviousSession } from '../../data/sessions'
import { cn, formatSessionTitle, getSessionPhase } from '../../lib/utils'

/**
 * Progress bar component showing session progress and navigation
 */
function ProgressBar() {
  const { 
    currentSession, 
    currentSlide, 
    completedSessions, 
    progress,
    toggleNavigation,
    setPresentationMode 
  } = usePresentation()
  
  const { sessionId } = useParams()
  const sessionNumber = parseInt(sessionId) || currentSession

  // Get current session data
  const session = useMemo(() => getSessionById(sessionNumber), [sessionNumber])
  const nextSession = useMemo(() => getNextSession(sessionNumber), [sessionNumber])
  const previousSession = useMemo(() => getPreviousSession(sessionNumber), [sessionNumber])
  const phaseInfo = useMemo(() => getSessionPhase(sessionNumber), [sessionNumber])

  // Calculate session progress
  const sessionProgress = useMemo(() => {
    if (!session?.slides) return 0
    return Math.round(((currentSlide + 1) / session.slides.length) * 100)
  }, [currentSlide, session?.slides])

  // Calculate overall program progress
  const overallProgress = useMemo(() => {
    return Math.round((completedSessions.length / 24) * 100)
  }, [completedSessions.length])

  if (!session) return null

  return (
    <div className="bg-dark-bg-secondary/80 backdrop-blur-sm border-b border-white/10">
      <div className="px-6 py-4">
        {/* Top Row - Session Info and Controls */}
        <div className="flex items-center justify-between mb-4">
          {/* Session Information */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleNavigation}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors focus-brand lg:hidden"
              aria-label="Toggle navigation"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <div className="flex items-center space-x-3">
              {/* Phase Badge */}
              <div className={cn(
                "px-3 py-1 rounded-full text-xs font-semibold",
                `bg-${phaseInfo.color}/20 text-${phaseInfo.color} border border-${phaseInfo.color}/30`
              )}>
                Phase {phaseInfo.phase}: {phaseInfo.name}
              </div>
              
              {/* Session Title */}
              <div>
                <h1 className="text-lg font-bold text-dark-text">
                  {formatSessionTitle(sessionNumber)}
                </h1>
                <p className="text-sm text-dark-text-secondary">
                  {session.title}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Session Duration */}
            <div className="hidden sm:flex items-center space-x-1 text-sm text-dark-text-secondary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{session.duration} min</span>
            </div>

            {/* Presentation Mode Toggle */}
            <button
              onClick={() => setPresentationMode(true)}
              className="btn-ghost text-sm px-4 py-2"
              aria-label="Enter presentation mode"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3z" />
              </svg>
              Present
            </button>

            {/* Settings Menu */}
            <div className="relative">
              <button className="btn-ghost p-2" aria-label="Settings">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="space-y-3">
          {/* Session Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-dark-text-secondary">Session Progress</span>
              <div className="flex items-center space-x-4">
                <span className="text-brand-primary font-semibold">
                  {currentSlide + 1} of {session.slides?.length || 0} slides
                </span>
                <span className="text-brand-primary font-semibold">
                  {sessionProgress}%
                </span>
              </div>
            </div>
            <div className="relative w-full bg-dark-bg-accent/50 rounded-full h-2">
              <motion.div
                className="absolute top-0 left-0 h-2 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${sessionProgress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              
              {/* Slide Markers */}
              {session.slides && session.slides.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute top-0 w-0.5 h-2 transition-colors duration-200",
                    index <= currentSlide ? "bg-white/40" : "bg-white/10"
                  )}
                  style={{ left: `${(index / (session.slides.length - 1)) * 100}%` }}
                />
              ))}
            </div>
          </div>

          {/* Overall Program Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-dark-text-secondary">Program Progress</span>
              <div className="flex items-center space-x-4">
                <span className="text-brand-accent font-semibold">
                  {completedSessions.length} of 24 sessions
                </span>
                <span className="text-brand-accent font-semibold">
                  {overallProgress}%
                </span>
              </div>
            </div>
            <div className="w-full bg-dark-bg-accent/50 rounded-full h-1.5">
              <motion.div
                className="h-1.5 bg-gradient-to-r from-brand-accent to-brand-primary-light rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${overallProgress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="mt-4 flex items-center justify-between">
          <nav className="flex items-center space-x-2 text-sm text-dark-text-secondary">
            <span>AI Acumen Program</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>{phaseInfo.name}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-brand-primary font-medium">{formatSessionTitle(sessionNumber)}</span>
          </nav>

          {/* Quick Navigation */}
          <div className="flex items-center space-x-2">
            {previousSession && (
              <motion.a
                href={`/session/${previousSession.id}`}
                className="text-xs text-dark-text-secondary hover:text-brand-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Previous
              </motion.a>
            )}
            
            {nextSession && (
              <motion.a
                href={`/session/${nextSession.id}`}
                className="text-xs text-dark-text-secondary hover:text-brand-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next →
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Slide Indicator */}
      <div className="sm:hidden px-6 pb-2">
        <div className="flex items-center justify-center space-x-1">
          {session.slides && session.slides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-200",
                index === currentSlide 
                  ? "bg-brand-primary scale-125" 
                  : index < currentSlide
                    ? "bg-brand-primary/50"
                    : "bg-white/20"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProgressBar