// mostrar del 1 al 10
console.log("Mostrar del 1 al 10")
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
console.log("-----------------------")
console.log("Mostrar numeros pares del 1 al 20")
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

console.log("-----------------------")
console.log("Mostrar tabla del 5")
for (let i = 1; i <= 10; i++) {
    console.log(i * 5)
}

console.log("-----------------------")
console.log("contar hacia atras del 10 al 1")
for (let i = 10; i >= 1; i--) {
    console.log(i)
}
console.log("-----------------------")
console.log("Sumar del 1 al 5")

let contador = 0
for (let i = 5; i >= 1; i--) {
    contador += i
}
console.log(contador)

/*Este ultimo lo entendi: aqui da 15 por que por cada iteracion, i va restando 1 por cada una de ellas,
por lo tanto en este caso seria(con nuestra condicion): 5,4,3,2,1, y  como en contenedor se hace += i,
acumula cada  iteracion disminuida,  es decir, acumula:
iteracion1 => i = 5
iteracion2 => i = 4
iteracion3 => i = 3
iteracion4 => i = 2
iteracion5 => i = 1
por lo tanto, se suman todas las iteraciones en la variable contador, dando 15
*/