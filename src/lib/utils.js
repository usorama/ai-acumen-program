import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function for merging Tailwind CSS classes
 * @param {...any} inputs - Class names to merge
 * @returns {string} Merged class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Utility for local storage operations with error handling
 */
export const storage = {
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.warn(`Error reading from localStorage key "${key}":`, error)
      return defaultValue
    }
  },

  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.warn(`Error writing to localStorage key "${key}":`, error)
    }
  },

  remove: (key) => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error)
    }
  }
}

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function for performance optimization
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit) {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * Format percentage for progress display
 * @param {number} value - Current value
 * @param {number} total - Total value
 * @returns {string} Formatted percentage
 */
export function formatPercentage(value, total) {
  if (total === 0) return '0%'
  return `${Math.round((value / total) * 100)}%`
}

/**
 * Calculate session phase based on session number
 * @param {number} sessionNumber - Session number (1-24)
 * @returns {Object} Phase information
 */
export function getSessionPhase(sessionNumber) {
  if (sessionNumber <= 6) {
    return { phase: 1, name: 'Foundation', color: 'brand-primary' }
  } else if (sessionNumber <= 12) {
    return { phase: 2, name: 'Implementation', color: 'brand-secondary' }
  } else if (sessionNumber <= 18) {
    return { phase: 3, name: 'Optimization', color: 'brand-accent' }
  } else {
    return { phase: 4, name: 'Mastery', color: 'brand-primary-light' }
  }
}

/**
 * Generate unique ID for components
 * @returns {string} Unique ID
 */
export function generateId() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Format time duration for display
 * @param {number} minutes - Duration in minutes
 * @returns {string} Formatted duration
 */
export function formatDuration(minutes) {
  if (minutes < 60) {
    return `${minutes} min`
  }
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`
}

/**
 * Check if user prefers reduced motion
 * @returns {boolean} True if user prefers reduced motion
 */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Smooth scroll to element
 * @param {string} elementId - Element ID to scroll to
 * @param {Object} options - Scroll options
 */
export function scrollToElement(elementId, options = {}) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'start',
      ...options
    })
  }
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Success status
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.warn('Failed to copy to clipboard:', error)
    return false
  }
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Get readable achievement description
 * @param {string} type - Achievement type
 * @param {Object} data - Achievement data
 * @returns {string} Readable description
 */
export function getAchievementDescription(type, data = {}) {
  const descriptions = {
    session_completed: `Completed Session ${data.sessionNumber || ''}`,
    phase_completed: `Mastered Phase ${data.phaseNumber || ''} - ${data.phaseName || ''}`,
    streak_milestone: `${data.days || 0} day learning streak!`,
    quiz_perfect: `Perfect score on ${data.sessionName || 'quiz'}`,
    engagement_high: 'High engagement achievement unlocked',
    time_milestone: `${data.hours || 0} hours of learning completed`
  }
  
  return descriptions[type] || 'Achievement unlocked!'
}

/**
 * Create confetti effect
 * @param {Object} options - Confetti options
 */
export function createConfetti(options = {}) {
  const {
    count = 50,
    colors = ['#1B9AAA', '#6AD5CB', '#58B09C', '#A1E8CC'],
    duration = 3000
  } = options

  const container = document.createElement('div')
  container.className = 'confetti'
  document.body.appendChild(container)

  for (let i = 0; i < count; i++) {
    const confettiPiece = document.createElement('div')
    confettiPiece.className = 'confetti-piece'
    confettiPiece.style.left = Math.random() * 100 + '%'
    confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    confettiPiece.style.animationDelay = Math.random() * 3 + 's'
    confettiPiece.style.animationDuration = (Math.random() * 2 + 2) + 's'
    container.appendChild(confettiPiece)
  }

  setTimeout(() => {
    document.body.removeChild(container)
  }, duration)
}

/**
 * Format session title with padding zeros
 * @param {number} sessionNumber - Session number
 * @returns {string} Formatted session title
 */
export function formatSessionTitle(sessionNumber) {
  return `Session ${sessionNumber.toString().padStart(2, '0')}`
}

/**
 * Check if session is available based on prerequisites
 * @param {number} sessionNumber - Session to check
 * @param {Array} completedSessions - Array of completed session numbers
 * @returns {boolean} True if session is available
 */
export function isSessionAvailable(sessionNumber, completedSessions) {
  if (sessionNumber === 1) return true
  return completedSessions.includes(sessionNumber - 1)
}