import Header from "./components/Header"
import Product from "./components/Product"
import {useState} from "react"
import { db } from "./data/db"
function App() {
  const [data] = useState(db)
  const [cart,setCart] = useState([]);


  const agregarProductoCarrito = (item)=> {
    
    const ItemExist = cart.findIndex(product => product.id === item.id );
    console.log(ItemExist);

    if(ItemExist>=0){
      const UpdateCart = [...cart];
      UpdateCart[ItemExist].cantidad ++;
      setCart(UpdateCart);
      console.log("Si existe el producto en el carrito");
    }else{
      item.cantidad = 1;
      setCart([...cart,item]);
    }
    console.log(cart);
    
  }
    return (
    <>
      <h1 className="text-blue-600">Bienvenido a React</h1>
      <Header/>
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h3 className="font-semibold text-blue-blue-600">Productos mas vendidos</h3>
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
