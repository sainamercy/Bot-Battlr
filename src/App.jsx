import React, { useState } from 'react'
import NavBar from './components/NavBar'
import BotsContainer from './components/BotsContainer'

function App() {
  

  return (
    <div className='h-screen font-link'>
     <NavBar/>
     <div className='bg-stone-300 h-full'>
     <BotsContainer/>
     </div>
    </div>
  )
}

export default App
