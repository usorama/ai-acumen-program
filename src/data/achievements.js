/**
 * Achievement definitions for the AI Acumen Program
 * Each achievement has a type, trigger condition, and reward details
 */

export const achievementTypes = {
  SESSION_COMPLETED: 'session_completed',
  PHASE_COMPLETED: 'phase_completed',
  STREAK_MILESTONE: 'streak_milestone',
  QUIZ_PERFECT: 'quiz_perfect',
  ENGAGEMENT_HIGH: 'engagement_high',
  TIME_MILESTONE: 'time_milestone',
  EXPLORER: 'explorer',
  PERFECTIONIST: 'perfectionist',
  CONSISTENT_LEARNER: 'consistent_learner',
  KNOWLEDGE_SEEKER: 'knowledge_seeker'
}

export const achievements = [
  // Session Completion Achievements
  {
    id: 'first_session',
    type: achievementTypes.SESSION_COMPLETED,
    title: 'AI Journey Begins',
    description: 'Completed your first session in the AI Acumen Program',
    icon: '🚀',
    points: 100,
    rarity: 'common',
    trigger: { sessionNumber: 1 }
  },
  {
    id: 'quarter_complete',
    type: achievementTypes.SESSION_COMPLETED,
    title: 'Quarter Master',
    description: 'Completed 25% of the AI Acumen Program',
    icon: '🎯',
    points: 250,
    rarity: 'uncommon',
    trigger: { sessionNumber: 6 }
  },
  {
    id: 'halfway_hero',
    type: achievementTypes.SESSION_COMPLETED,
    title: 'Halfway Hero',
    description: 'Reached the halfway point of your AI journey',
    icon: '⭐',
    points: 500,
    rarity: 'rare',
    trigger: { sessionNumber: 12 }
  },
  {
    id: 'three_quarter_champion',
    type: achievementTypes.SESSION_COMPLETED,
    title: 'Three Quarter Champion',
    description: 'Completed 75% of the AI Acumen Program',
    icon: '🏆',
    points: 750,
    rarity: 'epic',
    trigger: { sessionNumber: 18 }
  },
  {
    id: 'ai_master',
    type: achievementTypes.SESSION_COMPLETED,
    title: 'AI Master',
    description: 'Completed the entire AI Acumen Program - You are now an AI expert!',
    icon: '👑',
    points: 1000,
    rarity: 'legendary',
    trigger: { sessionNumber: 24 }
  },

  // Phase Completion Achievements
  {
    id: 'foundation_master',
    type: achievementTypes.PHASE_COMPLETED,
    title: 'Foundation Master',
    description: 'Mastered the foundational concepts of AI',
    icon: '🏗️',
    points: 300,
    rarity: 'uncommon',
    trigger: { phase: 1, sessionsCompleted: 6 }
  },
  {
    id: 'implementation_expert',
    type: achievementTypes.PHASE_COMPLETED,
    title: 'Implementation Expert',
    description: 'Became an expert at implementing AI solutions',
    icon: '⚙️',
    points: 400,
    rarity: 'rare',
    trigger: { phase: 2, sessionsCompleted: 12 }
  },
  {
    id: 'optimization_specialist',
    type: achievementTypes.PHASE_COMPLETED,
    title: 'Optimization Specialist',
    description: 'Specialized in AI optimization techniques',
    icon: '📈',
    points: 500,
    rarity: 'epic',
    trigger: { phase: 3, sessionsCompleted: 18 }
  },
  {
    id: 'mastery_achieved',
    type: achievementTypes.PHASE_COMPLETED,
    title: 'Mastery Achieved',
    description: 'Achieved mastery in all aspects of AI implementation',
    icon: '🎓',
    points: 600,
    rarity: 'legendary',
    trigger: { phase: 4, sessionsCompleted: 24 }
  },

  // Learning Streak Achievements
  {
    id: 'streak_3',
    type: achievementTypes.STREAK_MILESTONE,
    title: 'Learning Momentum',
    description: 'Maintained a 3-day learning streak',
    icon: '🔥',
    points: 150,
    rarity: 'common',
    trigger: { streakDays: 3 }
  },
  {
    id: 'streak_7',
    type: achievementTypes.STREAK_MILESTONE,
    title: 'Week Warrior',
    description: 'Maintained a 7-day learning streak',
    icon: '🌟',
    points: 300,
    rarity: 'uncommon',
    trigger: { streakDays: 7 }
  },
  {
    id: 'streak_14',
    type: achievementTypes.STREAK_MILESTONE,
    title: 'Dedication Champion',
    description: 'Maintained a 14-day learning streak',
    icon: '💪',
    points: 500,
    rarity: 'rare',
    trigger: { streakDays: 14 }
  },
  {
    id: 'streak_30',
    type: achievementTypes.STREAK_MILESTONE,
    title: 'Learning Legend',
    description: 'Maintained a 30-day learning streak - Incredible dedication!',
    icon: '🏅',
    points: 1000,
    rarity: 'legendary',
    trigger: { streakDays: 30 }
  },

  // Engagement Achievements
  {
    id: 'explorer',
    type: achievementTypes.EXPLORER,
    title: 'AI Explorer',
    description: 'Explored all interactive elements in a session',
    icon: '🧭',
    points: 100,
    rarity: 'common',
    trigger: { interactionsCompleted: 10 }
  },
  {
    id: 'quiz_master',
    type: achievementTypes.QUIZ_PERFECT,
    title: 'Quiz Master',
    description: 'Achieved perfect score on 5 knowledge checks',
    icon: '🧠',
    points: 400,
    rarity: 'rare',
    trigger: { perfectQuizzes: 5 }
  },
  {
    id: 'perfectionist',
    type: achievementTypes.PERFECTIONIST,
    title: 'Perfectionist',
    description: 'Completed 10 sessions with 100% completion rate',
    icon: '💎',
    points: 600,
    rarity: 'epic',
    trigger: { perfectSessions: 10 }
  },

  // Time-based Achievements
  {
    id: 'time_5h',
    type: achievementTypes.TIME_MILESTONE,
    title: 'Dedicated Learner',
    description: 'Spent 5 hours learning about AI',
    icon: '⏰',
    points: 200,
    rarity: 'common',
    trigger: { totalHours: 5 }
  },
  {
    id: 'time_20h',
    type: achievementTypes.TIME_MILESTONE,
    title: 'AI Enthusiast',
    description: 'Invested 20 hours in AI education',
    icon: '📚',
    points: 500,
    rarity: 'uncommon',
    trigger: { totalHours: 20 }
  },
  {
    id: 'time_50h',
    type: achievementTypes.TIME_MILESTONE,
    title: 'Knowledge Accumulator',
    description: 'Accumulated 50 hours of AI learning',
    icon: '🎒',
    points: 800,
    rarity: 'rare',
    trigger: { totalHours: 50 }
  },

  // Special Achievements
  {
    id: 'early_bird',
    type: achievementTypes.ENGAGEMENT_HIGH,
    title: 'Early Bird',
    description: 'Completed a session before 9 AM',
    icon: '🌅',
    points: 150,
    rarity: 'uncommon',
    trigger: { completedBeforeHour: 9 }
  },
  {
    id: 'night_owl',
    type: achievementTypes.ENGAGEMENT_HIGH,
    title: 'Night Owl',
    description: 'Completed a session after 10 PM',
    icon: '🦉',
    points: 150,
    rarity: 'uncommon',
    trigger: { completedAfterHour: 22 }
  },
  {
    id: 'weekend_warrior',
    type: achievementTypes.ENGAGEMENT_HIGH,
    title: 'Weekend Warrior',
    description: 'Completed sessions on both Saturday and Sunday',
    icon: '🏃‍♂️',
    points: 200,
    rarity: 'uncommon',
    trigger: { weekendSessions: 2 }
  }
]

