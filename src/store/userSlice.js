import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskOne:[{one: false}], 
    taskTwo:[{one: false}], 
    taskThree:[{one: false},{two:false}], 
    taskFour:[{one: false},{two:false},{three:false}], 
    taskFive:[{one: false},{two:false}], 
    taskSix:[{one: false}], 
  email: [{one: false},{two:false}],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
   
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changeTaskOne: (state, action) => {
        state.taskOne = action.payload;
      },
      changeTaskTwo: (state, action) => {
        state.taskTwo = action.payload;
      },
      changeTaskThree: (state, action) => {
        state.taskThree = action.payload;
      },
      changeTaskFour: (state, action) => {
        state.taskFour = action.payload;
      },
      changeTaskFive: (state, action) => {
        state.taskFive = action.payload;
      },
      changeTaskSix: (state, action) => {
        state.taskSix = action.payload;
      },
  },
});

export const {  changeEmail, changeTaskOne, changeTaskTwo, changeTaskThree, changeTaskFour, changeTaskFive, changeTaskSix } = userSlice.actions;
export default userSlice.reducer;


