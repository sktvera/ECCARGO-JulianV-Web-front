import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskOne:[{one: false}], 
    taskTwo:[{one: false}], 
    taskThree:[{one: false},{two:false}], 
    taskFour:[{one: false},{two:false},{three:false}], 
    taskFive:[{one: false},{two:false}], 
    taskSix:[{one: false}], 
}

export const taskSlice = createSlice({ 
    name : "task",
    initialState,
    reducers:{
        changeTaskOne:(state, action) =>{
            const{taskOne} = action.payload;
            state.one = taskOne[0].one
        },
        
    }
})