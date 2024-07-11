import React from "react"
import "./form.styles.module.scss"

// type Props = {}

const Form = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault()
    console.log("Will submit")
    console.log(e);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="fname" name="fname" value="John" />
      <br />
      <input type="text" id="lname" name="lname" value="Doe" />
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Form
