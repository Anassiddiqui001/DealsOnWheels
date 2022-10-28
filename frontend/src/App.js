import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';


import Login from './component/login.js';
import SignUp from './component/signUp.js';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
};
export default App;
