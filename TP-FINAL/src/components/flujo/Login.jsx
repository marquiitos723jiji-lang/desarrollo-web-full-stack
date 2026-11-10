import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login () {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })

  const [error,setError] = useState({
    email: "",
    password: ""
  })

  function validarFormulario () {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setError({
      email:
        login.email.length === 0
          ? "Por favor, llene esta casilla con su Email"
          : !regexEmail.test(login.email)
            ? "El Email debe contener un formato Valido"
            : "",

      password:
        login.password.length === 0
          ? "Por favor, llene esta casilla con su contrasena"
          : ""
    })
  }

  function manejarSubmit(event) {
    validarFormulario();
    event.preventDefault();
  }

  function handleChange(event) {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className="login-container">   
      <h1 className="login-titulo">Inicio de Sesion</h1>
      <br />
      <form onSubmit={manejarSubmit} className="login-form">
        <label className="form-label">Correo Electronico: </label>
        <input 
          className="form-input"
          type="text"
          name="email"
          value={login.email}
          onChange={handleChange}     
        />
        {error.email.length != 0 ? <label className="error-label">{error.email}</label> : <></>}
        
        <label className="form-label">Contrasena: </label>
        <input 
          className="form-input"
          type="text"
          name="password"              
          value={login.password}
          onChange={handleChange}
        />
        {error.password.length != 0 ? <label className="error-label">{error.password}</label> : <></>}
        <br />
        <div className="form-botones">
          <button className="btn-confirmar" onClick={() => {
            if (login.email !== "" && login.password !== ""
              && error.email === "" && error.password === "") {navigate("/Catalogo")}}}>
                Confirmar
          </button>
          <br />
          <br />
          <button className="btn-atras" onClick={() => {navigate("/")}}>Atras</button>     
        </div>
      </form>          
    </div>
  )
}

export default Login;
