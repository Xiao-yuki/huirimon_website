const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');

  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕ 關閉' : '☰ 選單';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰ 選單';

    navLinks.querySelectorAll('a').forEach(item => {
      item.classList.remove('active');
    });

    link.classList.add('active');
  });
});

document.getElementById('year').textContent =
  new Date().getFullYear();