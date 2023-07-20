import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VerifyLogin from './pages/verifyLogin';
import Register from './pages/register';
import ForgotP from './pages/forgotP';
import RecoverPassword from './pages/recoverP';
import Dashboard from './dashboardPages/dashboard';
import AllLoans from './dashboardPages/allLoans';
import LoanDetails from './dashboardPages/loanDetails';
import AppSummary from './dashboardPages/appSummary';
import ApplicationDetails from './dashboardPages/applicationDetails';
import Reports from './dashboardPages/reports';
import Calculator from './dashboardPages/calculator';
import LoanCalculation from './dashboardPages/loanCalculation';
import ManageP from './dashboardPages/manageP';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/login/otp' element={<VerifyLogin/>}></Route>
      <Route path='/sign-up' element={<Register/>}></Route>
      <Route path='/recover-password' element={<ForgotP/>}></Route>
      <Route path='/set-password' element={<RecoverPassword/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/all-loans' element={<AllLoans/>}></Route>
      <Route path='/all-loans/details' element={<LoanDetails/>}></Route>
      <Route path='/applications' element={<AppSummary/>}></Route>
      <Route path='/applications/details' element={<ApplicationDetails/>}></Route>
      <Route path='/reports' element={<Reports/>}></Route>
      <Route path='/loan--calculator' element={<Calculator/>}></Route>
      <Route path='/calculate-loan' element={<LoanCalculation/>}></Route>
      <Route path='/manage-products' element={<ManageP/>}></Route>
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
