import { Link, NavLink} from "react-router-dom";
import x from "./style.module.css"


function Navbar() {

    return (
<>
<div className={x.bc}>
<nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
    <Link className="navbar-brand fs-1 text-white   fw-medium" to="/home">Start Framework</Link>
    <button onClick={()=>
      myfunction()
    } className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">
    
    </span>
    
    </button>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
            <ul className="navbar-nav">
                
                <li className="nav-item me-3">
                    <NavLink className="nav-link text-white fw-bold  text-uppercase" to="/About">About</NavLink>
                </li>
                <li className="nav-item me-3">
                   <NavLink className="nav-link text-white fw-bold  text-uppercase" to="/pro" aria-current="page">Porfolio</NavLink>
                </li>
                <li className="nav-item me-3">
                    <NavLink className="nav-link text-white fw-bold  text-uppercase" to="/contact">contact</NavLink>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>
</>
    );
}

export default Navbar;


 function myfunction(){
    document.querySelector(".collapse").style.cssText="display: flex"
 }
 