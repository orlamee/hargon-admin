import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VerifyLogin from './pages/verifyLogin';
import Register from './pages/register';
import ForgotP from './pages/forgotP';
import RecoverPassword from './pages/recoverP';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/login/otp' element={<VerifyLogin/>}></Route>
      <Route path='/sign-up' element={<Register/>}></Route>
      <Route path='/recover-password' element={<ForgotP/>}></Route>
      <Route path='/set-password' element={<RecoverPassword/>}></Route>
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
