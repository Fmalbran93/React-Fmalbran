import { Link } from "react-router-dom"
export const Categorias = () => {

  let categorias = [
    {
      nombre: "Chalecos",
      id: 1
    },
    {
      nombre: "Camperas",
      id: 2
    },
    {
      nombre: "Remeras",
      id: 3
    },
    {
      nombre: "Pantalones",
      id: 4
    },
  ]

  return (
     <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-dark">Categorias</button>
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to= {`/`}>Todos</Link>
            </li>
          {
          categorias.map((el) => {
            return (
              <li key={el.id}>
                <Link className="dropdown-item" to={`/category/${el.nombre}`}>{el.nombre}</Link>
              </li>
            )
          })
        }
          </ul>
    </li>
  )
}