// import {productos} from "./products"
// import './App.css'
// import Navbar from './componentes/Navbar/Navbar'
// import Welcome from './componentes/Welcome/Welcome'
// import { useEffect, useState } from "react"
// import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
// import Item from "./componentes/Item/Item"
// import { Link } from "react-router-dom";

// function App() {

// const [isLoading, setIsLoading] = useState(true);
// const [products, setProducts] = useState([])

// // const requestJsonPlaceHolder = () => fetch('https://fakestoreapi.com/products');

// // useEffect(() => {
// // requestJsonPlaceHolder()
// // .then(res => res.json())
// //   .then(
// //     res => {
// //       setProducts(res)
// //       setIsLoading(false)
// //       }      
// //     )
// //     .catch(err=>console.log(res))
// // }, [])



// const getData = async () => {
//   return await new Promise ((resolve) => {
//     setTimeout(()=> {
//       resolve(productos)
//     },2000)
// })
// }


// useEffect(() => {
//   getData()
//   .then(
//     res => {
//       setProducts(res)
//       setIsLoading(false)
//       }      
//     )
// }, [])


//  const bienvenida = "Bienvenido a TuRemera";
//   return (
//       <main>
//         <Navbar />
//         <Welcome greeting={bienvenida} />
//         <ItemListContainer>
//           {
//             isLoading
//             ? (<div>Cargando...</div>)
//             : (products.map((producto) => (
//               <div key={producto.id}>
//                 <Item 
//                   id={producto.id}
//                   nombre={producto.nombre}
//                   descripcion={producto.descripcion}
//                   precio={producto.precio}>
//                   </Item>
//                   <Link to={`item/${producto.id}`}>Detalles</Link>|
//               </div>              
//             ))
//           )}
//         </ItemListContainer>


//       </main>

//   )
// }


//         {/* {
//           isLoading ?
//           (<div>Cargando...</div>)
//           :
//           (        
//           <div style={{display:"flex", justifyContent:"start",alignItems:"center",flexWrap:"wrap", gap:20}}>
//             {
//               products.map(producto => (
//                 <div key={producto.id}>
//                   <h1>{producto.nombre}</h1>
//                   <p>{producto.description}</p>
//                   <button>Añadir al Carrito</button>
//                 </div>
//               ))
//             }
            
//           </div>)
//         } */}


// export default App



import "./App.css";
import Navigation from "./routes/Navigation";

function App() {
  return <Navigation />;
}

export default App;
