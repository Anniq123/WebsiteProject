Structure will be the following: 
* Vercel needs to have this structure to deploy fully funtional, and visually appealing. Min Reqs: index.html, styles.css | script.js is plus that you should have.

WebsiteProject/
├── index.html 
├── styles.css
├── script.js
└── README.md

index.html      ← content
styles.css      ← design
script.js       ← contact form + menu
README.md       ← project notes

1) Index.html contains website contents/structure , headers, text, images, etc.. *what visitor sees*
2) Styles.css is for the visual appearance, colors, fonts, spacing, layouts, animations
3) script.js is for controlling behaviour and interactions for example contanct forms/submission forms or "☰ Menu" (or similar) button on page.
4) Within Index.htmkl we have a contentreference that will point to the Email Service (formspree/EmailJS)

## Deployment (Vercel)
1. Push project to GitHub
2. Connect repository to Vercel
3. Vercel automatically detects index.html
4. Site is deployed instantly


## Contact Form Behavior
This project uses a front-end contact form.

Form submissions can be handled using:
- Email service (Formspree / EmailJS)
- :contentReference[oaicite:0]{index=0}
- :contentReference[oaicite:1]{index=1}
- Or forwarded to business email

No backend server is required.

## File Linking Rules
- index.html must stay in root folder
- styles.css must be linked as: href="styles.css"
- script.js must be linked as: src="script.js"
- Do NOT rename files or move them into folders without updating paths

## Tech Stack
- HTML5
- CSS3
- JavaScript (Vanilla)
- Hosted on Vercel

## Project Purpose
This website is designed for local businesses to:
- Generate customer leads
- Increase phone calls
- Improve online presence
- Showcase services
