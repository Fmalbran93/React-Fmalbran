import React from 'react';
import { Link } from 'react-router-dom';
export const Categorias = React.memo (() => {
  return (
    <>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn btn-outline-light">
          Categorias
          </button></Link>
        <ul className="dropdown-menu">
          <li> <Link className="dropdown-item" to={`/category/Chalecos`} >CHALECOS</Link></li>
          <li><Link className="dropdown-item" to={`category/Camperas`} >CAMPERAS</Link> </li>
          <li><Link className="dropdown-item" to={`category/Pantalones`} >PANTALONES</Link> </li>
          <li><Link className="dropdown-item" to={`category/Remeras`} >REMERAS</Link> </li>        
        </ul>

      </li>
      
    </>


  );
})
