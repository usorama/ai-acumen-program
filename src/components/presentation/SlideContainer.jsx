import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../lib/utils'

// Import slide type components
import TitleSlide from './slides/TitleSlide'
import AgendaSlide from './slides/AgendaSlide'
import InteractiveGridSlide from './slides/InteractiveGridSlide'
import ComparisonMatrixSlide from './slides/ComparisonMatrixSlide'
import IndustryShowcaseSlide from './slides/IndustryShowcaseSlide'
import TrendTimelineSlide from './slides/TrendTimelineSlide'
import AssessmentSlide from './slides/AssessmentSlide'
import TakeawaysSlide from './slides/TakeawaysSlide'
import ActionPlanSlide from './slides/ActionPlanSlide'

/**
 * Main slide container that renders different slide types
 */
function SlideContainer({ slide, sessionData, isActive = true, direction = 'next' }) {
  const slideRef = useRef(null)

  // Scroll to top when slide changes
  useEffect(() => {
    if (slideRef.current && isActive) {
      slideRef.current.scrollTop = 0
    }
  }, [slide?.id, isActive])

  if (!slide) {
    return (
      <div className="flex items-center justify-center h-full min-h-screen bg-dark-bg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto mb-4"></div>
          <p className="text-dark-text-secondary">Loading slide...</p>
        </div>
      </div>
    )
  }

  // Slide transition variants
  const slideVariants = {
    enter: {
      x: direction === 'next' ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      x: direction === 'next' ? -1000 : 1000,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  // Render appropriate slide component based on type
  const renderSlideContent = () => {
    const commonProps = {
      slide,
      sessionData,
      isActive
    }

    switch (slide.type) {
      case 'title':
        return <TitleSlide {...commonProps} />
      
      case 'agenda':
        return <AgendaSlide {...commonProps} />
      
      case 'interactive-grid':
        return <InteractiveGridSlide {...commonProps} />
      
      case 'comparison-matrix':
        return <ComparisonMatrixSlide {...commonProps} />
      
      case 'industry-showcase':
        return <IndustryShowcaseSlide {...commonProps} />
      
      case 'trend-timeline':
        return <TrendTimelineSlide {...commonProps} />
      
      case 'assessment':
        return <AssessmentSlide {...commonProps} />
      
      case 'takeaways':
        return <TakeawaysSlide {...commonProps} />
      
      case 'action-plan':
        return <ActionPlanSlide {...commonProps} />
      
      default:
        return (
          <div className="flex items-center justify-center h-full min-h-screen bg-dark-bg">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-dark-text mb-2">Unknown Slide Type</h2>
              <p className="text-dark-text-secondary">
                Slide type "{slide.type}" is not supported yet.
              </p>
              <div className="mt-4 p-4 bg-dark-bg-secondary rounded-lg text-left">
                <h3 className="font-semibold text-dark-text mb-2">Slide Data:</h3>
                <pre className="text-xs text-dark-text-muted overflow-auto">
                  {JSON.stringify(slide, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <motion.div
      ref={slideRef}
      key={slide.id}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className={cn(
        "w-full h-full min-h-screen overflow-y-auto",
        "bg-dark-bg text-dark-text"
      )}
    >
      {/* Slide Content */}
      <div className="relative">
        {renderSlideContent()}
        
        {/* Slide Footer - Optional metadata */}
        <div className="absolute bottom-4 left-4 opacity-30 hover:opacity-100 transition-opacity">
          <div className="text-xs text-dark-text-muted">
            <span>Slide {slide.id}</span>
            {slide.type && (
              <>
                <span className="mx-2">•</span>
                <span>{slide.type}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SlideContainer