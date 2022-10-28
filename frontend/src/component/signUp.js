import React, {useState } from 'react';
import Axios from 'axios';

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = () => {
        Axios.post('http://localhost:4000/api/v1/register', { name: name, email: email, password: password })
        setName("")
        setEmail("")
        setPassword("")
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