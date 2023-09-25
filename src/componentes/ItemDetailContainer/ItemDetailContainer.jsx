import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../products";
import  Layout  from "../Layout/Layout";


const ItemDetailContainer = () => {
    const {id: productId} = useParams();
    const [producto, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const searchProduct = productos.find(
      (prod) => prod.id === parseInt(productId)
    );
    
    useEffect(() => {
      setTimeout(() => {
        console.log(searchProduct);
        setProduct(searchProduct);
        setIsLoading(false);
      }, 1000);
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
                <button>Añadir al Carrito</button>
              </div>
        }
      </div>
      </Layout>
    )

}

export default ItemDetailContainer