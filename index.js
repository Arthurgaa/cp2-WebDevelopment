//SEJA BEM VINDO

function abrirAlerta(){
    alert("Seja bem-vindo! Cadastre-se para participar de nosso Quiz!")
}

//abrirAlerta();



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
