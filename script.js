// INTRO ANIMATION
window.addEventListener("load", () => {
  const intro = document.querySelector(".intro");
  const spans = document.querySelectorAll(".intro-text span");

  spans.forEach((span, i) => {
    setTimeout(() => {
      span.style.opacity = "1";
      span.style.transform = "translateY(0)";
      span.style.transition = "0.8s ease";
    }, i * 500);
  });

  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";
    intro.style.transition = "1s ease";
  }, 2500);

  setTimeout(() => {
    intro.remove();
  }, 3500);
});

// CINEMATIC SCROLL REVEAL
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.25,
  }
);

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


// document.addEventListener("mousemove", (e) => {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// });

// function animateGlow() {
//   currentX += (mouseX - currentX) * 0.12;
//   currentY += (mouseY - currentY) * 0.12;

//   glow.style.left = `${currentX}px`;
//   glow.style.top = `${currentY}px`;

//   requestAnimationFrame(animateGlow);
// }

// animateGlow();

// document.addEventListener("DOMContentLoaded", () => {
//   const glow = document.getElementById("cursor-glow");

//   if (!glow) {
//     console.error("Cursor glow element not found");
//     return;
//   }

//   let mouseX = window.innerWidth / 2;
//   let mouseY = window.innerHeight / 2;
//   let currentX = mouseX;
//   let currentY = mouseY;

//   document.addEventListener("mousemove", (e) => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
//   });

//   function animate() {
//     currentX += (mouseX - currentX) * 0.15;
//     currentY += (mouseY - currentY) * 0.15;

//     glow.style.left = `${currentX}px`;
//     glow.style.top = `${currentY}px`;

//     requestAnimationFrame(animate);
//   }

//   animate();
// });
