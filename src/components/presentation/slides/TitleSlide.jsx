import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'

/**
 * Title slide component for session introductions
 */
function TitleSlide({ slide, sessionData, isActive }) {
  const { title, subtitle, content } = slide

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-bg via-dark-bg-secondary to-dark-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(27, 154, 170, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(27, 154, 170, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark-text mb-6 leading-tight"
        >
          <span className="gradient-text-brand">{title}</span>
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl lg:text-3xl text-dark-text-secondary mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Quote */}
        {content?.quote && (
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
              <svg className="w-12 h-12 text-brand-primary/30 mb-4 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
              <p className="text-lg md:text-xl text-dark-text italic leading-relaxed mb-4">
                {content.quote}
              </p>
            </div>
          </motion.blockquote>
        )}

        {/* Session Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-6 text-dark-text-secondary"
        >
          {sessionData && (
            <>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{sessionData.duration} minutes</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span>Phase {sessionData.phase}</span>
              </div>

              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Session {sessionData.id}</span>
              </div>
            </>
          )}
        </motion.div>

        {/* Learning Objectives Preview */}
        {sessionData?.learningObjectives && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mt-16"
          >
            <div className="glass-effect rounded-xl p-6 max-w-3xl mx-auto">
              <h3 className="text-lg font-semibold text-dark-text mb-4 flex items-center justify-center">
                <svg className="w-5 h-5 text-brand-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                What You'll Learn
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                {sessionData.learningObjectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isActive ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-dark-text-secondary text-sm">{objective}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-dark-text-muted">
          <p className="text-xs uppercase tracking-wide">Continue</p>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default TitleSlide