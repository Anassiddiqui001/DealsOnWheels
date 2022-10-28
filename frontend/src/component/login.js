import React, {useState } from 'react';
import Axios from 'axios';

const Login = () => {

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = () => {
        Axios.post('http://localhost:4000/api/v1/login', { email: email, password: password })
        setEmail("")
        setPassword("")
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