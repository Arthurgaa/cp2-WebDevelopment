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

document.getElementById('botaologin')
.addEventListener('click', function(){
    validar();
})

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
