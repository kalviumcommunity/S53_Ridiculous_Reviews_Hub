import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product/Products'


function List() {

    const [products, setProducts] = useState([])


    useEffect(() => {
        axios.get('https://s53-ridiculous-reviews-hub.onrender.com/productRoute/get')
            .then(response => setProducts(response.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='grid-parent'>
            {products.map(product => {
                return (
                    <Product key={product._id} product={product} />
                )
            })}
        </div>
    )
}

export default List