import { useNavigate } from "react-router-dom";
import "./Inicio.css";

function Inicio () {
  const navigate = useNavigate();
  
  return (
    <div className="inicio-page">
      <div className="inicio-card">
        <h1 className="inicio-titulo">Aura Limpia</h1>
        <h3 className="inicio-subtitulo">Necesitamos que primero te registres o inicies Sesión</h3>
        
        <p className="inicio-descripcion">
          Disfruta de tu Ropa y Telas, Cocina y Vajilla, Pisos y Superficies, 
          Baño y Sanitario, Vidrios, Muebles y Accesorios.
        </p>
        
        <div className="inicio-botones">
          <button className="btn-login" onClick={() => navigate("/Login")}>
            Iniciar Sesión
          </button>
          <button className="btn-register" onClick={() => navigate("/Register")}>
            Crear Cuenta
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
