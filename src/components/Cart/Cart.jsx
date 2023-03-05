import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
export const Cart = () => {
  const carrito = [
    {id: 1,
    idCategoria: "Chalecos",
    cant: 10,
    nombre: "VEST",
    marca: "13Vidaz",
    modelo: "SILVER / PREMIUM",
    precio: 12500,
    stock: 30,
    img: "chaleco2.jpg"
  }]

  return(

    <>
    {
      carrito.length === 0
      ?// si no existen productos en el carrito
      <>
        <h2>Carrito vacio</h2>
        <Link className = "nav-link" to ={"/"} ><button className="btn btn-primary">Continuar compra</button></Link>
      </>

      : // si existen productos en el carrito

      <div className="container cartContainer">
        <ItemList prods ={carrito} plantilla="ItemCart"/>
        <div className="divButtons">
          <p>Resumen de la compra : PrecioTotal</p>
          <button className="btn btn-danger" onClick={() => console.log("Productos Eliminados")}>Vaciar Carrito</button>
          </div>      
        <Link className="nav-link" to={"/"}><button className="btn btn-primary">
          Continuar Comprando</button></Link>
        <Link className="nav-link" to={"/checkout"}><button className="btn btn-primary">
          Finalizar Compra</button></Link>
        </div >
    }

    </>
    
  )
  
}
  


/*
Primer metodo de rendering - Complejidad de 6

export const Cart = () => {
  const cond = true
  if ( cond ) {
    return <h2> Es verdadero</h2>
  }  
  return <h2> Es falso </h2>


Segundo metodo de rendering - Complejidad de 6 

export const Cart = () => {
  const cond = true
  return (
    <>
      { cond && <h2>Es Verdadera</h2>}
      {!cond && <h2>Es falso</h2>}
    </>
  )

}


TERCER METODO DE RENDERING - TERNARIO Complejidad de 5

  const cond = true
  return (
    <>
      {cond ? <h2>Es Verdadero</h2> : <h2>Es falso</h2>}
    </>
  )

*/