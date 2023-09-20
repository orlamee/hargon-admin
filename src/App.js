import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import { Routes, Route} from "react-router-dom";
import Register from "./pages/register";
import ForgotP from "./pages/forgotP";
import RecoverPassword from "./pages/recoverP";
import Dashboard from "./dashboardPages/dashboard";
import AllLoans from "./dashboardPages/allLoans";
import LoanDetails from "./dashboardPages/loanDetails";
import AppSummary from "./dashboardPages/appSummary";
import ApplicationDetails from "./dashboardPages/applicationDetails";
import Reports from "./dashboardPages/reports";
import Calculator from "./dashboardPages/calculator";
import LoanCalculation from "./dashboardPages/loanCalculation";
import ManageP from "./dashboardPages/manageP";
import LoanSettings from "./dashboardPages/loanSettings";
import BulkLoan from "./dashboardPages/bulkLoan";
import UploadLoan from "./dashboardPages/uploadLoan";
import ImportedLoans from "./dashboardPages/importedLoan";
import UsersManagement from "./dashboardPages/usersManagement";
import UserDetails from "./dashboardPages/userDetails";
import UploadUsers from "./dashboardPages/uploadUsers";
import BulkUsers from "./dashboardPages/importUsers";
import UserSettings from "./dashboardPages/userSettings";
import AgentManagement from "./dashboardPages/agentManagement";
import AgentDetails from "./dashboardPages/agentDetails";
import AgentSettings from "./dashboardPages/agentSettings";
import BulkAgent from "./dashboardPages/bulkAgent";
import UploadAgents from "./dashboardPages/uploadAgents";
import OnboardingCompany from "./dashboardPages/onboardCompany";
import UploadCompany from "./dashboardPages/uploadCompany";
import ManageCompany from "./dashboardPages/manageCompany";
import CompanyDetails from "./dashboardPages/companyDetails";
import EmployeeDetails from "./dashboardPages/employeeDetails";
import CompanySettings from "./dashboardPages/companySettings";
import Application from "./dashboardPages/application";
import SummaryDetails from "./dashboardPages/summaryDetails";
import NewApplication from "./dashboardPages/newApplication";
import DecisionSharing from "./dashboardPages/decisionSharing";
import ViewDecision from "./dashboardPages/viewDecision";
import Legal from "./dashboardPages/legal";
import DebitLink from "./dashboardPages/debitLink";
import DebitHistory from "./dashboardPages/debitHistory";
import CheckCompliance from "./dashboardPages/compliance";
import ComplianceDetails from "./dashboardPages/complianceDetails";
import MerchantReports from "./dashboardPages/merchantReports";
import ManageMerchants from "./dashboardPages/manageMerchant";
import MerchantDetails from "./dashboardPages/merchantDetails";
import MerchantSettings from "./dashboardPages/merchantSettings";
import ViewNotes from "./dashboardPages/viewNotes";
import MerchantInventory from "./dashboardPages/merchantInventory";
import ViewInventory from "./dashboardPages/viewInventory";
import NewInventory from "./dashboardPages/newInventory";
import AppSettings from "./dashboardPages/appSettings";
import Payment from "./dashboardPages/payment";
import SavingsDashboard from "./dashboardPages/savingDashboard";
import TotalDeposit from "./dashboardPages/totalDeposit";
import Bills from "./dashboardPages/bills";
import Auction from "./dashboardPages/auction";
import AppNot from "./dashboardPages/appNot";
import Prompt from "./dashboardPages/prompt";
import Email from "./dashboardPages/email";
import AccountSettings from "./dashboardPages/accountSettings";
import SavingReports from "./dashboardPages/savingReports";
import TotalWithdrawal from "./dashboardPages/totalWithdrawal";
import Wallet from "./dashboardPages/wallet";
import Support from "./dashboardPages/support";
import Complaint from "./dashboardPages/complaint";
import CareerApplications from "./dashboardPages/careerApplications";
import CareerView from "./dashboardPages/careerView";
import ManageJob from "./dashboardPages/manageJob";
import AddJob from "./dashboardPages/addJob";
import CareerSettings from "./dashboardPages/careerSettings";
import CreateEmail from "./dashboardPages/createEmail";
import MarketingSettings from "./dashboardPages/marketingSettings";
import Members from "./dashboardPages/members";
import MemberDetails from "./dashboardPages/memberDetails";
import MemberSettings from "./dashboardPages/memberSettings";
import CashBack from "./dashboardPages/cashBack";
import Referral from "./dashboardPages/referral";
import RewardSettings from "./dashboardPages/rewardSettings";
import CompanyReports from "./dashboardPages/companyReports";
import AdminAccountOfficer from "./dashboardPages/adminAccountOfficer";
import AdminAccountOfficerView from "./dashboardPages/adminAccountOfficerView";
import OtpRegister from "./pages/otpRegister";
import OtpLogin from "./pages/otpLogin";
import Login from "./pages/login";


