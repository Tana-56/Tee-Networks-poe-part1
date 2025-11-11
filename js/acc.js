document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach(acc => {
    acc.addEventListener("click", () => {
      acc.classList.toggle("active");

      const panel = acc.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.padding = "0 18px";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.padding = "15px 18px";
      }
    });
  });
});
