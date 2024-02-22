import './App.css'
import AllRoutes from './allRoutes/AllRoutes';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';

function App() {


  return (
    <>
      <div className='main'>
        <Navbar />
        <AllRoutes/>
        <Footer />
      </div>
    </>
  )
}

export default App
