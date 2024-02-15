//let titulo = document.querySelector("h1");
//titulo.innerHTML = 'Juego del numero secreto';

//let parrafo = document.querySelector('p'); 
//parrafo.innerHTML='Elige un numero del 1 al 10';

let numeroSecreto =0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asinatTextoElemento(elemento,texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}



function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById ('valorUsuario').value) ;
    console.log (intentos); 
    if (numeroUsuario === numeroSecreto){

        asinatTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disable'); 
    } else {
        if (numeroUsuario>numeroSecreto){
            asinatTextoElemento ('p','El número secreto es menor');
        } else {
            asinatTextoElemento ('p','El número secreto es mayor');
                }
                intentos ++;
                limpiarCaja();
        }

   /* console.log(typeof(numeroUsuario)); 
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroUsuario);
    console.log(numeroUsuario === numeroSecreto); */
    return; 
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
}

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) +1 ;

    console.log(numeroGenerado);
    console.log(lista);

//si ya sorteamos todos los numeros

    if (listaNumerosSorteados.length == numeroMaximo){
        asinatTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }   else {

    // si el numero generado esta incluido en la lista 
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generaNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado; 
    }
  }       
}


function condicionesInciales(){

    asinatTextoElemento('h1', 'Juego del numero secreto');
    asinatTextoElemento('p', `Elige un numero de 1 a ${numeroMaximo}`);
     // generar numero aleatorio
     numeroSecreto = generaNumeroSecreto();
     // inicializar el numero de intentos
     intentos = 1;
}


function reiniciarJuego () {

    //limpiar la caja 
    limpiarCaja();
    // indicar intervalo de numeros
   condicionesInciales();
    // deshabilitar boton
    document.querySelector('#reinciar').setAttribute('disable', 'true');
    

}

condicionesIncialesInciales();