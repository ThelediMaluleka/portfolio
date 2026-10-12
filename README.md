# Theledi R. Maluleka — Portfolio Website

A personal portfolio website built for the **Web Development** module (IT: System Development, Year 2) at **Gauteng City College**. It introduces me as a system developer and presents my skills, education, services and projects, with a way to contact me.

## Live Website

🔗 **https://ThelediMaluleka.github.io/portfolio/**

Repository: https://github.com/ThelediMaluleka/portfolio

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure (`header`, `nav`, `main`, `section`, `article`, `footer`) |
| CSS3 | Styling, CSS variables, Flexbox, Grid, media queries, animations |
| JavaScript (vanilla) | Interactive features (no frameworks) |
| [Boxicons](https://boxicons.com/) | Icon library |
| [Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins) | Typography |
| GitHub Pages | Hosting |

## Features

- **Responsive layout:** adapts to desktop, tablet (≤1100px / ≤900px) and mobile (≤600px) screens.
- **Mobile navigation menu:** a hamburger button toggles the menu on smaller screens and closes it after a link is clicked.
- **Active link highlighting:** the nav link for the section currently on screen is highlighted while scrolling.
- **Scroll animations:** sections fade in as they scroll into view (IntersectionObserver), and the skill bars fill in when the Skills section appears.
- **Project filter:** buttons filter the projects by category (Web, Database, Software).
- **Contact form with validation:** checks name, email format, optional South African phone number, subject and message length, shows an error under each field, then opens the visitor's email app with the message filled in.
- **Accessibility:** form labels, `aria` attributes on the menu button, visible focus outlines and support for `prefers-reduced-motion`.
- **Personal colour theme:** a dark plum background with a pink-to-lilac gradient accent.

## Folder Structure

```
portfolio/
├── index.html        # Main page
├── css/
│   └── styles.css    # All styles
├── js/
│   └── script.js     # All interactivity
├── images/           # Profile photo and other images
└── README.md
```

## Running the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/ThelediMaluleka/portfolio.git
   ```
2. Open the folder:
   ```bash
   cd portfolio
   ```
3. Open `index.html` in any modern browser (double-click it, or right-click → *Open with* → your browser).
   You can also use the **Live Server** extension in VS Code for automatic reloading.

No build steps or installs are needed.

## References

Every AI tool and external resource used in this project:

| Resource | How it was used |
|---|---|
| Claude (Anthropic) via Claude Code | Used to review my code against the assignment brief, find and fix bugs (the broken menu toggle, CSS typos, the missing `<ul>` tag), restructure the files into folders, add the Skills and Education sections, write the project filter and form validation JavaScript, and draft this README. I reviewed and edited the output. |
| [Boxicons](https://boxicons.com/) | All icons (social links, services, skills, projects, menu). |
| [Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins) | Main font of the website. |
| [MDN Web Docs](https://developer.mozilla.org/) | Reference for IntersectionObserver, form validation and CSS Grid. |
| [GitHub Pages documentation](https://docs.github.com/en/pages) | Instructions for deploying the site. |
| [Add any YouTube tutorial / template you followed] | [How you used it] |

## Author

**Theledi R. Maluleka**: IT: System Development student, Gauteng City College
