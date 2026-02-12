# CV Builder — Professional Resume Generator

A web application that allows users to create, preview, and export a structured, professional CV in PDF format through a guided multi-step workflow.

## Live Demo

- **Application:** [Live Link](https://bibeta-cvbuilder.netlify.app/)
- **Repository:** https://github.com/Romeo-Martial/my-cv-builder

## Project Overview

This project was built to help users generate professional resumes quickly while maintaining strong document structure and readability.

The application guides users through structured data collection, provides real-time preview, and exports a clean PDF version of the CV.

The focus of this project was to simulate a real production product rather than a simple form application.

## Core Features

### Multi-Step Resume Builder

- Structured data input
- Dynamic addition and removal of items
- Inline feedback and validation

### Real-Time Preview

- Displays CV content in document format
- Allows quick verification before export
- Enables direct navigation to edit specific sections

### PDF Export

- Generates printable CV output
- Optimized using HTML, CSS, and print styling

### Responsive Interface

- Works across mobile, tablet, and desktop
- Built using reusable layout patterns

### Data Persistence

- Automatic localStorage integration saves form data in real-time
- Prevents data loss on page refresh or accidental navigation
- Seamlessly restores user progress across browser sessions

### Reset Functionality

- Complete data reset option with one-click clearing
- Removes all saved data from both state and localStorage
- Returns user to initial form state for fresh start

### Custom Design System

The UI was built using a token-based CSS architecture including:

- Spacing scale
- Typography scale
- Layout primitives (Stack, Cluster, Split)
- Consistent visual hierarchy

## Technology Stack

### Frontend:

- React
- JavaScript (ES6+)
- Pure CSS

### Concepts and Techniques:

- Component-driven architecture
- Nested dynamic state management
- Responsive layout design
- Print styling using @media print
- Reusable UI component patterns

## Technical Challenges

### Managing Nested Dynamic Data

Experience, education, and skills required handling nested dynamic lists while keeping React state predictable and maintainable.

### Designing for Both Screen and Print

Separate styling strategies were implemented for:

- Interactive preview
- PDF export layout

### Creating Reusable Layout Utilities

Custom layout utilities were developed to improve maintainability and ensure consistent spacing and alignment across the application.

## Project Structure

```
src/
├── DataCollection/         # Multi-step form wizard
│   ├── DataCollector.jsx   # Main form coordinator
│   ├── Controls/           # Reusable form controls
│   ├── Header/            # Personal info collection
│   ├── Summary/           # Professional summary
│   ├── Experience/        # Work experience forms
│   ├── Skills/            # Technical & soft skills
│   ├── Education/         # Educational background
│   └── Languages/         # Language proficiency
├── DataReview/            # Data confirmation step
├── cvPreview/             # PDF-optimized CV layout
│   └── cvPreview.jsx      # Clean CV component for export
├── Utils/                 # Helper functions
│   └── validateData.js    # Form validation logic
├── Styles/                # Modular CSS architecture
│   ├── tokens.css         # Design system tokens
│   ├── base.css           # Base styles & normalization
│   ├── layout.css         # Layout primitives
│   ├── components/        # Component-specific styles
│   ├── inputs.css         # Form input styling
│   ├── preview.css        # CV preview & print styles
│   └── ...               # Additional utility styles
├── assets/               # Static assets
├── App.jsx              # Main application component
└── main.jsx             # Application entry point
```

## Future Improvements

- Multiple CV templates
- Routing and navigation flow
- Accessibility enhancements
- Test coverage expansion

## What I Learned

This project strengthened my understanding of:

- Designing complete user workflows
- Managing complex React state structures
- Building scalable CSS architecture
- Implementing print-ready UI
- Writing reusable component systems

## Author

**Roméo Martial TCHAMOU WENDJI**

- **GitHub:** https://github.com/Romeo-Martial
- **LinkedIn:** https://www.linkedin.com/in/rom%C3%A9o-tchamou-170077202/
- **Portfolio:** https://romeo-martial.github.io/Portfolio-Website/
