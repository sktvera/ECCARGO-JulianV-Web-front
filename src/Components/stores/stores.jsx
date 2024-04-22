import React from 'react';
import YouTube from 'react-youtube';
import ApiBack from './Assets/Img/ApiBack.png'

import './Assets/styles.css'

function Store() {
  const opts = {
    height: '900',
    width: '1600',
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      playlist: 'm0ckaOpnONQ', // Para hacer loop en el video
      mute: 1,
      disablekb: 0, // Deshabilita el control del teclado
      modestbranding: 0, // Oculta la marca de YouTube en la barra de control
      fs: 0, // Oculta el botón de pantalla completa
      rel: 0, // No muestra videos relacionados al finalizar la reproducción
    },
  };

  return (
    <div className='store'>
      <div className='contentVideo'>
        <YouTube videoId="m0ckaOpnONQ" opts={opts} id="myVideo" />
        <div className='superPosition'>

       
          
          <div style={{display:"flex",flexDirection:"row"}}>

          


          <img style={{width:"250px"}} src={ApiBack} alt="" />
          <div className='columnApis'>
          <h2>https://53tl8opix6.execute-api.us-east-2.amazonaws.com<strong style={{color:"blue"}}>/test/</strong></h2>
          
          <label style={{fontSize:"12px"}} htmlFor=""><h2><strong style={{color:"red"}}>[Delete]</strong>https://53tl8opix6.execute-api.us-east-2.amazonaws.com<strong style={{color:"red"}}>/test/deleteImage?name=16-testOtroPaquete.jpg</strong></h2></label>

        <div>
        <label style={{fontSize:"12px"}} htmlFor=""><h2><strong style={{color:"green"}}>[Post]</strong>https://53tl8opix6.execute-api.us-east-2.amazonaws.com<strong style={{color:"green"}}>/test/saveimg</strong></h2></label>
<label htmlFor="">

body: formato json - {`{ 18-testUltimoPaquete.jpg } Envia la imagen en base64`}
</label>
        </div>

          <label style={{fontSize:"12px"}} htmlFor=""><h2><strong style={{color:"blue"}}>[Get]</strong>https://53tl8opix6.execute-api.us-east-2.amazonaws.com<strong style={{color:"blue"}}>/test/getImages</strong></h2></label>
          </div>
          </div>

    
          
          <div className='columnApis'>
          <h2>https://TuUrlEjemplo<strong style={{color:"blue"}}>/api/</strong></h2>
          
          <label style={{fontSize:"12px"}} htmlFor=""><h2><strong style={{color:"red"}}>[Delete]</strong>http://localhost:3000<strong style={{color:"red"}}>/quotation/:id</strong></h2></label>

        <div>
        <label style={{fontSize:"12px"}} htmlFor=""><h2><strong style={{color:"green"}}>[Post]</strong>http://localhost:3000<strong style={{color:"green"}}>/quotation</strong></h2></label>
<label htmlFor="">

body: formato json - {`{
        
        "service": "aduana",
        "mode": "exportacion",
        "cargoType": "refrigerada",
        "origin": "Colombia",
        "destination": "Mexico"
    } `}
</label>
        </div>

          <label style={{fontSize:"12px"}} htmlFor=""><h2><strong style={{color:"blue"}}>[Get]</strong>http://localhost:3000<strong style={{color:"blue"}}>/quotation</strong></h2></label>
          <label style={{fontSize:"12px"}} htmlFor=""><h2><strong style={{color:"blue"}}>[Get]</strong>http://localhost:3000<strong style={{color:"blue"}}>/quotation/:id</strong></h2></label>
          </div>
         
        </div>
      </div>
    </div>
);
}

export default Store;
