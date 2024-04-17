
import { useState} from 'react'
import Button from '@mui/material/Button';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

import './Assets/styles.css'

function DynamicButton({items, index, item, dataDisable}) {

    const navigate = useNavigate()

/* ------------------ALERTS -----------------------------*/
    const [alertTaskSix,setAlertTaskSix]=useState(false)
    const [alertTaskFivezero,setAlertTaskFivezero]=useState(false)
    const [alertTaskFiveOne,setAlertTaskFiveOne]=useState(false)

    const [alertTaskFourOne,setAlertTaskFourOne]=useState(false)
    const [alertTaskFourTwo,setAlertTaskFourTwo]=useState(false)
    const [alertTaskFourThree,setAlertTaskFourThree]=useState(false)

    const [alertTaskThreeOne,setAlertTaskThreeOne]=useState(false)
    const [alertTaskThreeTwo,setAlertTaskThreeTwo]=useState(false)

    const [alertTaskTwoOne,setAlertTaskTwoOne]=useState(false)

/* ------------------REDUX STATE -----------------------------*/
    const taskOne = useSelector((state) => state.user.taskOne);
    const taskTwo = useSelector((state) => state.user.taskTwo);
    const taskThree = useSelector((state) => state.user.taskThree);
    const taskFour = useSelector((state) => state.user.taskFour);
    const taskFive = useSelector((state) => state.user.taskFive);
    const taskSix = useSelector((state) => state.user.taskSix);
  

  
/* ------------------CLOSE ALERTS -----------------------------*/
const handleCloseAlert = ()=>{
    setAlertTaskSix(false)
    setAlertTaskFiveOne(false)
    setAlertTaskFivezero(false)
    setAlertTaskFourOne(false)
    setAlertTaskFourTwo(false)
    setAlertTaskFourThree(false)
    setAlertTaskThreeOne(false)
    setAlertTaskThreeTwo(false)
    setAlertTaskTwoOne(false)
}


/* ------------------NAVIGATE AND VALIDATE -----------------------------*/
const handleNavigate = ()=>{
/* Task #1 */
    if((items.id === 1) ){
        navigate(`/task/:${items.id}`,{state:{items, index}})
    }
/* Task #2 */
    else if(items.id === 2 && taskOne[0].one === true){
        navigate(`/task/:${items.id}`,{state:{items, index}})
    }
/*   validate Task #2  */
if(items.id === 2 && index === 0 && taskOne[0].one === false){setAlertTaskTwoOne(true)}
/* Task #3 */
     if(items.id === 3 && index === 0 && taskOne[0].one === true && taskTwo[0].one === true){
        navigate(`/task/:${items.id}`,{state:{items, index}})
    }
    else if(items.id === 3 && index === 1  && taskOne[0].one === true && taskTwo[0].one === true && taskThree[0].one === true ){
        navigate(`/task/:${items.id}`,{state:{items, index}})
    }
/*   validate Task #3  */
if(items.id === 3 && index === 0 && taskTwo[0].one === false){setAlertTaskThreeOne(true)}
if(items.id === 3 && index === 1 && taskThree[0].one === false){setAlertTaskThreeTwo(true)}
/* Task #4 */
    if(items.id === 4 && index === 0 && taskOne[0].one === true && taskTwo[0].one === true && taskThree[0].one === true  && taskThree[1].two === true){
        navigate(`/task/:${items.id}`,{state:{items, index}})
    }
    else if(items.id === 4 && index === 1 && taskOne[0].one === true && taskTwo[0].one === true && taskThree[0].one === true  && taskThree[1].two === true && taskFour[0].one === true ){
        navigate(`/task/:${items.id}`,{state:{items, index}})
    }else if(items.id === 4 && index === 2 && taskOne[0].one === true && taskTwo[0].one === true && taskThree[0].one === true  && taskThree[1].two === true && taskFour[0].one === true && taskFour[1].two === true ){
        navigate(`/task/:${items.id}`,{state:{items, index}})
    }
/*   validate Task #4  */
if(items.id === 4 && index === 0 && taskThree[1].two === false){setAlertTaskFourOne(true)}
if(items.id === 4 && index === 1 && taskFour[0].one === false){setAlertTaskFourTwo(true)}
if(items.id === 4 && index === 2 && taskFour[1].two === false){setAlertTaskFourThree(true)}
/* Task #5 */
    if(items.id === 5 && index === 0 && taskOne[0].one === true && taskTwo[0].one === true && taskThree[0].one === true  && taskThree[1].two === true && taskFour[0].one === true && taskFour[1].two === true && taskFour[2].three === true){
        navigate(`/task/:${items.id}`,{state:{items, index}})
    }else if(items.id === 5 && index === 1 && taskOne[0].one === true && taskTwo[0].one === true && taskThree[0].one === true  && taskThree[1].two === true && taskFour[0].one === true && taskFour[1].two === true && taskFour[2].three === true && taskFive[0].one){
        navigate(`/task/:${items.id}`,{state:{items, index}})
    } 
/*   validate Task #5  */
if(items.id === 5 && index === 0 && taskFour[2].three === false){setAlertTaskFivezero(true)}
if(items.id === 5 && index === 1 && taskFive[0].one === false){setAlertTaskFiveOne(true)}
/* Task #6 */
    if(items.id === 6 && index === 0 && taskOne[0].one === true && taskTwo[0].one === true && taskThree[0].one === true  && taskThree[1].two === true && taskFour[0].one === true && taskFour[1].two === true && taskFour[2].three === true && taskFive[0].one && taskFive[1].two ){
        navigate(`/task/:${items.id}`,{state:{items, index}})
    }
 /*   validate Task #6  */
if(items.id === 6 && index === 0 && taskFive[1].two === false){setAlertTaskSix(true)}  
}

    

  return (

    /* ------------------ALERTS -----------------------------*/
   <>
   {alertTaskSix === true?
   <div onClick={handleCloseAlert} className='alertTaskSix'>
    <p>must perform task 5.2</p>
   </div>
   :null
   }
{alertTaskFiveOne === true?
   <div onClick={handleCloseAlert} className='alertTaskSix'>
    <p>must perform task 5.1</p>
   </div>
   :null
   }
{alertTaskFivezero === true?
   <div onClick={handleCloseAlert} className='alertTaskSix'>
    <p>must perform task 4.3</p>
   </div>
   :null
   }
{alertTaskFourOne === true?
   <div onClick={handleCloseAlert} className='alertTaskFour'>
    <p>must perform task 3.2</p>
   </div>
   :null
   }
{alertTaskFourTwo === true?
   <div onClick={handleCloseAlert} className='alertTaskFour'>
    <p>must perform task 4.1</p>
   </div>
   :null
   }
{alertTaskFourThree === true?
   <div onClick={handleCloseAlert} className='alertTaskFour'>
    <p>must perform task 4.2</p>
   </div>
   :null
   }
{alertTaskThreeOne === true?
   <div onClick={handleCloseAlert} className='alertTaskThree'>
    <p>must perform task 2</p>
   </div>
   :null
   }
   {alertTaskThreeTwo === true?
   <div onClick={handleCloseAlert} className='alertTaskThree'>
    <p>must perform task 3.1</p>
   </div>
   :null
   }
{alertTaskTwoOne === true?
   <div onClick={handleCloseAlert} className='alertTaskSix'>
    <p>must perform task 1</p>
   </div>
   :null
   }

    {dataDisable === true ?
    <Button className='active' disabled={dataDisable}  size="small"> ready </Button>
    :
    <Button   onClick={handleNavigate} size="small"> {item.task} </Button>
    }
   </>
    
  )
}

export default DynamicButton
