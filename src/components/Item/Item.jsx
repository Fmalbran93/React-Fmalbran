import { Link } from "react-router-dom"
import { useDarkModeContext } from "../../context/DarkModeContext"
export const Item = ({item}) => {

  const {darkMode} = useDarkModeContext()
  console.log (darkMode)

  return (
     <div className={`card mb-3 cardProducto ${darkMode ? 'border-secondary' : 'border-light'}`}>
        <img src={item.img} className="card-img-top" alt={`imagen de ${item.nombre}`} />
        <div className={`card-body ${darkMode ? 'cardBodyDark' : 'cardBody'}`}>
            <h5 className="card-title">{item.nombre} {item.modelo}</h5>
            <p className="card-text">{item.marca}</p>
            <p className="card-text">${item.precio}</p>
            <Link className="nav-link" to={`/item/${item.id}`}><button className="btn btn-outline-primary">Ver Producto</button></Link>
        </div>
    </div>

  )
}