import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Navbar (){
    const [user, setUser] = useContext(UserContext);

    return (
      <div>
        {!user &&
        <button
          onClick={() =>
            setUser({
                Nombre: "Marcos",
                Apellido: "Suarez"
            })
          }
        >Login
        </button>
        }
      </div>
    )
}

export default Navbar;