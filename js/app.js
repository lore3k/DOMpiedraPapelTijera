let numero;
let seccion = document.getElementById("seccionDisplay");
let botonJugar = document.querySelector("#btnJugar");
let botonPiedra = document.querySelector("#btnPiedra");
let botonPapel = document.querySelector("#btnPapel");
let botonTijera = document.querySelector("#btnTijera");


botonJugar.addEventListener("click",random);
function random(){
	numero = Math.floor( Math.random() * 3);
	console.log(numero);
    
    seccion.className ='d-block';  
}


botonPiedra.addEventListener("click",piedra);
function piedra(){
    if(numero===0){
        alert("EMPATE");
    }else{
        if(numero===1){
            alert("PERDISTE");
        }else{
            alert("GANASTE");
        }
    }
    seccion.className = 'd-none';  
}

botonPapel.addEventListener("click",papel);
function papel(){
    if(numero===1){
        alert("EMPATE");
    }else{
        if(numero===2){
            alert("PERDISTE");
        }else{
            alert("GANASTE");
        }
    }
    seccion.className = 'd-none';  
}

botonTijera.addEventListener("click",tijera);
function tijera(){
    if(numero===2){
        alert("EMPATE");
    }else{
        if(numero===0){
            alert("PERDISTE");
        }else{
            alert("GANASTE");
        }
    }
    seccion.className = 'd-none';  
}



