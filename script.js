//ALERTA PÁGINA PRINCIPAL SEJA BEM-VINDO!
function abrirAlerta(){
    alert("Seja bem-vindo! Cadastre-se para participar de nosso Quiz!")
}

//APÓS LOGIN IR PARA PÁGINA QUIZ
function validar(){

    //declarando as variaveis
    let usuario =document.getElementById("usuario").value;
    let senha =document.getElementById("senha").value;

    if (usuario ===""){
        alert("usuario inválido")
    }
    else if (senha ==="") {
        alert("senha inválida")
    }
        
    else{
        window.open("quiz.html")
    }

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


 //VERIFICA SE O E-MAIL É VÁLIDO
 function isEmailValid(email){
    // cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.text(email)) {
        return true
    }

    return false;
}

//APÓS CADASTRO IR PARA PÁGINA LOGIN
function validar2(){

    //declarando as variaveis
    let user =document.getElementById("user").value;
    let email =document.getElementById("email").value;
    let password =document.getElementById("password").value;

    if (user ===""){
        alert("usuário inválido")
    }
    else if (email ===""){
        alert("email inválido")
    }
    else if (password ==="") {
        alert("senha inválida")
    }
    else{
        window.open("login.html")
    }

}
