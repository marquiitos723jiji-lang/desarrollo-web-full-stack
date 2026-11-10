import "./ProductCard.css";

export default function ProductCard ({nombre, precio, descripcion, imagen}){
  return (
    <article className="tarjeta-producto"> 
      <div className="imagen-contenedor">
        <img src={imagen} alt={nombre} className="producto-foto"/>
      </div>
      <h2 className="producto-titulo">{nombre}</h2>
      <label className="producto-precio">${precio}</label>
    
        <h2 className="descripcion-titulo">Descripcion</h2>
        <p className="producto-descripcion">{descripcion}</p>
    
      <button className="boton-carrito">Agragar Al Carrito</button>
    </article>
 )
}