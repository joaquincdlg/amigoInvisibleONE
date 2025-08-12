// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//ESO HARE ;)

let amigos=[];
let listaAmigos = document.getElementById("listaAmigos");
listaAmigos.innerHTML="";

function agregarAmigo(){
    let amigoNuevo= document.getElementById('amigo').value;
    if (amigoNuevo==""){
        alert("Acaso tu amigo no tiene nombre? Vamos!!! Escribe el nombre de tu amigo");
    }else{
        amigos.push(amigoNuevo);
        limpiarCaja();
        agregarAmigosALaLista();
    };
};


function agregarAmigosALaLista(){
    listaAmigos.innerHTML="";
    for (let i=0; i<amigos.length; i++){
        listaAmigos.innerHTML+=`<li> ${amigos[i]} </li>`;
    }
}
//function sortearAmigo(){}


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}