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

    //VERIFICA SE O E-MAIL ESTÁ VAZIO
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha seu email");
        return;
    }

    //VERIFICA SE SUA SENHA ESTÁ VAZIA
    if(passwordInput === "") {
        alert("Por favor, preencha sua senha");
        return;
    }

    //VERIFICA SE SEU TELEFONE ESTÁ VAZIO
    if(telInput.value === "") {
        alert("Por favor, preencha seu telefone");
        return;
    }

    // Se todos os campus estiverem corretamente preenchidos, envie o form
    form.submit();
});

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

