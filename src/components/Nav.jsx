import { NavLink } from "react-router-dom"
import "./Nav.css"

function Nav(){
    return(
        <div className="container">
           <NavLink to="/" className="text">Home</NavLink>
           <NavLink to="/about" className="text">About</NavLink>
           <NavLink to="/gallery" className="text">Gallery</NavLink>
        </div>
    )
}

export default Nav