import Dashboard from "./component/dashboad/Dashboard"
import Navigation from "./component/navigation/Navigation"
import { BrowserRouter as Router,Routes,Route  } from "react-router-dom"
import Order from "./component/order/Order"
import Product from "./component/products/Product"
import { FaRegUserCircle } from "react-icons/fa";


function App() {
  return (
    <>
    <Router>
    <div className="flex min-h-screen">
    <Navigation/>
    <div className="flex-1 bg-gray-800 p-6 text-white">
      <div className="flex justify-between">
      <h1 className="text-2xl font-bold mb-4 ">Welcome to the Admin Panel</h1>
      <div className="flex gap-2" >
      <p className="hidden lg:block">akinrata@gmail.com</p>
      <p><FaRegUserCircle size={25} /></p>
      </div>
      
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path= "/products" element= {<Product/>}/>
        </Routes>
      {/* <Display/> */}
      </div>
    </div>
    </div>
    </Router>
    
    </>
  )
}

export default App
