import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register () {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    nombre: "",
    apellido: "",
    document: "",
    email: "",
    password: ""
  })

  const [error,setError] = useState({
    nombre: "",
    apellido: "",
    document: "",
    email: "",
    password: ""
  })

  function validarFormulario () {
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/;
    const regexDNI = /^\d{7,8}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setError({
      nombre:
        register.nombre.length === 0
         ? "Es obligatorio llenar este campo"
         : !regexNombre.test(register.nombre)
          ? "El nombre debe tener un formato valido"
          : "",

      apellido:
        register.apellido.length === 0
         ? "Es obligatorio llenar este campo"
         : !regexNombre.test(register.apellido)
          ? "El apellido debe tener un  formato valido"
          : "",

      document:
        register.document.length === 0
         ? "Es obligatorio llenar este campo"
         : !regexDNI.test(register.document)
          ? "El numero de documento debe tener un formato valido"
          :  "",

      email:
        register.email.length === 0
         ? "Es obligatorio llenar este campo"
         : !regexEmail.test(register.email)
          ? "El Email debe tener un formato valido"
          : "",

      password:
        register.password.length === 0
         ? "Es obligatorio llenar este campo"
         : ""
    })
  }

  function manejarSubmit(event) {
    validarFormulario();
    event.preventDefault();
  }

  function handleChange(event) {
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <>
      <h1>Crear Cuenta</h1>
      <form onSubmit={manejarSubmit}>
          <label>Nombre: </label>
          <input
            type="text" 
            name="nombre"          
            value={register.nombre}
            onChange={handleChange}
          />
          {error.nombre.length != 0 ? <label>{error.nombre}</label> : <></>}
          <label>Apellido: </label>
          <input
            type="text" 
            name="apellido"
            value={register.apellido}
            onChange={handleChange}
          />
          {error.apellido.length != 0 ? <label>{error.apellido}</label> : <></>}
          <label>D.N.I: </label>
          <input
            type="text" 
            name="document"
            value={register.document}
            onChange={handleChange}
          />
          {error.document.length != 0 ? <label>{error.document}</label> : <></>}
          <label>Correo Electronico: </label>
          <input
            type="text" 
            name="email"
            value={register.email}
            onChange={handleChange}
          />
          {error.email.length != 0 ? <label>{error.email}</label> : <></>}
          <label>Contrasena: </label>
          <input
            type="text" 
            name="password"
            value={register.password}
            onChange={handleChange}
          />
          {error.password.length != 0 ? <label>{error.password}</label> : <></>}
          <button
         onClick={() => {
          if (register.nombre !== "" && register.apellido !== "" && register.document !== "" && register.email !== "" && register.password !== ""
            && error.nombre === "" && error.apellido === "" && error.document === "" && error.email === "" && error.password === "") {
            navigate("/Catalogo");
          }
         }}>
          Confirmar
         </button>
          <button onClick={() => {navigate("/")}}>Atras</button>
      </form>
    </>
  )
}

export default Register;