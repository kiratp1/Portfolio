/**
 * PORTFOLIO CONFIGURATION FILE
 * Kirat Popli - First-Year Engineering Student (IT-AIR @ MITS Gwalior)
 * 
 * Edit the details below to update text, social links, skills, and projects
 * without having to modify the HTML structure.
 */

const PORTFOLIO_CONFIG = {
  // Personal Details
  personal: {
    name: "KIRAT POPLI",
    shortName: "Kirat",
    role: "First-Year Engineering Student",
    branch: "Information Technology (AI & Robotics)",
    college: "Madhav Institute of Technology and Science (MITS), Gwalior",
    email: "26irki29@mitsgwl.ac.in",
    status: "⚡ Currently learning Data Structures & C++",
    bioShort: "Fresher passionate about technology, algorithm design, and building real-world projects. Eager to solve complex problems and contribute to technical communities.",
    bioLong: "I am a first-year undergraduate student pursuing B.Tech in IT (AI & Robotics) at MITS Gwalior. Coming into college, my goal has been simple: learn by building. I am actively exploring computer science fundamentals, practicing algorithmic problem solving in C++, and learning web technologies step by step. I enjoy collaborating with peers, taking guidance from seniors, and turning ideas into functional applications.",
  },

  // Social Links
  socials: {
    github: "https://github.com/kiratp1",
    linkedin: "https://linkedin.com/in/kiratpopli", // Placeholder - easily replaceable
    email: "mailto:26irki29@mitsgwl.ac.in",
    instagram: "https://instagram.com/kiratpopli", // Placeholder - easily replaceable
  },

  // Terminal Hero Preview Code
  terminalData: {
    filename: "kirat_profile.cpp",
    command: "g++ kirat_profile.cpp -o profile && ./profile",
    outputLines: [
      "⚡ Initializing Kirat Popli's Profile...",
      "📍 Location: MITS Gwalior (B.Tech IT-AIR)",
      "🎯 Current Focus: DSA in C++, Modern Web Dev",
      "💡 Mindset: Learn by building, problem solving",
      "🚀 Status: Ready to collaborate and contribute!"
    ]
  },

  // Skills
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "C++", levelTag: "Active Focus", icon: "cpp-icon", desc: "Core language for problem solving, syntax, pointers, and memory concepts." },
        { name: "JavaScript (ES6+)", levelTag: "Intermediate", icon: "js-icon", desc: "DOM manipulation, async JS, arrow functions, web interactions." },
        { name: "HTML5", levelTag: "Proficient", icon: "html-icon", desc: "Semantic markup, structure, accessibility standards." },
        { name: "CSS3", levelTag: "Proficient", icon: "css-icon", desc: "Flexbox, Grid, CSS Variables, responsive layouts, micro-animations." }
      ]
    },
    {
      category: "Tools & Environment",
      items: [
        { name: "Git", levelTag: "Basics", icon: "git-icon", desc: "Version control, branching, committing, tracking code history." },
        { name: "GitHub", levelTag: "Active Learner", icon: "github-icon", desc: "Repository management, README creation, open-source workflow." },
        { name: "VS Code", levelTag: "Daily Driver", icon: "vscode-icon", desc: "Extensions, debugging, terminal integration, custom workflows." },
        { name: "Command Line / Terminal", levelTag: "Comfortable", icon: "terminal-icon", desc: "Bash basics, file navigation, compilation scripts." }
      ]
    },
    {
      category: "Currently Learning & Exploring",
      items: [
        { name: "Data Structures & Algorithms", levelTag: "Daily Practice", icon: "dsa-icon", desc: "Arrays, String manipulation, Recursion, Time & Space Complexity analysis." },
        { name: "Modern Web Design", levelTag: "Active Building", icon: "design-icon", desc: "Responsive UX/UI, glassmorphism, accessibility, dark mode aesthetics." },
        { name: "AI & Robotics Concepts", levelTag: "Curious Learner", icon: "ai-icon", desc: "Fundamentals of automation, logical reasoning, and basic Python ML concepts." }
      ]
    }
  ],

  // Projects Showcase
  projects: [
    {
      id: "portfolio-website",
      title: "Personal Developer Portfolio",
      category: "Web",
      featured: true,
      description: "A dark-themed responsive single-page portfolio built with clean semantic HTML, custom CSS system, and modular JS config.",
      learned: "Mastered CSS custom properties, glassmorphism design, mobile drawer navigation, scroll interactions, and modular JS structure.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/kiratp1/portfolio-website",
      liveUrl: "#",
      badge: "Completed",
      imageTag: "💻 Web Portfolio"
    },
    {
      id: "task-manager-app",
      title: "Student Task & Study Planner",
      category: "Web",
      featured: true,
      description: "An interactive browser-based study task manager featuring local storage persistence, priority filters, and streak counter.",
      learned: "Understood DOM manipulation, LocalStorage API, event handling, and managing dynamic array state in JavaScript.",
      tech: ["JavaScript", "HTML5", "CSS Grid", "LocalStorage"],
      githubUrl: "https://github.com/kiratp1/task-manager",
      liveUrl: "#",
      badge: "Completed Project",
      imageTag: "📝 Productivity Tool"
    },
    {
      id: "dsa-cpp-repository",
      title: "C++ Data Structures Toolkit",
      category: "C++",
      featured: true,
      description: "A curated collection of basic algorithms, array operations, matrix manipulations, and mathematical algorithms implemented in C++.",
      learned: "Deepened understanding of time complexity, memory allocation, edge-case testing, and clean code documentation in C++.",
      tech: ["C++", "Algorithms", "CLI", "Data Structures"],
      githubUrl: "https://github.com/kiratp1/cpp-dsa-practice",
      liveUrl: "",
      badge: "Active Repo",
      imageTag: "⚡ C++ & Algorithms"
    },
    {
      id: "weather-dashboard",
      title: "Weather Info Web App",
      category: "Web",
      featured: false,
      description: "A clean weather preview widget fetching live temperature and weather condition parameters using public REST APIs.",
      learned: "Gained hands-on experience with Fetch API, async/await functions, JSON parsing, and handling loading states in web apps.",
      tech: ["JavaScript", "REST API", "CSS Flexbox"],
      githubUrl: "https://github.com/kiratp1/weather-app",
      liveUrl: "#",
      badge: "Mini Project",
      imageTag: "🌤️ API Integration"
    },
    {
      id: "cli-quiz-game",
      title: "C++ Interactive Tech Quiz",
      category: "C++",
      featured: false,
      description: "Console-based interactive programming quiz app with score tracking, timed challenges, and category selection.",
      learned: "Practiced control structures, loops, file handling, struct data types, and modular function design in C++.",
      tech: ["C++", "CLI Tool", "File I/O"],
      githubUrl: "https://github.com/kiratp1/cpp-quiz-cli",
      liveUrl: "",
      badge: "Console App",
      imageTag: "🎮 CLI Project"
    }
  ],

  // Currently Learning Roadmap (Fresher Timeline)
  learningRoadmap: [
    {
      phase: "Phase 1: Foundations",
      title: "C++ & Computer Science Basics",
      period: "Month 1 - 2 (Current)",
      status: "In Progress",
      details: "Building strong fundamentals in programming logic, C++ control structures, functions, pointers, and object-oriented concepts."
    },
    {
      phase: "Phase 2: Core DSA",
      title: "Data Structures & Algorithmic Problem Solving",
      period: "Month 3 - 5",
      status: "Active Focus",
      details: "Solving problem sets on LeetCode/GeeksforGeeks, focusing on arrays, strings, recursion, sorting, and linear data structures."
    },
    {
      phase: "Phase 3: Frontend Web Dev",
      title: "Modern Vanilla Web Stack",
      period: "Month 4 - 6",
      status: "In Progress",
      details: "Creating responsive web UI, understanding async JavaScript, DOM mechanics, and building practical utility apps."
    },
    {
      phase: "Phase 4: Club Projects & AI/Robotics",
      title: "Collaborative Building & Specialization",
      period: "Target: College Term 2",
      status: "Upcoming Goal",
      details: "Contributing to technical club repositories, building full-stack/AI applications, and participating in college hackathons."
    }
  ],

  // Education Details
  education: {
    institution: "Madhav Institute of Technology and Science (MITS), Gwalior",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Information Technology - Artificial Intelligence & Robotics (IT-AIR)",
    year: "First Year (2026 - 2030 Batch)",
    keyCoursework: ["Programming in C++", "Engineering Mathematics", "Basic Electrical & Electronics", "Problem Solving Techniques"],
    activities: ["Active Technical Learner", "Coding Community Enthusiast", "Club Applicant"]
  },

  // Why I Want to Join Technical Club
  whyJoinClub: {
    headline: "Driven to Learn, Collaborate, and Contribute",
    reasons: [
      {
        title: "Mentorship & Guidance",
        icon: "mentor-icon",
        description: "I want to learn from experienced senior members, get feedback on my code, and absorb best practices early in my college life."
      },
      {
        title: "Hands-on Project Building",
        icon: "build-icon",
        description: "Moving beyond textbook theory by building real-world projects, participating in team sprints, and learning git workflows."
      },
      {
        title: "Active Contribution",
        icon: "volunteer-icon",
        description: "I am ready to dedicate time, help organize technical events, manage documentation, and support club activities actively."
      },
      {
        title: "Community & Peer Growth",
        icon: "community-icon",
        description: "Surrounding myself with like-minded peers who are passionate about tech, hackathons, open-source, and innovation."
      }
    ]
  }
};

// Export configuration globally for inline scripts
if (typeof window !== 'undefined') {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
