const button2 = document.querySelector('.button2');
button2.addEventListener('click', function() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});

const button1 = document.querySelector('.button1');
button1.addEventListener('click', function() {
  window.scrollBy({
    top: -window.innerHeight,
    behavior: 'smooth'
  });
});