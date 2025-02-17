let boton = document.getElementById("boton");
let caja = document.getElementById("caja");

boton.addEventListener("click", toggleBox)

function toggleBox(){
    if(caja.style.display == "none"){
        caja.style.display = "block";
        boton.innerHTML = "Ocultar caja"
    }else{
        caja.style.display = "none";
        boton.innerHTML = "Mostrar caja"
    }
}
