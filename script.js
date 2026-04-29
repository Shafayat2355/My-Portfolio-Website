// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    menuToggle.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

/* image model*/
const logoImg = document.getElementById("logoImg");
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const downloadBtn = document.getElementById("downloadBtn");
const closeBtn = document.querySelector(".close");

logoImg.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  downloadBtn.href = this.src;
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

/* typing animation*/
const texts = [
  "Software Developer",
  ".NET & Web Application Specialist",
  "WordPress Developer",
];

let i = 0,
  j = 0,
  del = false;

(function type() {
  let text = texts[i];

  j += del ? -1 : 1;

  document.getElementById("typing").textContent = text.slice(0, j);

  let speed = del ? 30 : 120;

  if (!del && j === text.length) {
    speed = 1500;
    del = true;
  } else if (del && j === 0) {
    del = false;
    i = (i + 1) % texts.length;
    speed = 400;
  }

  setTimeout(type, speed);
})();

// Back to top
window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  btn.style.display =
    document.documentElement.scrollTop > 400 ? "flex" : "none";
};

// Scroll Spy - active menu highlight
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