function App() {
  return (
    <> 
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/signup/otp" element={<OtpRegister />}></Route>
        <Route path="/login/otp" element={<OtpLogin />}></Route>
        <Route path="/sign-up" element={<Register />}></Route>
        <Route path="/recover-password" element={<ForgotP />}></Route>
        <Route path="/set-password" element={<RecoverPassword />}></Route>

        
        <Route path="/all-loans" element={<AllLoans />}></Route>
        <Route path="/all-loans/details" element={<LoanDetails />}></Route>
        <Route path="/applications" element={<AppSummary />}></Route>
        <Route
          path="/applications/details"
          element={<ApplicationDetails />}
        ></Route>
        <Route path="/reports" element={<Reports />}></Route>
        <Route path="/loan-calculator" element={<Calculator />}></Route>
        <Route path="/calculate-loan" element={<LoanCalculation />}></Route>
        <Route path="/manage-products" element={<ManageP />}></Route>
        <Route path="/loan-settings" element={<LoanSettings />}></Route>
        <Route path="/bulk-loan" element={<BulkLoan />}></Route>
        <Route path="/import-loan" element={<UploadLoan />}></Route>
        <Route path="/imported-loan" element={<ImportedLoans />}></Route>
        <Route path="/manage-users" element={<UsersManagement />}></Route>
        <Route path="/manage-users/details" element={<UserDetails />}></Route>
        <Route path="/bulk-users" element={<BulkUsers />}></Route>
        <Route path="/import-users" element={<UploadUsers />}></Route>
        <Route path="/user-settings" element={<UserSettings />}></Route>
        <Route path="/manage-agents" element={<AgentManagement />}></Route>
        <Route path="/manage-agents/details" element={<AgentDetails />}></Route>
        <Route path="/agent-settings" element={<AgentSettings />}></Route>
        <Route path="/bulk-agents" element={<BulkAgent />}></Route>
        <Route path="/import-agent" element={<UploadAgents />}></Route>
        <Route path="/onboard-company" element={<OnboardingCompany />}></Route>
        <Route path="/import-company" element={<UploadCompany />}></Route>
        <Route path="/manage-company" element={<ManageCompany />}></Route>
        <Route
          path="/manage-company/details"
          element={<CompanyDetails />}
        ></Route>
        <Route path="/employee-details" element={<EmployeeDetails />}></Route>
        <Route path="/company-settings" element={<CompanySettings />}></Route>
        <Route path="/company/reports" element={<CompanyReports />}></Route>
        <Route path="/application-summary" element={<Application />}></Route>
        <Route
          path="/application-summary/details"
          element={<SummaryDetails />}
        ></Route>
        <Route path="/new-application" element={<NewApplication />}></Route>
        <Route path="/decision-sharing" element={<DecisionSharing />}></Route>
        <Route path="/legal" element={<Legal />}></Route>
        <Route
          path="/decision-sharing/details"
          element={<ViewDecision />}
        ></Route>
        <Route path="/debit-link" element={<DebitLink />}></Route>
        <Route path="/debit-link/history" element={<DebitHistory />}></Route>
        <Route path="/compliance" element={<CheckCompliance />}></Route>
        <Route
          path="/compliance/details"
          element={<ComplianceDetails />}
        ></Route>
        <Route path="/merchant-reports" element={<MerchantReports />}></Route>
        <Route path="/manage-merchant" element={<ManageMerchants />}></Route>
        <Route
          path="/manage-merchant/details"
          element={<MerchantDetails />}
        ></Route>
        <Route path="/merchant-settings" element={<MerchantSettings />}></Route>
        <Route path="/view-notes" element={<ViewNotes />}></Route>
        <Route
          path="/merchant-inventory"
          element={<MerchantInventory />}
        ></Route>
        <Route
          path="/merchant-inventory/details"
          element={<ViewInventory />}
        ></Route>
        <Route path="/new-inventory" element={<NewInventory />}></Route>
        <Route path="/application-settings" element={<AppSettings />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/savings-dashboard" element={<SavingsDashboard />}></Route>
        <Route path="/total-deposit" element={<TotalDeposit />}></Route>
        <Route path="/total-withdrawal" element={<TotalWithdrawal />}></Route>
        <Route path="/bills" element={<Bills />}></Route>
        <Route path="/auction" element={<Auction />}></Route>
        <Route path="/app-notification" element={<AppNot />}></Route>
        <Route path="/prompt" element={<Prompt />}></Route>
        <Route path="/email" element={<Email />}></Route>
        <Route path="/create-email" element={<CreateEmail />}></Route>
        <Route path="/account" element={<AccountSettings />}></Route>
        <Route path="/savings-report" element={<SavingReports />}></Route>
        <Route path="/wallet" element={<Wallet />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/support/view-complain" element={<Complaint />}></Route>
        <Route path="/career" element={<CareerApplications />}></Route>
        <Route path="/career/details" element={<CareerView />}></Route>
        <Route path="/career/job-post" element={<ManageJob />}></Route>
        <Route path="/career/add-job" element={<AddJob />}></Route>
        <Route path="/career/settings" element={<CareerSettings />}></Route>
        <Route
          path="/marketing/settings"
          element={<MarketingSettings />}
        ></Route>
        <Route path="/members" element={<Members />}></Route>
        <Route path="/members/details" element={<MemberDetails />}></Route>
        <Route path="/members/settings" element={<MemberSettings />}></Route>
        <Route path="/cashback" element={<CashBack />}></Route>
        <Route path="/referral" element={<Referral />}></Route>
        <Route path="/rewards/settings" element={<RewardSettings />}></Route>
        <Route
          path="/admin/account-officer"
          element={<AdminAccountOfficer />}
        ></Route>
        <Route
          path="/admin/account-officer/view"
          element={<AdminAccountOfficerView />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
