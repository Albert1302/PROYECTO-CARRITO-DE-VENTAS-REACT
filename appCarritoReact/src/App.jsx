import Header from "./components/Header"
import Product from "./components/Product"
import {useEffect, useState} from "react"
import { db } from "./data/db"
function App() {

  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }

  const [data] = useState(db);
  const [cart,setCart] = useState(initialCart);

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])


  const agregarProductoCarrito = (item)=> {
    
    const ItemExist = cart.findIndex(product => product.id === item.id );
    if(ItemExist>=0){
      if(cart[ItemExist].cantidad >= MAX_ITEMS) return;
      const UpdateCart = [...cart];
      UpdateCart[ItemExist].cantidad ++;
      setCart(UpdateCart);
    }else{
      item.cantidad = 1;
      setCart([...cart,item]);
    }
    console.log(cart);
  }


  const removerProductoCarrito = (id) =>{   
    const filterCart = cart.filter(product => product.id !== id);
    setCart(filterCart);
    //setCart(prevCart => prevCart.filter(product => product.id !== id))
  }

  const incrementarCantidad = (id) =>{
    const UpdateCart = cart.map(item =>{
      if(item.id===id && item.cantidad < MAX_ITEMS){
        return {
          ...item,
          cantidad : item.cantidad + 1
        }
      }
      return item;
    })
    setCart(UpdateCart);
  }

  const decrementarCantidad = (id) =>{
    const UpdateCart = cart.map(item =>{
      if(item.id===id && item.cantidad > MIN_ITEMS){
        return {
          ...item,
          cantidad : item.cantidad - 1
        }
      }
      return item;
    })
    setCart(UpdateCart);
  }

  const limpiarCarrito = () =>{
    setCart([]);
  }

    return (
    <>
      <Header
        carrito= {cart}   
        removeFromCart = {removerProductoCarrito}   
        increaseQuantity = {incrementarCantidad}
        decreaseQuantity = {decrementarCantidad}
        clearCart = {limpiarCarrito}
      />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="font-semibold text-blue-blue-600 text-3xl">
        🚀Productos mas vendidos
          </h1>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {
          data.map((product)=>(
            <Product
                  key={product.id}
                  producto = {product}
                  addToCart={agregarProductoCarrito}
            />
          ))
          }
        </div>
        
      </main>

      <footer>
        <p>Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
