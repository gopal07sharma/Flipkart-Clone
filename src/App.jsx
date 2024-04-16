import React from 'react'
import { Navbar } from './Components/Navbar'
import { Items_Navbar } from './Components/Items-Navbar'
import MyCarousel from './Components/splider'

const App = () => {
  return (
    <> 
      <Navbar/> 
      <div className='container border border-white bg-gray-300 bg-opacity-40'>
      <Items_Navbar/>
      <MyCarousel/>
      </div>
     
      </>
    
  )
}

export default App