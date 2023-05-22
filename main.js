import "/style.css";

// Get the canvas element
const canvas = document.getElementById("crosshairCanvas");
const context = canvas.getContext("2d");

// Set the canvas size to match the viewport
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Draw the crosshair
function drawCrosshair() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw vertical line
  context.beginPath();
  context.moveTo(canvas.width / 2, 0);
  context.lineTo(canvas.width / 2, canvas.height);
  context.strokeStyle = "red";
  context.lineWidth = 1;
  context.stroke();

  // Draw horizontal line
  context.beginPath();
  context.moveTo(0, canvas.height / 2);
  context.lineTo(canvas.width, canvas.height / 2);
  context.strokeStyle = "red";
  context.lineWidth = 1;
  context.stroke();
}

// Redraw the crosshair on window resize
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawCrosshair();
});

// Initial drawing
drawCrosshair();
