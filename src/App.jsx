import React, { useState } from 'react'
import NavBar from './components/NavBar'
import BotsContainer from './components/BotsContainer'
import ArmyContainer from './components/ArmyContainer'

function App() {
  const [army, setArmy]=useState([])
  

  return (
    <div className='h-screen font-link w-screen'>
     <NavBar/>
     <div className='bg-stone-300 h-full w-full flex'>
     <BotsContainer army={army} setArmy={setArmy}/>
     <ArmyContainer army={army}/>
     </div>
    </div>
  )
}

export default App
