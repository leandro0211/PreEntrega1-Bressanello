import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ItemListContainer, ItemDetailContainer, Checkout } from "../componentes"; //barrel de components

const Navigation = () => {
    const routes = createBrowserRouter([
        {
          path: "/",
          element: <ItemListContainer greeting="Bienvenido a TuRemera" />,
        },
        {
          path: "/category/:id",
          element: <ItemListContainer greeting="Categoria" />,
        },
        {
          path: "/item/:id",
          element: <ItemDetailContainer/>,
        },
        {
          path: "/checkout",
          element: <Checkout/>,
        },
      ]);

    return (
        <RouterProvider router={routes}/>
    )
}

export default Navigation