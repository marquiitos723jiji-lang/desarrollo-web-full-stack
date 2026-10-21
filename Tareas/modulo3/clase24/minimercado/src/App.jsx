import { UserProvider } from "./context/UserContext"
import Navbar from "./components/Navbar"
import './App.css'


function App() {

  return (
    <>
      <UserContext.Provider>
        <Navbar/>
      </UserContext.Provider>
    </>
  )
}

export default App
