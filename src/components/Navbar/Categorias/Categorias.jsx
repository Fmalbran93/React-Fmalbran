export const Categorias = () => {
  return (
     <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Remeras</a></li>
            <li><a className="dropdown-item" href="#">Buzos</a></li>
            <li><a className="dropdown-item" href="#">Pantalones</a></li>
          </ul>
    </li>
  )
}