//import { LoginProvider } from "./Context/LoginContext";
import { Routes, Route } from "react-router-dom";
import { Inicio, Login, Register, Catalogo } from "./data";
import "./App.css";

function App() {
  
  return ( 
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Catalogo" element={<Catalogo/>}/>
      </Routes>
  )
}

export default App;

/*      <LoginProvider>
        <Inicio/>
        <LoginForm/>
        <RegisterForm/>
      </LoginProvider>*/