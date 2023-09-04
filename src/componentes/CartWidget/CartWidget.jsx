import 'materialize-css';
import 'material-icons/iconfont/material-icons.css'; 
// import { useState } from "react";

const CartWidget = () => {
    const num = 0;
    // const [num, setNum] = useState(0);
    // setNum(num + 1);
    return (
        <div>
            <i className="material-icons">shopping_cart</i>
            {num}
        </div>
    )
}

export default CartWidget