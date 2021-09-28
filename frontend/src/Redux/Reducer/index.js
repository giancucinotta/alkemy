import {
    NEW_USER_DETAIL,
    LOGIN_VALIDATION,
    USER_NEW_DATA,
    USER_NEW_PASS
} from "../constants";

const initialState = {
    user_data: {},
    password: 'Not validated',
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_USER_DETAIL:
            return {
                ...state,
                user_data: action.payload
            };
        case LOGIN_VALIDATION:
            return {
                ...state,
                password: action.payload.validation
            };
        case USER_NEW_DATA:
            return {
                ...state,
                user_data: action.payload
            };
        case USER_NEW_PASS:
            return {
                ...state,
                user_data: action.payload
            }
        default:
            return state;
    }
};

export default rootReducer;