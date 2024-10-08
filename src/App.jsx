import './App.css'
import Footer from "./Pages/Footer"
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Grocery from './Pages/Grocery'

function App() {
  

  return (
    <>
     <Navbar/>
     <div className='bg-gray-900'>
      <Grocery/>
     </div>
     <Banner/>
     <Footer/>
    </>
  )
}

export default App