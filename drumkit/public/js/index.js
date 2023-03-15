let audioNode, keyNode;

function keyPressed(e) {
  audioNode = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  keyNode = document.querySelector(`div[data-key="${e.keyCode}"]`);

  keyNode.classList.add("playing");
  audioNode.currentTime = 0;
  audioNode.play();
}

function endTransition(e) {
  // console.log(e);
  if (e.propertyName === "transform") {
    keyNode.classList.remove("playing");
  }
}

document.addEventListener("keydown", keyPressed);
document.addEventListener("transitionend", endTransition);
