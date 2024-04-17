import React from 'react'
import basicos from './Assets/Img/basicos.jpg'
import cargo from './Assets/Img/cargo.jpg'
import denim from './Assets/Img/denim.jpg'
import gorras from './Assets/Img/gorras.jpg'
import graficos from './Assets/Img/graficos.jpg'
import oversizeh from './Assets/Img/oversizeh.jpg'

import './Assets/styles.css'

function Menscategories() {
  return (
    <div>
        <div className='Menscategories'>
        <div className='contained-Menscategories'>
            <div className='img-Menscategories'>
                <div style={{ backgroundColor: ' rgba(146, 146, 146, 0.283)', width: '100%', height: '100%', position: 'absolute', top: 0,  }} />
             <img src={basicos} alt="basicos" /> 
             <div className='textInfo'>
                <p>Basicos</p>
             </div>
             </div>
            <div className='img-Menscategories' >
            <div style={{ backgroundColor: ' rgba(146, 146, 146, 0.283)', width: '100%', height: '100%', position: 'absolute', top: 0,  }} />
                 <img src={cargo} alt="cargo" /> 
                 <div className='textInfo'>
                <p>Cargo</p>
             </div>
                 </div>
            <div className='img-Menscategories'>
            <div style={{ backgroundColor: ' rgba(146, 146, 146, 0.283)', width: '100%', height: '100%', position: 'absolute', top: 0,  }} />
                 <img src={denim} alt="denim" /> 
                 <div className='textInfo'>
                <p>Denim</p>
             </div>
                 </div>
            <div className='img-Menscategories'>
            <div style={{ backgroundColor: ' rgba(146, 146, 146, 0.283)', width: '100%', height: '100%', position: 'absolute', top: 0,  }} />
                 <img src={gorras} alt="gorras" /> 
                 <div className='textInfo'>
                <p>Gorras</p>
             </div>
                 </div>
            <div className='img-Menscategories'>
            <div style={{ backgroundColor: ' rgba(146, 146, 146, 0.283)', width: '100%', height: '100%', position: 'absolute', top: 0,  }} />
                 <img src={graficos} alt="graficos" /> 
                 <div className='textInfo'>
                <p>Graficos</p>
             </div>
                 </div>
            <div className='img-Menscategories'>
            <div style={{ backgroundColor: ' rgba(146, 146, 146, 0.283)', width: '100%', height: '100%', position: 'absolute', top: 0,  }} />
                 <img src={oversizeh} alt="oversizeh" />
                 <div className='textInfo'>
                <p>Oversizeh</p>
             </div>
                  </div>
        </div>
     
    </div>
     <div className='line-Menscategories'/>
    </div>
  )
}

export default Menscategories
