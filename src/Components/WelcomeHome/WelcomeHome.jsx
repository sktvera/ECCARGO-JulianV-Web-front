import React from 'react'
import{ Button,Grid,Box }  from '@mui/material'
import { useNavigate } from "react-router-dom";


import './Assets/styles.css'

function WelcomeHome() {
  const navigate = useNavigate();

/*  ---------------- NAVIGATE TO CARDS ----------------------------*/

    const navigateToWoman = () => {
      navigate(`/Quotation`);
      }

  return (
    <div className='containerWelcome'>
        <Grid >
             
              
              <Box className='itemWelcome'>
                


<div><img src="https://aos.eccargosa.com/assets/layout/images/logo-ec1.png" alt="" /></div>
                <div className='buttonContainer'>
                <Button
                  onClick={navigateToWoman} 
                  variant="contained" 
                  className='buttonWelcome'>Iniciar El test</Button>
                </div>
                
              </Box>
        </Grid>
    </div>
  )
}

export default WelcomeHome
