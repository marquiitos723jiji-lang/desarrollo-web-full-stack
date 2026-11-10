import { useContext } from "react";
import CarritoContext from "../context/CarritoContext";

function AgregarProductos(){
  const { carrito, setCarrito } = useContext(CarritoContext);

  return (
    
      <div>
        <h1>Productos</h1>
        <br />       
        <h2>Fuente de Poder</h2>
        <button onClick={() => setCarrito(carrito + 1)}>Agregar al Carrito</button>
        <h2>Teclado</h2>
        <button onClick={() => setCarrito(carrito + 1)}>Agregar al Carrito</button>
        <h2>Mouse</h2>
        <button onClick={() => setCarrito(carrito + 1)}>Agregar al Carrito</button>
        <h2>Parlantes</h2>
        <button onClick={() => setCarrito(carrito + 1)}>Agregar al Carrito</button>
        <h2>Monitor</h2>
        <button onClick={() => setCarrito(carrito + 1)}>Agregar al Carrito</button>
        <h2>Procesador</h2>
        <button onClick={() => setCarrito(carrito + 1)}>Agregar al Carrito</button>
        <h2>Targeta Grafica</h2>
        <button onClick={() => setCarrito(carrito + 1)}>Agregar al Carrito</button>
        <h2>Placa Madre</h2>
        <button onClick={() => setCarrito(carrito + 1)}>Agregar al Carrito</button>
        <h2>Gabinete</h2>
        <button onClick={() => setCarrito(carrito + 1)}>Agregar al Carrito</button>
        <h2>Memoria RAM</h2>
        <button onClick={() => setCarrito(carrito + 1)}>Agregar al Carrito</button>
        <br />
        <h3>Cantidad de productos agregados: {carrito}</h3>
      </div>
  )
}

export default AgregarProductos;