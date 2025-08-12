import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

/* eslint-disable no-case-declarations */

// Reducer action types
const ADD_Task = "task/add";
const DELETE_Task = "task/delete";
const FEATCH_TASK = "task/featch";

const intialState = {
  task: [],
};

// Create a simple reducer function
const taskReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_Task:
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    case FEATCH_TASK:
      return {
        ...state,
        task: [...state.task, ...action.payload],
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

// Create Redux store using reducer and middleware
export const store = createStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

console.log(store);
// Log the initial state
console.log("Initial state", store.getState());

// Dispatch an action to add a task
// Using dispatch method to add into the array
store.dispatch({ type: ADD_Task, payload: "Add this line" });
console.log("Updated state", store.getState());

// Add another task
store.dispatch({
  type: ADD_Task,
  payload: "This is the second Line for adding",
});
console.log("Updated state", store.getState());

// Deleting a task
store.dispatch({ type: DELETE_Task, payload: 1 });
console.log("Deleted state", store.getState());

// Dispatching tasks using action creators
// Step: Creating action creators
export const addTask = (data) => {
  return { type: ADD_Task, payload: data };
};

export const deleteTask = (id) => {
  return { type: DELETE_Task, payload: id };
};

store.dispatch(addTask("This line is added by Action Creator or a function"));
store.dispatch(addTask("Buy apple banana and kiwi"));
store.dispatch(addTask("Buy Tomato"));
console.log(store.getState());

store.dispatch(deleteTask(1));
console.log(store.getState());

// Creating a middleware with Redux Thunk to fetch tasks
export const featchTask = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=3"
      );
      const task = await res.json();
      dispatch({
        type: FEATCH_TASK,
        payload: task.map((curTask) => curTask.title),
      });
      console.log(task);
    } catch (error) {
      console.log(error);
    }
  };
};
