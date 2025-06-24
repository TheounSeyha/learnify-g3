document.addEventListener('DOMContentLoaded', function () {
  const html = document.documentElement; // Use <html> for Tailwind dark mode
  const toggle = document.querySelector('input[aria-label="Toggle dark mode"]');
  const themeBtn = document.getElementById('theme-toggle-btn');
  const themeMenu = document.getElementById('theme-dropdown-menu');
  const dropdownItems = themeMenu ? themeMenu.querySelectorAll('.dropdown-item') : [];
  const lightBtn = dropdownItems[0];
  const darkBtn = dropdownItems[1];
  const systemBtn = dropdownItems[2];

  // Helper to apply theme
  function applyTheme(theme) {
    if (theme === 'dark') {
      html.classList.add('dark');
      if (toggle) toggle.checked = true;
    } else if (theme === 'light') {
      html.classList.remove('dark');
      if (toggle) toggle.checked = false;
    } else {
      // System
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.classList.add('dark');
        if (toggle) toggle.checked = true;
      } else {
        html.classList.remove('dark');
        if (toggle) toggle.checked = false;
      }
    }
  }

  // Load saved theme
  let savedTheme = localStorage.getItem('theme') || 'system';
  applyTheme(savedTheme);

  // Listen for system changes if in system mode
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (localStorage.getItem('theme') === 'system') {
      applyTheme('system');
    }
  });

  // Toggle switch
  if (toggle) {
    toggle.addEventListener('change', function () {
      if (toggle.checked) {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        applyTheme('light');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // Dropdown click logic
  if (themeBtn && themeMenu) {
    themeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      themeMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', function (e) {
      if (!themeMenu.contains(e.target) && !themeBtn.contains(e.target)) {
        themeMenu.classList.add('hidden');
      }
    });
  }

  // Dropdown menu items
  if (lightBtn) {
    lightBtn.addEventListener('click', function (e) {
      e.preventDefault();
      applyTheme('light');
      localStorage.setItem('theme', 'light');
      themeMenu.classList.add('hidden');
    });
  }
  if (darkBtn) {
    darkBtn.addEventListener('click', function (e) {
      e.preventDefault();
      applyTheme('dark');
      localStorage.setItem('theme', 'dark');
      themeMenu.classList.add('hidden');
    });
  }
  if (systemBtn) {
    systemBtn.addEventListener('click', function (e) {
      e.preventDefault();
      applyTheme('system');
      localStorage.setItem('theme', 'system');
      themeMenu.classList.add('hidden');
    });
  }
});

