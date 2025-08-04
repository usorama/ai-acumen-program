---
# Agent Targeting
target-agent: frontend-developer
tools: [Read, Write, MultiEdit, Glob, Grep]

# Project Context
epic: Enhanced AI Acumen Program
story: Session 1.3 - Context Engineering Framework
priority: high
estimated-effort: 3-4 hours
dependencies: ["Session 1.2 - Business Value & ROI"]

# Acceptance Criteria
acceptance-criteria: |
  - [ ] Session slides created with ultra-clean design system
  - [ ] Interactive prompt builder with real-time preview
  - [ ] Context framework demonstration with before/after examples
  - [ ] Prompt quality assessment exercise with scoring
  - [ ] Context Engineering Toolkit artifact generated
  - [ ] Prompt Template Library artifact created
  - [ ] Quality Assessment Framework artifact produced
  - [ ] Live prompt testing functionality working
  - [ ] Responsive design tested and optimized

# Design System Constraints
design-system: |
  Ultra-Clean 3-Color System:
  - --bg-primary: #000000 (Pure black background)
  - --bg-card: #0F0F0F (95% black cards, barely visible)
  - --text-primary: #CCCCCC (Light gray primary text)
  - --accent-mint: #00FF94 (Bright mint accent)
  
  Typography: Inter font family only
  Spacing: 8px grid system (--space-xs through --space-3xl)
  Components: Code blocks, prompt builders, comparison cards

# Interactive Elements Required
interactivity: |
  - Live prompt builder with component selection
  - Before/after prompt comparison with quality scoring
  - Interactive context framework with expandable sections
  - Prompt quality assessment with real-time feedback
  - Template library with copy-to-clipboard functionality
  - Context element toggles with result preview

# Shareable Artifacts
artifacts: |
  1. Context Engineering Toolkit - comprehensive prompt framework
  2. Prompt Template Library - ready-to-use templates by use case
  3. Quality Assessment Framework - evaluation criteria and scoring
  
  Professional styling consistent with program artifacts
---

# User Story: Context Engineering Framework

## Business Context
As a manager participating in the Enhanced AI Acumen Program, I want to access a comprehensive context engineering training session so that I can create high-quality prompts that generate reliable, business-relevant AI outputs and train my team to communicate effectively with AI systems.

This session builds on Sessions 1.1-1.2's foundation and introduces the critical skill of AI communication that determines success or failure of AI initiatives.

## Session Structure (15 minutes)

### Slide Breakdown
1. **Title Slide** (1 min) - Context engineering importance and objectives
2. **The Context Challenge** (3 min) - Poor vs. excellent prompt examples
3. **CLEAR Framework** (4 min) - Context, Length, Examples, Audience, Role
4. **Interactive Prompt Builder** (5 min) - Live demonstration with real-time results
5. **Quality Assessment Exercise** (1 min) - Scoring prompts using framework
6. **Key Takeaways** (1 min) - Context mastery and implementation guidance

### Learning Objectives
- Understand the critical impact of context quality on AI outputs
- Apply the CLEAR framework for structured prompt development
- Create business-focused prompts that generate reliable results
- Assess and improve prompt quality using evaluation criteria

## Technical Requirements

### File Structure
```
session-3-context-engineering.html             # Main session file
artifacts/session3/
├── context-engineering-toolkit.html          # Comprehensive framework guide
├── prompt-template-library.html              # Ready-to-use templates
└── quality-assessment-framework.html         # Evaluation criteria and tools
```

### Design System Implementation
- Consistent ultra-clean aesthetic with previous sessions
- Code block styling with syntax highlighting for prompts
- Interactive builder with drag-and-drop or selection interface
- Comparison cards showing before/after prompt examples
- Real-time preview areas with simulated AI responses

### Interactive Elements
- **Prompt Builder**: Component-based prompt construction
- **Live Preview**: Simulated AI response based on prompt quality
- **Comparison Tool**: Side-by-side before/after examples
- **Quality Scorer**: Real-time assessment as users build prompts
- **Template Browser**: Categorized templates with copy functionality

## Content Requirements

### The Context Challenge

**Poor Prompt Example**
```
"Write a marketing email for our new product."
```
**Issues**: No audience, no product details, no tone, no goals, no constraints

**Simulated Poor Output**: Generic, bland, unusable content

**Excellent Prompt Example**
```
CONTEXT: We're launching EcoClean Pro, a biodegradable industrial cleaner targeting facility managers in manufacturing.

TASK: Write a marketing email announcing the product launch.

AUDIENCE: Facility managers at mid-size manufacturing companies (100-500 employees) who are cost-conscious but interested in sustainability.

REQUIREMENTS:
- Subject line under 50 characters
- Email body under 200 words
- Include 30% cost savings claim
- Mention EPA certification
- Professional, informative tone
- Call-to-action for free sample

CONSTRAINTS:
- Avoid overly promotional language
- No unsubstantiated environmental claims
- Must comply with CAN-SPAM requirements
```

