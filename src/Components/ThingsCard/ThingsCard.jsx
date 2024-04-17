import React from 'react'
import camisillaBlack from './Assets/Img/estucheFlor.jpg'
import coatGreen from './Assets/Img/fundaCelular.jpg'
import coatWhite from './Assets/Img/goraGris.jpg'
import coatWhiteLettering from './Assets/Img/gorraCafe.jpg'
import hoodieWhite from './Assets/Img/gorroGuepardo.jpg'
import pantsGrey from './Assets/Img/gorroNegro.jpg'
import pantsWhite from './Assets/Img/gorroStart.jpg'
import pnatsGray from './Assets/Img/libreta.jpg'
import shirtBrown from './Assets/Img/mediasBlancas.jpg'
import tShirtAqua from './Assets/Img/mediasCalavera.jpg'
import tShirtBlack from './Assets/Img/mediasNegras.jpg'
import tShirtBlackAndWhite from './Assets/Img/panoleta.jpg'
import tShirtBlackSerius from './Assets/Img/pines.jpg'
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import CardsAll from '../../Components/CardsAll/CardsAll'




function ThingsCard() {


const Cards =[
  {
    title:'Estcuhe Flor',
    price:'$10.000',
    img:camisillaBlack,
    alt:'camisilla Black'
},
{
  title:'Estcuhe Negro',
  price:'$95.000',
  img:coatGreen,
  alt:'coat Green'
},
{
  title:'Gorra Gris',
  price:'$53.000',
  img:coatWhite,
  alt:'coat White'
},
{
  title:'Gorra Brown',
  price:'$109.000',
  img:coatWhiteLettering,
  alt:'coat White Lettering'
},
{
  title:'Gorro Guepardo',
  price:'$119.000',
  img:hoodieWhite,
  alt:'hoodi eWhite'
},
{
  title:'Gorro Negro',
  price:'$$119.000',
  img:pantsGrey,
  alt:'pants Grey'
},
{
  title:'Gorro Estrellas',
  price:'$143.000',
  img:pantsWhite,
  alt:'pants White'
},

 {
    title:'Libreta',
    price:'$143.000',
    img:pnatsGray,
    alt:'pnat sGray'
},
 {
    title:'Medias White',
    price:'$69.000',
    img:shirtBrown,
    alt:'shirt Brown'
},
{
  title:'Medias Calavera',
  price:'$55.000',
  img:tShirtAqua,
  alt:'tShirt Aqua'
},
 {
    title:'Medias Negras',
    price:'$55.000',
    img:tShirtBlack,
    alt:'tShir tBlack'
},
{
  title:'Pañoleta',
  price:'$52.000',
  img:tShirtBlackAndWhite,
  alt:'tShirt Black And White'
},
{
  title:'Pines',
  price:'$79.000',
  img:tShirtBlackSerius,
  alt:'tShirt Black Serius'
},

]

  return (
    <div>
      <div>
        <div className='ordered'>
        <div>ordenar por:</div>
        <ViewCarouselIcon/>
        </div>
       
<div className='cardsGrid'>
{Cards.map((items)=>{
  return(
<CardsAll
      items={items}
      title={items.title}
      price={items.price}
      alt={items.alt}
      />
  )
})}
</div>

      </div>
      
    </div>
  )
}

export default ThingsCard