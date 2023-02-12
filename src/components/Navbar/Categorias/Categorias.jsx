import { Link } from "react-router-dom"
export const Categorias = () => {
  return (
     <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-dark">Categorias</button>
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={'/category/1'}>Chalecos</Link></li>
            <li><Link className="dropdown-item" to={'/category/2'}>Camperas</Link></li>
            <li><Link className="dropdown-item" to={'/category/3'}>Remeras</Link></li>
            <li><Link className="dropdown-item" to={'/category/4'}>Pantalones</Link></li>
          </ul>
    </li>
  )
}