import React from 'react'
import CardItem from '../CardItem/CardItem'

import './Assets/styles.css'

function CardsInfo() {

   const cardAll = [
{   id:1,
        title:"Task # 1",
        numberButtons: 1,
        tittleButtons:[{task:"doing task #1"}]
},
{   id:2,
    title:"Task # 2",
    numberButtons: 1,
    tittleButtons:[{task:"doing task #2"}]
},
{   id:3,
    title:"Task # 3",
    numberButtons: 2,
    tittleButtons:[{task:"doing task #3.1"},{task:"doing task #3.2"}]
},
{   id:4,
    title:"Task # 4",
    numberButtons: 3,
    tittleButtons:[{task:"doing task #4.1"}, {task:"doing task #4.2"}, {task:"doing task #4.3"}]
},
{   id:5,
    title:"Task # 5",
    numberButtons: 2,
    tittleButtons:[{task:"doing task #5.1"}, {task:"doing task #5.2"}]
},
{   id:6,
    title:"Task # 6",
    numberButtons: 1,
    tittleButtons:[{task:"doing task #6"}]
}
   ]

         

  return (
    <div className='containedRegister'>
        <div className='contanerRegister-grid'>
            <div className='contanerRegister-item title'>
                <h2>Amazing! start with homework.</h2>
            </div>
            <div className='cards'>
            <div className='cards-item'>
                      {
                        cardAll.map((items)=>{
                          
                          return(
                            <CardItem
                            items={items}
                            />
                          )
                        })
                      }   
                </div>
           </div>
      </div>
    </div>
  )
}

export default CardsInfo
