import { createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

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

//Step 2: Crete  the redux store using the redcer
export const store = createStore(taskReducer,composeWithDevTools());   
console.log(store);
// login to the intialState
console.log("Initial state", store.getState());

// Step 4: DisPatch an action to Add a Task
//how to Dispatch a method Using Dispatch Method (for adding into the array)
store.dispatch({ type: ADD_Task, payload: "Add this line" });
console.log("Updated state", store.getState());

//(for adding into the array)
store.dispatch({
  type: ADD_Task,
  payload: "This is the second Line for adding",
});
console.log("Updated state", store.getState());

//deleteing
store.dispatch({ type: DELETE_Task, payload: 1 });
console.log("Deleted state", store.getState());

//recreating the 47 line where we are dispatching the task Using(Action Creator)
// Step 5: creating action creator

export const addTask = (data) => {
  return { type: ADD_Task, payload: data };
};

export const deleteTask = (id) => {
  return { type: DELETE_Task, payload: id };
};

store.dispatch(addTask("This line is added by Action Creator or a fucntion "));
store.dispatch(addTask("Buy apple  banana and  kiwiw "));
store.dispatch(addTask("Buy Tamato "));
console.log(store.getState());

store.dispatch(deleteTask(1));
console.log(store.getState());
