import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';


import SignUp from './component/signUp';
import Login from './component/login';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                   
                    <Route path='/register' element={<SignUp />} />
                    <Route path='/login' element={<Login />} />
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
};
export default App;
