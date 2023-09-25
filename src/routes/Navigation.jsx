import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ItemListContainer, ItemDetailContainer } from "../componentes"; //barrel de components

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
      ]);

    return (
        <RouterProvider router={routes}/>
    )
}

export default Navigation