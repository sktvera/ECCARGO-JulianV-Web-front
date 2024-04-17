import React from 'react'
import Thingscategories from '../../Components/Thingscategories/Thingscategories'
import MensinteractiveMenu from '../../Components/MensinteractiveMenu/MensinteractiveMenu'
import ThingsCard from '../../Components/ThingsCard/ThingsCard'



function Things() {
  return (
    <div>
     
     <Thingscategories/>
   <div className='bodyMens'>
    <MensinteractiveMenu/>
    <ThingsCard/>
   </div>
    </div>
  )
}

export default Things
