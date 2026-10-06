# Kirat Popli - Developer Portfolio Website

A modern, responsive, dark-themed single-page developer portfolio website built specifically for **Kirat Popli**, a First-Year B.Tech Student in **Information Technology (AI & Robotics)** at **Madhav Institute of Technology and Science (MITS), Gwalior**, applying for college technical club recruitment.

---

## 🌟 Features & Highlights

- **Authentic Fresher Focus**: Honest, ambitious, builder-oriented presentation without invented work experience, fake clients, or fake percentage bars.
- **Glassmorphism Cyber-Slate Design**: Vibrant glowing accents, dark theme background, and glassmorphism components.
- **Interactive Developer Terminal**: Hero section with a dynamic C++ terminal typing simulator.
- **Centralized Configuration (`js/config.js`)**: Easily update personal bio, email, skills, projects, and social links in a single file without editing HTML code.
- **Zero Heavy Dependencies**: Pure Vanilla HTML5, CSS3 (CSS variables + Flexbox/Grid), and JavaScript (ES6+).
- **Fully Responsive**: Seamlessly scales across Desktop (1440px), Laptop/Tablet (1024px & 768px), and Mobile (390px).
- **Club Recruitment Oriented**: Includes dedicated sections for *"Why I Want to Join the Club"* and an interactive *"Currently Learning Roadmap"*.

---

## 📁 File Structure

```text
c:\Users\kirat\Downloads\model rocketry\
├── index.html               # Main semantic HTML structure
├── css/
│   ├── main.css             # Design tokens, grid system, glassmorphism, responsive styles
│   └── animations.css       # Keyframes, micro-interactions, terminal animations & scroll reveals
├── js/
│   ├── config.js            # Editable content file (Edit your details here!)
│   ├── app.js               # DOM renderer, filter buttons, mobile drawer, scroll spy
│   └── interactive.js       # Interactive developer terminal simulator script
├── assets/
│   └── favicon.svg          # Custom KP initials SVG logo favicon
└── README.md                # Documentation & deployment guide
```

---

## ✏️ How to Customize Your Information

All website text, projects, and contact info are driven by `js/config.js`.

Open `js/config.js` in VS Code or any text editor and update the following key areas:

1. **Personal Info**:
   ```javascript
   personal: {
     name: "KIRAT POPLI",
     role: "First-Year Engineering Student",
     branch: "Information Technology (AI & Robotics)",
     college: "Madhav Institute of Technology and Science (MITS), Gwalior",
     email: "26irki29@mitsgwl.ac.in",
     ...
   }
   ```
2. **Social Links**:
   - Update `github`, `linkedin`, `instagram`, or `email` URLs under `socials`.
3. **Projects**:
   - Add, edit, or remove project cards under `projects`. Each card has `title`, `description`, `learned`, `tech`, `githubUrl`, and `liveUrl`.
4. **Skills**:
   - Update your programming skills, tools, or currently learning topics in `skills`.

---

## 🚀 How to Run Locally

### Option 1: Direct File Opening
1. Double-click `index.html` in your file explorer.
2. It will open directly in any web browser (Chrome, Edge, Firefox, Brave).

### Option 2: Live Server in VS Code (Recommended)
1. Open the project folder in VS Code.
2. Install the **Live Server** extension (by Live Server / Ritwick Dey).
3. Right-click `index.html` -> Select **"Open with Live Server"**.

### Option 3: Python Local Server
Run the following command in your terminal from the project directory:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 📤 How to Deploy to GitHub Pages (Free Hosting)

Follow these simple steps to make your website live on the internet for your club recruitment:

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com/) and click **New Repository**.
   - Name it `portfolio` or `kirat-portfolio`.
   - Keep it **Public** and click **Create repository**.

2. **Push Code to GitHub**:
   Run these commands in your project terminal:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of developer portfolio"
   git branch -M main
   git remote add origin https://github.com/kiratp1/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - In your GitHub repository, go to **Settings** -> **Pages**.
   - Under **Build and deployment** -> **Branch**, select `main` branch and `/ (root)` folder.
   - Click **Save**.
   - Your site will be published at `https://kiratp1.github.io/portfolio/` within 1-2 minutes!

---

## 📄 License & Usage

Created for Kirat Popli for college club recruitment. Free to use, adapt, and build upon.
