// Shared site chrome: injects nav + footer, handles mobile menu, dropdowns + scroll reveal
// Auto-detects whether the current page is inside the /topics/ folder so links resolve correctly.
const BASE = window.location.pathname.includes('/topics/') ? '../' : '';

function renderNav(activePage) {
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <a href="${BASE}index.html" class="nav-logo"><img src="${BASE}nav-logo.png" alt="Cannabis Farm" class="nav-logo-icon">Cannabis<span>Farm</span></a>
    <ul class="nav-links" id="navLinks">
      <li class="nav-dropdown">
        <span class="nav-dropdown-toggle">Growing</span>
        <ul class="nav-dropdown-menu">
          <li><a href="${BASE}growing.html#topics">Topics</a></li>
          <li><a href="${BASE}growing.html#guide">Beginner Guide</a></li>
          <li><a href="${BASE}growing.html#glossary">Glossary</a></li>
        </ul>
      </li>
      <li class="nav-dropdown">
        <span class="nav-dropdown-toggle">Explore</span>
        <ul class="nav-dropdown-menu">
          <li><a href="${BASE}medical.html" class="${activePage==='medical'?'active':''}">Medical</a></li>
          <li><a href="${BASE}science-lab.html" class="${activePage==='science-lab'?'active':''}">Science & Lab</a></li>
          <li><a href="${BASE}history.html" class="${activePage==='history'?'active':''}">History & Culture</a></li>
          <li><a href="${BASE}strains.html" class="${activePage==='strains'?'active':''}">Strains</a></li>
          <li><a href="${BASE}blog.html" class="${activePage==='blog'?'active':''}">Blog</a></li>
        </ul>
      </li>
    </ul>
    <button class="nav-search-btn" id="navSearchBtn" aria-label="Search">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    </button>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  `;
  document.body.prepend(nav);

  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });
  document.getElementById('navSearchBtn').addEventListener('click', openSiteSearch);
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
  });
  document.querySelectorAll('.nav-dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = toggle.closest('.nav-dropdown');
      document.querySelectorAll('.nav-dropdown').forEach(d => { if (d !== parent) d.classList.remove('open'); });
      parent.classList.toggle('open');
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
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
        <h5>Growing</h5>
        <ul>
          <li><a href="${BASE}growing.html#guide">Beginner Guide</a></li>
          <li><a href="${BASE}growing.html#topics">All Topics</a></li>
          <li><a href="${BASE}growing.html#glossary">Glossary</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Explore</h5>
        <ul>
          <li><a href="${BASE}medical.html">Medical</a></li>
          <li><a href="${BASE}science-lab.html">Science & Lab</a></li>
          <li><a href="${BASE}history.html">History & Culture</a></li>
          <li><a href="${BASE}strains.html">Strains</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Site</h5>
        <ul>
          <li><a href="${BASE}index.html">Home</a></li>
          <li><a href="${BASE}blog.html">Blog</a></li>
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

// ===== SITE-WIDE SEARCH =====
// Reads from SEARCH_INDEX (search-index.js, must be loaded before this file).
let _searchActiveIndex = -1;
let _searchResults = [];

function buildSiteSearch() {
  if (document.getElementById('siteSearchOverlay')) return;
  const overlay = document.createElement('div');
  overlay.id = 'siteSearchOverlay';
  overlay.className = 'search-overlay';
  overlay.innerHTML = `
    <div class="search-panel" role="dialog" aria-modal="true" aria-label="Search Cannabis Farm">
      <div class="search-input-row">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" id="siteSearchInput" placeholder="Search growing, glossary, strains, history…" autocomplete="off" />
        <button id="siteSearchClose" aria-label="Close search">✕</button>
      </div>
      <div class="search-results" id="siteSearchResults"></div>
      <div class="search-hint">↑↓ to navigate &nbsp;·&nbsp; Enter to select &nbsp;·&nbsp; Esc to close</div>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeSiteSearch(); });
  document.getElementById('siteSearchClose').addEventListener('click', closeSiteSearch);
  document.getElementById('siteSearchInput').addEventListener('input', runSiteSearch);
  document.getElementById('siteSearchInput').addEventListener('keydown', handleSearchKeydown);
}

