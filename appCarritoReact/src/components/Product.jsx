
const Product = ({producto,addToCart})=>{
    const {id,nombre,imagen,precio,descripcion,marca} = producto
    return(
        <div className="group relative rounded-lg shadow-kg p-4 bg-white transition-all duration-300 hover:shadow-xl">
            <div className="overflow-hidden rounded-lg0">
                <img 
                src={imagen}
                alt="producto"
                className="w-full h-88 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="mt-4">
                <div className="flex justify-between items-center">
                <h1 className="font-semibold text-lg">{nombre} </h1>
            <span className="text-white font-medium bg-sky-300 rounded-md px-3 py-1 text-lg">{marca}</span>
            </div>
        
        <p className="mt-2 text-sm text-gray-600">
            {descripcion.length > 70 ? descripcion.substring(0,70) + "..." : descripcion}
        </p>
        <div className="mt-3 flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-800">${precio}</span>
        
        <button onClick={()=>addToCart(producto)}
        className="bg-sky-400 cursor-pointer px-1.5 py-1.5 items-center rounded-lg text-white hover:bg-orange-400" >
             🛒
        </button>
        </div>
        </div>
        </div>
    );
};
export default Product;