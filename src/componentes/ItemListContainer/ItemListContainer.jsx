import {productos} from "../../products"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import  Layout  from "../Layout/Layout";
import Item  from "../Item/Item";
import { Link } from "react-router-dom";

const ItemListContainer = (props) => {

    const [isLoading, setIsLoading] = useState(true);

    const { id: categoryId } = useParams();
    const [products, setProducts] = useState([]);

    const getData = async () => {
        return await new Promise ((resolve) => {
          setTimeout(()=> {
            resolve(productos)
          },1000)
      })
      }

      const filteredProducts = categoryId
    ? products.filter((producto) => producto.categoria === categoryId)
    : products;

    useEffect(() => {
      getData().then((res) => {
        setProducts(res);
        setIsLoading(false);
      });
    }, []);


        return (
            <Layout>
              <h1>{props.greeting}</h1>
                {
                isLoading
                ? (<div>Cargando...</div>)
                : (filteredProducts.map((producto) => (
                <div key={producto.id}>
                    <Item 
                    id={producto.id}
                    nombre={producto.nombre}
                    descripcion={producto.descripcion}
                    precio={producto.precio}>
                    </Item>
                    <Link to={`/item/${producto.id}`}>Detalles</Link>
                </div>)))
                }
            </Layout>
          );

    // return (
    //     <div style={{padding:"10px 25px", display: "flex", justifyContent:"space-between", alignItems: "center", maxWidth:"100%"}}>
    //         {children}</div>
    // )

}

export  default ItemListContainer