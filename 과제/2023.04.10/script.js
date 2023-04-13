const extraMenus = document.querySelectorAll(".extraMenu");

extraMenus.forEach((extraMenu) => {
  const extra = extraMenu.querySelector(".extra");
  const subExtra = extraMenu.querySelector(".subExtra");

  extra.addEventListener("mouseenter", () => {
    subExtra.style.display = "flex";
  });

  extraMenu.addEventListener("mouseleave", () => {
    subExtra.style.display = "none";
  });
});
