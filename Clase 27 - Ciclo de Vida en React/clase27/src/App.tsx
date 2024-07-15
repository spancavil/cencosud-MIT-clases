import { useState } from "react"
import "./global/global-styles.module.scss"
import Search from "./components/Search/Search";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  console.log(darkMode);
  
  return (
    <div>
      <h1>Bienvenidas a la clase 27</h1>
      <button onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}>
        Set dark mode
      </button>
      <Search darkMode={darkMode}/>
    </div>
  )
}

export default App
