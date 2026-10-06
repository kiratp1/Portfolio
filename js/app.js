/**
 * PORTFOLIO APPLICATION LOGIC
 * Dynamic DOM renderer and interactive event handlers for Kirat Popli's Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.PORTFOLIO_CONFIG;
  if (!config) {
    console.error('PORTFOLIO_CONFIG missing! Make sure js/config.js is loaded.');
    return;
  }

  // 1. Populate Personal Details
  initPersonalData(config.personal, config.socials);

  // 2. Populate Skills Matrix
  initSkills(config.skills);

  // 3. Populate Projects
  initProjects(config.projects);

  // 4. Populate Roadmap Timeline
  initRoadmap(config.learningRoadmap);

  // 5. Populate Education
  initEducation(config.education);

  // 6. Populate "Why Join Club"
  initWhyJoinClub(config.whyJoinClub);

  // 7. Setup Navigation & Mobile Drawer
  setupNavigation();

  // 8. Setup Scroll Reveal Animations
  setupScrollReveal();

  // 9. Setup Contact Email Copy & Form Handlers
  setupContactHandlers(config.personal.email);
});

/* --------------------------------------------------------------------------
   1. Populate Personal Data in Hero & About
   -------------------------------------------------------------------------- */
function initPersonalData(personal, socials) {
  // Hero Section
  document.getElementById('hero-name').textContent = personal.name;
  document.getElementById('hero-subtitle').textContent = `${personal.role} • ${personal.branch}`;
  document.getElementById('hero-bio').textContent = personal.bioShort;
  document.getElementById('status-text').textContent = personal.status;

  // Social Links
  const githubBtns = document.querySelectorAll('.github-link');
  githubBtns.forEach(btn => btn.href = socials.github);

  const emailBtns = document.querySelectorAll('.email-link');
  emailBtns.forEach(btn => btn.href = socials.email);

  const linkedinBtns = document.querySelectorAll('.linkedin-link');
  linkedinBtns.forEach(btn => btn.href = socials.linkedin);

  // About Section
  document.getElementById('about-bio-long').textContent = personal.bioLong;
}

/* --------------------------------------------------------------------------
   2. Populate Skills Section
   -------------------------------------------------------------------------- */
function initSkills(skillsCategories) {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = skillsCategories.map(cat => `
    <div class="skill-category reveal-on-scroll">
      <h3 class="skill-category-title">
        <span>⚡</span> ${cat.category}
      </h3>
      <div class="skills-grid">
        ${cat.items.map(skill => `
          <div class="skill-card">
            <div class="skill-header">
              <span class="skill-name">${skill.name}</span>
              <span class="level-tag">${skill.levelTag}</span>
            </div>
            <p class="skill-desc">${skill.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   3. Populate Projects Section with Filtering
   -------------------------------------------------------------------------- */
let allProjectsData = [];

function initProjects(projects) {
  allProjectsData = projects;
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  renderProjects(projects);

  // Setup Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      const filter = e.target.getAttribute('data-filter');
      if (filter === 'all') {
        renderProjects(allProjectsData);
      } else {
        const filtered = allProjectsData.filter(p => p.category.toLowerCase() === filter.toLowerCase());
        renderProjects(filtered);
      }
    });
  });
}

function renderProjects(projectsToRender) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  if (projectsToRender.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">No projects found in this category.</p>`;
    return;
  }

  grid.innerHTML = projectsToRender.map(project => `
    <div class="project-card reveal-on-scroll">
      <div class="project-banner">
        <span class="project-icon-tag">${project.imageTag || '💻 Project'}</span>
        <span class="project-badge">${project.badge || 'Showcase'}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        
        <div class="project-learned">
          <strong>💡 What I Learned:</strong>
          ${project.learned}
        </div>

        <div class="tech-tags">
          ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="project-footer">
          ${project.githubUrl ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="flex:1;">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub Code
            </a>
          ` : ''}

          ${project.liveUrl && project.liveUrl !== '#' ? `
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="flex:1;">
              ⚡ Demo
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');

  setupScrollReveal();
}

/* --------------------------------------------------------------------------
   4. Populate Roadmap Timeline Section
   -------------------------------------------------------------------------- */
function initRoadmap(roadmap) {
  const container = document.getElementById('roadmap-timeline');
  if (!container) return;

  container.innerHTML = roadmap.map(item => `
    <div class="roadmap-item reveal-on-scroll">
      <div class="roadmap-node"></div>
      <div class="roadmap-card">
        <div class="roadmap-header">
          <span class="roadmap-phase">${item.phase}</span>
          <span class="roadmap-period">${item.period}</span>
        </div>
        <h3 class="roadmap-title">${item.title}</h3>
        <p class="roadmap-details">${item.details}</p>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   5. Populate Education Section
   -------------------------------------------------------------------------- */
function initEducation(edu) {
  const instEl = document.getElementById('edu-institution');
  if (!instEl) return;

  instEl.textContent = edu.institution;
  document.getElementById('edu-degree').textContent = edu.degree;
  document.getElementById('edu-branch').textContent = edu.branch;
  document.getElementById('edu-batch').textContent = edu.year;

  const tagBox = document.getElementById('coursework-tags');
  if (tagBox && edu.keyCoursework) {
    tagBox.innerHTML = edu.keyCoursework.map(c => `<span class="course-tag">${c}</span>`).join('');
  }
}

/* --------------------------------------------------------------------------
   6. Populate "Why Join Technical Club" Section
   -------------------------------------------------------------------------- */
function initWhyJoinClub(whyConfig) {
  const grid = document.getElementById('why-grid');
  if (!grid) return;

  grid.innerHTML = whyConfig.reasons.map((r, idx) => `
    <div class="why-card reveal-on-scroll">
      <span class="why-num">0${idx + 1}</span>
      <h3 class="why-title">${r.title}</h3>
      <p class="why-desc">${r.description}</p>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   7. Setup Responsive Navigation & Scroll Spy
   -------------------------------------------------------------------------- */
function setupNavigation() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
    });

    // Close menu when clicking link
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileToggle.innerHTML = '☰';
      });
    });
  }

  // Active link scroll spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const activeLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (activeLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(l => l.classList.remove('active'));
          activeLink.classList.add('active');
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. Setup Scroll Reveal Intersection Observer
   -------------------------------------------------------------------------- */
function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   9. Contact Handlers (Email Copy & Form Simulation)
   -------------------------------------------------------------------------- */
function setupContactHandlers(emailAddress) {
  const copyBtn = document.getElementById('copy-email-btn');
  const emailDisplay = document.getElementById('display-email');

  if (emailDisplay) emailDisplay.textContent = emailAddress;

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(emailAddress).then(() => {
        showToast('📋 Email copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy: ', err);
        showToast('Email: ' + emailAddress);
      });
    });
  }

  // Handle Contact Form Submission
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      
      showToast(`✨ Thanks ${name}! Your message has been noted.`);
      form.reset();
    });
  }
}

// Toast Helper
function showToast(msg) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
