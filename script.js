const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentSlide = 0;

function showSlide(index) {
  currentSlide = index;
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  document.querySelectorAll('.pagination-indicators').forEach((group) => {
    group.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  });
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    showSlide(currentSlide + 1);
  }
}

document.querySelectorAll('.next-btn').forEach((button) => {
  button.addEventListener('click', nextSlide);
});

document.querySelectorAll('.dot').forEach((dot) => {
  dot.addEventListener('click', () => {
    const index = Number(dot.dataset.slide);
    showSlide(index);
  });
});
