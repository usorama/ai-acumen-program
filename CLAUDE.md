# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AI Training Program repository containing HTML presentation materials for educational purposes. The project consists of static HTML files with embedded CSS and JavaScript for delivering training content about AI implementation and methodologies.

## Project Structure

```
AI-Training-Program/
├── gamma-prompts/
│   ├── ai_training_presentation.html    # Gamma AI implementation presentation
│   └── program-guide/                   # Additional program materials
├── program-guide/
│   └── ai_training_presentation.html    # 24-session training program guide
└── program-html-slides/
    └── ai_training_presentation.html    # Slide-based presentation format
```

## Architecture

The project uses a simple static file architecture:

- **Static HTML Files**: Self-contained presentation files with embedded CSS and JavaScript
- **No Build Process**: Files are ready to run directly in browsers
- **No Dependencies**: All styling and functionality is embedded within the HTML files
- **Responsive Design**: Uses CSS Grid/Flexbox with mobile-first approach
- **External Fonts**: Google Fonts (Open Sans) loaded via CDN

## Content Structure

The presentations follow a consistent structure:
- **Header Section**: Title and program branding with gradient styling
- **Phase/Session Organization**: Content organized into logical phases or sessions
- **Interactive Elements**: Navigation and expandable content sections
- **Styling**: Modern CSS with gradients, shadows, and responsive layouts

## Working with Files

### Viewing Presentations
Simply open any `.html` file in a web browser - no server required.

### Editing Content
- All styling is embedded in `<style>` tags within each HTML file
- Content is structured with semantic HTML5 elements
- Gradients and modern CSS features are used throughout
- Font stack: 'Open Sans' from Google Fonts with system fallbacks

### File Conventions
- File naming: `ai_training_presentation.html` (consistent across directories)
- CSS methodology: Embedded styles with BEM-like naming for components
- Color scheme: Purple/blue gradients (#667eea, #764ba2) with accent colors
- Typography: Open Sans with weight variations (300, 400, 600, 700)

## Development Notes

- No package manager or build tools required
- Files are self-contained and portable
- Cross-browser compatibility focused on modern browsers
- Mobile-responsive design implemented throughout
- External dependencies limited to Google Fonts CDN only

## Recent Developments

- Added a training presentation made with HTML and other web technologies
- Added claude code agents `.claude/agents` for workflow optimization.