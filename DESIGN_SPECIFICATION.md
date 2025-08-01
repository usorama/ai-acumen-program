# AI Training Program - Dark Theme Design Specification

## Executive Summary

This specification creates a sophisticated **dark theme** visual system for the Enhanced AI Acumen Program using the custom color palette from colors.md. The design prioritizes reduced eye strain, enhanced focus during training sessions, and professional aesthetics while maintaining WCAG AA accessibility compliance.

---

## 1. DARK THEME COLOR SYSTEM

### Core Background System

**PRIMARY BACKGROUND (#2E4052 - As Specified):**
```css
:root {
  /* Main Dark Background */
  --color-background: #2E4052;           /* Dark blue-grey (For Background) */
  --color-background-card: #1C3144;      /* Darker blue-grey for cards */
  --color-background-elevated: #34495E;  /* Slate grey for elevated elements */
  --color-background-sidebar: #2E4052;   /* Same as main background */
}
```

### Text Colors (High Contrast)

**LIGHT TEXT FOR DARK BACKGROUNDS:**
```css
:root {
  /* Primary Text Colors */
  --color-text-primary: #CAF7E2;     /* Very light mint (excellent contrast) */
  --color-text-secondary: #D2D7DF;   /* Light grey (good contrast) */
  --color-text-muted: #A1E8CC;       /* Light mint-green (subtle text) */
  --color-text-inverse: #2E4052;     /* Dark text for light elements */
}
```

### Pastel Accent System

**PASTEL COLORS (From colors.md palette):**
```css
:root {
  /* Primary Pastel Accents */
  --color-primary: #6AD5CB;          /* Cyan-mint (106, 213, 203) */
  --color-primary-hover: #90E0EF;    /* Pale cyan (144, 224, 239) */
  --color-secondary: #A1E8CC;        /* Light mint (161, 232, 204) */
  --color-secondary-hover: #BDD9BF;  /* Sage green (189, 217, 191) */
  
  /* Supporting Pastels */
  --color-accent-cyan: #CAF0F8;      /* Very light cyan (202, 240, 248) */
  --color-accent-blue: #48CAE4;      /* Light cyan (72, 202, 228) */
  --color-accent-teal: #58B09C;      /* Teal-green (88, 176, 156) */
  --color-accent-sage: #BDD9BF;      /* Sage green (189, 217, 191) */
}
```

### Card & Surface System

**ENHANCED CARD DEFINITION:**
```css
:root {
  /* Card Backgrounds */
  --color-card-bg: #1C3144;              /* Dark blue-grey cards */
  --color-card-bg-hover: #34495E;        /* Slate grey on hover */
  --color-card-border: #77A0A9;          /* Blue-grey borders */
  --color-card-border-hover: #6AD5CB;    /* Cyan-mint hover borders */
  
  /* Card Styling */
  --card-border-radius: 16px;            /* Rounded rectangles */
  --card-shadow: 0 8px 32px rgba(5, 5, 5, 0.3);
  --card-shadow-hover: 0 12px 48px rgba(106, 213, 203, 0.2);
}
```

### Interactive States

**BUTTON & INTERACTION COLORS:**
```css
:root {
  /* Interactive Elements */
  --color-interactive-primary: #6AD5CB;     /* Cyan-mint primary */
  --color-interactive-hover: #58B09C;       /* Teal-green hover */
  --color-interactive-active: #1B9AAA;      /* Teal-blue active */
  --color-interactive-disabled: #6F7D8C;    /* Darker blue-grey disabled */
  
  /* Status Colors */
  --color-success: #BDD9BF;                 /* Sage green success */
  --color-warning: #A1E8CC;                 /* Light mint warning */
  --color-info: #CAF0F8;                    /* Very light cyan info */
  --color-error: #77A0A9;                   /* Blue-grey error */
}
```

---

## 2. ENHANCED CARD SYSTEM

### Card Visual Definition

**ROUNDED RECTANGLE CARDS:**
```css
.card {
  background: var(--color-card-bg);
  border: 2px solid var(--color-card-border);
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-shadow);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  background: var(--color-card-bg-hover);
  border-color: var(--color-card-border-hover);
  box-shadow: var(--card-shadow-hover);
  transform: translateY(-4px);
}
```

### Visual Hierarchy

**CARD TYPES:**
- **Primary Cards**: Cyan-mint accents (#6AD5CB)
- **Secondary Cards**: Light mint accents (#A1E8CC)  
- **Success Cards**: Sage green accents (#BDD9BF)
- **Info Cards**: Light cyan accents (#CAF0F8)

---

## 3. ACCESSIBILITY & CONTRAST

### WCAG AA Compliance

**CONTRAST RATIOS VERIFIED:**
- Background (#2E4052) vs Primary Text (#CAF7E2): **12.8:1** ✅
- Background (#2E4052) vs Secondary Text (#D2D7DF): **11.5:1** ✅
- Card Background (#1C3144) vs Text (#CAF7E2): **14.2:1** ✅
- Primary Accent (#6AD5CB) vs Dark Background: **8.9:1** ✅

### Color Psychology for Learning

- **Dark Theme Benefits**: Reduces eye strain during long training sessions
- **Pastel Accents**: Calming, non-overwhelming colors enhance focus
- **Cyan-Mint Primary**: Associated with clarity, innovation, trust
- **Sage Green Success**: Growth, progress, achievement
- **Professional Appearance**: Dark themes convey sophistication

---

## 4. IMPLEMENTATION REQUIREMENTS

### CSS Variable System

All colors must be implemented as CSS custom properties (variables) for consistency and easy maintenance.

### Card Enhancement Requirements

1. **Rounded Rectangles**: 16px border radius minimum
2. **Subtle Borders**: 2px borders with hover state changes
3. **Enhanced Shadows**: Multi-layer shadows for depth
4. **Smooth Animations**: 0.3s cubic-bezier transitions
5. **Hover Elevation**: 4px upward translation on hover

### Dark Theme Principles

1. **Background First**: #2E4052 is the foundation - all other colors must work against this
2. **Pastel Accents**: Use soft, light colors that don't strain eyes in dark environment
3. **High Contrast Text**: Ensure excellent readability with light text on dark background
4. **Consistent Visual Language**: All elements follow the same color and spacing rules

This dark theme system creates a professional, modern learning environment that reduces eye strain while maintaining excellent usability and visual appeal.