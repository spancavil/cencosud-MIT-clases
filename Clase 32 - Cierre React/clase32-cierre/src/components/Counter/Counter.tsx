import React, { useState } from "react"
import styles from "./counter-styles.module.scss"

// type Props = {}

const Counter = () => {

  const [count, setCount] = useState(0)

  //const response = useState(0)
  //response será un array con 2 posiciones => 1 valor del state, 2 es la funcion que cambia ese state

  const handleMinus = (e: React.MouseEvent<HTMLButtonElement>) => {
    //Will add to quantity
    console.log(e);
    // count = count - 1
    setCount(previousCount => previousCount - 1)
  }

  const handlePlus = (e: React.MouseEvent<HTMLButtonElement>) => {
    //Will add to quantity
    console.log(e);
    // count = count - 1
    setCount(previousCount => previousCount + 1)
  }

  console.log(count);
  if (count > 5) {
    return (
      <h1>El count es mayor a 5</h1>
    )
  }
  return (
    <div className={styles.main}>
      <button onClick={handleMinus} className={styles.button}>-</button>
      <span className={styles.text}>{count}</span>
      <button onClick={handlePlus} className={styles.button}>+</button>
    </div>
  )
}

export default Counter
