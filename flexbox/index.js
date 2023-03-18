console.log("hello world");

const panels = document.querySelectorAll(".panel");

function handleClick(e) {
  console.log("panelClicked");
  this.style.flex = 3;
}

panels.forEach((key) => {
  key.addEventListener("click", handleClick);
});
