import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import { createOrdenCompra, updateProducto, getProducto } from "../../Utils/firebase";
export const Checkout = () => {
    const { carrito, emptyCart, totalPrice } = useCarritoContext()
    let navigate = useNavigate()
    const datosForm = useRef()
    const [formValid, setFormValid] = useState(false) // Agregar estado local
  
    const validarForm = () => {
      const form = datosForm.current
      const requiredFields = form.querySelectorAll('[required]')
  
      for (const field of requiredFields) {
        if (!field.value) {
          return false
        }
      }
  
      return true
    }
  
    const consultarForm = (e) => {
      e.preventDefault()
      
      if (!validarForm()) {
        toast.error(`Por favor, complete todos los campos requeridos`, {
          position: toast.POSITION.TOP_RIGHT
        })
        return
      }
  
      const data = new FormData(datosForm.current)
      const cliente = Object.fromEntries(data)
  
      const aux = [...carrito]
  
      aux.forEach(prodCarrito => { //Descontar stock de BDD
        getProducto(prodCarrito.id).then(prodBDD => {
          prodBDD.stock -= prodCarrito.cant //Descontar stock 
          updateProducto(prodBDD.id, prodBDD)
        })
      })
  
      if (cliente.email === cliente.repeatEmail) {   
        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
          toast(`🦄 Muchas gracias por comprar con nosotros!, su orden de compra con el id ${ordenCompra.id} por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con exito`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          e.target.reset()
          emptyCart()
          navigate("/")
        })
      } else {
        toast.error(`Los dos correos deben coincidir!`, {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    }
  
    const handleChange = () => {
      setFormValid(validarForm())
    }
  
    return (
      <>
        {carrito.length === 0 ? (
          <div className="cartel">
            <h2>Para finalizar la compra debe tener productos en el carrito</h2>
            <Link className="nav-link" to={"/"}>
              <button className="btn btn-primary">Continuar comprando</button>
            </Link>
          </div>
        ) : (
          <div className="container contForm">
            <form onSubmit={consultarForm} ref={datosForm}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  required // Agregar atributo required
                  onChange={handleChange}
                  />
                  </div>
                  <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                  Email
                  </label>
                  <input
                  type="email"
                  className="form-control"
                  name="email"
                  required // Agregar atributo required
                  onChange={handleChange}
                  />
                  </div>
                  <div className="mb-3">
                  <label htmlFor="repeatEmail" className="form-label">
                  Repita su email
                  </label>
                  <input
                  type="email"
                  className="form-control"
                  name="repeatEmail"
                  required // Agregar atributo required
                  onChange={handleChange}
                  />
                  </div>
                  <div className="mb-3">
                  <label htmlFor="direccion" className="form-label">
                  Direccion
                  </label>
                  <input
                  type="text"
                  className="form-control"
                  name="direccion"
                  required // Agregar atributo required
                  onChange={handleChange}
                  />
                  </div>
                  <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">
                  Telefono
                  </label>
                  <input
                  type="tel"
                  className="form-control"
                  name="telefono"
                  required // Agregar atributo required
                  onChange={handleChange}
                  />
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={!formValid}>Finalizar compra</button>
                  </form>
                  </div>
                  )}
                  </>
                  )
                  }
















