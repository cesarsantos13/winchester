/*
  Funções para inserção e recuperação de conteúdo na Storage (permanente).
*/

function salvarConteudoStorage() {
  // verificando se a API de Storage está disponível
  if (typeof(Storage) !== "undefined") {
    
    var nome = document.getElementById("NomeID").value;
    var email = document.getElementById("EmailID").value;
    var foto = document.getElementById("FotoID").value;
    var git = document.getElementById("GitID").value;

    if(!localStorage.contador){
      localStorage.contador = 0
    }else{
      localStorage.contador ++
    }

    var chave = {};
    chave[`usuario${localStorage.contador}`] = {nome, email, foto, git};

    if(!localStorage.usuarios){
    var chave_JSON= JSON.stringify(chave);      
    localStorage.usuarios = chave_JSON
    }else{
      var atual = JSON.parse(localStorage.usuarios)
      var novo = {...atual, ...chave }
      localStorage.usuarios = JSON.stringify(novo)
    }
    
    //localStorage.setItem("email", email);
    //localStorage.setItem("foto",foto);
    //localStorage.setItem("git",git);

    //window.alert(nome + email);
  } else {
    window.alert("API Web Storage não encontrada");
  }
} 

function exibeConteudoStorage() {
  if (typeof(Storage) !== "undefined") {

     var cliente= localStorage.getItem("usuarios");
    
    /*var getNome = localStorage.getItem("nome");
    var getEmail = localStorage.getItem("email");
    var getFoto = localStorage.getItem("foto");
    var getGit = localStorage.getItem("git");*/

    document.getElementById("clienteid").innerHTML=cliente;

    document.getElementById("nomeid").innerHTML=usuarios.nome;
    document.getElementById("emailid").innerHTML=cliente.email;
    document.getElementById("fotoid").src=cliente.foto;
    document.getElementById("gitid").innerHTML=cliente.git;

  } else {
    window.alert("API Web Storage não encontrada");
  }
}