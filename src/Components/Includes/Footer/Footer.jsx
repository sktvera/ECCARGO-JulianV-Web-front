import React from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import Hidden from '@mui/material/Hidden';
import './Assets/styles.css'

function Footer(props) {
  return (
  <div className='containedFooter'>

<div className='body-containedFooter'>
<ul>
  <li>CONTACTO</li>
  <li onClick={()=>window.open('https://api.whatsapp.com/send?phone=573183731442')}>318 373 14 42</li>
  <li><strong>PBX:</strong>+57 3183731442</li>
  <li onClick={()=>window.open('https://api.whatsapp.com/send?phone=573183731442')}> Escríbenme</li>
</ul>

<ul>
  <li>QUIEN SOY</li>
  <li onClick={()=>window.open('https://sktvera.github.io/Project-Portfolio/')}>Portafolio</li>

</ul>



<ul>
  <li>AYUDA</li>
  <li onClick={()=>window.open('https://api.whatsapp.com/send?phone=573183731442')}>Encuentrame</li>
  
</ul>

<div className='iconsSocialMedia'>
  <p>SÍGUE A EcGroupLogistics</p>

  <FacebookIcon
  className='iconsSocialMedia'
  onClick={()=>window.open('https://www.facebook.com/ecgrouplogistics?locale=es_LA')}
  />

<InstagramIcon
 className='iconsSocialMedia'
onClick={()=>window.open('https://www.instagram.com/ecgrouplogistics/')}
/>







</div>

</div>
<Hidden only={['xs']}> 
<div> <Typography variant="body2" color="text.secondary" align="center" {...props}>
   {'Copyright © '}
   <Link color="inherit" href="https://github.com/sktvera/ECCARGO-JulianV-Web-front">
   PRUEBA TECNICA ECCARGO
   </Link>{' '}
   {new Date().getFullYear()}
   {' All rights reserved Julian David Vera Godoy.'}
 </Typography></div>
 </Hidden>
  </div>
  );
}

export default Footer
