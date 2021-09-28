import axios from "axios";
import { url } from "../../constantURL"


export const setNewUser = (user_name, name, last_name, email, password) => {
    return (dispatch) => {
        axios.post(`${url}/users/new`)
            .then((response) => response.json())
            .then((response) =>
                dispatch({
                    type: NEW_USER_DETAIL,
                    payload: response,
                })
            );
    };
};
