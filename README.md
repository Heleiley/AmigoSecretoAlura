# Amigo Secreto

![freepik__expand__65523](https://github.com/user-attachments/assets/7d48ff75-a6b2-437a-81ef-9b59ceab8d79)

## Tabla de contenidos

- [Amigo Secreto](#amigo-secreto)
  - [Tabla de contenidos](#tabla-de-contenidos)
  - [Descripción](#descripción)
    - [Funciones](#funciones)
    - [Limpiar caja()](#limpiar-caja)
    - [AgregarAmigoPantalla(elemento, lista)](#agregaramigopantallaelemento-lista)
    - [PrimeraLetraMayus(nombre)](#primeraletramayusnombre)
    - [agregarAmigo()](#agregaramigo)
    - [NombreValido(nombre)](#nombrevalidonombre)
    - [SortearAmigo()](#sortearamigo)
  

## Descripción
Proyecto del juego "Amigo Secreto". El usuario debe ingresar nombres para, luego, sortear uno de esa lista e indicar quién es su amigo secreto.

### Funciones

Para este proyecto se crearon diferentes funciones para el funcionamiento del juego, entre las cuales están:
- ***limpiarCaja().***
- ***agregarAmigoPantalla(elemento, lista).***
- ***PrimeraLetraMayus(nombre).***
- ***agregarAmigo().***
- ***nombreValido(nombre).***
- ***sortearAmigo().***

### Limpiar caja()

![limpiarcaja](https://github.com/user-attachments/assets/e56be8d5-3205-4d77-aa8f-ae647db42348)

La función limpia la entrada que se registra en la caja donde el usuario introduce los nombres. 

### AgregarAmigoPantalla(elemento, lista)

![AgregarAmigoPantallla](https://github.com/user-attachments/assets/8ee6b886-0517-4252-b555-491d1b003caa)

Esta función es la que se encarga de mostrar en pantalla la lista de amigos, creando el `<li>` y agregándolo a la lista en HTML.

### PrimeraLetraMayus(nombre)

![primeraLetraMayus](https://github.com/user-attachments/assets/dbe98597-f7c5-4091-8f68-56f2852165fe)

Esta función toma un parámetro (nombre) y hace que la primera letra sea siempre mayúscula y deja en minúsculas las otras. Por ejemplo, si ingresamos "Marcos", "cLAUDIA", "franco", "nAtAlIa", nos devolverá "Marcos", "Claudia", "Franco", "Natalia". 

### agregarAmigo()

![AgregarAmigo](https://github.com/user-attachments/assets/f060bcab-6455-416d-bf24-9819bc1ba58f)

Esta función agrega los amigos a una lista y luego esa lista se va mostrando en pantalla usando la función "agregarAmigoPantalla(elemento, lista)". Pero antes verifica lo siguiente:
- En todos los casos se utiliza el ***limpiarCaja*** para limpiar el input del usuario en pantalla.
- Primero verificamos que sea un nombre válido. Si se cumple la condición de `if (nombreValido(NombreAmigo) === false)`, aparecerá una alerta al usuario informando que debe ingresar un nombre válido.
- Luego verifica que el nombre no esté en la lista. En caso de que esté, `if (ListaAmigosss.includes(NombreAmigo))`, se mostrará una alerta al usuario indicando que ese nombre ya está en la lista.
- Si el nombre es válido y no está en la lista, primero usamos la función ***PrimeraLetraMayus*** para que la primera letra esté en mayúsculas y el resto en minúsculas. Entonces, se agrega a la lista con `listaAmigoss.push(nombreAmigo)`.
- Finalmente, se agrega el nombre en pantalla con `agregarAmigoPantalla("listaAmigos", listaAmigoss)`.

### NombreValido(nombre)

![NombreValido](https://github.com/user-attachments/assets/4e644bac-486e-479b-bdab-20b631a246ee)

Verificamos que sea un nombre válido. Se da un "rango" que toma todas las letras del abecedario, tanto minúsculas como mayúsculas. Se genera el `range.test` y devuelve un valor de ***true*** o ***false***. Por ejemplo, si el usuario ingresa números o signos, la función retornará un ***false***, ya que no se encuentra en el rango establecido.

### SortearAmigo()

![sortearAmigo](https://github.com/user-attachments/assets/1257704e-a9cd-4c9e-ab68-d99dfbbdd0a7)

Esta función se encarga de sortear el amigo secreto entre la lista de nombres que ingresó el usuario, pero antes verifica lo siguiente:
- Que la lista de amigos tenga al menos 1 nombre con `if (listaAmigoss.length < 1)`. Verificamos esto; si la longitud de la lista es menor a 1 (es decir, está vacía), se muestra en pantalla una alerta de que no se puede jugar cuando el usuario presione el botón de "Sortear Amigo".
- En caso de que la longitud de la lista sea igual o mayor a 1, se genera un número aleatorio y se toma ese número como índice para la lista. Una vez realizado esto, se muestra al amigo secreto en pantalla, se limpia la lista y se muestra en pantalla la nueva lista vacía, para que solo quede en la pantalla el resultado del amigo secreto.

