import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Navbar from './Components/Navbar'
import Product from './Components/Products';
import data from './Components/fakedata.json'

function App() {

  const [ users, setUsers] = useState([])

  useEffect(() => {
    axios.get('process.env.mongoURI')
    .then(users => setUsers(users.data))
    .catch(err => console.log(err))
  }, [])

  return (  
    <>
      <Navbar />
      <Product data={data} />
    </>
  )
}

export default App
