import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,

    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
  } from "../constants/userConstants";

  import axios from "axios";
  
  // Login
  export const login = (email, password) => async (dispatch) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        'http://localhost:4000/api/v1/login',
        { email, password },
        config
      );
      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
      
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error });
    }
  };
  
  // Register
  export const register = (userData) => async (dispatch) => {
    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const { data } = await axios.post(
        'http://localhost:4000/api/v1/register',
        userData,
        config
        );
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error,
      });
    }
  };
  
 