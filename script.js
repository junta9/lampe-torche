// let mouseX = 0;
// let mouseY = 0;
// let flashlight = document.getElementById("flashlight");

// const isToucheDevice = () => {
//   try {
//     document.createEvent("TouchEvent");
//     return true;
//   } catch (e) {
//     return false;
//   }
// };

// console.log(isToucheDevice());

// function getMousePosition(e) {
//   mouseX = !isToucheDevice() ? e.pageX : e.touches[0].pageX;
//   mouseY = !isToucheDevice() ? e.pageY : e.touches[0].pageY;
//   flashlight.style.setProperty("--Xpos", mouseX + "px");
//   flashlight.style.setProperty("--Ypos", mouseY + "px");
// };

// document.addEventListener("mousemove", getMousePosition);
// document.addEventListener("touchmove", getMousePosition);

// console.log(mouseX, mouseY);

function update(e) {
  var x = e.clientX || e.touches[0].clientX;
  var y = e.clientY || e.touches[0].clientY;

  // document.documentElement.style.setProperty("--cursorX", x + "px");
  // document.documentElement.style.setProperty("--cursorY", y + "px");
  document.querySelector(".light").style.setProperty("--cursorX", x + "px");
  document.querySelector(".light").style.setProperty("--cursorY", y + "px");
}
document.addEventListener("mousemove", update);
document.addEventListener("touchmove", update);

// ***************************bouton lampe*********************

window.onload = function () {
  setTimeout(function () {
    document.getElementById("objectif").style.display = "block";
  }, 400);
  setTimeout(function () {
    document.querySelector(".lampe").style.display = "block";
  }, 7000);
  setTimeout(function () {
    document.querySelector("#finger").style.display = "block";
  }, 9000);
};

// **************************Activer bouton lampe****************

let flashlight = document.querySelector(".lampe");
let bgImg = document.querySelector("body");
let suppAccueil = document.querySelector(".accueil");

flashlight.addEventListener("click", () => {
  bgImg.classList.add("livingroom");
  suppAccueil.style.display = "none";
  interrupteur.style.display = "block";
});

// ****************Activer interrupteur ON-OFF****************

let interrupteur = document.querySelector(".interrupteur");
let light = document.querySelector(".light");


interrupteur.addEventListener("click", () => {
  if (light.classList.contains("display-block")) {
    light.classList.remove("display-block");
    light.classList.add("display-none");
    bgImg.style.cursor = "default";
    interrupteur.style.color = "rgb(236, 218, 25)";
  } else {
    light.classList.remove("display-none");
    light.classList.add("display-block");
    bgImg.style.cursor = "none";
    interrupteur.style.color ="black";
  }
});
