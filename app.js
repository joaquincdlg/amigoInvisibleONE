// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//ESO HAREMOS ;)

let listaAmigos=[];
let cantidadAmigos=listaAmigos.length

function agregarAmigo(){
    let amigoNuevo= document.getElementById('amigo').value;
    if (amigoNuevo==""){
        alert("Acaso tu amigo no tiene nombre? Vamos!!! Escribe el nombre de tu amigo");
    }else{
        listaAmigos.push(amigoNuevo);
        cantidadAmigos++
       
        limpiarCaja();
        console.log(listaAmigos)
    };
};


//function sortearAmigo(){}


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}