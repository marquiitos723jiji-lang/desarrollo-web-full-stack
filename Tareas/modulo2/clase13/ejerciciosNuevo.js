// 1. Invertir un array sin usar elementos avanzados

let mediosdeTransporte = ['Auto', 'Motocicleta', 'Camioneta', 'Bicicleta']

for(let i = mediosdeTransporte.length -1; i > -1; i--){
    console.log(mediosdeTransporte[i])
}

/*for(let i = 0; i < mediosdeTransporte.length; i++){
    console.log(mediosdeTransporte[i])
}
*/

console.log("---------------------------------------------------------------")

// 2. Crear un array y eliminar todos sus elementos usando pop en un loop

let bevidas = ['CocaCola', 'Manaos', 'Doble Cola', 'Priti Limon', 'Seco', 'Fanta']

for(let i = bevidas.length; i < bevidas.length; i++){   
    console.log(bevidas.pop[i])
}

/*for(let i = 10; i >= 1; i--){
    console.log(i)
}
*/

/*for(let i = bevidas.length; i < bevidas.length; i++){
    console.log(bevidas.pop([i]))
}
*/

/*
3. Crear un array y duplicar todos sus elementos en consola (Pueden usar strings para que sea mas facil):

1 -> 11
2 -> 22
3 -> 33
*/

let seleccionArg = ["Messi",'DiMaria', 'DPaul', 'Enzo Fernandez', 'Molina', 'Julian Alvares', 'MacAlister', 'Paredes', 'Cuty Romero', 'Montiel', 'Emiliano Martines']

console.log('Primera Solucion')

for(let i = 0; i < seleccionArg.length; i++){
    console.log(seleccionArg[i] + seleccionArg[i])
}

console.log('Segunda Solucion')

for(let i = 0; i < seleccionArg.length; i++){
    console.log(String(seleccionArg[i]) + String(seleccionArg[i]))
}
/*for(let i = 0; seleccionArg.length >= 0; i++){
    console.log(seleccionArg[i])
}
*/