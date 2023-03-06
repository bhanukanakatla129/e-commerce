import React from 'react'
// import  useFetch  from 'react-router-dom'
import Product from '../../Reusable/Header/components/product'
import useFetch from '../../Reusable/Header/hooks/useFetch'
function HomePage() {
const url = 'https://fakestoreapi.com/products' 
  const {data: products, loading, error } = useFetch(url, [] );

if (loading ) return <h1>fectching products... </h1>

if (error) return <h1> {JSON.stringify(error)} </h1>

  return (
    <div className='products'>
    {products.map( product => (
        <Product key={product.id} product={product} />
      ))
   }
    </div>
  )
}

export default HomePage

// <li key={item.id}>{item.name}</li>