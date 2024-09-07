import * as api from '../API';
import { CREATE_TASK } from '../constants/actionTypes';

export const createtask = (formData, history) => async (dispatch) => {
    try {
        const {task} = await api.createTask(formData);
        dispatch({type:CREATE_TASK, task});
        history('/');
    } 
    catch (error) {
        console.log(error);
    }
}