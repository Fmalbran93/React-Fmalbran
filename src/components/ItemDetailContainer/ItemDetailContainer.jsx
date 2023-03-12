import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducto } from "../../Utils/firebase"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState([])

    useEffect(() => {
        getProducto(id).then(prod => {
            setProducto(prod)
        })
    }, [])

    return (
        <div className="card mb-3 container itemDetail" style={{maxWidth: '540px', marginTop: '2rem'}}>
            <ItemDetail prod={producto}/>
        </div>
    )
}