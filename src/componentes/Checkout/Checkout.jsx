import { useCartContext } from "../CartWidget/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../db/db';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import  Layout  from "../Layout/Layout";



const Checkout = () => {
  const { cart } = useCartContext(); 
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: ""
  });

  const [orderId, setOrderId] = useState(null);

  const comprar = async () => {
    const pedido = {
      cliente: formData,
      productos: cart,
    }

    console.log(pedido);
    const orderDocRef = await addDoc(collection(db, "orders"), pedido);

    // Obtiene el ID del pedido
    const orderId = orderDocRef.id;
    setOrderId(orderId); 

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <Layout>

      {cart.length > 0 ? (
    <div>
      <div>
        <h1>tus productos son:</h1>
        {cart.map((item) => 
        (<div>
          <h2>{item.nombre}</h2>

        </div>))}
      </div>
      <h1>Finalizar Compra</h1>
      
      <div>
      <label>Ingresá tu nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        />
        </div>
        <div>
        <label>Ingresá tu email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        </div>
        <div>
        <label htmlFor="telefono">Ingresá tu teléfono:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleInputChange}
        />
        </div>
        <Button onClick={comprar}>Comprar</Button>      

        {orderId && <p>El ID de tu pedido es: {orderId}</p>}
    </div>):
    (<div>no tiene productos en el carrito</div>)}
    </Layout>
  );
};

export default Checkout;
