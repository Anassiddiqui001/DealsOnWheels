import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,

} from "../constants/userConstants";

export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {

        case LOGIN_SUCCESS:
        case REGISTER_USER_SUCCESS:

            return {
                ...state,
                user: action.payload,
            };

        case LOGIN_FAIL:
        case REGISTER_USER_FAIL:
            return {
                ...state,
                user: null,
                error: action.payload,
            };
        default:
            return state;
    };
};    
