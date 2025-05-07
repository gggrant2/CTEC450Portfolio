function changeBackground() {
  const colors = ["#f4f4f4", "#e6f7ff", "#fff0f5", "#ffffcc"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
