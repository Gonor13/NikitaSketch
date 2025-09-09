document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  const btn = document.getElementById('cta');
  btn.addEventListener('click', e => {
    e.preventDefault();
    alert("Кнопка работает!");
  });
});
