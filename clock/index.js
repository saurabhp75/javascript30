// console.log("hello world!");

const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const hands = document.querySelectorAll(".hand");

function setClock(e) {
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();
  // console.log(seconds);
  if (seconds === 0 || mins === 0 || hours == 0) {
    for (let hand of hands) {
      hand.style.transition = "none";
    }
  } else {
    for (let hand of hands) {
      hand.style.transition = "all 0.05s";
    }
  }
  secondHand.style.transform = `rotate(${(seconds / 60) * 360 + 90}deg)`;
  minHand.style.transform = `rotate(${(mins / 60) * 360 + 90}deg)`;
  hourHand.style.transform = `rotate(${(hours / 12) * 360 + 90}deg)`;
}

setInterval(setClock, 1000);
