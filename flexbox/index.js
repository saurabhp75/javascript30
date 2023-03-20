const panels = document.querySelectorAll(".panel");
const panel = document.querySelector(".panels");

function clickHandler(e) {
  // console.log("clicked");
  e.currentTarget.classList.toggle("open");
}

function handleTransition(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    panel.classList.toggle("open");
  }
}

panels.forEach((e) => {
  e.addEventListener("click", clickHandler);
  e.addEventListener("transitionend", handleTransition);
});
