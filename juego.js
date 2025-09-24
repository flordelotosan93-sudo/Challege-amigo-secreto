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
function

//funcion para sortear un amigo secreto

