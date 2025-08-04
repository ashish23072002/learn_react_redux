/* eslint-disable no-case-declarations */
//this is the Reducer function (Create Reducer Functions )
const ADD_Task = "task/add";
const DELETE_Task = "task/delete";

const intialState = {
  task: [],
};
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
        task: [...state.task, updatedTask],
      };

    default:
      return state;
  }
};
