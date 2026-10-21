import { createContext, useState } from "react";

const CarritoContext = createContext();

export function CarritoProvider ({children}){
  const [carrito, setCarrito] = useState(0);

  return (
    <CarritoContext.Provider value={{carrito, setCarrito}}>
      {children}
    </CarritoContext.Provider>
  );
}

export default CarritoContext;