//questões importantes para html básico - interação html / JS


//primeiro eu declaro que box recebe o elemento html com id "box"
const box = document.getElementById("box");


//textcontent - adiciona um valor ao conteúdo da div
box.textContent = "olá mundo!";

//innerHTML - adiciona contéudo
box.innerHTML = "<h1 id='batata'>batata</h1>";


//definir estilo

box.style.backgroundColor = "red";
box.style.display = "flex";
box.style.maxHeight = "100vh";
box.style.maxWidth = "100vw";


//perceba que é igual ao css - recebem valores entre chaves



//ClassList - controle classe, criação, remoção

box.classList.add("teste1");

//outras propriedades, pesquisar.
const box2 = document.getElementsByClassName("teste1")

console.log(box2)

box.classList.remove("teste1");


//pego o valor da altura e da largura da minha div

console.log(box.offsetHeight)
console.log(box.offsetWidth)



//capturar o valor do scroll do mouse

const batata = document.getElementById("batata")

//estilo de batata
batata.style.height = "50px";
batata.style.width = "100px";
batata.style.backgroundColor = "black";
batata.style.color = "white";
batata.style.transition = "1s";

//pego o valor do eixo x e y da div .batata
const offsetX = batata.offsetTop
const offsetY = batata.offsetLeft


//captura o valor do scroll
window.addEventListener("scroll", function () {
    var scrollY = window.scrollY;
    console.log(scrollY)

})

//captura o valor do mouse

window.addEventListener("mousemove", function(event){
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    console.log(mouseX)
    console.log(mouseY)


    //um teste para pensar  comportamento
    if(mouseY > 500){
        batata.style.backgroundColor = "blue";
    } if( mouseY < 500){
        batata.style.backgroundColor = "black";
    }
})



//teste

//estilo box 3
const box3 = document.getElementById("box3")
box3.style.border = "4px solid black"
box3.style.width = "200px"


//estilo box 4
const box4 = document.getElementById("box4")
box4.style.display = "none";

box3.addEventListener("click", function(){
    if(box4.style.display == "none"){
        box4.style.display = "block"
    } else if (box4.style.display == "block") {
        box4.style.display = "none"
    }
})


//efeito click




