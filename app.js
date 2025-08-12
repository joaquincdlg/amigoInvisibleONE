// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//ESO HARE ;)

let amigos=[];
let listaAmigos = document.getElementById("listaAmigos");
listaAmigos.innerHTML="";
let resultadoAmigo = document.getElementById("resultado");
let listaAmigosYaAsignados=[];
let clicks= 0;
let contadorDador=0;
let receptorActual="";
let dadorActual="";


function agregarAmigo(){
    let amigoNuevo= document.getElementById('amigo').value;
    if (amigoNuevo==""){
        alert("Acaso tu amigo no tiene nombre? Vamos!!! Escribe el nombre de tu amigo");
    }else{
        amigos.push(amigoNuevo);
        limpiarCaja();
        agregarAmigosALaLista();
        return amigos
    };
};

function agregarAmigosALaLista(){
    listaAmigos.innerHTML="";
    for (let i=0; i<amigos.length; i++){
        listaAmigos.innerHTML+=`<li> ${amigos[i]} </li>`;
    };
};

function conteoClicks(){
    clicks++;
    if (clicks===1){
        if(contadorDador<amigos.length){
            let dadorActual= amigos[contadorDador];
            asignarTextoElemento("h2",`Es el turno de ${dadorActual} de conocer su amigo secreto!!!`);
            contadorDador++;
        }else {
            reset()    
        }
    }else if(clicks===2){
        sorteoAmigo(dadorActual)
    }
        
};

function sorteoAmigo(dadorUniversal){
    let posiblesReceptores=amigos.filter(amigo=>amigo!=dadorUniversal && !listaAmigosYaAsignados.includes(amigo));
    let numeroAleatorio =  Math.floor(Math.random()*posiblesReceptores.length);
    receptorActual=posiblesReceptores[numeroAleatorio];
    listaAmigosYaAsignados.push(receptorActual);
    asignarTextoElemento("h2",`${dadorActual} tu amigo secreto es ${receptorActual} (vuelve a presionar el botón y pasalo al siguiente)`);
    clicks=0;
};


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function limpiarCaja() {
    document.getElementById('amigo').value = '';
};

function reset(){
    asignarTextoElemento("h2","Genial!!! ya pueden empezar a pensar que regalarle a sus AMIGOS SECRETOS ;)");
    listaAmigos.innerHTML="Recarga la página para volver a jugar";
    document.querySelector('.button-draw').setAttribute('disabled','true')    
}