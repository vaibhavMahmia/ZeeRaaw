import * as api from '../API';
import { AUTH } from '../constants/actionTypes';

export const signin = (formData, history) => async (dispatch) => {
    try {
        //logIn user
        const {data} = await api.signIn(formData);
        dispatch({type:AUTH, data});
        history('/');
    } 
    catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        //signup user
        const {data} = await api.signUp(formData);
        dispatch({type:AUTH, data});
        history('/');
    } 
    catch (error) {
        console.log(error);
    }
}