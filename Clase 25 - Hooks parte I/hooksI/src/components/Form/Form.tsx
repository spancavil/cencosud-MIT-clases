import React, { useEffect, useState } from "react"
import "./form.styles.module.scss"
import products from '../../data/products.json';

// type Props = {}

const Form = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Will submit")
    console.log(e);
    setIsSubmitted(true)
  }

  //Ejecutar una función apenas se renderice o se monte el componente (por única vez)
  useEffect(()=> {
    console.log("Hola, se montó el componente!");
    return () => {
      console.log("Esto se ejecuta cuando se desmonta el componente");
    }
  }, [])

  //Ejecutar una función cuando se actualice el name
  useEffect(()=> {
    console.log("Hola, me ejecuto cuando se monta el componente y cuando se actualiza el name");
    return () => {
      console.log("Esto se ejecuta cuando se desmonta el componente");
    }
  }, [name])

  console.log({name});
  console.log({email})

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="fname" name="name" value={name} onChange={event => setName(event.target.value)}/>
      <br />
      <input type="text" id="lname" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
      <br />
      <input type="submit" value="Submit" />
      {isSubmitted && <span>Bienvenid@ {name}, {email}.</span>}
    </form>
  )
}

export default Form
