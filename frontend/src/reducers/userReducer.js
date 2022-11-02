import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_FAIL,
    LOAD_USER_SUCCESS

} from "../constants/userConstants";

export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_USER_SUCCESS:
        case LOAD_USER_SUCCESS:

            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };

        case LOGIN_FAIL:
        case REGISTER_USER_FAIL:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                error: action.payload,
            };
        default:
            return state;

        case LOAD_USER_FAIL:
            return {
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
    };
};    
