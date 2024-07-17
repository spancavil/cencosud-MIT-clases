import React, { useState } from "react"
import styles from "./counter-styles.module.scss"
import { useAppDispatch, useAppSelector } from "../../hooks/custom-redux"
import { useDispatch } from "react-redux"
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../redux/features/slices/counterSlice"

// type Props = {}

const Counter = () => {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const { value } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  console.log({ value })

  //const response = useState(0)
  //response será un array con 2 posiciones => 1 valor del state, 2 es la funcion que cambia ese state

  const handleMinus = (e: React.MouseEvent<HTMLButtonElement>) => {
    //Will add to quantity
    console.log(e)
    // count = count - 1
    setCount((previousCount) => previousCount - 1)
    dispatch(decrement())
  }

  const handlePlus = (e: React.MouseEvent<HTMLButtonElement>) => {
    //Will add to quantity
    console.log(e)
    // count = count - 1
    setCount((previousCount) => previousCount + 1)
    dispatch(increment())
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  console.log(count)

  return (
    <div className={styles.main}>
      <button onClick={handleMinus} className={styles.button}>
        -
      </button>
      <span className={styles.text}>{value}</span>
      <button onClick={handlePlus} className={styles.button}>
        +
      </button>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={() => dispatch(incrementByAmount(Number(inputValue)))}>
        Confirm
      </button>
    </div>
  )
}

export default Counter
