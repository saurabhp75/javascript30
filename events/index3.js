const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick, false);
container.addEventListener("click", handleClick, false);
button.addEventListener("click", handleClick, false);
// document.documentElement.addEventListener("click", handleClick);
