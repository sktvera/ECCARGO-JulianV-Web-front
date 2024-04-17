import React from 'react'

import gorras from './Assets/Img/gorras.jpg'




function Thingscategories() {
  return (
    <div>
        <div className='Menscategories'>
        <div className='contained-Menscategories'>
            
            <div className='img-Menscategories'>
            <div style={{ backgroundColor: ' rgba(146, 146, 146, 0.283)', width: '100%', height: '100%', position: 'absolute', top: 0,  }} />
                 <img src={gorras} alt="gorras" /> 
                 <div className='textInfo'>
                <p>Gorras</p>
             </div>
                 </div>
           
           
        </div>
     
    </div>
     <div className='line-Menscategories'/>
    </div>
  )
}

export default Thingscategories
