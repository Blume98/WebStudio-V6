document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.querySelector(".hero-btn");
  const closeModalBtn = document.querySelector(".close-modal");
  const modal = document.querySelector(".modal");
  openModalBtn.addEventListener("click", () => {
    modal.classList.add("is-open");
  });

  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("is-open");
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("is-open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      modal.classList.remove("is-open");
    }
  });
});
