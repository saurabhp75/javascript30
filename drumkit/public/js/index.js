let audioNode, keyNode, keyNodeList;
keyNodeList = document.querySelectorAll(".key");

function keyPressed(e) {
  audioNode = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audioNode) return;
  keyNode = document.querySelector(`div[data-key="${e.keyCode}"]`);

  audioNode.currentTime = 0;
  audioNode.play();
  keyNode.classList.add("playing");
}

function endTransition(e) {
  if (e.propertyName === "transform") {
    this.classList.remove("playing");
  }
}

function processClick(e) {
  e.stopPropagation();
  const code = e.currentTarget.attributes.getNamedItem("data-key").value;
  audioNode = document.querySelector(`audio[data-key="${code}"]`);
  audioNode.currentTime = 0;
  audioNode.play();
  this.classList.add("playing");
}

document.addEventListener("keydown", keyPressed);
keyNodeList.forEach((key) => {
  key.addEventListener("transitionend", endTransition);
  key.addEventListener("click", processClick, true);
});
