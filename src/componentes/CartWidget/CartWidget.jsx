import 'materialize-css';
import 'material-icons/iconfont/material-icons.css'; 
import { useCartContext } from "./CartContext";

const CartWidget = () => {
    const { cart, clearCart, totalPrice } = useCartContext();
    
    return (
        <div>
            <i className="material-icons">shopping_cart</i>
            {cart.length}
        </div>
    )
}

export default CartWidget