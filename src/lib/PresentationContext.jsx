import React, { createContext, useContext, useReducer, useCallback } from 'react'

const PresentationContext = createContext()

const initialState = {
  currentSession: 1,
  currentSlide: 0,
  completedSessions: [],
  achievements: [],
  isNavigationOpen: true,
  presentationMode: false,
  progress: {
    sessionsCompleted: 0,
    totalSessions: 24,
    currentPhase: 1,
  }
}

function presentationReducer(state, action) {
  switch (action.type) {
    case 'SET_SESSION':
      return {
        ...state,
        currentSession: action.payload,
        currentSlide: 0,
      }
    
    case 'SET_SLIDE':
      return {
        ...state,
        currentSlide: action.payload,
      }
    
    case 'NEXT_SLIDE':
      return {
        ...state,
        currentSlide: state.currentSlide + 1,
      }
    
    case 'PREV_SLIDE':
      return {
        ...state,
        currentSlide: Math.max(0, state.currentSlide - 1),
      }
    
    case 'COMPLETE_SESSION':
      const isAlreadyCompleted = state.completedSessions.includes(action.payload)
      if (isAlreadyCompleted) return state
      
      return {
        ...state,
        completedSessions: [...state.completedSessions, action.payload],
        progress: {
          ...state.progress,
          sessionsCompleted: state.completedSessions.length + 1,
        }
      }
    
    case 'ADD_ACHIEVEMENT':
      return {
        ...state,
        achievements: [...state.achievements, {
          id: Date.now(),
          ...action.payload,
          timestamp: new Date().toISOString(),
        }],
      }
    
    case 'TOGGLE_NAVIGATION':
      return {
        ...state,
        isNavigationOpen: !state.isNavigationOpen,
      }
    
    case 'SET_PRESENTATION_MODE':
      return {
        ...state,
        presentationMode: action.payload,
      }
    
    case 'RESET_PROGRESS':
      return initialState
    
    default:
      return state
  }
}

export function PresentationProvider({ children }) {
  const [state, dispatch] = useReducer(presentationReducer, initialState)

  const setSession = useCallback((sessionId) => {
    dispatch({ type: 'SET_SESSION', payload: sessionId })
  }, [])

  const setSlide = useCallback((slideIndex) => {
    dispatch({ type: 'SET_SLIDE', payload: slideIndex })
  }, [])

  const nextSlide = useCallback(() => {
    dispatch({ type: 'NEXT_SLIDE' })
  }, [])

  const prevSlide = useCallback(() => {
    dispatch({ type: 'PREV_SLIDE' })
  }, [])

  const completeSession = useCallback((sessionId) => {
    dispatch({ type: 'COMPLETE_SESSION', payload: sessionId })
    
    // Add achievement for session completion
    dispatch({ 
      type: 'ADD_ACHIEVEMENT', 
      payload: {
        type: 'session_completed',
        title: `Session ${sessionId} Complete!`,
        description: `You've mastered the concepts in Session ${sessionId}`,
        icon: '🎉',
        points: 100,
      }
    })
  }, [])

  const addAchievement = useCallback((achievement) => {
    dispatch({ type: 'ADD_ACHIEVEMENT', payload: achievement })
  }, [])

  const toggleNavigation = useCallback(() => {
    dispatch({ type: 'TOGGLE_NAVIGATION' })
  }, [])

  const setPresentationMode = useCallback((mode) => {
    dispatch({ type: 'SET_PRESENTATION_MODE', payload: mode })
  }, [])

  const resetProgress = useCallback(() => {
    dispatch({ type: 'RESET_PROGRESS' })
  }, [])

  const value = {
    ...state,
    setSession,
    setSlide,
    nextSlide,
    prevSlide,
    completeSession,
    addAchievement,
    toggleNavigation,
    setPresentationMode,
    resetProgress,
  }

  return (
    <PresentationContext.Provider value={value}>
      {children}
    </PresentationContext.Provider>
  )
}

export function usePresentation() {
  const context = useContext(PresentationContext)
  if (!context) {
    throw new Error('usePresentation must be used within a PresentationProvider')
  }
  return context
}

export default PresentationContext