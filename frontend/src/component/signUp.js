import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { register } from "../actions/userAction";
const SignUp = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = () => {
        dispatch(register(name, email, password));
    };
    return (
        <div>
            <form>
                <label>name</label>
                <input type="text" name='name' onChange={(e) => {
                    setName(e.target.value)
                }}></input>

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

export default SignUp;