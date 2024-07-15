import { useEffect, useState } from "react"
import styles from './search-styles.module.scss'

type Props = {
  darkMode: boolean
}

const Search = ({darkMode}: Props) => {
  const [search, setSearch] = useState("")

  useEffect(() => {
    //Review lifecycle

    //Add resize listener

    //Add keydown listener

    //Add timeout listener
    
    //Return and clean events and timers
    return () => {
    }
  }, [])

  
  //Add search effect (without debouncing)
  //Add debounce

  console.log("Will rerender");  

  return (
    <div className={styles.container}>
      <input className = {styles.search} value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default Search
