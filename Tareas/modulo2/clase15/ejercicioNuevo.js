//Crear objeto usuario

//Debe tener:

//nombre
//edad
//email
//activo

//Agregar método
//"Hola, soy Juan y tengo 25 años"

//Agregar método esMayorDeEdad()
//retorna true o false

//Modificar datos
//cambiar edad
//agregar propiedad pais (Este van a tener que googlear)

let persona = {
    nombre: "Juan",
    edad: 25,
    email: "JuanCruzhaihai@gmail.com",
    activo: true,
    saludo: function () { return "Hola, soy " + this.nombre + " y tengo " + this.edad + " anios"},
    esMayorDeEdad: function () {
        if(this.edad >= 18){
            return true
        } else {
            return false
        }
    },
    cambiarEdad: function (nuevaEdad) { this.edad = nuevaEdad}
}

persona.pais = "Argentina"

console.log(persona.saludo())
console.log(persona.esMayorDeEdad())
persona.cambiarEdad(15)
console.log(persona.saludo())
console.log(persona.esMayorDeEdad())
console.log(persona)