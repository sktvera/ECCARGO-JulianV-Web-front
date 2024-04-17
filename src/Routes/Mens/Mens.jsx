import React from 'react'
import Menscategories from '../../Components/Menscategories/Menscategories'
import MensinteractiveMenu from '../../Components/MensinteractiveMenu/MensinteractiveMenu'
import MensCard from '../../Components/MensCard/MensCard'

import './Assets/styles.css'

function Mens() {
  return (
    <div>
     < Menscategories/>
   <div className='bodyMens'>
    <MensinteractiveMenu/>
    <MensCard/>
   </div>
    </div>
  )
}

export default Mens
