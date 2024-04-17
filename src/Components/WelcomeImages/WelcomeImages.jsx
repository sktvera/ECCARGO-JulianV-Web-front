import React from 'react'

import woman from './Assets/Img/woman.jpg'
import men from './Assets/Img/men.jpg'
import letters from './Assets/Img/letters.jpg'
import './Assets/styles.css'
import { Link } from 'react-router-dom'

function WelcomeImages() {
  return (
    <div className='contained'>
        <div className='WelcomeImages'>
     
      <Link 
      to='/things'
      >
     <div className='WelcomeImages-item'> <img src={letters} alt="letters" /> </div>
     </Link>
     <Link
     to='/woman'
     >
     <div className='WelcomeImages-item'> <img src={woman} alt="woman" /> </div>
     </Link>
     <Link
     to='/Mens'
     >
     <div className='WelcomeImages-item'> <img src={men} alt="men" /> </div>
     </Link>
 </div>
    </div>
  )
}

export default WelcomeImages
