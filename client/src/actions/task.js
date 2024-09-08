import * as api from '../API';
import { CREATE_TASK, FETCH_TASKS } from '../constants/actionTypes';

export const createtask = (formData, history) => async (dispatch) => {
    try {
        const {data} = await api.createTask(formData);
        dispatch({type:CREATE_TASK, data});
        history('/');
    } 
    catch (error) {
        console.log(error);
    }
}

export const fetchTasks = () => async (dispatch) => {
    try {
        const {data} = await api.getTasks();
        dispatch({type:FETCH_TASKS, data});
    } 
    catch (error) {
        console.log(error);
    }
    
}