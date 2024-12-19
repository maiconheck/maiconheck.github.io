document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const isExpanded = header.getAttribute("aria-expanded") === "true";

      // Fecha todos os itens com animação
      document.querySelectorAll(".accordion-content").forEach((item) => {
        item.style.maxHeight = null;
        item.previousElementSibling.setAttribute("aria-expanded", "false");
        item.previousElementSibling.querySelector(".accordion-icon").innerText = "+";
      });

      // Abre o item clicado com animação
      if (!isExpanded) {
        content.style.maxHeight = content.scrollHeight + "px";
        header.setAttribute("aria-expanded", "true");
        header.querySelector(".accordion-icon").innerText = "−";
      }
    });
  });
});
