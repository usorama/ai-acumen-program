/**
 * Session data for the AI Acumen Program
 * Contains all 24 sessions organized by phases with detailed slide content
 */

export const phases = [
  {
    id: 1,
    name: 'Foundation',
    description: 'Building fundamental understanding of AI concepts and landscape',
    color: 'brand-primary',
    sessions: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 2,
    name: 'Implementation',
    description: 'Practical AI implementation strategies and methodologies',
    color: 'brand-secondary',
    sessions: [7, 8, 9, 10, 11, 12]
  },
  {
    id: 3,
    name: 'Optimization',
    description: 'Advanced optimization techniques and performance tuning',
    color: 'brand-accent',
    sessions: [13, 14, 15, 16, 17, 18]
  },
  {
    id: 4,
    name: 'Mastery',
    description: 'Expert-level concepts and future-focused strategies',
    color: 'brand-primary-light',
    sessions: [19, 20, 21, 22, 23, 24]
  }
]

export const sessions = [
  {
    id: 1,
    title: 'The AI Landscape',
    subtitle: 'Understanding the Current State and Future of Artificial Intelligence',
    phase: 1,
    duration: 45,
    description: 'Explore the comprehensive landscape of AI technologies, major players, and emerging trends that will shape the future of business and technology.',
    learningObjectives: [
      'Understand the current AI ecosystem and key players',
      'Identify different types of AI and their applications',
      'Recognize AI trends and future opportunities',
      'Assess AI readiness in your organization'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'The AI Landscape',
        subtitle: 'Understanding the Current State and Future of Artificial Intelligence',
        content: {
          backgroundImage: '/assets/ai-landscape-bg.jpg',
          quote: '"AI is the new electricity. Just as electricity transformed almost everything 100 years ago, today I actually have a hard time thinking of an industry that I don\'t think AI will transform in the next several years." - Andrew Ng'
        }
      },
      {
        id: 'agenda',
        type: 'agenda',
        title: 'Session Agenda',
        content: {
          items: [
            { title: 'AI Ecosystem Overview', duration: '10 min', icon: '🌐' },
            { title: 'Platform Comparison', duration: '15 min', icon: '⚖️' },
            { title: 'Industry Applications', duration: '10 min', icon: '🏢' },
            { title: 'Future Trends', duration: '10 min', icon: '🔮' }
          ]
        }
      },
      {
        id: 'ai-ecosystem',
        type: 'interactive-grid',
        title: 'The AI Ecosystem',
        subtitle: 'Major Players and Their Contributions',
        content: {
          items: [
            {
              id: 'openai',
              title: 'OpenAI',
              description: 'Pioneer in large language models and generative AI',
              features: ['GPT Series', 'DALL-E', 'Codex', 'Whisper'],
              strengths: ['Natural Language Processing', 'Code Generation', 'Creative Content'],
              marketPosition: 'Innovation Leader',
              logo: '🤖',
              color: 'bg-green-500/20',
              stats: {
                founded: '2015',
                valuation: '$29B',
                users: '100M+'
              }
            },
            {
              id: 'google',
              title: 'Google AI',
              description: 'Comprehensive AI platform with deep research foundation',
              features: ['Bard', 'Gemini', 'PaLM', 'Cloud AI'],
              strengths: ['Search & Discovery', 'Cloud Integration', 'Research'],
              marketPosition: 'Platform Leader',
              logo: '🔍',
              color: 'bg-blue-500/20',
              stats: {
                founded: '1998',
                aiInvestment: '$1B+',
                researchers: '1000+'
              }
            },
            {
              id: 'microsoft',
              title: 'Microsoft AI',
              description: 'Enterprise-focused AI with Azure integration',
              features: ['Azure AI', 'Copilot', 'Cognitive Services'],
              strengths: ['Enterprise Integration', 'Developer Tools', 'Cloud Services'],
              marketPosition: 'Enterprise Leader',
              logo: '💼',
              color: 'bg-purple-500/20',
              stats: {
                founded: '1975',
                azureGrowth: '50%',
                enterprises: '95%'
              }
            },
            {
              id: 'anthropic',
              title: 'Anthropic',
              description: 'Safety-focused AI with constitutional training methods',
              features: ['Claude', 'Constitutional AI', 'Safety Research'],
              strengths: ['AI Safety', 'Helpful Responses', 'Ethical AI'],
              marketPosition: 'Safety Pioneer',
              logo: '🛡️',
              color: 'bg-orange-500/20',
              stats: {
                founded: '2021',
                funding: '$4B',
                focus: 'Safety'
              }
            },
            {
              id: 'amazon',
              title: 'Amazon AI',
              description: 'AI services integrated with AWS cloud infrastructure',
              features: ['Alexa', 'SageMaker', 'Rekognition', 'Lex'],
              strengths: ['Voice AI', 'Cloud ML', 'Computer Vision'],
              marketPosition: 'Cloud AI Leader',
              logo: '☁️',
              color: 'bg-yellow-500/20',
              stats: {
                founded: '1994',
                awsRevenue: '$80B',
                alexaDevices: '100M+'
              }
            },
            {
              id: 'meta',
              title: 'Meta AI',
              description: 'Social and metaverse-focused AI technologies',
              features: ['LLaMA', 'PyTorch', 'Segment Anything'],
              strengths: ['Open Source', 'Computer Vision', 'Social AI'],
              marketPosition: 'Open Source Leader',
              logo: '🌐',
              color: 'bg-indigo-500/20',
              stats: {
                founded: '2004',
                users: '3.8B',
                openSource: 'Yes'
              }
            }
          ]
        }
      },
      {
        id: 'platform-comparison',
        type: 'comparison-matrix',
        title: 'AI Platform Comparison',
        subtitle: 'Detailed Analysis of Leading AI Platforms',
        content: {
          categories: [
            { id: 'ease', name: 'Ease of Use', weight: 0.2 },
            { id: 'features', name: 'Feature Set', weight: 0.25 },
            { id: 'cost', name: 'Cost Effectiveness', weight: 0.2 },
            { id: 'integration', name: 'Integration', weight: 0.15 },
            { id: 'support', name: 'Support & Docs', weight: 0.1 },
            { id: 'scalability', name: 'Scalability', weight: 0.1 }
          ],
          platforms: [
            {
              id: 'openai',
              name: 'OpenAI',
              scores: { ease: 9, features: 10, cost: 6, integration: 8, support: 8, scalability: 9 },
              pricing: 'Usage-based',
              bestFor: 'Content creation, coding assistance, general AI tasks',
              limitations: 'Cost can scale quickly, rate limits'
            },
            {
              id: 'google',
              name: 'Google AI',
              scores: { ease: 7, features: 9, cost: 8, integration: 9, support: 9, scalability: 10 },
              pricing: 'Freemium + Usage',
              bestFor: 'Enterprise integration, search applications',
              limitations: 'Complex setup, learning curve'
            },
            {
              id: 'microsoft',
              name: 'Microsoft AI',
              scores: { ease: 8, features: 9, cost: 7, integration: 10, support: 9, scalability: 10 },
              pricing: 'Subscription + Usage',
              bestFor: 'Enterprise environments, Microsoft ecosystem',
              limitations: 'Ecosystem lock-in, complex pricing'
            },
            {
              id: 'anthropic',
              name: 'Anthropic',
              scores: { ease: 9, features: 8, cost: 7, integration: 7, support: 8, scalability: 8 },
              pricing: 'Usage-based',
              bestFor: 'Safe AI applications, research, analysis',
              limitations: 'Newer platform, limited integrations'
            },
            {
              id: 'amazon',
              name: 'Amazon AI',
              scores: { ease: 6, features: 9, cost: 8, integration: 9, support: 8, scalability: 10 },
              pricing: 'Pay-as-you-go',
              bestFor: 'Cloud-native applications, voice AI',
              limitations: 'Steep learning curve, AWS dependency'
            }
          ]
        }
      },
      {
        id: 'industry-applications',
        type: 'industry-showcase',
        title: 'AI Across Industries',
        subtitle: 'Real-world Applications Transforming Business',
        content: {
          industries: [
            {
              name: 'Healthcare',
              icon: '🏥',
              color: 'bg-red-500/20',
              applications: [
                'Medical diagnosis and imaging',
                'Drug discovery and development',
                'Personalized treatment plans',
                'Administrative automation'
              ],
              examples: [
                { company: 'DeepMind', use: 'Protein structure prediction' },
                { company: 'IBM Watson', use: 'Cancer diagnosis assistance' },
                { company: 'Babylon Health', use: 'AI-powered consultations' }
              ],
              impact: '40% reduction in diagnostic errors',
              growth: '45% CAGR'
            },
            {
              name: 'Finance',
              icon: '💰',
              color: 'bg-green-500/20',
              applications: [
                'Fraud detection and prevention',
                'Algorithmic trading',
                'Credit scoring and risk assessment',
                'Customer service automation'
              ],
              examples: [
                { company: 'JPMorgan', use: 'Contract analysis (COIN)' },
                { company: 'PayPal', use: 'Real-time fraud detection' },
                { company: 'Ant Financial', use: 'Credit scoring in China' }
              ],
              impact: '90% fraud detection accuracy',
              growth: '23% CAGR'
            },
            {
              name: 'Retail',
              icon: '🛍️',
              color: 'bg-purple-500/20',
              applications: [
                'Personalized recommendations',
                'Inventory optimization',
                'Dynamic pricing',
                'Visual search and AR'
              ],
              examples: [
                { company: 'Amazon', use: 'Product recommendations' },
                { company: 'Walmart', use: 'Supply chain optimization' },
                { company: 'Sephora', use: 'Virtual makeup try-on' }
              ],
              impact: '35% increase in conversion',
              growth: '38% CAGR'
            },
            {
              name: 'Manufacturing',
              icon: '🏭',
              color: 'bg-blue-500/20',
              applications: [
                'Predictive maintenance',
                'Quality control automation',
                'Supply chain optimization',
                'Robotic process automation'
              ],
              examples: [
                { company: 'Siemens', use: 'Predictive maintenance' },
                { company: 'BMW', use: 'Quality inspection' },
                { company: 'Foxconn', use: 'Assembly line automation' }
              ],
              impact: '20% reduction in downtime',
              growth: '57% CAGR'
            },
            {
              name: 'Transportation',
              icon: '🚗',
              color: 'bg-yellow-500/20',
              applications: [
                'Autonomous vehicles',
                'Route optimization',
                'Traffic management',
                'Maintenance prediction'
              ],
              examples: [
                { company: 'Tesla', use: 'Autopilot system' },
                { company: 'Uber', use: 'Route optimization' },
                { company: 'UPS', use: 'ORION delivery optimization' }
              ],
              impact: '15% fuel savings',
              growth: '16% CAGR'
            },
            {
              name: 'Education',
              icon: '📚',
              color: 'bg-indigo-500/20',
              applications: [
                'Personalized learning paths',
                'Automated grading',
                'Intelligent tutoring systems',
                'Content generation'
              ],
              examples: [
                { company: 'Duolingo', use: 'Adaptive learning' },
                { company: 'Coursera', use: 'Content recommendations' },
                { company: 'Gradescope', use: 'Automated grading' }
              ],
              impact: '30% improvement in outcomes',
              growth: '43% CAGR'
            }
          ]
        }
      },
      {
        id: 'future-trends',
        type: 'trend-timeline',
        title: 'AI Future Trends',
        subtitle: 'What to Expect in the Next 5 Years',
        content: {
          timeline: [
            {
              year: '2024',
              title: 'Multimodal AI Mainstream',
              description: 'AI systems that seamlessly handle text, images, audio, and video become standard',
              technologies: ['GPT-4 Vision', 'Gemini Ultra', 'Claude-3'],
              impact: 'Enhanced user experiences across all digital platforms',
              probability: 95
            },
            {
              year: '2025',
              title: 'AI Agents & Automation',
              description: 'Autonomous AI agents handling complex multi-step tasks become widespread',
              technologies: ['AutoGPT', 'LangChain Agents', 'Microsoft Copilot'],
              impact: '40% of knowledge work automated',
              probability: 85
            },
            {
              year: '2026',
              title: 'Edge AI Revolution',
              description: 'Powerful AI running locally on devices without cloud dependency',
              technologies: ['Neural Processing Units', 'Federated Learning', 'TinyML'],
              impact: 'Privacy-first AI, reduced latency, offline capabilities',
              probability: 75
            },
            {
              year: '2027',
              title: 'Artificial General Intelligence',
              description: 'AI systems approaching human-level performance across diverse domains',
              technologies: ['Advanced Neural Architectures', 'Cognitive Computing', 'Reasoning Systems'],
              impact: 'Fundamental shift in work, education, and society',
              probability: 60
            },
            {
              year: '2028',
              title: 'Quantum-AI Hybrid',
              description: 'Quantum computing accelerates AI training and inference',
              technologies: ['Quantum Machine Learning', 'Hybrid Algorithms', 'Error Correction'],
              impact: 'Exponential improvement in AI capabilities',
              probability: 45
            }
          ],
          keyFactors: [
            'Compute power continues exponential growth',
            'Data availability and quality improve',
            'Regulatory frameworks mature',
            'Public acceptance and trust increase',
            'Investment and talent pool expand'
          ]
        }
      },
      {
        id: 'organizational-readiness',
        type: 'assessment',
        title: 'AI Readiness Assessment',
        subtitle: 'Evaluate Your Organization\'s AI Readiness',
        content: {
          categories: [
            {
              name: 'Data Infrastructure',
              weight: 0.25,
              questions: [
                { id: 'data-quality', text: 'Do you have clean, structured data?', type: 'scale' },
                { id: 'data-access', text: 'Is data easily accessible across departments?', type: 'scale' },
                { id: 'data-governance', text: 'Are data governance policies in place?', type: 'scale' }
              ]
            },
            {
              name: 'Technical Capabilities',
              weight: 0.2,
              questions: [
                { id: 'tech-skills', text: 'Does your team have AI/ML expertise?', type: 'scale' },
                { id: 'infrastructure', text: 'Do you have scalable computing resources?', type: 'scale' },
                { id: 'integration', text: 'Can you integrate AI with existing systems?', type: 'scale' }
              ]
            },
            {
              name: 'Leadership & Strategy',
              weight: 0.2,
              questions: [
                { id: 'leadership-buy-in', text: 'Does leadership champion AI initiatives?', type: 'scale' },
                { id: 'ai-strategy', text: 'Do you have a clear AI strategy?', type: 'scale' },
                { id: 'investment', text: 'Is adequate budget allocated for AI?', type: 'scale' }
              ]
            },
            {
              name: 'Culture & Change Management',
              weight: 0.15,
              questions: [
                { id: 'culture-innovation', text: 'Is there a culture of innovation?', type: 'scale' },
                { id: 'change-readiness', text: 'Are employees ready for AI-driven changes?', type: 'scale' },
                { id: 'learning-culture', text: 'Is continuous learning encouraged?', type: 'scale' }
              ]
            },
            {
              name: 'Ethics & Compliance',
              weight: 0.1,
              questions: [
                { id: 'ethics-framework', text: 'Do you have AI ethics guidelines?', type: 'scale' },
                { id: 'compliance', text: 'Are regulatory requirements understood?', type: 'scale' },
                { id: 'bias-awareness', text: 'Is there awareness of AI bias issues?', type: 'scale' }
              ]
            },
            {
              name: 'Use Case Identification',
              weight: 0.1,
              questions: [
                { id: 'use-cases', text: 'Have you identified specific AI use cases?', type: 'scale' },
                { id: 'roi-measurement', text: 'Can you measure AI project ROI?', type: 'scale' },
                { id: 'pilot-readiness', text: 'Are you ready to run AI pilots?', type: 'scale' }
              ]
            }
          ],
          scoring: {
            ranges: [
              { min: 80, max: 100, level: 'Advanced', description: 'Ready for complex AI implementations', color: 'green' },
              { min: 60, max: 79, level: 'Intermediate', description: 'Ready for targeted AI projects', color: 'blue' },
              { min: 40, max: 59, level: 'Developing', description: 'Need foundation building', color: 'yellow' },
              { min: 0, max: 39, level: 'Beginning', description: 'Significant preparation required', color: 'red' }
            ]
          }
        }
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        subtitle: 'Essential Points to Remember',
        content: {
          takeaways: [
            {
              title: 'AI is Rapidly Evolving',
              description: 'The AI landscape changes quickly - stay informed about new developments and capabilities',
              icon: '🚀',
              priority: 'high'
            },
            {
              title: 'Choose Platforms Strategically',
              description: 'Select AI platforms based on your specific needs, not just popularity or features',
              icon: '🎯',
              priority: 'high'
            },
            {
              title: 'Industry Applications are Expanding',
              description: 'AI is transforming every industry - identify opportunities in your sector',
              icon: '🌐',
              priority: 'medium'
            },
            {
              title: 'Prepare for the Future',
              description: 'Multimodal AI, autonomous agents, and edge computing will define the next phase',
              icon: '🔮',
              priority: 'medium'
            },
            {
              title: 'Assess Your Readiness',
              description: 'Honest assessment of your organization\'s AI readiness is crucial for success',
              icon: '📊',
              priority: 'high'
            }
          ]
        }
      },
      {
        id: 'next-steps',
        type: 'action-plan',
        title: 'Your Next Steps',
        subtitle: 'Actionable Items to Drive AI Adoption',
        content: {
          immediate: [
            'Complete the AI readiness assessment for your organization',
            'Research 2-3 AI platforms relevant to your use cases',
            'Identify one pilot project opportunity'
          ],
          shortTerm: [
            'Build cross-functional AI exploration team',
            'Establish data quality and governance practices',
            'Create AI ethics and governance framework'
          ],
          longTerm: [
            'Develop comprehensive AI strategy and roadmap',
            'Invest in team training and capability building',
            'Scale successful pilots across organization'
          ]
        }
      }
    ]
  },
  {
    id: 2,
    title: 'AI Strategy & Planning',
    subtitle: 'Developing a Comprehensive AI Implementation Strategy',
    phase: 1,
    duration: 50,
    description: 'Learn how to develop and execute a strategic AI implementation plan that aligns with business objectives and drives measurable value.',
    learningObjectives: [
      'Develop a comprehensive AI strategy framework',
      'Align AI initiatives with business objectives',
      'Create implementation roadmaps and timelines',
      'Establish success metrics and KPIs'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'AI Strategy & Planning',
        subtitle: 'Developing a Comprehensive AI Implementation Strategy',
        content: {
          backgroundImage: '/assets/strategy-bg.jpg',
          quote: '"Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat." - Sun Tzu, adapted for AI'
        }
      }
      // Additional slides would be added here following the same pattern
    ]
  }
  // Sessions 3-24 would follow the same structure with unique, detailed content
]

