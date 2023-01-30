import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
export const CartWidget = ({cantCarrito}) => {
    return (
        <>
          <button className="btn btn-dark "><FontAwesomeIcon icon={faCartShopping} /></button>
          <p>{cantCarrito}</p>
        </>
    )
  }