// window/browser
document.addEventListener(
  "click",
  function (e) {
    console.log("click on document in capturing phase");
  },
  true
);
// document.documentElement == <html>
document.documentElement.addEventListener(
  "click",
  function (e) {
    console.log("click on <html> in capturing phase");
  },
  true
);
document.body.addEventListener(
  "click",
  function (e) {
    console.log("click on <body> in capturing phase");
  },
  true
);
document.getElementById("A").addEventListener(
  "click",
  function (e) {
    console.log("click on #A in capturing phase");
  },
  true
);
document.getElementById("B").addEventListener(
  "click",
  function (e) {
    console.log("click on #B in capturing phase");
  },
  true
);
document.getElementById("C").addEventListener(
  "click",
  function (e) {
    console.log("click on #C in capturing phase");
  },
  true
);

document.addEventListener(
  "click",
  function (e) {
    console.log("click on document in bubbling phase");
  },
  false
);
// document.documentElement == <html>
document.documentElement.addEventListener(
  "click",
  function (e) {
    console.log("click on <html> in bubbling phase");
  },
  false
);
document.body.addEventListener(
  "click",
  function (e) {
    console.log("click on <body> in bubbling phase");
  },
  false
);
document.getElementById("A").addEventListener(
  "click",
  function (e) {
    console.log("click on #A in bubbling phase");
  },
  false
);
document.getElementById("B").addEventListener(
  "click",
  function (e) {
    console.log("click on #B in bubbling phase");
  },
  false
);
document.getElementById("C").addEventListener(
  "click",
  function (e) {
    console.log("click on #C in bubbling phase");
  },
  false
);
