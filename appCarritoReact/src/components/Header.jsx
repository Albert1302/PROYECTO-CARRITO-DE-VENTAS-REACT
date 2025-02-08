//rafce
const Header = () =>{



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
          </div>
      </header>
    )
}

export default Header