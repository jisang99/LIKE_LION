const sections = document.querySelectorAll('.section');
let currentSection = 0;
let isScrolling = false;

window.addEventListener('wheel', (event) => {
  if (isScrolling) return;
  isScrolling = true;

  const delta = event.deltaY;
  if (delta > 0 && currentSection < sections.length - 1) {
    currentSection++;
  } else if (delta < 0 && currentSection > 0) {
    currentSection--;
  }

  const targetScrollTop = currentSection * window.innerHeight;
  const currentScrollTop = window.pageYOffset;
  const distance = targetScrollTop - currentScrollTop;
  const duration = Math.abs(distance / 3);

  let startTime = null;
  function scrollAnimation(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = easeOutCubic(progress);
    window.scrollTo(0, currentScrollTop + distance * easeProgress);
    if (progress < 1) {
      window.requestAnimationFrame(scrollAnimation);
    } else {
      isScrolling = false;
    }
  }
  window.requestAnimationFrame(scrollAnimation);
});

function easeOutCubic(progress) {
  return 1 - Math.pow(1 - progress, 3);
}
