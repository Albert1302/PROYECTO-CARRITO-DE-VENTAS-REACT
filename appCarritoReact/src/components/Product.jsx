
const Product = ({producto,addToCart})=>{
    const {id,nombre,imagen,precio,descripcion,marca} = producto
    return(
        <div className="group relative">
            <div>
                <img src={imagen} alt="producto" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"/>
            </div>
            <div className="mt-4 flex justify-between">
            <h1 className="font-semibold text-lg">{nombre} </h1>
            <span className="text-white font-medium bg-blue-800 rounded-md px-2">{marca}</span>
            </div>
        <div className="mt-2 flex flex-col">
        <p className="text-lg text-blue-800">{descripcion}</p>
        <p className="text.sm font-medium text-gray-900">{precio}</p>
        </div>
        <div className="mt-3">
        <button onClick={()=>addToCart(producto)}
        className="bg-blue-800 w-full rounded-lg py-1.5 cursor-pointer text-white hover:bg-blue-600" >
            agregar
        </button>
        </div>
        </div>
    )
}
export default Product