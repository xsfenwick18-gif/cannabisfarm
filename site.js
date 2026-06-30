// Shared site chrome: injects nav + footer, handles mobile menu + scroll reveal
// Auto-detects whether the current page is inside the /topics/ folder so links resolve correctly.
const BASE = window.location.pathname.includes('/topics/') ? '../' : '';

function renderNav(activePage) {
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <a href="${BASE}index.html" class="nav-logo">Cannabis<span>Farm</span></a>
    <ul class="nav-links" id="navLinks">
      <li><a href="${BASE}index.html#topics" class="${activePage==='topics'?'active':''}">Topics</a></li>
      <li><a href="${BASE}index.html#guide" class="${activePage==='guide'?'active':''}">Beginner Guide</a></li>
      <li><a href="${BASE}index.html#videos" class="${activePage==='videos'?'active':''}">Videos</a></li>
      <li><a href="${BASE}index.html#glossary" class="${activePage==='glossary'?'active':''}">Glossary</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  `;
  document.body.prepend(nav);

  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
  });
}

function renderFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footer-top">
      <div>
        <div class="footer-logo">Cannabis<span>Farm</span></div>
        <p class="footer-desc">Free, honest cannabis education for growers and enthusiasts. South Africa based and globally relevant.</p>
      </div>
      <div class="footer-col">
        <h5>Learn</h5>
        <ul>
          <li><a href="${BASE}index.html#guide">Beginner Guide</a></li>
          <li><a href="${BASE}index.html#topics">All Topics</a></li>
          <li><a href="${BASE}index.html#videos">Video Library</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Reference</h5>
        <ul>
          <li><a href="${BASE}index.html#glossary">Glossary</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Site</h5>
        <ul>
          <li><a href="${BASE}index.html">Home</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="disclaimer">For educational purposes only. Cannabis laws vary by jurisdiction — know and respect the laws in your area. Cannabis Farm does not provide medical, legal, or commercial growing advice.</p>
      <span>&copy; 2026 Cannabis Farm</span>
    </div>
  `;
  document.body.appendChild(footer);
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  reveals.forEach(r => observer.observe(r));
}
