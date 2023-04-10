const sections = document.querySelectorAll('.section');
let currentSection = 0;

window.addEventListener('wheel', (event) => {
  event.preventDefault();
  const direction = event.deltaY > 0 ? 1 : -1;
  currentSection = Math.min(Math.max(currentSection + direction, 0), sections.length - 1);
  sections[currentSection].scrollIntoView({ behavior: 'smooth' });
});
