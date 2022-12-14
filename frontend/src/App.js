import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';


import Login from './component/login.js';
import SignUp from './component/signUp.js';
import Profile from './component/profile.js';
import Users from './component/allUsers.js';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<SignUp />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/users' element={<Users />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
};
export default App ;
