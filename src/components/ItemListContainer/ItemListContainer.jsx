import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { consultarBDD } from "../../Utils/funciones.js"

import { ItemList } from '../ItemList/ItemList.jsx'

export const ItemListContainer = () => {
  const {idCategoria} = useParams()
  const [productos, setProductos] = useState([])

  console.log(idCategoria)
  useEffect(() => {
    if(idCategoria) { //undefined me da falso
      consultarBDD('../json/productos.json').then(products => {
        const prods = products.filter(prod => prod.categoria === idCategoria)
        const items = ItemList({prods})
        setProductos(items)
      })
    } else {
      consultarBDD('./json/productos.json').then(prods => {
        const items = ItemList({prods})
        setProductos(items)
      })
    }
  }, [idCategoria])

  return (
    <div className='row cardProductos'>
        {productos}
    </div>
  )
}