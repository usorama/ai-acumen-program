import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useParams, useLocation } from 'react-router-dom'
import { usePresentation } from '../../lib/PresentationContext'
import { phases, getSessionsByPhase, getPhaseProgress } from '../../data/sessions'
import { cn, formatSessionTitle, isSessionAvailable } from '../../lib/utils'

/**
 * Navigation sidebar component with session organization by phases
 */
function Navigation() {
  const { currentSession, completedSessions, toggleNavigation } = usePresentation()
  const { sessionId } = useParams()
  const location = useLocation()
  const [expandedPhases, setExpandedPhases] = useState(new Set([1, 2]))

  // Calculate phase progress for all phases
  const phaseProgress = useMemo(() => {
    return phases.reduce((acc, phase) => {
      acc[phase.id] = getPhaseProgress(completedSessions, phase.id)
      return acc
    }, {})
  }, [completedSessions])

  const togglePhase = (phaseId) => {
    setExpandedPhases(prev => {
      const newSet = new Set(prev)
      if (newSet.has(phaseId)) {
        newSet.delete(phaseId)
      } else {
        newSet.add(phaseId)
      }
      return newSet
    })
  }

  const handleSessionClick = (sessionId) => {
    // Close navigation on mobile after selection
    if (window.innerWidth < 1024) {
      toggleNavigation()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full bg-dark-bg-secondary/95 backdrop-blur-md border-r border-white/10 flex flex-col"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between mb-4">
          <Link 
            to="/"
            className="text-xl font-bold gradient-text-brand hover:scale-105 transition-transform"
          >
            AI Acumen Program
          </Link>
          <button
            onClick={toggleNavigation}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors focus-brand lg:hidden"
            aria-label="Close navigation"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Overall Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-dark-text-secondary">Overall Progress</span>
            <span className="text-brand-primary font-semibold">
              {completedSessions.length}/24
            </span>
          </div>
          <div className="w-full bg-dark-bg-accent/50 rounded-full h-2">
            <motion.div
              className="h-2 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(completedSessions.length / 24) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-4">
          {phases.map((phase) => {
            const sessions = getSessionsByPhase(phase.id)
            const progress = phaseProgress[phase.id]
            const isExpanded = expandedPhases.has(phase.id)
            const hasCurrentSession = sessions.some(session => session.id === parseInt(sessionId))

            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: phase.id * 0.1 }}
                className="space-y-2"
              >
                {/* Phase Header */}
                <button
                  onClick={() => togglePhase(phase.id)}
                  className={cn(
                    "w-full p-4 rounded-lg text-left transition-all duration-200",
                    "bg-white/5 hover:bg-white/10 border border-white/10",
                    "focus-brand group",
                    hasCurrentSession && "ring-2 ring-brand-primary/50 bg-brand-primary/10"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                        progress.isComplete 
                          ? "bg-brand-primary text-white" 
                          : `bg-${phase.color}/20 text-brand-primary`
                      )}>
                        {progress.isComplete ? '✓' : phase.id}
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark-text group-hover:text-brand-primary transition-colors">
                          Phase {phase.id}: {phase.name}
                        </h3>
                        <p className="text-xs text-dark-text-secondary">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-brand-primary font-semibold">
                        {progress.completed}/{progress.total}
                      </span>
                      <motion.svg
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-5 h-5 text-dark-text-secondary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </div>
                  </div>
                  
                  {/* Phase Progress Bar */}
                  <div className="mt-3 w-full bg-dark-bg-accent/50 rounded-full h-1.5">
                    <motion.div
                      className={cn(
                        "h-1.5 rounded-full",
                        `bg-${phase.color}`,
                        progress.isComplete && "bg-brand-primary"
                      )}
                      initial={{ width: 0 }}
                      animate={{ width: `${progress.percentage}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </button>

                {/* Session List */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="ml-4 space-y-1 overflow-hidden"
                    >
                      {sessions.map((session, index) => {
                        const isCompleted = completedSessions.includes(session.id)
                        const isCurrent = parseInt(sessionId) === session.id
                        const isAvailable = isSessionAvailable(session.id, completedSessions)
                        const isLocked = !isAvailable && !isCompleted

                        return (
                          <motion.div
                            key={session.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            {isLocked ? (
                              <div className={cn(
                                "p-3 rounded-lg cursor-not-allowed opacity-50",
                                "bg-dark-bg-accent/30 border border-white/5"
                              )}>
                                <div className="flex items-center space-x-3">
                                  <div className="w-6 h-6 rounded-full bg-dark-bg-accent flex items-center justify-center">
                                    <svg className="w-3 h-3 text-dark-text-muted" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-dark-text-muted truncate">
                                      {formatSessionTitle(session.id)}
                                    </p>
                                    <p className="text-xs text-dark-text-muted/70 truncate">
                                      {session.title}
                                    </p>
                                  </div>
                                  <span className="text-xs text-dark-text-muted">
                                    {session.duration}min
                                  </span>
                                </div>
                              </div>
                            ) : (
                              <Link
                                to={`/session/${session.id}`}
                                onClick={() => handleSessionClick(session.id)}
                                className={cn(
                                  "block p-3 rounded-lg transition-all duration-200",
                                  "hover:bg-white/10 focus-brand group",
                                  isCurrent && "bg-brand-primary/20 ring-2 ring-brand-primary/50",
                                  isCompleted && !isCurrent && "bg-white/5 border border-brand-primary/30"
                                )}
                              >
                                <div className="flex items-center space-x-3">
                                  <div className={cn(
                                    "w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold",
                                    isCompleted 
                                      ? "bg-brand-primary text-white" 
                                      : isCurrent
                                        ? "bg-brand-primary/30 text-brand-primary"
                                        : "bg-dark-bg-accent text-dark-text-secondary"
                                  )}>
                                    {isCompleted ? '✓' : session.id}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className={cn(
                                      "text-sm font-medium truncate transition-colors",
                                      isCurrent 
                                        ? "text-brand-primary" 
                                        : "text-dark-text group-hover:text-brand-primary"
                                    )}>
                                      {formatSessionTitle(session.id)}
                                    </p>
                                    <p className="text-xs text-dark-text-secondary truncate">
                                      {session.title}
                                    </p>
                                  </div>
                                  <div className="flex flex-col items-end space-y-1">
                                    <span className="text-xs text-dark-text-muted">
                                      {session.duration}min
                                    </span>
                                    {isCompleted && (
                                      <div className="w-2 h-2 bg-brand-primary rounded-full" />
                                    )}
                                  </div>
                                </div>
                              </Link>
                            )}
                          </motion.div>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center justify-between text-xs text-dark-text-secondary">
          <span>AI Acumen Program 2024</span>
          <button 
            className="text-brand-primary hover:text-brand-primary-light transition-colors"
            onClick={() => window.open('/help', '_blank')}
          >
            Help & Support
          </button>
        </div>
        
        {/* Quick Stats */}
        <div className="mt-2 grid grid-cols-3 gap-2 text-center">
          <div className="text-xs">
            <div className="font-semibold text-brand-primary">{completedSessions.length}</div>
            <div className="text-dark-text-muted">Completed</div>
          </div>
          <div className="text-xs">
            <div className="font-semibold text-brand-secondary">{24 - completedSessions.length}</div>
            <div className="text-dark-text-muted">Remaining</div>
          </div>
          <div className="text-xs">
            <div className="font-semibold text-brand-accent">
              {Math.round((completedSessions.length / 24) * 100)}%
            </div>
            <div className="text-dark-text-muted">Progress</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Navigation