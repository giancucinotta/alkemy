import {
    NEW_USER_DETAIL
} from "../constants";

const initialState = {
    user_data: {},
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_USER_DETAIL:
            return {
                ...state,
                user_data: action.payload
            };
        default:
            return state;
    }
};

export default rootReducer;