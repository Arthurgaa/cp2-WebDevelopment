function validar(){

    //declarando as variaveis
    let usuario =document.getElementById("usuario").value;
    let senha =document.getElementById("senha").value;

    if (usuario ==="" && senha ===""){
        alert("usuario e senha inválidos")
    }else{
        window.open("quiz.html")
    }

}

//CRIANDO UM SLIDESHOW AUTOMÁTICO

//Declarando as variaveis

let imagens=[''];
let index=0;
let time =3000;

function slideShow(){
    document.getElementById("imgbanner").src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }

    setTimeout('slideShow()', time);

}

slideShow();


//FORMULÁRIO VALIDAÇÃO DE CAMPUS VAZIO

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const telInput = document.querySelector("#telefone");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //VERIFICA SE O NOME ESTÁ VAZIO
    if(nameInput.value === "") {
        alert("Por favor, preencha seu nome");
        return;
    }
});


