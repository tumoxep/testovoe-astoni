function onBurgerClick() {
  const headerElement = document.querySelector(".header");
  headerElement.classList.toggle("header--expand");
}

function onResize(e) {
  if (window.innerWidth > 1024) {
    const headerElement = document.querySelector(".header");
    headerElement.classList.remove("header--expand");
  }
}

window.addEventListener("resize", onResize);
