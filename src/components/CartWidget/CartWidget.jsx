import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
export const CartWidget = ({cantCarrito}) => {
    return (
        <>
          <Link className="nav-link" to={"/Cart"}><button className="btn btn-outline-light "><FontAwesomeIcon icon={faCartShopping} /></button></Link>
          <p>{cantCarrito}</p>
        </>
    )
  }