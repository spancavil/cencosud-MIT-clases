import React from "react"
import styles from "./counter-styles.module.scss"

// type Props = {}

const Counter = () => {
  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    //Will add to quantity
    console.log(e);
    
  }

  return (
    <div className={styles.main}>
      <button onClick={handleAdd} className={styles.button}>-</button>
      <span className={styles.text}>0</span>
      <button className={styles.button}>+</button>
    </div>
  )
}

export default Counter
