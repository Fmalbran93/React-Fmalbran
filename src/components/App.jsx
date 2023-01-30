import './App.css'; 

//Components 
import { Navbar } from './Navbar/Navbar';
import { CartWidget } from './CartWidget/CartWidget';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
export const App = () => {
  //<NombreComponente/>
  return (
    <>
      <Navbar valor={10}/> 
      <ItemListContainer greeting={"Esto es greeting"}/>   
      
    </>
  )
}
