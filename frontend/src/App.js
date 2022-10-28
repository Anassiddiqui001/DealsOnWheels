import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';


import LoginSignUp from './component/LoginSignUp.js';


function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                   
        
                    <Route path='/login' element={<LoginSignUp />} />
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
};
export default App;
