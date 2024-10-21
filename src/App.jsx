
import './App.css'
import Navbar from './compoment/navbar'
import { Outlet } from 'react-router-dom'
import Footer from './compoment/footer'
import Hotline from './compoment/hotline'

function App() {


  return (
    <>
      <Hotline />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
