import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-comision-44955-malbran.firebaseapp.com",
  projectId: "react-comision-44955-malbran",
  storageBucket: "react-comision-44955-malbran.appspot.com",
  messagingSenderId: "783397069368",
  appId: "1:783397069368:web:7175c859b3ad078664fccd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore() //Referencia a mi base de datos

/*
CRUD PRODUCTOS :
CREATE
READ
UPDATE
DELETE
*/

export const cargarBDD = async () => {
 const promise = await fetch('./json/productos.json')
 const productos = await promise.json()
 productos.forEach( async (prod) => {
      await addDoc(collection(db, "productos"),{      // Collection si existe productos, lo consulta, si no lo crea y lo consulta.
          nombre: prod.nombre,
          marca: prod.marca,
          modelo: prod.modelo,
          idCategoria: prod.idCategoria,
          stock: prod.stock,
          precio: prod.precio,
          img: prod.img
      })



 })
}

  export const getProductos = async () => {
    const productos = await getDocs (collection(db, "productos"))
    const items = productos.docs.map(prod => {
      return { ...prod.data(), id: prod.id}
    })
    return items
  }

  export const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

export const updateProducto = async (id, info) => {
  await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto = async (id) => {
  await deleteDoc(doc(db, "productos", id))
}

//CREATE AND READ ORDEN DE COMPRA

export const createOrdenCompra = async (cliente, productos, precioTotal, fecha) => {
  const ordenCompra = await addDoc(collection(db, "ordenesCompra"), {
      datosCliente: cliente,
      productos: productos,
      precioTotal: precioTotal,
      fecha: fecha
  })
  return ordenCompra
}

export const getOrdenCompra = async (id) => {
  const oC = await getDoc(doc(db, "ordenesCompra", id))
  const ordenCompra = { ...oC.data(), id: oC.id }
  return ordenCompra
}