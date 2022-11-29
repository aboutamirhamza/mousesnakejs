// Snake mousemove code start here
let body = document.querySelector("body");

let move = (a)=>{
    let circle = document.createElement("div");
    circle.classList.add("circle");
    body.appendChild(circle);
    circle.style.left = circle.offsetLeft + "px";
    circle.style.left = a.clientX + "px";
    circle.style.top = a.clientY + "px";
    circle.style.transition = "all linear 0.3s";
    circle.style.visibility = "hidden";
}

document.addEventListener("mousemove",move);
// Snake mousemove code end here