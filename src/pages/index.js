import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';

const API_URL = 'http://localhost:3000';

const Home = () => {
  const [products, setProducts] = useState([]); 
  const router = useRouter(); 
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
        <div className=''>
          <button className='px-4 py-2 text-lg bg-black text-white hover:text-black hover:bg-white border-black rounded' onClick={()=>router.push('/admin')}>Admin</button>
        </div>
      </header>
      <main>
        <section className='my-4 p-4 grid grid-cols-3 gap-6 lg:grid-cols-4'>
        
        {
          products && products.length > 0 && (products).map((product) => (
            <div className='p-4 flex-col hover:scale-105 hover:border-black transition transform space-y-2 border border-black/30' key={product.id}>
                <h3 className='text-xl font-semibold'>{product.name} </h3>
                <p className='truncate'>{product.description}</p>
                <div className='aspect-video relative'> 
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    object-fit="cover"
                  />
                </div>
                <p>
                  <span className='text-gray-600'>${product.price} </span>
                </p>
                <div className='lg:space-x-2 lg:space-y-0 space-x-0 space-y-2 flex-col flex lg:flex-row w-full'>
                  <button className='py-0.5 h-full text-lg w-full bg-black text-white
                   hover:text-black hover:bg-white border-black rounded'>
                    Buy Now
                  </button>
                  <button className='py-0.5 h-full text-lg w-full bg-black text-white
                   hover:text-black hover:bg-white border-black rounded'>
                    Add to Cart 
                  </button>
                </div>
            </div>
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