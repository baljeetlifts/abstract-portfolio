



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

const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-theme");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "🌙";
  }
});

const texts = [
  "builds web experiences",
  "creates modern UI",
  "designs premium websites"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];

  if (index < currentText.length) {
    letter = currentText.slice(0, ++index);
    document.getElementById("typing-text").textContent = letter;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
})();

function erase() {
  if (index > 0) {
    letter = currentText.slice(0, --index);
    document.getElementById("typing-text").textContent = letter;
    setTimeout(erase, 60);
  } else {
    count++;
    setTimeout(type, 300);
  }
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

navLinks.forEach(link => {
  link.addEventListener("mousemove", e => {
    const rect = link.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // intensity control
    link.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "translate(0, 0)";
  });
});

const aura = document.querySelector(".cursor-aura");

let mouseX = 0;
let mouseY = 0;
let auraX = 0;
let auraY = 0;

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});


const auraColors = {
  cyan: "0,255,255",
  purple: "180,0,255",

};

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const color = entry.target.dataset.color;
        if (color && auraColors[color]) {
          document.querySelector(".cursor-aura")
            .style.setProperty("--aura-color", auraColors[color]);
        }
      }
    });
  },
  { threshold: 0.6 }
);

sections.forEach(section => observer.observe(section));


function animateAura() {
  auraX += (mouseX - auraX) * 0.15;
  auraY += (mouseY - auraY) * 0.15;

  aura.style.left = `${auraX}px`;
  aura.style.top = `${auraY}px`;

  requestAnimationFrame(animateAura);
}

animateAura();

document.addEventListener("click", () => {
  aura.style.transform = "translate(-50%, -50%) scale(1.8)";
  setTimeout(() => {
    aura.style.transform = "translate(-50%, -50%) scale(1)";
  }, 150);
});




document.querySelectorAll('.social-links a').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
  })

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0,0)'
  })
})

const pricingSubtitle = document.querySelector('.pricing-subtitle');

const subtitleObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      pricingSubtitle.classList.add('show');
    }
  });
}, { threshold: 0.6 });

if (pricingSubtitle) {
  subtitleObserver.observe(pricingSubtitle);
}
