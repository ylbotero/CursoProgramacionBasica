// 1 es piedra, 2 es papel, 3 es tijera.

function aleatorio(min, max) {//Aqui declaramos la funcion.
    return Math.floor(Math.random() * (max - min + 1) + min)//Algoritmo para obtener un numero aleatorio entre el numero max y el min.
}//ALEATORIEDAD entre el min(piedra = 1) y el max(tijera = 3).
//return → retorna la funcion.
//Math.floor() → Quita los decimales a cualquier numero. La clase es Math y el punto . trae la función floor().
//Math.random() → Genera un numero aleatorio, con la función random() Nunca es 0 pero tampoco 1 ejem: 0.1545615.
//"function" Es como una variable y "aleatorio" seria su nombre.


function eleccion(jugada) {
    if (jugada == 1) {//if es para el primer caso.
        resultado = "Piedra 🪨"
    } else if (jugada == 2) {//else if es para otro caso en especifico.
        resultado = "Papel 🧻"
    } else if (jugada == 3) {
        resultado = "Tijera ✂️"
    } else {//else solo es para todos los otros casos. 
        resultado = "MAL ELEGIDO"
    }
    return resultado
}
//function es una variable de tipo funcion, asi como hay variables de tipo numero o variables de tipo texto.
//Cuando una palabra empieza por minuscula es probablemente una variable o una funcion.
//eleccion es el nombre de la funcion.
//jugada es un parametro. no todas la functions tienen parametros ej: Math.random() los parentesis van vacios.
//() Los parentesis estan ahi para declarar la funcion o para ejecutar la funcion. 

let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0
//let Declara una variable. Con comillas "0" es dato tipo texto ,sin comillas el 0 es un dato numerico.
//NOTA: Los datos tipo texto se pueden concatenar o juntar, son cadenas de texto. ej: 20+10=2010. Pero los datos tipo numerico sirven para hacer operaciones matematicas ej: 20+10=30. 
//jugador y pc son las variables.
//NOTA: Variable es un espacio en la memoria (representado por una palabra) a la cual se le pueden asignar un valor. 
//= Un solo igual es de asignacion. == doble es de comparacion.

while (triunfos < 3 && perdidas < 3) {//while - instruccin que modifica el codigo.
    pc = aleatorio(1, 3)//Aqui invocamos la funcion "aleatorio" entre 1 y 3.
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    //prompt() Funcion. Pregunta el nombre. Se parece al alert pero tiene un espacio para escribir. "Popup Window with text box".
    //jugador = prompt("") Lo que escribamos dentro de las "" es el texto de la ventana emergente.

    alert("PC elige: " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))

    // COMBATE           
    if (pc == jugador) {//si jugador pide la misma opcion que pc es un alert "EMPATE".
        alert("EMPATE")
    } else if (jugador == 1 && pc == 3) {//jugador piedra Y PC tijera  alert "GANASTE".
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if (jugador == 2 && pc == 1) {//jugador papel Y PC piedra  alert "GANASTE".
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if (jugador == 3 && pc == 2) {//jugador piedra Y PC tijera  alert "GANASTE".
        alert("GANASTE")
        triunfos = triunfos + 1
    } else {//En cualquer otro caso que no se gane o empate.
        alert("PERDISTE")
        perdidas = perdidas + 1
    }
}
//alert para mostrar quien gano con su respectivo puntaje.
alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")