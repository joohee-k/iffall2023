document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const dots = document.querySelectorAll(".dot");

  function updateActiveDot() {
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
          const top = section.offsetTop - 0; // Adjust this value to fit your layout
          const bottom = top + section.clientHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
              dots.forEach(dot => dot.classList.remove("active"));
              dots[index].classList.add("active");
          }
      });
  }

  document.addEventListener("scroll", updateActiveDot);
  window.addEventListener("resize", updateActiveDot);
  updateActiveDot(); // Initial update
});

