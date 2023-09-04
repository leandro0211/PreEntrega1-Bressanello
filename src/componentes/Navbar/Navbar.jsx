import './styles.css'
import CartWidget   from '../CartWidget/CartWidget'
import logoImage from '../../Logo/RemeraLogo.png';
const Navbar = () => {
    return (
        <div className="navbar">        
        <img src={logoImage} sizes="(max-width:336px)100vw,336px" />
        <nav>
            <li>Mujeres</li>
            <li>Hombres</li>
        </nav>
        <CartWidget />
        </div>
    )
}

export default Navbar