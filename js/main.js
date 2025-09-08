/* main.js */

// Обновляем год в футере
document.addEventListener('DOMContentLoaded', () => {
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;

  // Плавный эффект для cta: небольшая вибрация при клике
  const cta = document.getElementById('cta');
  if(cta){
    cta.addEventListener('click', (e) => {
      e.preventDefault();
      cta.animate([{transform:'scale(1)'},{transform:'scale(.98)'},{transform:'scale(1)'}],{duration:220,easing:'ease-out'});
    });
  }

  // Лёгкая смена фона-градиента с помощью requestAnimationFrame
  let t = 0;
  function animateBg(){
    t += 0.0025;
    const x = Math.sin(t) * 20;
    const yPos = Math.cos(t * 0.7) * 10;
    document.body.style.background = `linear-gradient(${120 + x}deg, #0f0824 ${20 + yPos}%, #51456b)`;
    requestAnimationFrame(animateBg);
  }
  requestAnimationFrame(animateBg);
});