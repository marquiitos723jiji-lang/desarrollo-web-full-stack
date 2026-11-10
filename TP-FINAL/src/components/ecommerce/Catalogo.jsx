import ProductCard from "./ProductCard";
import productos from "../../data/Productos";
import { useNavigate } from "react-router-dom";

function Catalogo (){
  const navigate = useNavigate();
  return (
    <>
      <section>
        {productos.map((producto) => {
          return (
            <ProductCard
              nombre={producto.nombre}
              precio={producto.precio}
              descripcion={producto.descripcion}
              imagen={producto.imagen}
            />        
          )
        })}
      </section>
      <br />
      <button onClick={() => {navigate("/")}}>Ir a Inicio</button>
    </>
  )  
}

export default Catalogo