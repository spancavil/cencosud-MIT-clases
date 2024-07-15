import { useEffect, useState } from "react"
import styles from "./search-styles.module.scss"

type Props = {
  darkMode: boolean
}

const Search = ({ darkMode }: Props) => {
  const [search, setSearch] = useState("")

  useEffect(() => {
    //Review lifecycle
    console.log("Se ejecutara cuando se monta el componente");
  
    const handleResize = (e: UIEvent) => {
      console.log(e);
    }

    const handleKeydown = (e: UIEvent) => {
      console.log(e);
    }

    //Add resize listener
    window.addEventListener("resize", handleResize)
    //Add keydown listener
    window.addEventListener("keydown", handleKeydown)
    //Add timeout listener
    const timer = setTimeout(()=> {
      console.log("Se ejecutará luego de 5 segundos");
    }, 5000)

    //Return and clean events and timers
    return () => {
      console.log("Se ejecutará la limpieza");
      
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("keydown", handleKeydown)
      clearTimeout(timer)
    }
  }, [])
  
  //Add debounce
  //Add search effect (without debouncing)
  useEffect(()=> {
    const timer = setTimeout(()=> {
      if (search) {
        console.log(`Will search for: ${search}`);      
      }
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [search])

  console.log("Will rerender")

  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Search
