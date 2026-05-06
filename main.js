function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('open');
}

document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navMenu').classList.remove('open');
  });
});

function handleSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  msg.textContent = '送信しました。2営業日以内にご返信いたします。';
  e.target.reset();
}
