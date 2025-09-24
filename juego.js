let listaDeAmigos = [];//Array que guarda los nombres de los amigos 

//funcion para agregar un amigo
function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.ariaValueMax.trim ();
    const sololetras=/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;//Expresion para validar letras 

    if(nombreAmigo===""){
        alert("Por favor,ingresa un nombre valido");
        return;
    }

    if(!sololetras.test(nombreAmigo)){
        alert("El nombre no es valido.solo se permiten letras.");
        return;
    }

    listaDeAmigos.push(nombreAmigo);
    actualizarListaVisual();
    limpiarinput();
}

//funcion para mostrar los amigos en la lista 
function actualizarListaVisual(){
    const listaHTML=document.getElementById("listaAmigos");
    listaHTML.innerHTML="";//limpiar lista antes de actualizar

    listaDeAmigos.forEach((amigo) => {
        const li =document.createElement("li");
        li.textContent=amigo;
        listaHTML.appendChild(li);
    });
}

//funcion para sortear un amigo secreto
function sortearAmigoSecreto(){
    const cantidad=listaDeAmigos.length;
    const resultado=document.getElementById("resultado");

    if(cantidad<2){
        alert("Debe haber al menos 2 amigos para realizar el sorteo.");
        return;
    }

    const indiceGanador=Math.floor(Math.random()*cantidad);
    const nombreGanador=listaDeAmigos[indiceGanador];

    resultado.textContent=`El amigo secreto es : ${nombreGanador}`;
}

