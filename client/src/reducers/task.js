import * as actionType from '../constants/actionTypes';

const taskReducer = (state = { loading: true, taskData: [] }, action) => {
  switch (action.type) {
    case actionType.CREATE_TASK:
      return { ...state, taskData: action.data, loading: false, errors: null };
    case actionType.FETCH_TASKS:
      return { ...state, taskData: action.data, loading: false, errors: null }
    default:
      return state;
  }
};


export default taskReducer;