import React, {useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from "../actions/userAction";
const Login = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = () => {
        dispatch(login(email, password));
    };
    return (
        <div>
            <form>
                
                <label>email</label>
                <input type="text" name='email' onChange={(e) => {
                    setEmail(e.target.value)
                }}></input>

                <label>password</label>
                <input type="text" name="password" onChange={(e) => {
                    setPassword(e.target.value)
                }}></input>

                <button onClick={submit}>submit</button>
            </form>
        </div>
    )
};

export default Login;