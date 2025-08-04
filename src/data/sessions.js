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
  },
  {
    id: 3,
    title: 'Prompt Engineering is Not Enough: Intro to Context Engineering',
    subtitle: 'Shifting from "Asking AI Questions" to "Architecting Information Environments"',
    phase: 1,
    duration: 45,
    description: 'Shift mental model from "asking AI questions" to "architecting the information environment" for better results using the PTCF Framework.',
    learningObjectives: [
      'Understand the limitations of basic prompt engineering',
      'Master the PTCF Framework for context engineering',
      'Learn to provide systematic context for better AI outputs',
      'Practice transforming generic prompts into context-rich instructions'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'Prompt Engineering is Not Enough',
        subtitle: 'Intro to Context Engineering',
        content: {
          backgroundImage: '/assets/context-bg.jpg',
          quote: '"Think of AI like a brilliant consultant who knows nothing about your business. Context engineering is like giving them your company handbook, org chart, and project requirements before asking for advice."'
        }
      },
      {
        id: 'agenda',
        type: 'agenda',
        title: 'Session Agenda',
        content: {
          items: [
            { title: 'Defining Context Engineering', duration: '5 min', icon: '🏗️' },
            { title: 'Context Injection Exercise', duration: '7 min', icon: '💉' },
            { title: 'PTCF Template & Playbook Entry', duration: '3 min', icon: '📋' }
          ]
        }
      },
      {
        id: 'context-engineering-definition',
        type: 'interactive-grid',
        title: 'Context Engineering Fundamentals',
        subtitle: 'Understanding the PTCF Framework',
        content: {
          items: [
            {
              id: 'persona',
              title: 'P - Persona',
              description: 'Define who the AI should be - their role and expertise',
              features: ['Senior Financial Analyst', 'Marketing Strategist', 'Technical Architect'],
              strengths: ['Role clarity', 'Expertise focus', 'Appropriate tone'],
              marketPosition: 'Identity Foundation',
              logo: '👤',
              color: 'bg-blue-500/20',
              stats: {
                impact: '40%',
                clarity: '85%',
                relevance: '90%'
              }
            },
            {
              id: 'task',
              title: 'T - Task',
              description: 'Specify exactly what the AI should accomplish',
              features: ['Analyze financial data', 'Create marketing strategy', 'Design system architecture'],
              strengths: ['Clear objectives', 'Focused output', 'Measurable results'],
              marketPosition: 'Action Definition',
              logo: '🎯',
              color: 'bg-green-500/20',
              stats: {
                precision: '75%',
                completion: '95%',
                quality: '80%'
              }
            },
            {
              id: 'context',
              title: 'C - Context',
              description: 'Provide external knowledge and constraints',
              features: ['Company data', 'Industry trends', 'Budget constraints'],
              strengths: ['Informed decisions', 'Relevant insights', 'Accurate outputs'],
              marketPosition: 'Knowledge Integration',
              logo: '📚',
              color: 'bg-purple-500/20',
              stats: {
                accuracy: '90%',
                relevance: '95%',
                depth: '85%'
              }
            },
            {
              id: 'format',
              title: 'F - Format',
              description: 'Specify how the output should be structured',
              features: ['Executive summary', 'Bullet points', 'Technical specification'],
              strengths: ['Usable output', 'Consistent structure', 'Ready for action'],
              marketPosition: 'Output Control',
              logo: '📊',
              color: 'bg-orange-500/20',
              stats: {
                usability: '95%',
                consistency: '90%',
                efficiency: '85%'
              }
            }
          ]
        }
      },
      {
        id: 'before-after-comparison',
        type: 'comparison-matrix',
        title: 'Generic vs Context-Rich Prompts',
        subtitle: 'Dramatic Quality Improvement with PTCF Framework',
        content: {
          categories: [
            { id: 'relevance', name: 'Relevance', weight: 0.25 },
            { id: 'actionability', name: 'Actionability', weight: 0.25 },
            { id: 'specificity', name: 'Specificity', weight: 0.2 },
            { id: 'professional', name: 'Professional Tone', weight: 0.15 },
            { id: 'completeness', name: 'Completeness', weight: 0.15 }
          ],
          platforms: [
            {
              id: 'generic',
              name: 'Generic Prompt',
              scores: { relevance: 3, actionability: 2, specificity: 2, professional: 4, completeness: 3 },
              pricing: 'Basic',
              bestFor: 'General information, quick answers',
              limitations: 'Vague output, may miss business context'
            },
            {
              id: 'ptcf-basic',
              name: 'Basic PTCF',
              scores: { relevance: 7, actionability: 6, specificity: 7, professional: 8, completeness: 6 },
              pricing: 'Improved',
              bestFor: 'Business applications, structured tasks',
              limitations: 'Still may lack deep context'
            },
            {
              id: 'ptcf-advanced',
              name: 'Advanced PTCF',
              scores: { relevance: 9, actionability: 9, specificity: 9, professional: 9, completeness: 9 },
              pricing: 'Professional',
              bestFor: 'Complex business decisions, strategic analysis',
              limitations: 'Requires more setup time'
            }
          ]
        }
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        subtitle: 'Essential Context Engineering Principles',
        content: {
          takeaways: [
            {
              title: 'Context is Everything',
              description: 'AI quality depends more on context than on the AI model itself',
              icon: '🏗️',
              priority: 'high'
            },
            {
              title: 'PTCF Framework',
              description: 'Persona, Task, Context, Format - the foundation of effective AI interaction',
              icon: '📋',
              priority: 'high'
            },
            {
              title: 'Business Consultant Analogy',
              description: 'Treat AI like a skilled consultant who needs proper briefing',
              icon: '💼',
              priority: 'high'
            }
          ]
        }
      },
      {
        id: 'next-steps',
        type: 'action-plan',
        title: 'Your Next Steps',
        subtitle: 'Implementing Context Engineering in Your Work',
        content: {
          immediate: [
            'Practice the PTCF framework with your current AI interactions',
            'Transform 3 generic prompts using the PTCF template',
            'Add PTCF template to your Manager\'s AI Playbook'
          ],
          shortTerm: [
            'Create PTCF templates for your most common AI use cases',
            'Train your team on context engineering principles'
          ],
          longTerm: [
            'Build a library of proven PTCF templates for your organization',
            'Integrate context engineering into AI tool selection criteria'
          ]
        }
      }
    ]
  },
  {
    id: 4,
    title: 'The Foundation of Modern AI: Retrieval-Augmented Generation (RAG)',
    subtitle: 'Understanding How AI Uses Private, Proprietary Knowledge Securely',
    phase: 1,
    duration: 45,
    description: 'Demystify RAG technology that allows AI to securely use your organization\'s private, proprietary knowledge for more accurate and relevant responses.',
    learningObjectives: [
      'Understand RAG technology in business terms',
      'Identify when to use RAG vs fine-tuning approaches',
      'Recognize RAG opportunities in your organization',
      'Learn to implement basic RAG solutions'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'The Foundation of Modern AI',
        subtitle: 'Retrieval-Augmented Generation (RAG)',
        content: {
          backgroundImage: '/assets/rag-foundation-bg.jpg',
          quote: '"RAG is like giving your AI employee access to your company\'s Google Drive, but smarter and more secure."'
        }
      },
      {
        id: 'agenda',
        type: 'agenda',
        title: 'Session Agenda',
        content: {
          items: [
            { title: 'RAG in Business Terms', duration: '5 min', icon: '📚' },
            { title: 'RAG vs Fine-Tuning Exercise', duration: '7 min', icon: '⚖️' },
            { title: 'Implementation Checklist', duration: '3 min', icon: '✅' }
          ]
        }
      },
      {
        id: 'rag-explained',
        type: 'interactive-grid',
        title: 'RAG Technology Explained',
        subtitle: 'How RAG Works in Simple Business Terms',
        content: {
          items: [
            {
              id: 'traditional-ai',
              title: 'Traditional AI',
              description: 'AI works from pre-trained knowledge only',
              features: ['Fixed knowledge cutoff', 'Generic responses', 'No company context'],
              strengths: ['Fast responses', 'Broad knowledge', 'No setup required'],
              marketPosition: 'Basic Approach',
              logo: '🧠',
              color: 'bg-gray-500/20',
              stats: {
                accuracy: '60%',
                relevance: '40%',
                context: 'None'
              }
            },
            {
              id: 'rag-enhanced',
              title: 'RAG-Enhanced AI',
              description: 'AI retrieves relevant information before responding',
              features: ['Real-time information access', 'Company-specific context', 'Factual grounding'],
              strengths: ['Higher accuracy', 'Relevant responses', 'Reduced hallucinations'],
              marketPosition: 'Enhanced Approach',
              logo: '🔍',
              color: 'bg-blue-500/20',
              stats: {
                accuracy: '85%',
                relevance: '90%',
                context: 'Full'
              }
            },
            {
              id: 'business-analogy',
              title: 'Business Analogy',
              description: 'Like giving a consultant your company handbook before asking advice',
              features: ['Targeted information', 'Just-in-time access', 'Contextual responses'],
              strengths: ['Business relevance', 'Accurate insights', 'Actionable advice'],
              marketPosition: 'Practical Understanding',
              logo: '💼',
              color: 'bg-green-500/20',
              stats: {
                understanding: '95%',
                applicability: '90%',
                value: 'High'
              }
            }
          ]
        }
      },
      {
        id: 'rag-vs-finetuning',
        type: 'comparison-matrix',
        title: 'RAG vs Fine-Tuning: When to Use Which',
        subtitle: 'Strategic Decision Framework',
        content: {
          categories: [
            { id: 'setup-cost', name: 'Setup Cost', weight: 0.2 },
            { id: 'maintenance', name: 'Maintenance', weight: 0.2 },
            { id: 'flexibility', name: 'Flexibility', weight: 0.2 },
            { id: 'accuracy', name: 'Accuracy', weight: 0.2 },
            { id: 'speed', name: 'Response Speed', weight: 0.1 },
            { id: 'scalability', name: 'Scalability', weight: 0.1 }
          ],
          platforms: [
            {
              id: 'rag',
              name: 'RAG Approach',
              scores: { 'setup-cost': 8, maintenance: 9, flexibility: 10, accuracy: 8, speed: 7, scalability: 9 },
              pricing: 'Low to Medium',
              bestFor: 'Frequently changing information, customer service, document analysis',
              limitations: 'Requires good document structure, may be slower'
            },
            {
              id: 'fine-tuning',
              name: 'Fine-Tuning',
              scores: { 'setup-cost': 4, maintenance: 3, flexibility: 5, accuracy: 9, speed: 10, scalability: 6 },
              pricing: 'High',
              bestFor: 'Specific writing styles, domain expertise, consistent behavior',
              limitations: 'Expensive to update, requires technical expertise'
            },
            {
              id: 'hybrid',
              name: 'Hybrid Approach',
              scores: { 'setup-cost': 6, maintenance: 7, flexibility: 8, accuracy: 10, speed: 8, scalability: 8 },
              pricing: 'Medium to High',
              bestFor: 'Complex enterprise applications requiring both style and information',
              limitations: 'More complex to implement and maintain'
            }
          ]
        }
      },
      {
        id: 'rag-use-cases',
        type: 'industry-showcase',
        title: 'RAG in Action: Real Business Applications',
        subtitle: 'How Companies Are Using RAG Today',
        content: {
          industries: [
            {
              name: 'Customer Service',
              icon: '🎧',
              color: 'bg-blue-500/20',
              applications: [
                'Q3-2025 product specifications lookup',
                'Company policy explanations',
                'Troubleshooting guide access',
                'Real-time FAQ updates'
              ],
              examples: [
                { company: 'Shopify', use: 'Merchant support chatbot with policy docs' },
                { company: 'Zendesk', use: 'AI agent with knowledge base integration' },
                { company: 'Intercom', use: 'Resolution bot with dynamic content' }
              ],
              impact: '40% faster resolution times',
              growth: 'Weekly content updates'
            },
            {
              name: 'Legal & Compliance',
              icon: '⚖️',
              color: 'bg-purple-500/20',
              applications: [
                'Contract clause analysis',
                'Regulatory compliance checking',
                'Legal precedent research',
                'Policy interpretation'
              ],
              examples: [
                { company: 'LawGeex', use: 'Contract review with legal database' },
                { company: 'Kira Systems', use: 'Due diligence with document analysis' },
                { company: 'eBrevia', use: 'Legal document extraction' }
              ],
              impact: '70% faster contract review',
              growth: 'Real-time regulatory updates'
            },
            {
              name: 'Technical Documentation',
              icon: '📋',
              color: 'bg-green-500/20',
              applications: [
                'API documentation queries',
                'Internal procedure lookup',
                'Code repository assistance',
                'Onboarding material access'
              ],
              examples: [
                { company: 'GitLab', use: 'Developer documentation assistant' },
                { company: 'Notion', use: 'Workspace knowledge retrieval' },
                { company: 'Confluence', use: 'Enterprise wiki integration' }
              ],
              impact: '60% reduction in documentation search time',
              growth: 'Daily knowledge updates'
            }
          ]
        }
      },
      {
        id: 'implementation-checklist',
        type: 'assessment',
        title: 'RAG Implementation Readiness',
        subtitle: 'Evaluate Your Organization\'s RAG Readiness',
        content: {
          categories: [
            {
              name: 'Document Organization',
              weight: 0.3,
              questions: [
                { id: 'doc-structure', text: 'Are your documents well-structured and organized?', type: 'scale' },
                { id: 'doc-access', text: 'Do you have centralized document storage?', type: 'scale' },
                { id: 'doc-quality', text: 'Is your documentation up-to-date and accurate?', type: 'scale' }
              ]
            },
            {
              name: 'Technical Infrastructure',
              weight: 0.25,
              questions: [
                { id: 'api-access', text: 'Do you have API access to document systems?', type: 'scale' },
                { id: 'search-capability', text: 'Do you have search capabilities in place?', type: 'scale' },
                { id: 'security-framework', text: 'Is document security framework established?', type: 'scale' }
              ]
            },
            {
              name: 'Use Case Clarity',
              weight: 0.25,
              questions: [
                { id: 'specific-needs', text: 'Have you identified specific RAG use cases?', type: 'scale' },
                { id: 'user-requirements', text: 'Do you understand user information needs?', type: 'scale' },
                { id: 'success-metrics', text: 'Can you measure RAG implementation success?', type: 'scale' }
              ]
            },
            {
              name: 'Change Management',
              weight: 0.2,
              questions: [
                { id: 'user-training', text: 'Are users ready for AI-enhanced information access?', type: 'scale' },
                { id: 'process-integration', text: 'Can RAG be integrated into existing workflows?', type: 'scale' },
                { id: 'feedback-mechanisms', text: 'Do you have feedback systems for improvement?', type: 'scale' }
              ]
            }
          ],
          scoring: {
            ranges: [
              { min: 80, max: 100, level: 'Ready', description: 'Ready for RAG implementation', color: 'green' },
              { min: 60, max: 79, level: 'Preparation Needed', description: 'Address key gaps first', color: 'yellow' },
              { min: 40, max: 59, level: 'Foundation Building', description: 'Significant preparation required', color: 'orange' },
              { min: 0, max: 39, level: 'Not Ready', description: 'Build basic capabilities first', color: 'red' }
            ]
          }
        }
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        subtitle: 'Essential RAG Understanding',
        content: {
          takeaways: [
            {
              title: 'RAG Provides Context',
              description: 'RAG gives AI access to your specific business knowledge and context',
              icon: '🎯',
              priority: 'high'
            },
            {
              title: 'Choose RAG for Dynamic Information',
              description: 'Use RAG when information changes frequently or needs real-time updates',
              icon: '🔄',
              priority: 'high'
            },
            {
              title: 'Document Organization Matters',
              description: 'Success depends heavily on well-structured, organized source materials',
              icon: '📁',
              priority: 'high'
            },
            {
              title: 'Security and Privacy Built-In',
              description: 'RAG can maintain data security while providing AI access to sensitive information',
              icon: '🔒',
              priority: 'medium'
            }
          ]
        }
      },
      {
        id: 'next-steps',
        type: 'action-plan',
        title: 'Your Next Steps',
        subtitle: 'Implementing RAG in Your Organization',
        content: {
          immediate: [
            'Audit your current document organization and structure',
            'Identify 2-3 potential RAG use cases in your department',
            'Research RAG platforms suitable for your tech stack'
          ],
          shortTerm: [
            'Pilot RAG implementation with one specific use case',
            'Establish document governance and update processes',
            'Train team on RAG-enhanced AI interactions'
          ],
          longTerm: [
            'Scale successful RAG pilots across organization',
            'Integrate RAG into core business processes',
            'Build internal RAG expertise and best practices'
          ]
        }
      }
    ]
  },
  {
    id: 5,
    title: 'Data Fundamentals for AI Success',
    subtitle: 'Understanding Data Quality, Preparation, and Governance',
    phase: 1,
    duration: 45,
    description: 'Master the data fundamentals that make AI projects succeed or fail, including data quality assessment, preparation strategies, and governance frameworks.',
    learningObjectives: [
      'Understand the critical role of data quality in AI success',
      'Learn data preparation strategies for AI projects',
      'Establish data governance frameworks',
      'Identify and mitigate common data issues'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'Data Fundamentals for AI Success',
        subtitle: 'The Foundation That Makes or Breaks AI Projects',
        content: {
          backgroundImage: '/assets/data-fundamentals-bg.jpg',
          quote: '"Data is the new oil, but unlike oil, data can be used over and over again. The question is: is your data refined enough to power AI?"'
        }
      },
      {
        id: 'agenda',
        type: 'agenda',
        title: 'Session Agenda',
        content: {
          items: [
            { title: 'Data Quality Assessment', duration: '6 min', icon: '🔍' },
            { title: 'Preparation Strategies', duration: '6 min', icon: '🛠️' },
            { title: 'Governance Framework', duration: '3 min', icon: '📋' }
          ]
        }
      },
      {
        id: 'data-quality-dimensions',
        type: 'interactive-grid',
        title: 'The Six Dimensions of Data Quality',
        subtitle: 'What Makes Data AI-Ready',
        content: {
          items: [
            {
              id: 'accuracy',
              title: 'Accuracy',
              description: 'Data correctly represents real-world entities',
              features: ['Correct values', 'Valid formats', 'Error-free records'],
              strengths: ['Reliable AI outputs', 'Trustworthy insights', 'Reduced bias'],
              marketPosition: 'Foundation Quality',
              logo: '🎯',
              color: 'bg-green-500/20',
              stats: {
                impact: 'High',
                difficulty: 'Medium',
                priority: '1st'
              }
            },
            {
              id: 'completeness',
              title: 'Completeness',
              description: 'All required data fields are populated',
              features: ['No missing values', 'Full records', 'Complete datasets'],
              strengths: ['Comprehensive analysis', 'Better predictions', 'Reduced gaps'],
              marketPosition: 'Coverage Quality',
              logo: '🧩',
              color: 'bg-blue-500/20',
              stats: {
                impact: 'High',
                difficulty: 'Low',
                priority: '2nd'
              }
            },
            {
              id: 'consistency',
              title: 'Consistency',
              description: 'Data values are uniform across systems',
              features: ['Standardized formats', 'Unified naming', 'Synchronized updates'],
              strengths: ['Reliable integration', 'Predictable patterns', 'System harmony'],
              marketPosition: 'Integration Quality',
              logo: '🔄',
              color: 'bg-purple-500/20',
              stats: {
                impact: 'Medium',
                difficulty: 'High',
                priority: '3rd'
              }
            },
            {
              id: 'timeliness',
              title: 'Timeliness',
              description: 'Data is current and up-to-date',
              features: ['Recent updates', 'Real-time sync', 'Timestamp accuracy'],
              strengths: ['Current insights', 'Relevant decisions', 'Timely actions'],
              marketPosition: 'Currency Quality',
              logo: '⏰',
              color: 'bg-orange-500/20',
              stats: {
                impact: 'High',
                difficulty: 'Medium',
                priority: '2nd'
              }
            },
            {
              id: 'validity',
              title: 'Validity',
              description: 'Data conforms to defined business rules',
              features: ['Rule compliance', 'Format adherence', 'Range validation'],
              strengths: ['Predictable behavior', 'System compatibility', 'Process alignment'],
              marketPosition: 'Rule Quality',
              logo: '✅',
              color: 'bg-indigo-500/20',
              stats: {
                impact: 'Medium',
                difficulty: 'Low',
                priority: '4th'
              }
            },
            {
              id: 'uniqueness',
              title: 'Uniqueness',
              description: 'No duplicate or redundant records exist',
              features: ['Deduplication', 'Single source', 'Unique identifiers'],
              strengths: ['Accurate counts', 'Clean analysis', 'Efficient processing'],
              marketPosition: 'Purity Quality',
              logo: '🎲',
              color: 'bg-red-500/20',
              stats: {
                impact: 'Medium',
                difficulty: 'Medium',
                priority: '3rd'
              }
            }
          ]
        }
      },
      {
        id: 'data-preparation-pipeline',
        type: 'trend-timeline',
        title: 'Data Preparation Pipeline',
        subtitle: 'Step-by-Step Process for AI-Ready Data',
        content: {
          timeline: [
            {
              year: 'Step 1',
              title: 'Data Discovery & Assessment',
              description: 'Identify data sources, assess quality, and understand structure',
              technologies: ['Data profiling tools', 'Quality scorecards', 'Source inventory'],
              impact: 'Baseline understanding of data landscape',
              probability: 100
            },
            {
              year: 'Step 2',
              title: 'Data Cleaning & Validation',
              description: 'Remove errors, standardize formats, and validate against business rules',
              technologies: ['Data cleaning tools', 'Validation scripts', 'Transformation pipelines'],
              impact: 'High-quality, consistent data foundation',
              probability: 95
            },
            {
              year: 'Step 3',
              title: 'Data Integration & Harmonization',
              description: 'Combine data from multiple sources into unified datasets',
              technologies: ['ETL/ELT tools', 'Data warehouses', 'API integrations'],
              impact: 'Comprehensive, integrated data view',
              probability: 85
            },
            {
              year: 'Step 4',
              title: 'Data Enrichment & Enhancement',
              description: 'Add external data sources and derived features for AI models',
              technologies: ['Feature engineering', 'External APIs', 'Calculated fields'],
              impact: 'Enhanced predictive power and insights',
              probability: 75
            },
            {
              year: 'Step 5',
              title: 'Data Governance & Monitoring',
              description: 'Establish ongoing quality monitoring and governance processes',
              technologies: ['Data governance platforms', 'Quality dashboards', 'Alert systems'],
              impact: 'Sustained data quality and compliance',
              probability: 90
            }
          ],
          keyFactors: [
            'Start with business requirements, not available data',
            'Invest in automated quality monitoring',
            'Establish clear data ownership and accountability',
            'Build feedback loops for continuous improvement',
            'Consider privacy and security from the beginning'
          ]
        }
      },
      {
        id: 'common-data-issues',
        type: 'comparison-matrix',
        title: 'Common Data Issues and Solutions',
        subtitle: 'How to Address Typical Data Problems',
        content: {
          categories: [
            { id: 'frequency', name: 'Frequency', weight: 0.25 },
            { id: 'impact', name: 'AI Impact', weight: 0.3 },
            { id: 'difficulty', name: 'Fix Difficulty', weight: 0.2 },
            { id: 'cost', name: 'Fix Cost', weight: 0.15 },
            { id: 'prevention', name: 'Prevention', weight: 0.1 }
          ],
          platforms: [
            {
              id: 'missing-data',
              name: 'Missing Data',
              scores: { frequency: 9, impact: 8, difficulty: 6, cost: 4, prevention: 8 },
              pricing: 'Low to Medium',
              bestFor: 'Imputation strategies, process improvements',
              limitations: 'May introduce bias if not handled properly'
            },
            {
              id: 'duplicate-records',
              name: 'Duplicate Records',
              scores: { frequency: 7, impact: 7, difficulty: 7, cost: 5, prevention: 9 },
              pricing: 'Medium',
              bestFor: 'Deduplication algorithms, unique identifiers',
              limitations: 'Complex matching rules required'
            },
            {
              id: 'inconsistent-formats',
              name: 'Inconsistent Formats',
              scores: { frequency: 8, impact: 6, difficulty: 5, cost: 3, prevention: 10 },
              pricing: 'Low',
              bestFor: 'Standardization rules, validation checks',
              limitations: 'Requires ongoing maintenance'
            },
            {
              id: 'outdated-information',
              name: 'Outdated Information',
              scores: { frequency: 6, impact: 9, difficulty: 8, cost: 7, prevention: 6 },
              pricing: 'High',
              bestFor: 'Real-time updates, automated refresh',
              limitations: 'May require system architecture changes'
            },
            {
              id: 'poor-documentation',
              name: 'Poor Documentation',
              scores: { frequency: 9, impact: 5, difficulty: 4, cost: 2, prevention: 9 },
              pricing: 'Low',
              bestFor: 'Data dictionaries, metadata management',
              limitations: 'Requires ongoing maintenance effort'
            }
          ]
        }
      },
      {
        id: 'data-governance-framework',
        type: 'industry-showcase',
        title: 'Data Governance for AI',
        subtitle: 'Essential Framework Components',
        content: {
          industries: [
            {
              name: 'Data Ownership',
              icon: '👑',
              color: 'bg-purple-500/20',
              applications: [
                'Clear data stewardship roles',
                'Accountability frameworks',
                'Decision-making authority',
                'Quality responsibility'
              ],
              examples: [
                { company: 'Best Practice', use: 'Data stewards for each business domain' },
                { company: 'Implementation', use: 'Monthly data quality reviews' },
                { company: 'Accountability', use: 'Quality metrics tied to performance' }
              ],
              impact: 'Clear accountability and ownership',
              growth: 'Improved data quality'
            },
            {
              name: 'Privacy & Security',
              icon: '🔒',
              color: 'bg-red-500/20',
              applications: [
                'Data classification schemes',
                'Access control policies',
                'Encryption requirements',
                'Audit trail maintenance'
              ],
              examples: [
                { company: 'GDPR Compliance', use: 'Personal data identification and protection' },
                { company: 'CCPA Compliance', use: 'Consumer data rights management' },
                { company: 'Industry Standards', use: 'Sector-specific privacy requirements' }
              ],
              impact: 'Regulatory compliance and risk reduction',
              growth: 'Enhanced trust and security'
            },
            {
              name: 'Quality Standards',
              icon: '⭐',
              color: 'bg-yellow-500/20',
              applications: [
                'Quality metrics definition',
                'Acceptable quality thresholds',
                'Monitoring and alerting',
                'Continuous improvement'
              ],
              examples: [
                { company: 'Metrics', use: '95% completeness, 99% accuracy targets' },
                { company: 'Monitoring', use: 'Automated quality dashboards' },
                { company: 'Improvement', use: 'Regular quality review cycles' }
              ],
              impact: 'Consistent, reliable data quality',
              growth: 'Better AI model performance'
            }
          ]
        }
      },
      {
        id: 'data-readiness-assessment',
        type: 'assessment',
        title: 'AI Data Readiness Check',
        subtitle: 'Evaluate Your Data Foundation',
        content: {
          categories: [
            {
              name: 'Data Quality',
              weight: 0.35,
              questions: [
                { id: 'accuracy-level', text: 'Is your data accurate and error-free?', type: 'scale' },
                { id: 'completeness-level', text: 'Are your datasets complete with minimal missing values?', type: 'scale' },
                { id: 'consistency-level', text: 'Is your data consistent across systems?', type: 'scale' }
              ]
            },
            {
              name: 'Data Governance',
              weight: 0.25,
              questions: [
                { id: 'ownership-clarity', text: 'Are data ownership and responsibilities clear?', type: 'scale' },
                { id: 'quality-processes', text: 'Do you have data quality monitoring processes?', type: 'scale' },
                { id: 'documentation', text: 'Is your data well-documented and cataloged?', type: 'scale' }
              ]
            },
            {
              name: 'Technical Infrastructure',
              weight: 0.25,
              questions: [
                { id: 'integration-capability', text: 'Can you easily integrate data from multiple sources?', type: 'scale' },
                { id: 'processing-capability', text: 'Do you have adequate data processing capabilities?', type: 'scale' },
                { id: 'security-framework', text: 'Is your data security framework robust?', type: 'scale' }
              ]
            },
            {
              name: 'Organizational Readiness',
              weight: 0.15,
              questions: [
                { id: 'data-culture', text: 'Does your organization have a data-driven culture?', type: 'scale' },
                { id: 'skills-availability', text: 'Do you have the necessary data skills in your team?', type: 'scale' },
                { id: 'investment-commitment', text: 'Is leadership committed to data quality investment?', type: 'scale' }
              ]
            }
          ],
          scoring: {
            ranges: [
              { min: 80, max: 100, level: 'AI-Ready', description: 'Your data foundation is strong for AI projects', color: 'green' },
              { min: 60, max: 79, level: 'Preparation Needed', description: 'Address key data issues before AI implementation', color: 'yellow' },
              { min: 40, max: 59, level: 'Foundation Building', description: 'Significant data work required', color: 'orange' },
              { min: 0, max: 39, level: 'Not Ready', description: 'Build basic data capabilities first', color: 'red' }
            ]
          }
        }
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        subtitle: 'Data Fundamentals for AI Success',
        content: {
          takeaways: [
            {
              title: 'Data Quality Determines AI Success',
              description: 'Poor data quality leads to poor AI results - invest in the foundation first',
              icon: '🏗️',
              priority: 'high'
            },
            {
              title: 'Governance is Not Optional',
              description: 'Establish clear ownership, processes, and standards before scaling AI',
              icon: '👑',
              priority: 'high'
            },
            {
              title: 'Start Small, Scale Smart',
              description: 'Begin with high-quality datasets for pilot projects, then expand',
              icon: '🎯',
              priority: 'high'
            },
            {
              title: 'Automate Quality Monitoring',
              description: 'Manual data quality checks don\'t scale - invest in automated monitoring',
              icon: '🤖',
              priority: 'medium'
            }
          ]
        }
      },
      {
        id: 'next-steps',
        type: 'action-plan',
        title: 'Your Next Steps',
        subtitle: 'Building Your Data Foundation',
        content: {
          immediate: [
            'Conduct data quality assessment using the six dimensions framework',
            'Identify your highest-quality datasets for AI pilot projects',
            'Map current data governance roles and responsibilities'
          ],
          shortTerm: [
            'Implement automated data quality monitoring for key datasets',
            'Establish data stewardship roles and processes',
            'Create data documentation and cataloging system'
          ],
          longTerm: [
            'Build comprehensive data governance framework',
            'Implement enterprise-wide data quality standards',
            'Develop organizational data literacy and skills'
          ]
        }
      }
    ]
  },
  {
    id: 6,
    title: 'AI Safety & Risk Management',
    subtitle: 'Practical Approaches to AI Risk Identification and Mitigation',
    phase: 1,
    duration: 45,
    description: 'Learn practical approaches to identifying and mitigating AI risks in business contexts, from bias detection to security considerations.',
    learningObjectives: [
      'Identify common AI risks and their business impact',
      'Implement bias detection and mitigation strategies',
      'Establish AI security and privacy safeguards',
      'Create AI risk management frameworks'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'AI Safety & Risk Management',
        subtitle: 'Building Trust Through Responsible AI Implementation',
        content: {
          backgroundImage: '/assets/ai-safety-bg.jpg',
          quote: '"The question is not whether AI will replace humans, but whether we can build AI systems that enhance human capability while maintaining safety and control."'
        }
      },
      {
        id: 'agenda',
        type: 'agenda',
        title: 'Session Agenda',
        content: {
          items: [
            { title: 'AI Risk Landscape', duration: '6 min', icon: '⚠️' },
            { title: 'Mitigation Strategies', duration: '6 min', icon: '🛡️' },
            { title: 'Risk Framework', duration: '3 min', icon: '📋' }
          ]
        }
      },
      {
        id: 'ai-risk-categories',
        type: 'interactive-grid',
        title: 'The AI Risk Landscape',
        subtitle: 'Understanding Different Types of AI Risks',
        content: {
          items: [
            {
              id: 'bias-discrimination',
              title: 'Bias & Discrimination',
              description: 'AI systems that unfairly favor or disadvantage certain groups',
              features: ['Historical bias in training data', 'Algorithmic discrimination', 'Representation gaps'],
              strengths: ['Detectable through testing', 'Addressable with diverse data', 'Measurable outcomes'],
              marketPosition: 'High Priority Risk',
              logo: '⚖️',
              color: 'bg-red-500/20',
              stats: {
                frequency: 'High',
                impact: 'Severe',
                detectability: 'Medium'
              }
            },
            {
              id: 'privacy-security',
              title: 'Privacy & Security',
              description: 'Unauthorized access to sensitive data or AI system vulnerabilities',
              features: ['Data leakage risks', 'Model inversion attacks', 'Prompt injection'],
              strengths: ['Well-understood mitigations', 'Established frameworks', 'Technical solutions'],
              marketPosition: 'Critical Infrastructure',
              logo: '🔒',
              color: 'bg-purple-500/20',
              stats: {
                frequency: 'Medium',
                impact: 'Severe',
                detectability: 'High'
              }
            },
            {
              id: 'misinformation',
              title: 'Misinformation & Hallucination',
              description: 'AI generating false or misleading information with confidence',
              features: ['Confident false statements', 'Fabricated facts', 'Context confusion'],
              strengths: ['Improving with better models', 'Human oversight helps', 'Verification systems'],
              marketPosition: 'Operational Risk',
              logo: '🤔',
              color: 'bg-orange-500/20',
              stats: {
                frequency: 'High',
                impact: 'Medium',
                detectability: 'Low'
              }
            },
            {
              id: 'dependency-reliability',
              title: 'Dependency & Reliability',
              description: 'Over-reliance on AI systems that may fail or become unavailable',
              features: ['System outages', 'Performance degradation', 'Vendor lock-in'],
              strengths: ['Backup systems possible', 'Gradual implementation', 'Monitoring tools'],
              marketPosition: 'Business Continuity',
              logo: '🔌',
              color: 'bg-blue-500/20',
              stats: {
                frequency: 'Medium',
                impact: 'High',
                detectability: 'High'
              }
            },
            {
              id: 'compliance-legal',
              title: 'Compliance & Legal',
              description: 'AI systems that violate regulations or create legal liability',
              features: ['GDPR violations', 'Industry regulations', 'Liability issues'],
              strengths: ['Legal frameworks emerging', 'Compliance tools available', 'Expert guidance'],
              marketPosition: 'Regulatory Risk',
              logo: '📄',
              color: 'bg-green-500/20',
              stats: {
                frequency: 'Low',
                impact: 'Severe',
                detectability: 'Medium'
              }
            },
            {
              id: 'job-displacement',
              title: 'Job Displacement & Social Impact',
              description: 'Workforce disruption and broader societal effects',
              features: ['Skill obsolescence', 'Economic disruption', 'Social inequality'],
              strengths: ['Manageable with planning', 'Retraining opportunities', 'New job creation'],
              marketPosition: 'Long-term Impact',
              logo: '🏭',
              color: 'bg-indigo-500/20',
              stats: {
                frequency: 'Medium',
                impact: 'High',
                detectability: 'Low'
              }
            }
          ]
        }
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        subtitle: 'AI Safety and Risk Management Essentials',
        content: {
          takeaways: [
            {
              title: 'Proactive Risk Management',
              description: 'Identify and address AI risks before they become problems',
              icon: '🔮',
              priority: 'high'
            },
            {
              title: 'Bias is Preventable and Detectable',
              description: 'With proper processes, AI bias can be prevented, detected, and mitigated',
              icon: '⚖️',
              priority: 'high'
            },
            {
              title: 'Security Requires Layered Approach',
              description: 'Protect data, models, and infrastructure with comprehensive security measures',
              icon: '🛡️',
              priority: 'high'
            },
            {
              title: 'Human Oversight Remains Critical',
              description: 'Maintain human oversight and accountability in AI decision-making',
              icon: '👥',
              priority: 'medium'
            }
          ]
        }
      },
      {
        id: 'next-steps',
        type: 'action-plan',
        title: 'Your Next Steps',
        subtitle: 'Building AI Safety into Your Organization',
        content: {
          immediate: [
            'Conduct AI risk assessment using the provided framework',
            'Identify highest-priority risks for your AI initiatives',
            'Establish basic bias detection processes for current AI use'
          ],
          shortTerm: [
            'Develop AI ethics guidelines and governance framework',
            'Implement security measures for AI systems and data',
            'Train team on AI risk identification and mitigation'
          ],
          longTerm: [
            'Build comprehensive AI risk management program',
            'Establish AI incident response capabilities',
            'Create culture of responsible AI development and deployment'
          ]
        }
      }
    ]
  },
  {
    id: 7,
    title: 'The Strategic Co-Pilot: AI for Market Analysis & Planning',
    subtitle: 'Using AI as a Sophisticated Partner in Strategic Analysis',
    phase: 2,
    duration: 45,
    description: 'Empower managers to use AI as sophisticated partner in strategic analysis, moving beyond simple information retrieval to complex reasoning and planning.',
    learningObjectives: [
      'Use AI for complex strategic reasoning tasks',
      'Master advanced prompt templates for analysis',
      'Delegate cognitive-heavy research to AI',
      'Create systematic analysis frameworks'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'The Strategic Co-Pilot',
        subtitle: 'AI for Market Analysis & Planning',
        content: {
          backgroundImage: '/assets/strategic-ai-bg.jpg',
          quote: '"Modern LLMs perform complex reasoning, not just pattern matching. They can be your strategic thinking partner."'
        }
      },
      {
        id: 'agenda',
        type: 'agenda',
        title: 'Session Agenda',
        content: {
          items: [
            { title: 'AI as Reasoning Partner', duration: '5 min', icon: '🧠' },
            { title: 'SWOT Analysis Exercise', duration: '7 min', icon: '📊' },
            { title: 'Strategic Analysis Templates', duration: '3 min', icon: '📝' }
          ]
        }
      },
      {
        id: 'ai-reasoning-capabilities',
        type: 'interactive-grid',
        title: 'AI Strategic Reasoning Capabilities',
        subtitle: 'What Modern AI Can Do for Strategic Analysis',
        content: {
          items: [
            {
              id: 'swot-analysis',
              title: 'SWOT Analysis',
              description: 'Systematic strengths, weaknesses, opportunities, and threats evaluation',
              features: ['Multi-perspective analysis', 'Evidence-based insights', 'Competitive benchmarking'],
              strengths: ['Comprehensive coverage', 'Objective viewpoint', 'Rapid generation'],
              marketPosition: 'Strategic Framework',
              logo: '🎯',
              color: 'bg-blue-500/20',
              stats: {
                accuracy: '85%',
                speed: '10x faster',
                coverage: 'Complete'
              }
            },
            {
              id: 'pestle-analysis',
              title: 'PESTLE Analysis',
              description: 'Political, Economic, Social, Technological, Legal, Environmental factors',
              features: ['Macro-environment scanning', 'Risk identification', 'Trend analysis'],
              strengths: ['Systematic approach', 'Future-focused', 'Risk awareness'],
              marketPosition: 'Environment Analysis',
              logo: '🌍',
              color: 'bg-green-500/20',
              stats: {
                scope: 'Global',
                factors: '6 domains',
                insights: 'Deep'
              }
            },
            {
              id: 'competitive-intelligence',
              title: 'Competitive Intelligence',
              description: 'Analysis of competitive landscape and positioning',
              features: ['Competitor profiling', 'Market positioning', 'Strategic gaps'],
              strengths: ['Market awareness', 'Strategic advantage', 'Opportunity identification'],
              marketPosition: 'Competitive Analysis',
              logo: '🏁',
              color: 'bg-purple-500/20',
              stats: {
                competitors: 'Unlimited',
                depth: 'Detailed',
                updates: 'Real-time'
              }
            },
            {
              id: 'scenario-planning',
              title: 'Scenario Planning',
              description: 'Multiple future scenarios and strategic implications',
              features: ['Future scenarios', 'Risk modeling', 'Strategic options'],
              strengths: ['Preparedness', 'Risk mitigation', 'Strategic flexibility'],
              marketPosition: 'Future Planning',
              logo: '🔮',
              color: 'bg-orange-500/20',
              stats: {
                scenarios: '3-5 options',
                probability: 'Weighted',
                planning: 'Contingent'
              }
            }
          ]
        }
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        subtitle: 'Strategic AI Co-Pilot Essentials',
        content: {
          takeaways: [
            {
              title: 'AI Performs Complex Reasoning',
              description: 'Modern AI can handle sophisticated strategic analysis tasks',
              icon: '🧠',
              priority: 'high'
            },
            {
              title: 'Structured Prompts Drive Quality',
              description: 'Use systematic prompt templates for consistent, high-quality analysis',
              icon: '📝',
              priority: 'high'
            },
            {
              title: 'Delegate Cognitive Heavy Lifting',
              description: 'Free your time for strategic decision-making by delegating analysis',
              icon: '🏋️',
              priority: 'medium'
            }
          ]
        }
      },
      {
        id: 'next-steps',
        type: 'action-plan',
        title: 'Your Next Steps',
        subtitle: 'Implementing Strategic AI Analysis',
        content: {
          immediate: [
            'Practice SWOT analysis using the structured prompt template',
            'Identify one strategic decision that could benefit from AI analysis',
            'Add strategic analysis templates to your AI playbook'
          ],
          shortTerm: [
            'Implement AI-assisted competitive intelligence gathering',
            'Use AI for quarterly strategic planning sessions',
            'Train team on structured strategic prompting techniques'
          ],
          longTerm: [
            'Integrate AI analysis into all major strategic decisions',
            'Build library of proven strategic analysis templates',
            'Develop organizational capability for AI-enhanced planning'
          ]
        }
      }
    ]
  },
  {
    id: 8,
    title: 'AI-Augmented HR: Transforming People Operations',
    subtitle: 'Revolutionizing Recruitment, Performance, and Employee Development',
    phase: 2,
    duration: 45,
    description: 'Transform HR operations using AI for recruitment, performance management, and employee development while maintaining human connection.',
    learningObjectives: [
      'Apply AI to recruitment and screening processes',
      'Use AI for performance analysis and feedback',
      'Implement AI-driven learning and development',
      'Balance automation with human judgment in HR'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'AI-Augmented HR',
        subtitle: 'Transforming People Operations',
        content: {
          backgroundImage: '/assets/hr-ai-bg.jpg',
          quote: '"AI doesn\'t replace human judgment in HR - it amplifies our ability to make better people decisions faster."'
        }
      },
      {
        id: 'agenda',
        type: 'agenda',
        title: 'Session Agenda',
        content: {
          items: [
            { title: 'AI in Recruitment', duration: '6 min', icon: '🔍' },
            { title: 'Performance Analytics', duration: '6 min', icon: '📊' },
            { title: 'Development Planning', duration: '3 min', icon: '🎯' }
          ]
        }
      },
      {
        id: 'hr-ai-applications',
        type: 'industry-showcase',
        title: 'AI Applications in HR',
        subtitle: 'Transforming Every Aspect of People Operations',
        content: {
          industries: [
            {
              name: 'Recruitment & Hiring',
              icon: '🔍',
              color: 'bg-blue-500/20',
              applications: [
                'Resume screening and ranking',
                'Interview question generation',
                'Candidate matching algorithms',
                'Bias reduction in hiring'
              ],
              examples: [
                { company: 'Unilever', use: 'AI-powered video interview analysis' },
                { company: 'Hilton', use: 'Chatbot-based initial candidate screening' },
                { company: 'IBM', use: 'AI bias detection in job descriptions' }
              ],
              impact: '75% faster screening process',
              growth: '50% better candidate quality'
            },
            {
              name: 'Performance Management',
              icon: '📊',
              color: 'bg-green-500/20',
              applications: [
                'Performance data analysis',
                'Goal setting assistance',
                'Feedback quality improvement',
                'Career development recommendations'
              ],
              examples: [
                { company: 'Microsoft', use: 'AI-powered performance insights' },
                { company: 'Workday', use: 'Predictive performance analytics' },
                { company: 'BambooHR', use: 'Automated goal tracking and feedback' }
              ],
              impact: '40% improvement in review quality',
              growth: '60% better goal achievement'
            },
            {
              name: 'Learning & Development',
              icon: '🎯',
              color: 'bg-purple-500/20',
              applications: [
                'Personalized learning paths',
                'Skill gap analysis',
                'Training content generation',
                'Learning outcome prediction'
              ],
              examples: [
                { company: 'Coursera', use: 'AI-driven course recommendations' },
                { company: 'LinkedIn Learning', use: 'Personalized skill development' },
                { company: 'Udemy', use: 'Adaptive learning algorithms' }
              ],
              impact: '45% faster skill development',
              growth: '80% higher completion rates'
            }
          ]
        }
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        subtitle: 'AI-Augmented HR Essentials',
        content: {
          takeaways: [
            {
              title: 'AI Enhances, Not Replaces, Human Judgment',
              description: 'Use AI to inform decisions while maintaining human oversight and empathy',
              icon: '🤝',
              priority: 'high'
            },
            {
              title: 'Focus on Bias Reduction',
              description: 'AI can help identify and reduce unconscious bias in HR processes',
              icon: '⚖️',
              priority: 'high'
            },
            {
              title: 'Personalization at Scale',
              description: 'AI enables personalized employee experiences at organizational scale',
              icon: '🎯',
              priority: 'medium'
            }
          ]
        }
      },
      {
        id: 'next-steps',
        type: 'action-plan',
        title: 'Your Next Steps',
        subtitle: 'Implementing AI in HR Operations',
        content: {
          immediate: [
            'Identify one HR process that could benefit from AI augmentation',
            'Assess current HR data quality and accessibility',
            'Research AI HR tools relevant to your organization size'
          ],
          shortTerm: [
            'Pilot AI-assisted resume screening or interview preparation',
            'Implement AI-powered performance analytics',
            'Train HR team on AI tool usage and bias awareness'
          ],
          longTerm: [
            'Build comprehensive AI-augmented HR strategy',
            'Integrate AI across all major HR processes',
            'Develop organizational capability for people analytics'
          ]
        }
      }
    ]
  },
  {
    id: 9,
    title: 'AI in Finance & Accounting',
    subtitle: 'Automating Financial Processes and Analysis',
    phase: 2,
    duration: 45,
    description: 'Transform finance operations with AI-powered invoice processing, contract analysis, and financial forecasting.',
    learningObjectives: [
      'Automate invoice processing and accounts payable',
      'Use AI for contract analysis and risk assessment',
      'Implement AI-driven financial forecasting',
      'Enhance fraud detection and compliance monitoring'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'AI in Finance & Accounting',
        subtitle: 'Automating Financial Processes and Analysis',
        content: {
          backgroundImage: '/assets/finance-ai-bg.jpg',
          quote: '"AI is transforming finance from number crunching to strategic insight generation."'
        }
      },
      {
        id: 'finance-ai-applications',
        type: 'industry-showcase',
        title: 'AI Applications in Finance',
        subtitle: 'Transforming Financial Operations',
        content: {
          industries: [
            {
              name: 'Invoice Processing',
              icon: '📝',
              color: 'bg-blue-500/20',
              applications: [
                'Automated data extraction',
                'Invoice validation',
                'Duplicate detection',
                'Approval workflow routing'
              ],
              examples: [
                { company: 'AppZen', use: 'AI-powered expense report auditing' },
                { company: 'MindBridge', use: 'Financial anomaly detection' },
                { company: 'DataSnipper', use: 'Audit document analysis' }
              ],
              impact: '70% faster processing',
              growth: '90% accuracy improvement'
            },
            {
              name: 'Financial Forecasting',
              icon: '📊',
              color: 'bg-green-500/20',
              applications: [
                'Revenue prediction models',
                'Cash flow forecasting',
                'Budget variance analysis',
                'Scenario planning'
              ],
              examples: [
                { company: 'Planful', use: 'AI-enhanced financial planning' },
                { company: 'Anaplan', use: 'Predictive financial modeling' },
                { company: 'Workday Adaptive', use: 'Intelligent forecasting' }
              ],
              impact: '40% more accurate forecasts',
              growth: '60% faster budget cycles'
            }
          ]
        }
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        content: {
          takeaways: [
            {
              title: 'Automate Routine Tasks',
              description: 'Focus AI on repetitive, high-volume financial processes',
              icon: '🤖',
              priority: 'high'
            },
            {
              title: 'Enhance Decision-Making',
              description: 'Use AI insights to improve financial planning and analysis',
              icon: '📊',
              priority: 'high'
            }
          ]
        }
      }
    ]
  },
  {
    id: 10,
    title: 'Supply Chain & Operations Optimization',
    subtitle: 'AI-Driven Operational Excellence',
    phase: 2,
    duration: 45,
    description: 'Optimize supply chain and operations using AI for demand forecasting, inventory management, and process optimization.',
    learningObjectives: [
      'Implement AI-driven demand forecasting',
      'Optimize inventory management with AI',
      'Use AI for predictive maintenance',
      'Enhance supply chain visibility and risk management'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'Supply Chain & Operations Optimization',
        subtitle: 'AI-Driven Operational Excellence',
        content: {
          backgroundImage: '/assets/supply-chain-bg.jpg',
          quote: '"AI transforms supply chains from reactive to predictive, from fragile to resilient."'
        }
      },
      {
        id: 'supply-chain-ai',
        type: 'interactive-grid',
        title: 'AI in Supply Chain Operations',
        content: {
          items: [
            {
              id: 'demand-forecasting',
              title: 'Demand Forecasting',
              description: 'Predict customer demand with high accuracy',
              features: ['Historical data analysis', 'External factor integration', 'Real-time adjustments'],
              logo: '📊',
              color: 'bg-blue-500/20'
            },
            {
              id: 'inventory-optimization',
              title: 'Inventory Optimization',
              description: 'Balance stock levels with demand and costs',
              features: ['Dynamic safety stock', 'Multi-location optimization', 'Seasonal adjustments'],
              logo: '📦',
              color: 'bg-green-500/20'
            },
            {
              id: 'predictive-maintenance',
              title: 'Predictive Maintenance',
              description: 'Prevent equipment failures before they occur',
              features: ['Sensor data analysis', 'Failure prediction', 'Maintenance scheduling'],
              logo: '🔧',
              color: 'bg-orange-500/20'
            }
          ]
        }
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        content: {
          takeaways: [
            {
              title: 'Predictive Over Reactive',
              description: 'Shift from responding to problems to preventing them',
              icon: '🔮',
              priority: 'high'
            },
            {
              title: 'End-to-End Visibility',
              description: 'AI provides comprehensive supply chain transparency',
              icon: '🔍',
              priority: 'high'
            }
          ]
        }
      }
    ]
  },
  {
    id: 11,
    title: 'AI-Powered Marketing & Sales',
    subtitle: 'Personalization, Campaign Optimization, and CRM Intelligence',
    phase: 2,
    duration: 45,
    description: 'Transform marketing and sales with AI-powered personalization, campaign optimization, and intelligent CRM insights.',
    learningObjectives: [
      'Implement AI-driven personalization strategies',
      'Optimize marketing campaigns using AI analytics',
      'Enhance sales processes with AI insights',
      'Leverage AI for customer segmentation and targeting'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'AI-Powered Marketing & Sales',
        subtitle: 'Personalization, Campaign Optimization, and CRM Intelligence',
        content: {
          backgroundImage: '/assets/marketing-ai-bg.jpg',
          quote: '"AI enables personalization at scale - treating every customer as a segment of one."'
        }
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        content: {
          takeaways: [
            {
              title: 'Personalization Drives Performance',
              description: 'AI-powered personalization significantly improves conversion and engagement',
              icon: '🎯',
              priority: 'high'
            },
            {
              title: 'Data Quality is Critical',
              description: 'Marketing AI effectiveness depends on high-quality customer data',
              icon: '📊',
              priority: 'high'
            }
          ]
        }
      }
    ]
  },
  {
    id: 12,
    title: 'Legal & Compliance Applications',
    subtitle: 'Contract Review, Risk Assessment, and Regulatory Monitoring',
    phase: 2,
    duration: 45,
    description: 'Leverage AI for legal and compliance tasks including contract analysis, risk assessment, and regulatory monitoring.',
    learningObjectives: [
      'Use AI for contract review and analysis',
      'Implement AI-driven risk assessment',
      'Monitor regulatory compliance with AI',
      'Balance AI efficiency with legal accuracy requirements'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'Legal & Compliance Applications',
        subtitle: 'Contract Review, Risk Assessment, and Regulatory Monitoring',
        content: {
          backgroundImage: '/assets/legal-ai-bg.jpg',
          quote: '"AI doesn\'t replace legal judgment - it amplifies the lawyer\'s ability to focus on high-value strategic work."'
        }
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        content: {
          takeaways: [
            {
              title: 'Human Oversight is Essential',
              description: 'AI assists but cannot replace human legal judgment',
              icon: '👨‍⚖️',
              priority: 'high'
            },
            {
              title: 'Start with Document Review',
              description: 'Contract and document analysis offer highest ROI for legal AI',
              icon: '📄',
              priority: 'high'
            }
          ]
        }
      }
    ]
  },
  {
    id: 13,
    title: 'Thinking in Pictures: Leveraging Multimodal AI',
    subtitle: 'Using Visual Data for Business Intelligence',
    phase: 3,
    duration: 45,
    description: 'Train managers to use image, chart, and data visualization inputs for deeper business insights using multimodal AI.',
    learningObjectives: [
      'Understand multimodal AI capabilities and applications',
      'Use visual data inputs for business analysis',
      'Implement chart and image analysis workflows',
      'Integrate multimodal AI into decision-making processes'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'Thinking in Pictures',
        subtitle: 'Leveraging Multimodal AI for Business Intelligence',
        content: {
          backgroundImage: '/assets/multimodal-bg.jpg',
          quote: '"A picture is worth a thousand words, but AI can read both the picture and generate the thousand words of insight."'
        }
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        content: {
          takeaways: [
            {
              title: 'Visual Data is Rich Information',
              description: 'Images and charts contain valuable business intelligence',
              icon: '👁️',
              priority: 'high'
            },
            {
              title: 'Multimodal Enhances Understanding',
              description: 'Combining visual and text analysis provides deeper insights',
              icon: '🧠',
              priority: 'high'
            }
          ]
        }
      }
    ]
  },
  {
    id: 14,
    title: 'Advanced Data Analysis with AI',
    subtitle: 'Statistical Modeling and Predictive Analytics',
    phase: 3,
    duration: 45,
    description: 'Master advanced AI-powered data analysis including statistical modeling, predictive analytics, and automated insights generation.',
    learningObjectives: [
      'Use AI for statistical analysis and modeling',
      'Implement predictive analytics workflows',
      'Generate automated insights from complex datasets',
      'Validate and interpret AI-generated analytical results'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'Advanced Data Analysis with AI',
        subtitle: 'Statistical Modeling and Predictive Analytics',
        content: {
          backgroundImage: '/assets/data-analysis-bg.jpg',
          quote: '"AI transforms data analysts from calculators into strategic advisors."'
        }
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        content: {
          takeaways: [
            {
              title: 'AI Accelerates Analysis',
              description: 'Complex statistical analysis becomes accessible to non-experts',
              icon: '⚡',
              priority: 'high'
            },
            {
              title: 'Validate AI Results',
              description: 'Always validate AI-generated insights with domain expertise',
              icon: '✅',
              priority: 'high'
            }
          ]
        }
      }
    ]
  },
  {
    id: 15,
    title: 'Introduction to Agentic AI',
    subtitle: 'When AI Takes Initiative - Understanding Autonomous Agents',
    phase: 3,
    duration: 45,
    description: 'Understand agentic AI systems that can operate autonomously, make decisions, and execute complex workflows without constant human intervention.',
    learningObjectives: [
      'Understand the concept and capabilities of agentic AI',
      'Identify appropriate use cases for autonomous AI agents',
      'Implement basic agentic workflows',
      'Manage risks and oversight for autonomous AI systems'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'Introduction to Agentic AI',
        subtitle: 'When AI Takes Initiative - Understanding Autonomous Agents',
        content: {
          backgroundImage: '/assets/agentic-ai-bg.jpg',
          quote: '"Agentic AI doesn\'t just respond to requests - it anticipates needs and takes initiative to solve problems."'
        }
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        content: {
          takeaways: [
            {
              title: 'Agents Work Autonomously',
              description: 'Agentic AI can operate independently within defined boundaries',
              icon: '🤖',
              priority: 'high'
            },
            {
              title: 'Oversight is Critical',
              description: 'Autonomous systems require careful monitoring and control mechanisms',
              icon: '👁️',
              priority: 'high'
            }
          ]
        }
      }
    ]
  },
  {
    id: 16,
    title: 'Building Team Knowledge Base with Advanced RAG',
    subtitle: 'Creating Intelligent Organizational Memory',
    phase: 3,
    duration: 45,
    description: 'Build sophisticated knowledge management systems using advanced RAG techniques for organizational learning and knowledge sharing.',
    learningObjectives: [
      'Design advanced RAG architectures',
      'Implement team knowledge bases',
      'Create intelligent knowledge discovery systems',
      'Maintain and update organizational knowledge repositories'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'Building Team Knowledge Base with Advanced RAG',
        subtitle: 'Creating Intelligent Organizational Memory'
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        content: {
          takeaways: [
            {
              title: 'Knowledge is Organizational Asset',
              description: 'Systematic knowledge capture and retrieval drives competitive advantage',
              icon: '📚',
              priority: 'high'
            }
          ]
        }
      }
    ]
  },
  {
    id: 17,
    title: 'AI Integration & APIs',
    subtitle: 'Connecting AI to Existing Business Systems',
    phase: 3,
    duration: 45,
    description: 'Learn to integrate AI capabilities with existing business systems through APIs and automated workflows.',
    learningObjectives: [
      'Understand AI API integration patterns',
      'Connect AI to existing business systems',
      'Build automated AI workflows',
      'Manage API costs and performance'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'AI Integration & APIs',
        subtitle: 'Connecting AI to Existing Business Systems'
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        content: {
          takeaways: [
            {
              title: 'Integration Multiplies Value',
              description: 'AI becomes more valuable when integrated with existing systems',
              icon: '🔗',
              priority: 'high'
            }
          ]
        }
      }
    ]
  },
  {
    id: 18,
    title: 'Measuring AI Performance',
    subtitle: 'KPIs, Metrics, and Continuous Improvement',
    phase: 3,
    duration: 45,
    description: 'Establish frameworks for measuring AI performance, ROI, and implementing continuous improvement processes.',
    learningObjectives: [
      'Define AI performance metrics and KPIs',
      'Measure AI ROI and business impact',
      'Implement continuous improvement processes',
      'Create AI performance dashboards'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'Measuring AI Performance',
        subtitle: 'KPIs, Metrics, and Continuous Improvement'
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        content: {
          takeaways: [
            {
              title: 'Measurement Drives Improvement',
              description: 'What gets measured gets optimized - establish clear AI metrics',
              icon: '📊',
              priority: 'high'
            }
          ]
        }
      }
    ]
  },
  {
    id: 19,
    title: 'Leading AI Adoption: The Change Management Challenge',
    subtitle: 'Overcoming Resistance and Fostering AI Culture',
    phase: 4,
    duration: 45,
    description: 'Equip managers with strategies for overcoming team resistance and fostering positive AI adoption culture.',
    learningObjectives: [
      'Understand common resistance patterns to AI adoption',
      'Develop change management strategies for AI initiatives',
      'Foster a culture of AI experimentation and learning',
      'Address ethical concerns and build trust in AI systems'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'Leading AI Adoption',
        subtitle: 'The Change Management Challenge',
        content: {
          backgroundImage: '/assets/change-management-bg.jpg',
          quote: '"The biggest barrier to AI adoption isn\'t technology - it\'s human psychology."'
        }
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        content: {
          takeaways: [
            {
              title: 'Address Fears Directly',
              description: 'Acknowledge and address job security concerns with honest, specific information',
              icon: '💬',
              priority: 'high'
            },
            {
              title: 'Start Small, Win Big',
              description: 'Use pilot programs to demonstrate value and build confidence',
              icon: '🎯',
              priority: 'high'
            }
          ]
        }
      }
    ]
  },
  {
    id: 20,
    title: 'Building AI-Ready Teams',
    subtitle: 'Skills Development, Hiring, and Organizational Design',
    phase: 4,
    duration: 45,
    description: 'Develop strategies for building AI-capable teams through skills development, strategic hiring, and organizational design.',
    learningObjectives: [
      'Assess current team AI readiness',
      'Develop AI skills training programs',
      'Create AI-focused hiring strategies',
      'Design organizations for AI success'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'Building AI-Ready Teams',
        subtitle: 'Skills Development, Hiring, and Organizational Design'
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        content: {
          takeaways: [
            {
              title: 'Invest in People First',
              description: 'AI success depends more on people than technology',
              icon: '👥',
              priority: 'high'
            }
          ]
        }
      }
    ]
  },
  {
    id: 21,
    title: 'AI Governance & Ethics',
    subtitle: 'Building Responsible AI Frameworks',
    phase: 4,
    duration: 45,
    description: 'Establish comprehensive AI governance frameworks that ensure ethical, responsible, and compliant AI implementation.',
    learningObjectives: [
      'Develop AI ethics guidelines and principles',
      'Create AI governance frameworks',
      'Implement responsible AI practices',
      'Ensure regulatory compliance'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'AI Governance & Ethics',
        subtitle: 'Building Responsible AI Frameworks'
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        content: {
          takeaways: [
            {
              title: 'Ethics Enable Trust',
              description: 'Strong ethical frameworks build stakeholder trust in AI systems',
              icon: '⚖️',
              priority: 'high'
            }
          ]
        }
      }
    ]
  },
  {
    id: 22,
    title: 'Future-Proofing Your AI Strategy',
    subtitle: 'Preparing for Emerging Technologies and Market Changes',
    phase: 4,
    duration: 45,
    description: 'Develop adaptive AI strategies that can evolve with rapidly changing technology landscape and market conditions.',
    learningObjectives: [
      'Understand emerging AI technology trends',
      'Build adaptive AI strategies',
      'Prepare for future market disruptions',
      'Create flexible AI architectures'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'Future-Proofing Your AI Strategy',
        subtitle: 'Preparing for Emerging Technologies and Market Changes'
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        content: {
          takeaways: [
            {
              title: 'Change is the Only Constant',
              description: 'Build flexibility and adaptability into your AI strategy',
              icon: '🔄',
              priority: 'high'
            }
          ]
        }
      }
    ]
  },
  {
    id: 23,
    title: 'Advanced AI Leadership',
    subtitle: 'Leading in an AI-Augmented World',
    phase: 4,
    duration: 45,
    description: 'Develop advanced leadership skills for managing in an AI-augmented world with enhanced decision-making capabilities.',
    learningObjectives: [
      'Master AI-augmented decision making',
      'Lead AI-enhanced teams effectively',
      'Navigate AI-driven market dynamics',
      'Develop AI-informed strategic thinking'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'Advanced AI Leadership',
        subtitle: 'Leading in an AI-Augmented World'
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Key Takeaways',
        content: {
          takeaways: [
            {
              title: 'Leadership Evolves with AI',
              description: 'AI-augmented leadership requires new skills and approaches',
              icon: '👑',
              priority: 'high'
            }
          ]
        }
      }
    ]
  },
  {
    id: 24,
    title: 'Capstone: Presenting Your AI Playbook & Future-Proofing Strategy',
    subtitle: 'Consolidating Learning and Planning for the Future',
    phase: 4,
    duration: 45,
    description: 'Consolidate learning, reflect on AI Playbook value, and create personal roadmap for continued AI leadership development.',
    learningObjectives: [
      'Synthesize 24 sessions of AI learning into actionable strategies',
      'Present comprehensive AI implementation plan',
      'Develop future-focused AI leadership roadmap',
      'Commit to ongoing AI learning and development'
    ],
    slides: [
      {
        id: 'intro',
        type: 'title',
        title: 'Capstone Session',
        subtitle: 'Presenting Your AI Playbook & Future-Proofing Strategy',
        content: {
          backgroundImage: '/assets/capstone-bg.jpg',
          quote: '"The future belongs to those who prepare for it today. Your AI journey starts now."'
        }
      },
      {
        id: 'program-reflection',
        type: 'trend-timeline',
        title: 'Your AI Learning Journey',
        subtitle: 'Reflecting on 24 Sessions of Growth',
        content: {
          timeline: [
            {
              year: 'Phase 1',
              title: 'Foundation Built',
              description: 'Established fundamental AI understanding and strategic thinking',
              technologies: ['AI Landscape Knowledge', 'Context Engineering', 'Data Fundamentals'],
              impact: 'Strategic AI mindset developed',
              probability: 100
            },
            {
              year: 'Phase 2',
              title: 'Functional Integration',
              description: 'Applied AI across business functions and processes',
              technologies: ['Strategic Analysis', 'HR Automation', 'Finance AI', 'Marketing Intelligence'],
              impact: 'Practical AI implementation skills',
              probability: 100
            },
            {
              year: 'Phase 3',
              title: 'Advanced Augmentation',
              description: 'Mastered sophisticated AI capabilities and workflows',
              technologies: ['Multimodal AI', 'Agentic Systems', 'Advanced Analytics'],
              impact: 'Expert-level AI utilization',
              probability: 100
            },
            {
              year: 'Phase 4',
              title: 'Strategic Leadership',
              description: 'Developed organizational AI leadership and change management skills',
              technologies: ['Change Management', 'AI Governance', 'Future Strategy'],
              impact: 'AI transformation leadership',
              probability: 100
            }
          ]
        }
      },
      {
        id: 'key-takeaways',
        type: 'takeaways',
        title: 'Program Key Takeaways',
        subtitle: 'Your AI Leadership Foundation',
        content: {
          takeaways: [
            {
              title: 'AI is a Strategic Imperative',
              description: 'Organizations that master AI will dominate their markets in the coming decade',
              icon: '🚀',
              priority: 'high'
            },
            {
              title: 'Human-AI Collaboration is the Future',
              description: 'Success comes from augmenting human capabilities, not replacing them',
              icon: '🤝',
              priority: 'high'
            },
            {
              title: 'Continuous Learning is Essential',
              description: 'AI evolves rapidly - commit to ongoing learning and adaptation',
              icon: '📚',
              priority: 'high'
            },
            {
              title: 'Lead the Transformation',
              description: 'As an AI-literate manager, you have the opportunity to lead organizational transformation',
              icon: '👑',
              priority: 'high'
            }
          ]
        }
      },
      {
        id: 'next-steps',
        type: 'action-plan',
        title: 'Your AI Leadership Journey Continues',
        subtitle: 'Next Steps for Ongoing Success',
        content: {
          immediate: [
            'Complete your Manager\'s AI Playbook with all 24 session templates',
            'Schedule monthly AI learning sessions for yourself and your team',
            'Identify and launch your first major AI implementation project'
          ],
          shortTerm: [
            'Establish AI governance framework for your department',
            'Build network of AI practitioners across your organization',
            'Measure and communicate initial AI implementation results'
          ],
          longTerm: [
            'Become recognized AI leader within your organization',
            'Mentor other managers in AI adoption and implementation',
            'Contribute to organizational AI strategy and future planning'
          ]
        }
      }
    ]
  }
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