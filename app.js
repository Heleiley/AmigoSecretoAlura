// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigoss = [];
let nombreAmigo = document.getElementById("amigo");

function limpiarCaja() {//limpia la entrada 
    document.getElementById("amigo").value = "";
}

function agregarAmigoPantalla(elemento, lista) {
    // Obtener el elemento HTML de la lista (por ejemplo, un <ul>)
    let ListaAmigoss = document.getElementById(elemento);  // Usamos getElementById
    // Limpiar la lista existente antes de agregar los nuevos elementos
    ListaAmigoss.innerHTML = "";
    // Iterar sobre el array de amigos y agregar cada uno como un <li>
    for (let ContadorAmigo = 0; ContadorAmigo < lista.length; ContadorAmigo++) {
        let li = document.createElement("li"); // Crear un nuevo <li>
        li.textContent = lista[ContadorAmigo]; // Asignar el nombre del amigo al contenido del <li>
        ListaAmigoss.append(li); // Agregar el <li> a la lista en HTML
        document.getElementById("resultado").innerHTML ="";
    }
}

function PrimeraLetraMayus(nombre) {
    if (nombre) {
        return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();//la primera letra siempre va a ser mayuscula
    }
    return nombre; // Si el nombre está vacío, lo retornamos tal cual
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if(nombreValido(nombreAmigo)==false){//si el nombre tiene letras o numeros se le da una alerta al usuario
        alert("Ingrese un nombre sin numeros ni signos!");
        limpiarCaja();
    }else{
        if (nombreAmigo == "") {//si el imput esta vacio retorna la alerta
            alert("Por favor, inserte un nombre");
        } else {
            nombreAmigo= PrimeraLetraMayus(nombreAmigo);
            if (listaAmigoss.includes(nombreAmigo)) {//si el nombre ya esta en la lista regresa la alerta
                alert("Ya ingresaste ese amigo, ingresa otro nombre");
                limpiarCaja();
            } else {
                listaAmigoss.push(nombreAmigo);
                console.log(listaAmigoss);
                limpiarCaja();
                agregarAmigoPantalla("listaAmigos", listaAmigoss);
            }
        }
    }

    }
    
    


function nombreValido(nombre){//con esta funcion se verifica que el nombre solo contenga letras tanto minusculas como mayusculas, si tiene signos o numeros tirara un false ya que no esta en el rango
    let rango = /^[a-zA-Z]+$/;
    return rango.test(nombre);

}

    
function sortearAmigo() {
    // Verificar si la lista tiene al menos un amigo
    if (listaAmigoss.length < 1) {
        alert("No se puede jugar sin amigos. Agrega  un amigo.");
    } else {
        // Seleccionar un índice aleatorio entre 0 y la longitud de la lista
        let indiceAleatorio = Math.floor(Math.random() * listaAmigoss.length);
        
        // Obtener el nombre aleatorio de la lista
        let amigoAleatorio = listaAmigoss[indiceAleatorio];

        // Mostrar el nombre aleatorio en pantalla (puedes mostrarlo en un <p>, <div>, etc.)
        document.getElementById("resultado").innerHTML = `Tu amigo secreto es ${amigoAleatorio}!`
        listaAmigoss=[];
        agregarAmigoPantalla("listaAmigos", listaAmigoss);

    }
}


