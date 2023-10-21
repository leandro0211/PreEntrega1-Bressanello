import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


const Item = ({id, nombre, precio, descripcion, image} ) => {


    return (
        <div>
        <h1>{nombre}</h1>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <img src={image}/>
        {/* <Button size="small"><Link to={`/item/${id}`}>Ver Detalle</Link></Button> */}
      </div>
    )

}

export  default Item