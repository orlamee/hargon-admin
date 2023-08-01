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
import LoanSettings from './dashboardPages/loanSettings';
import BulkLoan from './dashboardPages/bulkLoan';
import UploadLoan from './dashboardPages/uploadLoan';
import ImportedLoans from './dashboardPages/importedLoan';
import UsersManagement from './dashboardPages/usersManagement';
import UserDetails from './dashboardPages/userDetails';
import UploadUsers from './dashboardPages/uploadUsers';
import BulkUsers from './dashboardPages/importUsers';
import UserSettings from './dashboardPages/userSettings';
import AgentManagement from './dashboardPages/agentManagement';
import AgentDetails from './dashboardPages/agentDetails';
import AgentSettings from './dashboardPages/agentSettings';
import BulkAgent from './dashboardPages/bulkAgent';
import UploadAgents from './dashboardPages/uploadAgents';
import OnboardingCompany from './dashboardPages/onboardCompany';
import UploadCompany from './dashboardPages/uploadCompany';
import ManageCompany from './dashboardPages/manageCompany';
import CompanyDetails from './dashboardPages/companyDetails';
import EmployeeDetails from './dashboardPages/employeeDetails';
import CompanySettings from './dashboardPages/companySettings';
import Application from './dashboardPages/application';
import SummaryDetails from './dashboardPages/summaryDetails';


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
      <Route path='/loan-calculator' element={<Calculator/>}></Route>
      <Route path='/calculate-loan' element={<LoanCalculation/>}></Route>
      <Route path='/manage-products' element={<ManageP/>}></Route>
      <Route path='/loan-settings' element={<LoanSettings/>}></Route>
      <Route path='/bulk-loan' element={<BulkLoan/>}></Route>
      <Route path='/import-loan' element={<UploadLoan/>}></Route>
      <Route path='/imported-loan' element={<ImportedLoans/>}></Route>
      <Route path='/manage-users' element={<UsersManagement/>}></Route>
      <Route path='/manage-users/details' element={<UserDetails/>}></Route>
      <Route path='/bulk-users' element={<BulkUsers/>}></Route>
      <Route path='/import-users' element={<UploadUsers/>}></Route>
      <Route path='/user-settings' element={<UserSettings/>}></Route>
      <Route path='/manage-agents' element={<AgentManagement/>}></Route>
      <Route path='/manage-agents/details' element={<AgentDetails/>}></Route>
      <Route path='/agent-settings' element={<AgentSettings/>}></Route>
      <Route path='/bulk-agents' element={<BulkAgent/>}></Route>
      <Route path='/import-agent' element={<UploadAgents/>}></Route>
      <Route path='/onboard-company' element={<OnboardingCompany/>}></Route>
      <Route path='/import-company' element={<UploadCompany/>}></Route>
      <Route path='/manage-company' element={<ManageCompany/>}></Route>
      <Route path='/manage-company/details' element={<CompanyDetails/>}></Route>
      <Route path='/employee-details' element={<EmployeeDetails/>}></Route>
      <Route path='/company-settings' element={<CompanySettings/>}></Route>
      <Route path='/application-summary' element={<Application/>}></Route>
      <Route path='/application-summary/details' element={<SummaryDetails/>}></Route>
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