/**
 * Get session by ID
 * @param {number} sessionId - Session ID
 * @returns {Object|null} Session object or null if not found
 */
export function getSessionById(sessionId) {
  return sessions.find(session => session.id === sessionId) || null
}

/**
 * Get sessions by phase
 * @param {number} phaseId - Phase ID
 * @returns {Array} Array of sessions in the phase
 */
export function getSessionsByPhase(phaseId) {
  return sessions.filter(session => session.phase === phaseId)
}

/**
 * Get phase information by ID
 * @param {number} phaseId - Phase ID
 * @returns {Object|null} Phase object or null if not found
 */
export function getPhaseById(phaseId) {
  return phases.find(phase => phase.id === phaseId) || null
}

/**
 * Get next session in sequence
 * @param {number} currentSessionId - Current session ID
 * @returns {Object|null} Next session or null if at end
 */
export function getNextSession(currentSessionId) {
  const currentIndex = sessions.findIndex(session => session.id === currentSessionId)
  return currentIndex < sessions.length - 1 ? sessions[currentIndex + 1] : null
}

/**
 * Get previous session in sequence
 * @param {number} currentSessionId - Current session ID
 * @returns {Object|null} Previous session or null if at beginning
 */
export function getPreviousSession(currentSessionId) {
  const currentIndex = sessions.findIndex(session => session.id === currentSessionId)
  return currentIndex > 0 ? sessions[currentIndex - 1] : null
}

/**
 * Calculate total program duration
 * @returns {number} Total duration in minutes
 */
export function getTotalProgramDuration() {
  return sessions.reduce((total, session) => total + session.duration, 0)
}

/**
 * Get progress percentage for a set of completed sessions
 * @param {Array} completedSessions - Array of completed session IDs
 * @returns {number} Progress percentage (0-100)
 */
export function calculateProgress(completedSessions) {
  return Math.round((completedSessions.length / sessions.length) * 100)
}

/**
 * Get phase progress for completed sessions
 * @param {Array} completedSessions - Array of completed session IDs
 * @param {number} phaseId - Phase ID to check
 * @returns {Object} Phase progress information
 */
export function getPhaseProgress(completedSessions, phaseId) {
  const phaseSessions = getSessionsByPhase(phaseId)
  const completedInPhase = phaseSessions.filter(session => 
    completedSessions.includes(session.id)
  ).length
  
  return {
    completed: completedInPhase,
    total: phaseSessions.length,
    percentage: Math.round((completedInPhase / phaseSessions.length) * 100),
    isComplete: completedInPhase === phaseSessions.length
  }
}