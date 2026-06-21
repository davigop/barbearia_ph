document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {

      const item = btn.closest(".faq-item");

      document.querySelectorAll(".faq-item").forEach(el => {
        if (el !== item) el.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });

});