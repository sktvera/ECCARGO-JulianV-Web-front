import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useSelector } from "react-redux";

import Typography from '@mui/material/Typography';
import DynamicButton from '../DynamicButton/DynamicButton'

import './Assets/styles.css'

function CardItem({items}) {

  const taskOne = useSelector((state) => state.user.taskOne);
  const taskTwo = useSelector((state) => state.user.taskTwo);
  const taskThree = useSelector((state) => state.user.taskThree);
  const taskFour = useSelector((state) => state.user.taskFour);
  const taskFive = useSelector((state) => state.user.taskFive);
  const taskSix = useSelector((state) => state.user.taskSix);

 

  return (
    <Card className='bodyCard'>
      <CardContent>
        <Typography 
        align="center" 
        gutterBottom 
        variant="h5" 
        component="div">
         {items.title}
        </Typography>
      </CardContent>
      <CardActions>
      <div className='ButtonsCard'>
          {
          items.tittleButtons.map((item, index)=>{

            const dataDisable = 
            items.id === 1 ? 
            taskOne[index].one
            : items.id === 2 ? 
            taskTwo[index].one
            : items.id === 3 ? 
            taskThree.indexOf(taskThree[index]) === 0 ? taskThree[index].one : taskThree[index].two
            : items.id === 4 ? 
            taskFour.indexOf(taskFour[index]) === 0 ? taskFour[index].one : taskFour.indexOf(taskFour[index]) === 1 ? taskFour[index].two : taskFour[index].three
            : items.id === 5 ? 
            taskFive.indexOf(taskFive[index]) === 0 ? taskFive[index].one : taskFive[index].two
            :taskSix[index].one;
            
            
          
            
          return(
            <DynamicButton
            item={item}
            items={items}
            index={index}
            dataDisable={dataDisable}
            />
          
          )})}
      </div>
       
      </CardActions>
    </Card>
  )
}

export default CardItem
