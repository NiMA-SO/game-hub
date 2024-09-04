import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
    <NavBar />
    <div id="body">
      <Outlet/>
    </div>
    </>
  )
}

export default Layout