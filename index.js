//SEJA BEM VINDO

function abrirAlerta(){
    alert("Seja bem-vindo! Cadastre-se para participar de nosso Quiz!")
}



//CRIANDO UM SLIDESHOW AUTOMATICO

let imagens=['./img/banners/banner1.png','./img/banners/banner2.png','./img/banners/banner3.png','./img/banners/banner4.png','./img/banners/banner5.png'];
let index=0;
let time=5000;

function slideShow(){
    document.getElementById("imgbanner").src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }

    setTimeout('slideShow()', time);
}

slideShow();

function trocar(cor){
    document.body.style.background =cor;
}

var slideIndex1 = 0;
var slideIndex2 = 0;
var slideIndex3 = 0;
var slideIndex4 = 0;
showSlides();

function showSlides() {
    var i;
    var slides1 = document.querySelectorAll('.bicicleta1 .slide');
    var slides2 = document.querySelectorAll('.bicicleta2 .slide1');
    var slides3 = document.querySelectorAll('.bicicleta3 .slide2');
    var slides4 = document.querySelectorAll('.bicicleta4 .slide3');
    
    // Oculta os slides da classe bicicleta1
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    // Avança para o próximo slide da classe bicicleta1
    slideIndex1++;
    if (slideIndex1 > slides1.length) {slideIndex1 = 1}
    slides1[slideIndex1-1].style.display = "block";
    
    // Oculta os slides da classe bicicleta2
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    // Avança para o próximo slide da classe bicicleta2
    slideIndex2++;
    if (slideIndex2 > slides2.length) {slideIndex2 = 1}
    slides2[slideIndex2-1].style.display = "block";
    
    // Oculta os slides da classe bicicleta3
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }
    // Avança para o próximo slide da classe bicicleta3
    slideIndex3++;
    if (slideIndex3 > slides3.length) {slideIndex3 = 1}
    slides3[slideIndex3-1].style.display = "block";
    
    // Oculta os slides da classe bicicleta4
    for (i = 0; i < slides4.length; i++) {
        slides4[i].style.display = "none";
    }
    // Avança para o próximo slide da classe bicicleta4
    slideIndex4++;
    if (slideIndex4 > slides4.length) {slideIndex4 = 1}
    slides4[slideIndex4-1].style.display = "block";
    
    // Chama a função novamente após um intervalo de tempo
    setTimeout(showSlides, 2000);
}
function adjustTextColor() {
    var body = document.getElementById("bodyindex");
    
    // Verifica se o tema é claro (branco)
    var isLightTheme = body.classList.contains("light-theme");

    if (isLightTheme) {
        // Se o tema for claro, define a cor do texto como preta
        body.style.color = '#000';
    } else {
        // Caso contrário, mantenha a cor do texto original (ou defina para branco se preferir)
        body.style.color = '#fff';
    }
}




