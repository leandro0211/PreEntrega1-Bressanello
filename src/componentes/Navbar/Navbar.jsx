import './styles.css'
import CartWidget   from '../CartWidget/CartWidget'
import logoImage from '../../Logo/RemeraLogo.png';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">        
        <Link to="/">
        <img src={logoImage} sizes="(max-width:336px)100vw,336px" />
        </Link>
        <nav>
        <Link to={'/category/Mujeres'}>
            <li>Mujeres</li>
        </Link>
        <Link to={'/category/Hombres'}>
            <li>Hombres</li>
        </Link>
        </nav>
        <CartWidget />
        </div>
    )
}

export default Navbar