const nueva_tarea = document.getElementById("nueva__tarea");
const botonadd = document.getElementById("boton__add");
const lista = document.getElementById("lista__tareas");
const botonrandom = document.getElementById("boton__random");

botonrandom.classList.add("botonrandom");

botonrandom.addEventListener("click", function(){
    const array_tareas = document.getElementsByClassName("tarea");

    if(array_tareas.length != 0){
        for(let i = 0; i < array_tareas.length; i++){
            array_tareas[i].style.backgroundColor = 'transparent';
        }
    
        const pos_random = Math.floor(Math.random() * array_tareas.length);
        const tarea_random = array_tareas[pos_random];
    
        tarea_random.style.backgroundColor = 'rgb(255, 255, 0)';
    }

})


botonadd.addEventListener("click", function(){
    if (nueva_tarea.value != ""){
        const tarea = document.createElement("li");
        const botondel = document.createElement("button")
        
        botondel.innerHTML = "X";
        botondel.classList.add("botondel");
         
        tarea.innerHTML = nueva_tarea.value;
        tarea.classList.add("tarea");

        botondel.addEventListener("click", function(){
            tarea.remove();
            botondel.remove();
        })
        tarea.appendChild(botondel);
        lista.appendChild(tarea);
    
        nueva_tarea.value = "";

        
    }
     
})

