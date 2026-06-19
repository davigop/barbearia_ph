
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    } else {
    entry.target.style.opacity = entry.isIntersecting ? 1 : 0.8;
    entry.target.style.transform = entry.isIntersecting ? "translateY(0)" : "translateY(20px)";
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => observer.observe(sec));