import React from 'react'
import{ Button }  from '@mui/material'
import { useLocation} from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { changeTaskOne } from '../../store/userSlice';
import { changeTaskTwo } from '../../store/userSlice';
import { changeTaskThree } from '../../store/userSlice';
import { changeTaskFour} from '../../store/userSlice';
import { changeTaskFive } from '../../store/userSlice';
import { changeTaskSix } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom'

import './Assets/styles.css'
import { Link } from 'react-router-dom';

function TaskBody() {

/*------------------ REDUX STATE ------------------------*/
  const taskOne = useSelector((state) => state.user.taskOne);
  const taskTwo = useSelector((state) => state.user.taskTwo);
  const taskThree = useSelector((state) => state.user.taskThree);
  const taskFour = useSelector((state) => state.user.taskFour);
  const taskFive = useSelector((state) => state.user.taskFive);
  const taskSix = useSelector((state) => state.user.taskSix);

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const location = useLocation();

const hanldeSave = ()=>{


/*------------------------ SAVE TASK ---------------------------*/
switch(location.state.items.id){
  
case 1:
 dispatch(changeTaskOne([{one : true}])).then(navigate('/cards'))
break

case 2:
  dispatch(changeTaskTwo([{one : true}])).then(navigate('/cards'))
break

case 3:

  dispatch(changeTaskThree(
    location.state.index === 0 ?
    [{one : true},taskThree[1]]
    :
    [taskThree[0],{two : true}]
    )).then(navigate('/cards'))
break

case 4:

  dispatch(changeTaskFour(
    location.state.index === 0 ?
    [{one : true},taskFour[1],taskFour[2]]
    :
    location.state.index === 1 ?
    [taskFour[0],{two : true},taskFour[2]]
    :
    [taskFour[0],taskFour[1],{three : true}]
    )).then(navigate('/cards'))
break

case 5:

  dispatch(changeTaskFive(
    location.state.index === 0 ?
    [{one : true},taskFive[1]]
    :
    [taskFive[0],{two : true}]
    )).then(navigate('/cards'))
break

case 6:
  dispatch(changeTaskSix([{one : true}])).then(navigate('/cards'))
break

}}

  const numberTask = location.state.index + 1

  return (
    <div className='containedRegister'>
        <div className='contanerRegister-grid'>
            <div className='contanerRegister-item title'>
                <h2>Amazing! start with homework.</h2>
            </div>
            <div className='taskSave'>
                <div className='grid-dinamicCard'>
                    <div>
                      <h2>Task # {location.state.items.id}.{numberTask}</h2>
                      <p>What do you want to do with this task?</p>
                      </div>
                    <div className='buttonsActive'>
                    <Button
                    onClick={hanldeSave}
                    className='savetask'
                    variant="contained" 
                    >Finish homework!</Button>
                    <Link to="/cards">
                    <Button
                    
                    className='error'
                    variant="contained" 
                    >postpone homework</Button>
                    </Link>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default TaskBody


