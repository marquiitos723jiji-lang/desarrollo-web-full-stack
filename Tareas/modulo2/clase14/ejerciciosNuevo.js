//Dado:

//let numeros = [5, 10, 15, 20];

let numeros = [5,10,15,20];

//1- Crear un nuevo array con todos los números multiplicados por 2

let numerosNuevo = numeros.map((numeros) => {return numeros * 2})

console.log(numerosNuevo)

//2- Crear un nuevo array sumando 5 a cada número

let numerosNuevo2 = numeros.map((numeros) => {return numeros + 5})

console.log(numerosNuevo2)

//let numeros = [3, 12, 7, 20, 1, 18];

let numeros2 = [3, 12, 7, 20, 1, 18];

//1- Obtener todos los numeros mayor a 10

let numerosNuevo3 = numeros2.filter((numeros) => {return numeros > 10})

console.log(numerosNuevo3)

//let numeros = [2, 4, 6, 8];

let numeros3 = [2, 4, 6, 8];

//1- encontrar el numero mayor

let numeroMayor = numeros3.filter((numeros) => {return Math.max(numeros)})

console.log(numeroMayor)
