const trigger = document.getElementById("trigger");
const target = document.getElementById("target");
function A() {
    target.src = "img/picA.jpg"
}
function B() {
    target.src = "img/picB.jpg"
}
trigger.addEventListener("mouseenter", B);
trigger.addEventListener("mouseleave", A);