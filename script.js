// 將下方的 Email 與社群連結換成你自己的資訊即可上線使用。
    const emailAddress = 'hello@example.com';
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const toast = document.getElementById('toast');
    let toastTimer;
    function showToast(message) {
      toast.textContent = message;
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
    }
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.textContent = isOpen ? '✕ 關閉' : '☰ 選單';
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰ 選單';
      navLinks.querySelectorAll('a').forEach(item => item.classList.remove('active'));
      link.classList.add('active');
    }));
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('copyEmail').addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(emailAddress);
        showToast('Email 已複製：' + emailAddress);
      } catch (error) {
        showToast('請手動複製 Email：' + emailAddress);
      }
    });
    document.querySelectorAll('[data-message]').forEach(link => link.addEventListener('click', event => {
      event.preventDefault();
      showToast(link.dataset.message);
    }));
    document.querySelectorAll('[data-project]').forEach(link => link.addEventListener('click', event => {
      event.preventDefault();
      showToast('請將「' + link.dataset.project + '」連結替換成你的作品網址。');
    }));