**Simulated Excellent Output**: Targeted, professional, actionable content

### CLEAR Framework

**C - Context**
- Business background and situation
- Stakeholder information and constraints
- Current challenges and objectives
- Relevant data and parameters

**L - Length and Format**
- Desired output length specifications
- Format requirements (email, report, list, etc.)
- Structure preferences and organization
- Visual or formatting constraints

**E - Examples**
- Sample inputs and desired outputs
- Style and tone examples
- Quality indicators and benchmarks
- Success criteria demonstrations

**A - Audience**
- Target audience characteristics
- Knowledge level and expertise
- Communication preferences
- Cultural and contextual considerations

**R - Role and Responsibility**
- AI's role in the task
- Human oversight requirements
- Decision-making boundaries
- Quality assurance responsibilities

### Interactive Prompt Builder

**Component Categories**

1. **Context Selectors**
   - Business function (Marketing, HR, Finance, Operations)
   - Industry type (Manufacturing, Healthcare, Technology, Retail)
   - Company size (Startup, SMB, Enterprise)
   - Urgency level (Routine, Important, Critical)

2. **Task Specifications**
   - Output type (Email, Report, Analysis, Presentation)
   - Length requirements (Brief, Standard, Comprehensive)
   - Format preferences (Bullet points, Paragraphs, Tables)
   - Tone selection (Professional, Casual, Technical, Creative)

3. **Audience Parameters**
   - Stakeholder level (Executive, Manager, Team, External)
   - Technical expertise (Beginner, Intermediate, Expert)
   - Communication style (Direct, Detailed, Persuasive)
   - Cultural considerations (Regional, Industry-specific)

4. **Quality Controls**
   - Fact-checking requirements
   - Compliance considerations
   - Brand guidelines
   - Review processes

### Quality Assessment Exercise

**Prompt Evaluation Criteria (1-5 scale)**

1. **Clarity** - Is the request unambiguous and specific?
2. **Context** - Is sufficient background information provided?
3. **Constraints** - Are limitations and requirements clearly stated?
4. **Completeness** - Are all necessary details included?
5. **Actionability** - Can the AI produce the desired output?

**Exercise Prompts for Assessment**
- Basic request: "Help me with customer service"
- Improved request: "Create customer service email templates"
- Excellent request: Full CLEAR framework implementation

### Artifact Specifications

**Context Engineering Toolkit**
- CLEAR framework detailed explanation
- Prompt construction methodology
- Quality assessment checklist
- Common pitfalls and solutions
- Advanced techniques for complex tasks
- Team training materials and exercises

**Prompt Template Library**
- Business function categories (10+ templates each)
- Industry-specific adaptations
- Use case scenarios with context examples
- Customization guidelines
- Success metrics and optimization tips
- Version control and sharing protocols

**Quality Assessment Framework**
- Evaluation criteria definitions
- Scoring methodology and rubrics
- Improvement recommendations by score range
- Peer review processes and templates
- Quality tracking and analytics
- Continuous improvement guidelines

## Definition of Done
- [ ] All 6 slides display with perfect ultra-clean design
- [ ] Prompt builder functions with real-time preview updates
- [ ] Before/after comparisons demonstrate clear quality differences
- [ ] Quality assessment exercise provides meaningful scoring
- [ ] All 3 artifacts generated with comprehensive content
- [ ] Code blocks display with proper syntax highlighting
- [ ] Copy-to-clipboard functionality works across browsers
- [ ] Mobile responsive design maintains builder functionality
- [ ] Print layouts optimized for reference materials
- [ ] Interactive elements provide immediate feedback

## Implementation Guidance

### Key Files to Reference
- `/session-1-ultraclean.html` - Design system consistency
- `/session-2-business-value-roi.html` - Interactive component patterns
- Consider using Prism.js or similar for syntax highlighting

### Critical Implementation Notes
- Implement proper code block styling with monospace fonts
- Use textarea elements for prompt building with real-time character counts
- Include copy-to-clipboard functionality with success feedback
- Ensure prompt builder components have clear visual hierarchy
- Add keyboard shortcuts for power users (Ctrl+C for copy, etc.)

### Prompt Builder Specifications
- Dynamic component addition/removal with smooth animations
- Real-time character counting and length warnings
- Save/load functionality for prompt templates
- Export options (plain text, formatted, JSON)
- Validation for required components before preview

### Code Block Styling
```css
.prompt-block {
    background: var(--bg-card);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: var(--space-lg);
    font-family: 'JetBrains Mono', 'Consolas', monospace;
    font-size: 0.9rem;
    line-height: 1.6;
    overflow-x: auto;
}
```

### Interactive Preview Implementation
- Simulate AI responses based on prompt quality scoring
- Use predefined response templates that improve with better prompts
- Include loading states and typing animations for realism
- Provide quality explanations alongside simulated responses

This session is critical for practical AI implementation success and must provide immediately applicable skills that managers can use and teach to their teams.