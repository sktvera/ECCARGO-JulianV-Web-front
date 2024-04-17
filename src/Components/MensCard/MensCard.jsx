import React from 'react'
import camisillaBlack from './Assets/Img/camisillaBlack.jpg'
import coatGreen from './Assets/Img/coatGreen.jpg'
import coatWhite from './Assets/Img/coatWhite.jpg'
import coatWhiteLettering from './Assets/Img/coatWhiteLettering.jpg'
import hoodieWhite from './Assets/Img/hoodieWhite.jpg'
import pantsGrey from './Assets/Img/pantsGrey.jpg'
import pantsWhite from './Assets/Img/pantsWhite.jpg'
import pnatsGray from './Assets/Img/pnatsGray.jpg'
import shirtBrown from './Assets/Img/shirtBrown.jpg'
import tShirtAqua from './Assets/Img/tShirtAqua.jpg'
import tShirtBlack from './Assets/Img/tShirtBlack.jpg'
import tShirtBlackAndWhite from './Assets/Img/tShirtBlackAndWhite.jpg'
import tShirtBlackSerius from './Assets/Img/tShirtBlackSerius.jpg'
import tShirtSalmon from './Assets/Img/tShirtSalmon.jpg'
import tShirtWhitePoints from './Assets/Img/tShirtWhitePoints.jpg'
import tshirtBlackRuedas from './Assets/Img/tshirtBlackRuedas.jpg'
import tshirtBlackLettering from './Assets/Img/tshirtBlackLettering.jpg'
import tshirtWhite from './Assets/Img/tshirtWhite.jpg'
import CardsAll from '../../Components/CardsAll/CardsAll'
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';

import './Assets/styles.css'


function MensCard() {


const Cards =[
  {
    title:'Camisilla Negra',
    price:'$69.000',
    img:camisillaBlack,
    alt:'camisilla Black'
},
{
  title:'Buso Verde',
  price:'$95.000',
  img:coatGreen,
  alt:'coat Green'
},
{
  title:'Buso Blanco',
  price:'$123.000',
  img:coatWhite,
  alt:'coat White'
},
{
  title:'Chaqueta Letras',
  price:'$109.000',
  img:coatWhiteLettering,
  alt:'coat White Lettering'
},
{
  title:'Sudadera Blanca',
  price:'$119.000',
  img:hoodieWhite,
  alt:'hoodi eWhite'
},
{
  title:'Jeans',
  price:'$143.000',
  img:pantsGrey,
  alt:'pants Grey'
},
{
  title:'pantsWhite',
  price:'$143.000',
  img:pantsWhite,
  alt:'pants White'
},

 {
    title:'Pantalon Urbano Verde',
    price:'$143.000',
    img:pnatsGray,
    alt:'pnat sGray'
},
 {
    title:'Camisa',
    price:'$69.000',
    img:shirtBrown,
    alt:'shirt Brown'
},
{
  title:'Camiseta Aqua',
  price:'$55.000',
  img:tShirtAqua,
  alt:'tShirt Aqua'
},
 {
    title:'Camisa Dog',
    price:'$55.000',
    img:tShirtBlack,
    alt:'tShir tBlack'
},
{
  title:'Camisa BlackAndWhite',
  price:'',
  img:tShirtBlackAndWhite,
  alt:'tShirt Black And White'
},
{
  title:'Camiseta Clasics',
  price:'$79.000',
  img:tShirtBlackSerius,
  alt:'tShirt Black Serius'
},
{
  title:'Camiseta Velmont',
  price:'$43.000',
  img:tShirtSalmon,
  alt:'tShirt Salmon'
},
{
  title:'Camiseta Points s',
  price:'$48.000',
  img:tShirtWhitePoints,
  alt:'tShirt White Points'
},
{
  title:'Camiseta BuenaV',
  price:'$39.000',
  img:tshirtBlackRuedas,
  alt:'tshirt Black Ruedas'
},
{
  title:'Camiseta blackLtering',
  price:'$39.000',
  img:tshirtBlackLettering,
  alt:'tshirt Black Lettering'
},
{
  title:'Camiseta Clascis two',
  price:'$89.000',
  img:tshirtWhite,
  alt:'tshir White'
}
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

export default MensCard