// VARIABLES
const leng1 = document.querySelector('#lengUno');
const leng2 = document.querySelector('#lengDos');
const valrepe = document.querySelector('#repeticiones');


const conca = document.querySelector('#conca');
const union = document.querySelector('#unir');
const repe = document.querySelector('#rep');
const cantrepe = document.querySelector('#cantrepe');

const sol = document.querySelector('#res');
const pop = document.querySelector('#cont');

// FUNCIONES
function Limpiar(){
    leng1.value = "";
    leng2.value = "";
    valrepe.value = "";
    leng1.focus();
}

function concatenarLenguajes(lenguaje1, lenguaje2) {
    // Creamos un nuevo conjunto para almacenar el resultado de la concatenación
    let resultado = new Set();
  
    // Iteramos sobre todas las cadenas de lenguaje1
    for (let cadena1 of lenguaje1) {
      // Iteramos sobre todas las cadenas de lenguaje2
      for (let cadena2 of lenguaje2) {
        // Concatenamos las dos cadenas y agregamos el resultado al conjunto de resultado
        resultado.add(cadena1 + cadena2);
      }
    }
  
    // Convertimos el conjunto de resultado a un array y lo retornamos
    return Array.from(resultado);
}

function unirLenguajes(lenguaje1, lenguaje2) {
    // Creamos un nuevo conjunto para almacenar la unión de los lenguajes
    let union = new Set();
  
    // Agregamos todas las cadenas de lenguaje1 al conjunto union
    for (let cadena of lenguaje1) {
      union.add(cadena);
    }
  
    // Agregamos todas las cadenas de lenguaje2 al conjunto union
    for (let cadena of lenguaje2) {
      union.add(cadena);
    }
  
    // Convertimos el conjunto union a un array y lo retornamos
    return Array.from(union);
}
  
function repetirLenguaje(lenguaje, repeticiones) {
    if (repeticiones <= 0) {
      return [];
    }
  
    let resultado = [];
    for (let i = 1; i <= repeticiones; i++) {
      resultado = resultado.concat(lenguaje.map(cadena => cadena.repeat(i)));
    }
  
    return resultado;
}

function separarPorComa(oracion) {
    // Eliminamos los espacios en blanco de la oración utilizando el método replace()
    const oracionSinEspacios = oracion.replace(/\s+/g, '');
  
    // Utilizamos el método split() para separar la oración en un array utilizando la coma como delimitador
    const arraySeparado = oracionSinEspacios.split(',');
  
    // Retornamos el array resultante
    return arraySeparado;
}

function validarCampo(campo) {
    // Eliminamos los espacios en blanco del inicio y final de la cadena
    const valor = campo.trim();
  
    // Verificamos si el campo no está en blanco y tiene al menos un carácter
    if (valor !== "") {
      // El campo no está en blanco y contiene al menos un carácter (no son solo espacios en blanco)
      return true;
    } else {
      // El campo está en blanco o solo contiene espacios en blanco
      return false;
    }
  }
  

// CASOS
conca.onclick = () => {
    if(validarCampo(leng1.value) & validarCampo(leng2.value)){
        let l1 = separarPorComa(leng1.value);
        let l2 = separarPorComa(leng2.value);

        let result = concatenarLenguajes(l1, l2);

        sol.innerHTML= "<span>L1.L2 = {"+result+"}</span>"
        Limpiar();
    } else {
        alert("LLene los campos requeridos.");
        Limpiar();
    }
}

union.onclick = () => {
    if(validarCampo(leng1.value) & validarCampo(leng2.value)){
        let l1 = separarPorComa(leng1.value);
        let l2 = separarPorComa(leng2.value);

        let result = unirLenguajes(l1, l2);

        sol.innerHTML= "<span>L1 U L2 = {"+result+"}</span>"
        Limpiar();
    } else {
        alert("LLene los campos requeridos.");
        Limpiar();
    }
}

repe.onclick = () => {
  console.log('click rep');

    if(validarCampo(leng1.value) & validarCampo(leng2.value)){
        pop.style.display = 'flex';    
        valrepe.focus();    
    }else {
        alert("LLene los campos requeridos.");
        Limpiar();
    }
}

cantrepe.onclick = () => {
  pop.style.display = 'none'; 
  let l1 = separarPorComa(leng1.value);
        let l2 = separarPorComa(leng2.value);        
        let cantRep = valrepe.value;

        sol.innerHTML= "<span>L1 = {"+repetirLenguaje(l1, cantRep)+"}</span><span>L2 = {"+repetirLenguaje(l2, cantRep)+"}</span>"
        Limpiar();

}

