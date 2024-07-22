import NavBar from "../../components/NavBar/NavBar"
import { Outlet } from "react-router-dom"
import "../../global/global-styles.module.scss"

const Root = () => {
  return (
    <div style={{ backgroundColor: "#222831" }}>
      <h1>Bienvenidas a la clase 32</h1>
      <NavBar />

      {/* Will render child route elements (news, news/:id, etc) */}
      <Outlet />
    </div>
  )
}

export default Root
