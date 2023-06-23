

var box = document.getElementById("1")
var box2 = document.getElementById("2")
var box3 = document.getElementById("3")


function detectCollision() {
    const rect1 = box2.getBoundingClientRect();
    const rect2 = box3.getBoundingClientRect();


    if (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    ) {
        box3.style.transform += "rotate(360deg)"
    }
}


box.style.transition = "3s"
box2.style.transition = "0.1s"
box3.style.transition = "1s"


console.log(box.offsetHeight)


window.addEventListener("mousemove", function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;


    console.log(mouseX);
    console.log(mouseY);


    detectCollision()

    box2.style.transform = `translateX(${mouseX}px)`
    box2.style.transform += `translateY(${mouseY}px)`

    if (mouseY > 500) {
        box.style.transform = "scale(2)"
        box.style.backgroundColor = "blue"
        box.style.zIndex = "2"
        box.style.boxShadow = "0px 0px 10px black"
    } else if (mouseY < 500) {
        box.style.transform = "scale(0.4)"
        box.style.backgroundColor = "yellow"
        box.style.zIndex = "-1"
        box.style.boxShadow = "0px 0px 0px black"
    };

    if (mouseX < 500) {
        box.style.transform += "translateX(-100px)"
    } else if (mouseX > 500) {
        box.style.transform += "translateX(300px)"
    };

})