import axios from "axios";
import { url } from "../../constantURL";
import {
    NEW_USER_DATA,
    LOGIN_VALIDATION,
    USER_NEW_DATA,
    USER_NEW_PASS
} from "../constants";

export const setNewUser = (body) => {
    return (dispatch) => {
        axios.post(`${url}/users/new`, body)
            .then((response) =>
                dispatch({
                    type: NEW_USER_DATA,
                    payload: response,
                })
            );
    };
};

export const logIn = (id_user, body) => {
    return (dispatch) => {
        axios.get(`${url}/users/${id_user}`, body)
            .then((response) =>
                dispatch({
                    type: LOGIN_VALIDATION,
                    payload: response,
                })
            );
    };
};

export const updateUserData = (id_user, body) => {
    return (dispatch) => {
        axios.put(`${url}/user/update/${id_user}`, body)
            .then((response) =>
                dispatch({
                    type: USER_NEW_DATA,
                    payload: response,
                })
            );
    };
};

export const changePassword = (id_user, body) => {
    return (dispatch) => {
        axios.put(`${url}/user/password/${id_user}`, body)
            .then((response) =>
                dispatch({
                    type: USER_NEW_PASS,
                    payload: response,
                })
            );
    };
};