function openSiteSearch() {
  buildSiteSearch();
  const overlay = document.getElementById('siteSearchOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  const input = document.getElementById('siteSearchInput');
  input.value = '';
  input.focus();
  renderSearchResults([]);
}

function closeSiteSearch() {
  const overlay = document.getElementById('siteSearchOverlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function runSiteSearch(e) {
  const q = e.target.value.trim().toLowerCase();
  if (!q) { renderSearchResults([]); return; }
  if (typeof SEARCH_INDEX === 'undefined') { renderSearchResults([]); return; }

  const scored = SEARCH_INDEX.map(item => {
    const title = item.title.toLowerCase();
    const desc = (item.desc || '').toLowerCase();
    const section = (item.section || '').toLowerCase();
    let score = 0;
    if (title === q) score = 100;
    else if (title.startsWith(q)) score = 80;
    else if (title.includes(q)) score = 60;
    else if (section.includes(q)) score = 30;
    else if (desc.includes(q)) score = 20;
    return { item, score };
  }).filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(r => r.item);

  renderSearchResults(scored);
}

function renderSearchResults(results) {
  _searchResults = results;
  _searchActiveIndex = results.length ? 0 : -1;
  const wrap = document.getElementById('siteSearchResults');
  const q = document.getElementById('siteSearchInput').value.trim();

  if (!q) {
    wrap.innerHTML = `<div class="search-empty">Start typing to search all of Cannabis Farm — growing guides, glossary terms, strains, and history.</div>`;
    return;
  }
  if (!results.length) {
    wrap.innerHTML = `<div class="search-empty">No results for "${escapeHtml(q)}". Try a different term.</div>`;
    return;
  }
  wrap.innerHTML = results.map((r, i) => `
    <a href="${BASE}${r.url}" class="search-result ${i === 0 ? 'active' : ''}" data-index="${i}">
      <div class="search-result-title">${escapeHtml(r.title)}</div>
      <div class="search-result-desc">${escapeHtml(r.desc || '')}</div>
      <div class="search-result-badge">${escapeHtml(r.section)}</div>
    </a>
  `).join('');

  wrap.querySelectorAll('.search-result').forEach(el => {
    el.addEventListener('mouseenter', () => {
      _searchActiveIndex = parseInt(el.dataset.index, 10);
      updateActiveResult();
    });
    el.addEventListener('click', () => closeSiteSearch());
  });
}

function updateActiveResult() {
  document.querySelectorAll('.search-result').forEach((el, i) => {
    el.classList.toggle('active', i === _searchActiveIndex);
  });
  const activeEl = document.querySelector('.search-result.active');
  if (activeEl) activeEl.scrollIntoView({ block: 'nearest' });
}

function handleSearchKeydown(e) {
  if (e.key === 'Escape') { closeSiteSearch(); return; }
  if (!_searchResults.length) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    _searchActiveIndex = Math.min(_searchActiveIndex + 1, _searchResults.length - 1);
    updateActiveResult();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    _searchActiveIndex = Math.max(_searchActiveIndex - 1, 0);
    updateActiveResult();
  } else if (e.key === 'Enter') {
    e.preventDefault();
    const target = _searchResults[_searchActiveIndex];
    if (target) window.location.href = `${BASE}${target.url}`;
  }
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Global keyboard shortcut: "/" opens search from anywhere (unless typing in a field)
document.addEventListener('keydown', (e) => {
  if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    e.preventDefault();
    openSiteSearch();
  }
});

// If the page loaded with a #glossary-... or #step-... hash (from a search result),
// smoothly scroll to it and briefly highlight it so it's easy to spot.
window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (!hash || (!hash.startsWith('#glossary-') && !hash.startsWith('#step-'))) return;
  const target = document.querySelector(hash);
  if (!target) return;
  setTimeout(() => {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    target.classList.add('search-target-highlight');
    setTimeout(() => target.classList.remove('search-target-highlight'), 2200);
  }, 150);
});
