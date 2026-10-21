import { UserProvider } from "./context/UserContext";
import { CarritoProvider } from "./context/CarritoContext";
import Navbar from "./components/Navbar";
import Perfil from "./components/Perfil";
import AgregarProductos from "./components/AgregarProductos";
import "./App.css"

function App() {

  return (
    <>
      <UserProvider>
        <Navbar/>
        <Perfil/>
      </UserProvider>
      <CarritoProvider>
        <AgregarProductos/>
      </CarritoProvider>
    </>
  );
}

export default App;
