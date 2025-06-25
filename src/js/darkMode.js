document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('#theme-toggle-btn');
  const html = document.documentElement;

  if (toggle) {
    toggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      // Optionally save preference
      localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    });

    // On load, apply saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      html.classList.add('dark');
    } else if (savedTheme === 'light') {
      html.classList.remove('dark');
    }
  }
});

