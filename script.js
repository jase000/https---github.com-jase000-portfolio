const spotlight = document.querySelector(".spotlight");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  spotlight.style.background = `radial-gradient(circle 700px at ${x}px ${y}px, rgba(100, 0, 255, 0.29) 0%, rgba(0, 0, 0, 0.0) 100%)`;
});
