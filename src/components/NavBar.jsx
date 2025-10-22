import { Link } from 'react-router-dom'
import '../css/Navbar.css'

function NavBar(){
    return <nav className="navbar-container">
        <div className="brandname">
            <Link to="/">MovieVerse</Link>
        </div>
        <div className="navLinks">
            <Link className='navLink' to="/">Home</Link>
            <Link className='navLink' to="/favorites">Favorites</Link>
        </div>
    </nav>
}

export default NavBar;