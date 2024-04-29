//QUIZ BIKECITY 10 PERGUNTAS
let p1=prompt("Qual o seu nome?")
let p2=prompt("Há quanto tempo você pedala?")
let p3=prompt("Qual é a sua marca de bike favorita?")
let p4=prompt("Qual é o seu tipo de bike preferido?")
let p5=prompt("Qual foi sua primeira bike?")
let p6=prompt("Qual seu acessório favorito para bikes?")
let p7=prompt("Você prefere pedalar sozinho ou em grupo?")
let p8=prompt("Prefere pedalar em estradas urbanas ou trilhas na natureza?")
let p9=prompt("Qual é a sua distância média de pedalada por semana?")
let p10=prompt("Qual conselho daria para iniciantes no ciclismo?")
let msg=document.getElementById("msg")

msg.innerHTML=`ola ${p1}, você pedala há ${p2}, sua marca favorita é ${p3} e seu tipo de bike preferido é ${p4}, sua primeira bike foi uma ${p5}, seu acessório favorito é ${p6}, você prefere pedalar ${p7} e em ${p8}, sua distância média de pedalada por semana é de ${p9}, seu concelho para iniciantes é ${p10}.`