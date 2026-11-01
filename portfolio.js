document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.getElementById('year');
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle?.querySelector('.theme-icon');
  const themeLabel = themeToggle?.querySelector('.theme-label');
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  if (!(themeToggle instanceof HTMLButtonElement) || !themeIcon || !themeLabel) {
    return;
  }

  const setTheme = (theme) => {
    const isLight = theme === 'light';
    document.documentElement.dataset.theme = theme;
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
    themeIcon.textContent = isLight ? '☾' : '☀';
    themeLabel.textContent = isLight ? 'Dark mode' : 'Light mode';
  };

  setTheme(savedTheme === 'light' ? 'light' : 'dark');

  themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', nextTheme);
    setTheme(nextTheme);
  });
});
