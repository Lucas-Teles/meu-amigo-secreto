//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const nomesDosAmigos = [];

function adicionarAmigo(){
    let amigo = document.getElementById("amigo").value.trim();
    if(amigo === ""){
        alert("Por favor, insira um nome.");
        return;
    }

    for (let i = 0; i < nomesDosAmigos.length; i++) {
      if(nomesDosAmigos[i] == amigo){
        alert("Esse nome já foi adicionado!");
        document.getElementById("amigo").value = "";
        return;
      }
    }

    nomesDosAmigos.push(amigo);
    console.log(nomesDosAmigos);

    document.getElementById("amigo").value = "";

}