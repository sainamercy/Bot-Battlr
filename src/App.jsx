import React, { useState } from 'react'
import NavBar from './components/NavBar'
import BotsContainer from './components/BotsContainer'

function App() {
  

  return (
    <div className='h-screen'>
     <NavBar/>
     <div className='bg-stone-900 h-full'>
     <BotsContainer/>
     </div>
    </div>
  )
}

export default App
