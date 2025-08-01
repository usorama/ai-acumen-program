import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { usePresentation } from '../lib/PresentationContext'
import { phases, sessions, getTotalProgramDuration } from '../data/sessions'
import { getEarnedAchievements, getTotalAchievementPoints } from '../data/achievements'
import { cn, formatDuration, formatPercentage, getSessionPhase } from '../lib/utils'

/**
 * Landing page with program overview and progress
 */
function HomePage() {
  const { completedSessions, achievements } = usePresentation()

  // Calculate statistics
  const stats = useMemo(() => {
    const totalDuration = getTotalProgramDuration()
    const completedDuration = sessions
      .filter(session => completedSessions.includes(session.id))
      .reduce((total, session) => total + session.duration, 0)
    
    const earnedAchievements = getEarnedAchievements({
      completedSessions,
      currentStreak: 5, // Mock data
      perfectQuizzes: 2,
      totalHours: Math.floor(completedDuration / 60),
      perfectSessions: completedSessions.length,
      totalInteractions: completedSessions.length * 8
    })

    return {
      totalSessions: sessions.length,
      completedSessions: completedSessions.length,
      completionPercentage: Math.round((completedSessions.length / sessions.length) * 100),
      totalDuration,
      completedDuration,
      remainingDuration: totalDuration - completedDuration,
      earnedAchievements: earnedAchievements.length,
      totalPoints: getTotalAchievementPoints(earnedAchievements)
    }
  }, [completedSessions])

  // Get next recommended session
  const nextSession = useMemo(() => {
    return sessions.find(session => !completedSessions.includes(session.id)) || sessions[0]
  }, [completedSessions])

  const nextPhase = getSessionPhase(nextSession.id)

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-dark-text mb-6"
            >
              AI Acumen Program
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-dark-text-secondary mb-8 max-w-3xl mx-auto"
            >
              Master the fundamentals of AI implementation with our comprehensive 24-session program designed for executives and decision-makers.
            </motion.p>

            {/* Progress Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">
                    {stats.completedSessions}
                  </div>
                  <div className="text-sm text-dark-text-secondary">
                    Sessions Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-secondary mb-2">
                    {stats.completionPercentage}%
                  </div>
                  <div className="text-sm text-dark-text-secondary">
                    Program Progress
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-accent mb-2">
                    {stats.earnedAchievements}
                  </div>
                  <div className="text-sm text-dark-text-secondary">
                    Achievements Earned
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary-light mb-2">
                    {formatDuration(stats.completedDuration)}
                  </div>
                  <div className="text-sm text-dark-text-secondary">
                    Time Invested
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-sm text-dark-text-secondary mb-2">
                  <span>Overall Progress</span>
                  <span>{stats.completionPercentage}% Complete</span>
                </div>
                <div className="w-full bg-dark-bg-secondary rounded-full h-3">
                  <motion.div
                    className="h-3 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${stats.completionPercentage}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Continue Learning Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to={`/session/${nextSession.id}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold rounded-xl hover:shadow-brand-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>
                  {stats.completedSessions === 0 ? 'Start Learning' : 'Continue Learning'}
                </span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              {nextSession && (
                <p className="mt-3 text-sm text-dark-text-secondary">
                  Next: <span className="text-brand-primary font-medium">{nextSession.title}</span>
                  <span className="mx-2">•</span>
                  <span className={cn(`text-${nextPhase.color}`)}>{nextPhase.name} Phase</span>
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Phases */}
      <section className="py-16 bg-dark-bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dark-text mb-4">
              Four Phases of AI Mastery
            </h2>
            <p className="text-xl text-dark-text-secondary">
              Structured learning path from foundations to advanced implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => {
              const phaseSessions = sessions.filter(s => s.phase === phase.id)
              const completedInPhase = phaseSessions.filter(s => completedSessions.includes(s.id)).length
              const phaseProgress = Math.round((completedInPhase / phaseSessions.length) * 100)
              const isActive = phaseSessions.some(s => s.id === nextSession.id)

              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={cn(
                    "glass-effect rounded-xl p-6 transition-all duration-300",
                    isActive && "ring-2 ring-brand-primary/50 bg-brand-primary/5"
                  )}
                >
                  <div className="text-center mb-4">
                    <div className={cn(
                      "w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-bold",
                      completedInPhase === phaseSessions.length
                        ? "bg-brand-primary text-white"
                        : `bg-${phase.color}/20 text-${phase.color}`
                    )}>
                      {completedInPhase === phaseSessions.length ? '✓' : phase.id}
                    </div>
                    <h3 className="font-bold text-dark-text mb-2">
                      {phase.name}
                    </h3>
                    <p className="text-sm text-dark-text-secondary">
                      {phase.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-dark-text-secondary">Progress</span>
                      <span className="text-brand-primary font-semibold">
                        {completedInPhase}/{phaseSessions.length}
                      </span>
                    </div>
                    <div className="w-full bg-dark-bg-accent/50 rounded-full h-2">
                      <motion.div
                        className={cn("h-2 rounded-full", `bg-${phase.color}`)}
                        initial={{ width: 0 }}
                        animate={{ width: `${phaseProgress}%` }}
                        transition={{ duration: 0.8, delay: 0.2 * index }}
                      />
                    </div>
                    <div className="text-xs text-center text-dark-text-muted">
                      {phaseSessions.length} sessions • {phaseProgress}% complete
                    </div>
                  </div>

                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <Link
                        to={`/session/${nextSession.id}`}
                        className="btn-primary w-full text-center text-sm py-2"
                      >
                        Continue Here
                      </Link>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dark-text mb-4">
              Your Learning Journey
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Time Investment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-effect rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-text mb-2">Time Investment</h3>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-brand-primary">
                  {formatDuration(stats.totalDuration)}
                </p>
                <p className="text-sm text-dark-text-secondary">
                  Total program duration
                </p>
                {stats.remainingDuration > 0 && (
                  <p className="text-xs text-dark-text-muted">
                    {formatDuration(stats.remainingDuration)} remaining
                  </p>
                )}
              </div>
            </motion.div>

            {/* Achievement Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-effect rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-brand-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-text mb-2">Achievement Points</h3>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-brand-secondary">
                  {stats.totalPoints.toLocaleString()}
                </p>
                <p className="text-sm text-dark-text-secondary">
                  Points earned
                </p>
                <p className="text-xs text-dark-text-muted">
                  {stats.earnedAchievements} achievements unlocked
                </p>
              </div>
            </motion.div>

            {/* Learning Pace */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-effect rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-text mb-2">Learning Pace</h3>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-brand-accent">
                  {stats.completedSessions > 0 ? 
                    Math.round(stats.completedDuration / stats.completedSessions) : 
                    45}min
                </p>
                <p className="text-sm text-dark-text-secondary">
                  Average per session
                </p>
                <p className="text-xs text-dark-text-muted">
                  Recommended: 2-3 sessions/week
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-dark-text mb-4">
              Ready to Master AI Implementation?
            </h2>
            <p className="text-xl text-dark-text-secondary mb-8">
              Join thousands of executives who have transformed their organizations with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={`/session/${nextSession.id}`}
                className="btn-primary px-8 py-3"
              >
                {stats.completedSessions === 0 ? 'Begin Your Journey' : 'Continue Learning'}
              </Link>
              <button className="btn-secondary px-8 py-3">
                View All Sessions
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage