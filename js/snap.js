const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("mouseover", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    console.log(panel.className);
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
