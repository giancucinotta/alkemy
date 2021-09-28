import axios from "axios";
import { url } from "../../constantURL";
import {
    NEW_USER_DETAIL
} from "../constants";

export const setNewUser = (body) => {
    return (dispatch) => {
        axios.post(`${url}/users/new`, body)
            .then((response) => response.json())
            .then((response) =>
                dispatch({
                    type: NEW_USER_DETAIL,
                    payload: response,
                })
            );
    };
};