/**
 * Get achievement by ID
 * @param {string} achievementId - Achievement ID
 * @returns {Object|null} Achievement object or null if not found
 */
export function getAchievementById(achievementId) {
  return achievements.find(achievement => achievement.id === achievementId) || null
}

/**
 * Get achievements by type
 * @param {string} type - Achievement type
 * @returns {Array} Array of achievements matching the type
 */
export function getAchievementsByType(type) {
  return achievements.filter(achievement => achievement.type === type)
}

/**
 * Get achievements by rarity
 * @param {string} rarity - Achievement rarity
 * @returns {Array} Array of achievements matching the rarity
 */
export function getAchievementsByRarity(rarity) {
  return achievements.filter(achievement => achievement.rarity === rarity)
}

/**
 * Check if user has earned a specific achievement
 * @param {Object} userStats - User statistics
 * @param {Object} achievement - Achievement to check
 * @returns {boolean} True if achievement is earned
 */
export function checkAchievementEarned(userStats, achievement) {
  const { trigger } = achievement
  
  switch (achievement.type) {
    case achievementTypes.SESSION_COMPLETED:
      return userStats.completedSessions.includes(trigger.sessionNumber)
    
    case achievementTypes.PHASE_COMPLETED:
      return userStats.completedSessions.length >= trigger.sessionsCompleted
    
    case achievementTypes.STREAK_MILESTONE:
      return userStats.currentStreak >= trigger.streakDays
    
    case achievementTypes.QUIZ_PERFECT:
      return userStats.perfectQuizzes >= trigger.perfectQuizzes
    
    case achievementTypes.TIME_MILESTONE:
      return userStats.totalHours >= trigger.totalHours
    
    case achievementTypes.PERFECTIONIST:
      return userStats.perfectSessions >= trigger.perfectSessions
    
    case achievementTypes.EXPLORER:
      return userStats.totalInteractions >= trigger.interactionsCompleted
    
    default:
      return false
  }
}

/**
 * Get all earned achievements for user
 * @param {Object} userStats - User statistics
 * @returns {Array} Array of earned achievements
 */
export function getEarnedAchievements(userStats) {
  return achievements.filter(achievement => 
    checkAchievementEarned(userStats, achievement)
  )
}

/**
 * Get total points from earned achievements
 * @param {Array} earnedAchievements - Array of earned achievements
 * @returns {number} Total points
 */
export function getTotalAchievementPoints(earnedAchievements) {
  return earnedAchievements.reduce((total, achievement) => total + achievement.points, 0)
}

/**
 * Get rarity color class for achievement
 * @param {string} rarity - Achievement rarity
 * @returns {string} Tailwind color class
 */
export function getRarityColor(rarity) {
  const colors = {
    common: 'text-gray-400',
    uncommon: 'text-green-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
    legendary: 'text-yellow-400'
  }
  return colors[rarity] || colors.common
}

/**
 * Get next achievement to unlock
 * @param {Object} userStats - User statistics
 * @returns {Object|null} Next achievement or null if all unlocked
 */
export function getNextAchievement(userStats) {
  const unearned = achievements.filter(achievement => 
    !checkAchievementEarned(userStats, achievement)
  )
  
  // Sort by points (easier achievements first)
  return unearned.sort((a, b) => a.points - b.points)[0] || null
}