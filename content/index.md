---
title: ""
---

<div class="homepage-container">
  <svg class="corner-icon top-left" xmlns="http://www.w3.org/2000/svg" 
     width="24" height="24" viewBox="0 0 24 24" fill="none" 
     stroke="#b2b2b2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <g transform="rotate(135 12 12)">
    <path d="M6 9l6 6 6-6"/>
  </g>
</svg>

  <svg class="corner-icon top-right" xmlns="http://www.w3.org/2000/svg" 
     width="24" height="24" viewBox="0 0 24 24" fill="none" 
     stroke="#b2b2b2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <g transform="rotate(225 12 12)">
    <path d="M6 9l6 6 6-6"/>
  </g>
</svg>
  
  <svg class="corner-icon bottom-left" xmlns="http://www.w3.org/2000/svg" 
     width="24" height="24" viewBox="0 0 24 24" fill="none" 
     stroke="#b2b2b2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <g transform="rotate(45 12 12)">
    <path d="M6 9l6 6 6-6"/>
  </g>
</svg>

<a href="/Notes/Weird-Ecologies-1page" class="corner-icon bottom-right">
     <svg xmlns="http://www.w3.org/2000/svg" 
       width="24" height="24" viewBox="0 0 24 24" fill="none" 
       stroke="#b2b2b2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
     <g transform="rotate(-45 12 12)">
       <path d="M6 9l6 6 6-6"/>
     </g>
   </svg>
   </a>

  <span id="greeting" style="font-size: 1.2em; margin-top: 4px; margin-bottom:10px">
    Greetings, <span style="font-style: italic;">User.</span>
  </span>

  <div class="chapter-menu">
    <a href="/Notes/Weird-Ecologies-1" class="start-button">Start</a>
    <div class="chapter-options">
      <a href="/Notes/Weird-Ecologies-1" class="chapter-button">Preface & Introduction</a>
      <a href="/Notes/Weird-Ecologies-1#part-1-artificial-general-intelligence" class="chapter-button">Part 1: Artificial General Intelligence</a>
      <a href="/Notes/Weird-Ecologies-2" class="chapter-button">Part 2: Cyborgs and Hybridity</a>
      <a href="/Notes/Weird-Ecologies-Afterthoughts" class="chapter-button">Afterthoughts & Appendix</a>
    </div>
  </div>

  <button class="homepage-darkmode-toggle" id="darkmode-toggle">
    <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
    <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>
  </button>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Check for manual override first, then fall back to system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const hasManualOverride = localStorage.getItem('manual-theme-override') === 'true';
  
  // Use saved theme if there's a manual override, otherwise use system preference
  const initialTheme = hasManualOverride ? savedTheme : (prefersDark ? 'dark' : 'light');
  
  // Set initial theme
  document.documentElement.setAttribute('data-theme', initialTheme);
  document.documentElement.setAttribute('saved-theme', initialTheme);
  
  // Update localStorage to match current theme
  localStorage.setItem('theme', initialTheme);
  
  // Toggle functionality
  const toggleButton = document.getElementById('darkmode-toggle');
  
  if (toggleButton) {
    toggleButton.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      // Set manual override flag
      localStorage.setItem('manual-theme-override', 'true');
      
      document.documentElement.setAttribute('data-theme', newTheme);
      document.documentElement.setAttribute('saved-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
  
  // Listen for changes in system preference (only if no manual override)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    const hasOverride = localStorage.getItem('manual-theme-override') === 'true';
    if (!hasOverride) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      document.documentElement.setAttribute('saved-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    }
  });
});
</script>