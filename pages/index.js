import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col'>
      <header className='w-full h-32 my-4 mx-auto flex justify-end space-x-4'>
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
      <main>main</main>
      <footer>foot</footer>
    
    </div>
  )
}

export default Home