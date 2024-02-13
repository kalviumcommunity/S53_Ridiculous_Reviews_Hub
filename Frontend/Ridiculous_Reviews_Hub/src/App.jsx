import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Navbar from './Components/Navbar'
import Product from './Components/Products';
// import data from './Components/fakedata.json'

function App() {

  const [ products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://s53-ridiculous-reviews-hub.onrender.com/productRoute/get')
    .then(response => setProducts(response.data))
    .catch(err => console.log(err))
  }, [])

  return (  
    <>
      <Navbar />
      {products.map(product => {
        return(
        <Product key={product._id} product={product} />
      )})}
    </>
  )
}

export default App
