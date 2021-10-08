
const numerosArray = [10, 10, 16, 12];
const palabrasArray = ['hello', 'world!'];
const numerosArray2 = [70, 100, 115, 180, 200];

/*
// Devuelve el primer elemento de un array
function devolverPrimerElemento(array) {
  // Tu código:
  console.log(array[0])
}
devolverPrimerElemento(numerosArray);

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  console.log(array[array.length-1])
}
devolverUltimoElemento(numerosArray);

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  console.log(array.length);
}
obtenerLargoDelArray(numerosArray);

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma el total de los valores de cada posicion del arreglo
  // y devuelve el array
  // Tu código:
  const reducer = (prev,current)=>prev+current // funcion que suma el valor anterior con el valor actual
  console.log(array.reduce(reducer,1))
}
incrementarPorUno(numerosArray);

function incrementarPorUno1(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma 1 a
  const salida = array.map((posicionNumero)=>posicionNumero+1)
  console.log({salida,array});
  console.table({salida,array});
}
incrementarPorUno1(numerosArray);

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  const arrayOriginal = [...array] //se crea un nuevo array2 copiando todos los valores que tiene el array
  array.unshift(elemento)
  console.log(array, arrayOriginal)
}
agregarItemAlComienzoDelArray(numerosArray, 18)


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  //Manera de hacerlo con join : console.log(palabras.join(' '));
  const reducer = (prev,current)=>prev+' '+current
  console.log(palabras.reduce(reducer, 'valor inicial'))
}
dePalabrasAFrase(palabrasArray);

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  console.log(array.includes(elemento))
}
arrayContiene(palabrasArray,'hello')

//con metodos aplicados a objetos
function arrayContiene1(array, elemento) {
  
  //console.log(array.find(elemento))
  const found = array.find(element => element === elemento);
  
  console.log(found);
}
arrayContiene1(palabrasArray,'helloo');

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  console.log(numeros, Math.max(...numeros))
}
numeroMasGrande(numerosArray);

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  const iguales = (currentValue) => currentValue === arreglo[0];
  console.log(arreglo.every(iguales));
  console.log(arreglo)
}
todosIguales(numerosArray);

*/
/*
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  console.log(array.filter((x) => { return x > 100; }))
}
mayorACien(numerosArray2);
//const numerosArray2 = [70, 100, 115, 180, 200];

*/


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí 
  
  //comprobacion
  if (numeroDeDia < 1 || numeroDeDia > 7) return console.log( "Debe ingresar un numero del 1 al 7")
  // Si el numeroDeDia es igual a 7 (sabado) o es 1 (Domingo) : retorne "Es fin de semana"
  return (numeroDeDia == 7 || numeroDeDia == 1) ? console.log("Es fin de semana") : console.log("Es dia laboral");

  //comprobacion ? positivo : negativo;
}
diaDeLaSemana(33);

//another way
//const diaDeLaSemana = (numeroDeDia) => ![1,2,3,4,5,6,7].includes(numeroDeDia) ? 'NO ES UN DIA' : [1,7].includes(numeroDeDia) ? 'Es fin de semana' : 'Es dia Laboral'
