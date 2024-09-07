import * as actionType from '../constants/actionTypes';

const taskReducer = (state = { taskData: null }, action) => {
  switch (action.type) {
    case actionType.CREATE_TASK:
      return { ...state, taskData: action.task, loading: false, errors: null };
    default:
      return state;
  }
};


export default taskReducer;