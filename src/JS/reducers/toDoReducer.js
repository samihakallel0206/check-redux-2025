//IMPORT
import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
} from "../actionTypes/actionTypes";
//INITIALISATION
const initialState = {
  tasks: [
    {
      id: Math.random(),
      title: "Go To super market",
      completed: false,
    },
    {
      id: Math.random(),
      title: "Go To the gym",
      completed: false,
    },
  ],
  
};

//PURE FUNCTION
const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };

    case DELETE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter((tsk) => tsk.id !== payload)],
      };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload.id ? { ...el, title: payload.titleEdited } : el
        ),
      };

    case DONE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload ? { ...el, completed: !el.completed } : el
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
