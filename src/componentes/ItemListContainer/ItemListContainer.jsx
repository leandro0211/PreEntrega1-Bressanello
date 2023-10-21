import {productos} from "../../products"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import  Layout  from "../Layout/Layout";
import Item  from "../Item/Item";
import { Link } from "react-router-dom";
import { db } from '../../db/db';
import {getDocs, query, collection, where} from 'firebase/firestore';

const ItemListContainer = (props) => {

    const [isLoading, setIsLoading] = useState(true);

    const { id: categoryId } = useParams();

    const [products, setProducts] = useState([]);

    // const getData = async () => {
    //     return await new Promise ((resolve) => {
    //       setTimeout(()=> {
    //         resolve(productos)
    //       },1000)
    //   })
    //   }

    //   const filteredProducts = categoryId
    // ? products.filter((producto) => producto.categoria === categoryId)
    // : products;
    const productsRef = collection(db, "productos")
    useEffect(() => {


  

  getDocs(productsRef).then((response)=>{
    //Formateamos la data a un array de objetos
    const productsData = response.docs.map((productDoc)=>(
      { id: productDoc.id, ...productDoc.data() }
    ))
    setProducts(productsData);
    setIsLoading (false);
    console.log(productsData)});
    }, []);

    if(categoryId){
      const q = query(productsRef, where("categoria", "==", categoryId)); 
    
      getDocs(q).then((response)=>{
        const productsData = response.docs.map((productDoc)=>(
          { id: productDoc.id, ...productDoc.data() }
        ))
        setProducts(productsData);
        setIsLoading (false);
    });

    }

        return (
            <Layout>
              <h1>{props.greeting}</h1>
                {
                isLoading
                ? (<div>Cargando...</div>)
                : (products.map((producto) => (
                <div key={producto.Id}>
                    <Item 
                    id={producto.id}
                    nombre={producto.nombre}
                    descripcion={producto.descripcion}
                    precio={producto.precio}
                    image={producto.image}>
                      
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