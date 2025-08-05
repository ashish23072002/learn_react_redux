import { createStore } from "redux"
/* eslint-disable no-case-declarations */


//this is the Reducer function (Create Reducer Functions )
const ADD_Task = "task/add";
const DELETE_Task = "task/delete";

const intialState = {
  task: [],
};

// create a simple reducer function 
const taskReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_Task:
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    case DELETE_Task:
      const updatedTask = state.task.filter((curTask, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: updatedTask,
      };

    default:
      return state;
  }
};

// create react store using reducer 
// installed redux 

const store = createStore(taskReducer)
console.log(store);


// login to the intialState
console.log("Initial state",store.getState());


//how to Dispatch a method Using Dispatch Method (for adding into the array)
store.dispatch({type:ADD_Task,payload:"Add this line"})
console.log("Updated state",store.getState());

//(for adding into the array)
store.dispatch({type:ADD_Task,payload:"This is the second Line for adding"})
console.log("Updated state",store.getState());

//deleteing
store.dispatch({type:DELETE_Task,payload:1})
console.log("Deleted state",store.getState());
