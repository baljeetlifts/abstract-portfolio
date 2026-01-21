document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("getStarted");
  const profile = document.getElementById("profile");

  if (!btn || !profile) {
    console.error("Button or profile section not found");
    return;
  }

  btn.addEventListener("click", () => {
    profile.classList.remove("hidden");
    profile.scrollIntoView({ behavior: "smooth" });
  });
});

const cards = document.querySelectorAll(".project-card");

const reveal = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.6s ease";
  reveal.observe(card);
});

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    card.style.transform = 'scale(0.97)';
    setTimeout(() => {
      card.style.transform = '';
    }, 150);
  });
});

const card = document.querySelector('.about-card');

document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;

  card.style.transform = `translate(${x}px, ${y}px)`;
});
