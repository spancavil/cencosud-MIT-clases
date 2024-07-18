import { useState } from "react"
import NavBar from "../../components/NavBar/NavBar"
import { Outlet } from "react-router-dom"
import "../../global/global-styles.module.scss"

type Props = {}

const Root = (props: Props) => {
  const [darkMode, setDarkMode] = useState(false)
  console.log(darkMode)
  return (
    <div style={{backgroundColor: '#222831'}}>
      <h1>Bienvenidas a la clase 31</h1>
      <NavBar />

      {/* Will render child route elements (news, news/:id, etc) */}
      <Outlet />
    </div>
  )
}

export default Root
