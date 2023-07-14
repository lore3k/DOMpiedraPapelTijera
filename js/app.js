let numero;
let botonJugar = document.querySelector("#btnJugar");
let botonPiedra = document.querySelector("#btnPiedra");
let botonPapel = document.querySelector("#btnPapel");
let botonTijera = document.querySelector("#btnTijera");


botonJugar.addEventListener("click",random);
function random(){
	numero = Math.floor( Math.random() * 3);
	console.log(numero);
    let seccion = document.getElementById("seccionDisplay");
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
}

botonPapel.addEventListener("click",papel);
function papel(){

}

botonTijera.addEventListener("click",tijera);
function tijera(){

}



