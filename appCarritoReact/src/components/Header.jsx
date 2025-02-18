import { useMemo } from "react";
const Header = ({carrito,removeFromCart,increaseQuantity,decreaseQuantity,clearCart}) =>{
    // useMemo: Es un hook, que se usa para memorizar valores calculados y evitar calculos innecesarios en cada renderizado
    // Esto mejora el rendimiento de la aplicacion, especialmente cuando el calculo depende de un estado o cambio frecuente

    // const isEmpty = carrito.length === 0;

    const isEmpty = useMemo(() => carrito.length === 0, [carrito]);

   // .reduce((acumulador, arreglo )=> 'La funcion que hara',0 'Eso inicia el parametro que se coloca') para sumar los precios de los productos en el carrito

   const cartTotal = useMemo(()=>carrito.reduce((total,item) => total + (item.cantidad * item.precio),0),[carrito])

    return(
      <header className="bg-gray-900 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
          <h3 className="text-xl font-bold">CART REACT</h3>
          <nav>
              <ul className="hidden md:flex space-x-6">
                  <li className="hover:text-indigo-400 cursor-pointer">Home</li>
                  <li className="hover:text-indigo-400 cursor-pointer">Productos</li>
                  <li className="hover:text-indigo-400 cursor-pointer">Nosotros</li>
                  <li className="hover:text-indigo-400 cursor-pointer">Contacto</li>
              </ul>
          </nav>
          <div className="text-2xl cursor-pointer carrito">
            🛒
            <div id="carrito" className="bg-white p-3 text-gray-900">
                    {
                        isEmpty ?(
                            <p>El carrito esta vacio</p>
                        ):(
                        // TODA LA TABLA  DE CARRITO DE COMPRAS CREADA
                        // ALTERNATIVA A UN < DIV >
                        <>
                        <table className="w-full table text-base">
                        <thead className="bg-gray-900">
                            <tr>
                                <th className="text-white">Imagen</th>
                                <th className="text-white">Nombre</th>
                                <th className="text-white">Precio</th>
                                <th className="text-white">Cantidad</th>
                                <th className="text-white">Subtotal</th>
                                <th className="text-white">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.map(product => (
                                 <tr key={product.id}>
                                 <td>
                                     <img src={product.imagen} alt="" />
                                 </td>
                                 <td>
                                    {product.nombre}
                                 </td>
                                 <td>
                                    ${product.precio}
                                 </td>
                                 <td className="">
                                    <button onClick={()=>increaseQuantity(product.id)}
                                    className="px-2 py-1 bg-gray-900 text-white"> + </button>
                                    {product.cantidad}
                                    <button onClick={()=>decreaseQuantity(product.id)}
                                    className="px-2 py-1 bg-gray-900 text-white"> - </button>
                                 </td>
                                 <td>
                                    ${(product.precio * product.cantidad).toFixed(2) }
                                 </td>
                                 <td>
                                    <button onClick={()=>removeFromCart(product.id)} 
                                    className="bg-red-600 px-2 py-1 cursor-pointer rouded-md"> x </button>
                                 </td>
                             </tr>
                            ))}
                           
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3"></td>
                                <td colSpan="3"> <p>Total Pagar: $<span>{cartTotal.toFixed(2)} </span> </p> </td>
                                <td></td>
                            </tr>
                        </tfoot>
                            </table>
                            <button onClick={()=>clearCart()} 
                className="bg-blue-600 w-full mt-3 cursor-pointer hover:bg-red-700 px-1.5 py-1.5 text-white rounded-md"> Vaciar Carrito </button>
                            </> 
                        )
                }  
               

            </div>
            </div>
          {/*Menu movil*/}
          <div className="md:hidden">
                <button className="text-white text-2xl">☰</button>
          </div>
        </div>
      </header>
    )
}

export default Header