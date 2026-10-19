//import AlumnoCard from './components/AlumnoCard'
import './App.css'

interface Alumno {
 id: number
 nombre: string
 curso: string
 nota: number
}

 
function App() {
  let alumno1: Alumno = {
    id: 22334455,
    nombre: "Alexander",
    curso: "5to",
    nota: 7 
  }

  let alumno2: Alumno = {
    id: 99886677,
    nombre: "Marcos",
    curso: "4to",
    nota: 8
  }

  let alumno3: Alumno = {
    id: 67895038,
    nombre: "Sebastian",
    curso: "3ro",
    nota: 5
  }

  let alumno4: Alumno = {
    id: 23543655,
    nombre: "Matias",
    curso: "2do",
    nota: 2
  }

  let alumno5: Alumno = {
    id: 34657576,
    nombre: "Santiago",
    curso: "1ro",
    nota: 10
  }

  let arrayAlumnos: Alumno[] = [alumno1, alumno2, alumno3, alumno4, alumno5];

  

  function calcularPromedio (a: number = alumno1.nota, b: number = alumno2.nota): number {
    return a + b;
  }

  
  return (
    <>
      
      <button onClick={calcularPromedio}>Calcular Promedio</button>
      <label>{calcularPromedio}</label>
    </>
  )
}

export default App
