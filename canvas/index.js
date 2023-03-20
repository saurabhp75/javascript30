console.log("hello @");

const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let widthDirection = true;
let lineWidth = 5;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.globalCompositeOperation = "color-burn";

function Draw(e) {
  if (!isDrawing) return;

  console.log(e.offsetX, e.offsetY, lineWidth, widthDirection);

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineWidth = lineWidth;

  // Initiate drawing
  ctx.beginPath();

  // Start from
  ctx.moveTo(lastX, lastY);
  // Go to
  ctx.lineTo(e.offsetX, e.offsetY);
  // Draw on canvas
  ctx.stroke();

  // Update starting point
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue > 360 ? (hue = 0) : hue++;

  // Update Hue
  widthDirection ? lineWidth++ : lineWidth--;

  if (lineWidth > 40 || lineWidth < 5) {
    widthDirection = !widthDirection;
  }
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", Draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
