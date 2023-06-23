

//style
const header = document.getElementById("banner");
header.style.transition = "1s";


//container1
const container1 = document.getElementById("container1");
container1.style.transition = "1s";


//container2
const container2 = document.getElementById("container2");
container2.style.transition = "1s";

//box
const box = document.getElementById("box")
box.style.transition = "1s";

//cube

const cube = document.getElementById("cube3d")
cube.style.transition = "1s";

//função de detecção
function detectCollisionWithMouse(mouseX, mouseY, object) {
    const rect = object.getBoundingClientRect();

    if (
        mouseX > rect.left &&
        mouseX < rect.right &&
        mouseY > rect.top &&
        mouseY < rect.bottom
    ) {
        box.style.transform = "scale(0.8)";
        box.style.backgroundColor = "grey"
    } else {
        box.style.transform = "scale(1)";
        box.style.backgroundColor = "yellow"
    }
}


window.addEventListener("mousemove", function (event) {

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    detectCollisionWithMouse(mouseX, mouseY, box);


    cube.style.transform += `rotateY(${mouseX/100}deg)`
    cube.style.transform += `rotateX(${mouseY/100}deg)`

    if (mouseY > window.innerHeight / 2) {
        header.style.backgroundColor = "red"
    } else if (mouseY < window.innerHeight / 2) {
        header.style.backgroundColor = "white"
    };

    if (mouseX > window.innerWidth / 2) {
        container1.style.backgroundColor = "black"
    } else if (mouseX < window.innerWidth / 2) {
        container1.style.backgroundColor = "red"
    };

    if (mouseX < window.innerWidth / 2) {
        container2.style.backgroundColor = "yellow"
    } else if (mouseX > window.innerWidth / 2) {
        container2.style.backgroundColor = "white"
    };
}

)

