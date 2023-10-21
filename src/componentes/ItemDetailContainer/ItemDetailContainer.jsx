import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import { productos } from "../../products";
import  Layout  from "../Layout/Layout";
import { db } from '../../db/db';
import {doc, getDoc} from 'firebase/firestore';
import { useCartContext } from "../CartWidget/CartContext";



const ItemDetailContainer = () => {
    const {id: productId} = useParams();
    const [producto, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { handleAdd, handleRemove, handleClear, cart } = useCartContext();

    // const searchProduct = productos.find(
    //   (prod) => prod.id === parseInt(productId)
    // );
    
    useEffect(() => {

//creamos la referencia de nuestro producto
const productRef = doc(db, "productos", productId)
//usamos la funcion getDoc para obtener un unico producto
getDoc(productRef).then((response)=>{
  //verificamos si el producto con ese id existe
  if(response.exists()){
    //si existe le damos el formato correcto
    const product = { id: response.id, ...response.data() }
         setProduct(product)
         setIsLoading(false)
    // console.log(product)
  }else{
    console.log("el producto no existe")
  }
})
    }, []);


    return (
      <Layout>
        <div>
        <h1 style={{ fontWeight: "lighter" }}>Product Details</h1>
        {
            isLoading
            ? (<div>Cargando...</div>)
            :

            <div>
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <p>{producto.precio}</p>
                <img src={producto.image}/>
                <button onClick={() => handleAdd(producto)}>Añadir al Carrito</button>
                <button onClick={() => handleRemove(producto.id)}>Remover del Carrito</button>
              </div>
        }
      </div>
      </Layout>
    )

}

export default ItemDetailContainer