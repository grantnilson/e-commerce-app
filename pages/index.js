import React, { useEffect, useState } from 'react'
import axios from 'axios';

const API_URL = 'http://localhost:3000';

const Home = () => {
  const [products, setProducts] = useState([]); 
  useEffect(() => {
    async function getProducts(){
      const data = await axios.get(`${API_URL}/api/products`); 
      setProducts(data.data); 
      console.log(data.data); 
    }
    getProducts(); 
  }, [])
  
  return (
    <div className='w-full h-full flex flex-col'>
      <header className='w-full h-32 my-4 mx-auto flex items-center bg-gray-200 justify-end space-x-4'>
        <h1 className='mx-auto text-2xl font-light'>E-Commerce Web Application</h1>
        <div className=''>
          <button className='px-4 py-2 text-lg bg-black text-white hover:text-black hover:bg-white border-black rounded'>Sign Up</button>
        </div>
        <div className=''>
          <button className='px-4 py-2 text-lg bg-black text-white hover:text-black hover:bg-white border-black rounded'>Log In</button>
        </div>
        <div className='='>
          <button className='px-4 py-2 text-lg bg-black text-white hover:text-black hover:bg-white border-black rounded'>Admin</button>
        </div>
      </header>
      <main>
        <section className='my-4 p-8 flex flex-wrap space-x-4'>
        
        {
          products && products.length > 0 && (products).map((product) => (
            <li key={product.id}>
                {product.name} 
            </li>
          ))
        }
         
        { /* JSON.stringify(products)  */}
        </section>
      </main>
      <footer>foot</footer>
    
    </div>
  )
}

export default Home