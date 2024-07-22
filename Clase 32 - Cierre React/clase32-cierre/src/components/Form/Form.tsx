import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import { formSchema } from "../../validation/form"

export default function Form() {
  const [email, setEmail] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [name, setName] = useState("")
  const [errorName, setErrorName] = useState("")
  const [phone, setPhone] = useState("")
  const [errorPhone, setErrorPhone] = useState("")

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()

      //If validation fails, will throw an error.
      await formSchema.validate(
        {
          name,
          password: "asdasdasdasdasd",
          phone,
          email,
        },
        { abortEarly: false } //Collect all errors
      )
      setErrorEmail("")
      setErrorName("")
      setErrorPhone("")
      console.log(`Will send the form validated`)
    } catch (error: any) {
      console.log(Object.keys(error))
      console.log(Object.values(error))
      const errorsArray: string[] = error.errors
      setErrorEmail("")
      setErrorName("")
      setErrorPhone("")
      for (const error of errorsArray) {
        if (error.includes("email")) setErrorEmail(error)
        if (error.includes("name")) setErrorName(error)
        if (error.includes("phone")) setErrorPhone(error)
      }
    }
  }

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    let result = e.target.value.replace(/\D/g, "")
    setPhone(result)
  }

  return (
    <form onSubmit={onSubmit}>
      <Box
        display={'flex'}
        alignItems={'center'}
        gap={4}
        p={2}
        flexWrap={'wrap'}
      >
        <TextField
          error={errorEmail ? true : false}
          helperText={errorEmail}
          label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ backgroundColor: "white", width: 400}}
        />
        <TextField
          error={errorName ? true : false}
          helperText={errorName}
          label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ backgroundColor: "white" }}
        />
        <TextField
          error={errorPhone ? true : false}
          helperText={errorPhone}
          label="phone"
          value={phone}
          onChange={handlePhone}
          sx={{ backgroundColor: "white" }}
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 10,
          }}
        />
        <Button type="submit">Send</Button>
      </Box>
    </form>
  )
}
