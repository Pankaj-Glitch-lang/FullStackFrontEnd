import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route ,Routes} from 'react-router-dom'
import Home from './component/Home'
import Product from './component/Product'
import Cart from './component/Cart'
import Login from './component/Login'
import Signup from './component/Signup'
import Navbar from './component/Navbar'
import Seller from './component/Seller'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/product' element={<Product/>}  />
      <Route path='/seller' element={<Seller/>}  />
      <Route path='/cart' element={<Cart/>}  />
      <Route path='/login' element={<Login/>}  />
      <Route path='/signup' element={<Signup/>}  />


     </Routes>
    </>
  )
}

export default App
