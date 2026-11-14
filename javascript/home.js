/* ---------- Menu open / close ---------- */
const menuBtn = document.getElementById("menuBtn");
const panel = document.getElementById("menuPanel");

function setMenu(open) {
  panel.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", open);
}

menuBtn.addEventListener("click", function () {
  setMenu(!panel.classList.contains("open"));
});

// Close with the Escape key, or by clicking anywhere outside the top bar.
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") setMenu(false);
});
document.addEventListener("click", function (e) {
  if (!e.target.closest(".top")) setMenu(false);
});

/* ---------- 3D logo tilt ---------- */
const logo = document.querySelector(".logo3d");

window.addEventListener("pointermove", function (e) {
  const x = e.clientX / window.innerWidth - 0.5;   // -0.5 (left) to 0.5 (right)
  const y = e.clientY / window.innerHeight - 0.5;  // -0.5 (top) to 0.5 (bottom)

  logo.style.setProperty("--ry", (x * 40) + "deg");
  logo.style.setProperty("--rx", (-y * 40) + "deg");
  logo.style.setProperty("--sx", (-x * 30) + "px");
  logo.style.setProperty("--sy", (20 - y * 20) + "px");
});

document.addEventListener("pointerleave", function () {
  ["--rx", "--ry", "--sx", "--sy"].forEach(function (v) { logo.style.removeProperty(v); });
});
