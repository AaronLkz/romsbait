document.getElementById('start-btn').addEventListener('click', () => {
  alert('¡Próximamente podrás explorar ROMs!');
});

// Partículas animadas
const bg = document.querySelector('.animated-bg');
for (let i = 0; i < 18; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  const size = Math.random() * 32 + 24;
  p.style.width = `${size}px`;
  p.style.height = `${size}px`;
  p.style.left = `${Math.random() * 100}%`;
  p.style.top = `${Math.random() * 100}%`;
  p.style.animationDuration = `${10 + Math.random() * 8}s`;
  bg.appendChild(p);
}