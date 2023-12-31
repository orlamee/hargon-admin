/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { Icon } from "@iconify/react"
import axios from "axios"; 
import { ToastContainer, toast } from "react-toastify";

function Sidebar() {
  const location = useLocation(); 
  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = async () => {
    try {
      await axios.post("https://hargon-admin-be.onrender.com/api/v1/hargon/admin/auth/logout");
      localStorage.removeItem("token"); 
      window.location.href = "/";
      toast.success("Logout successful", { autoClose: 2000 }); 
    } catch (error) {
      console.error("Logout Error:", error);
      toast.error("Logout failed")
    }
  }
  return (
    <div className="sidebar side-bar">
      <div className="row justify-content-center mt-4">
        <div className="col-sm-10 text-center">
          <img src={logo} alt="logo" className="img-fluid" />
          <div className="row d-flex justify-content-center align-items-center mt-5">
            <div className="col-md-12">
              <div className="form">
                <i className="bi bi-search"></i>
                <input type="text" className="form-control form-input" placeholder="Search"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 justify-content-center">
        <div className="col-sm-10">
          <h6>MAIN MENU</h6>
          <a className={isLinkActive('/dashboard') ? 'active-link' : ''} href="/dashboard"><Icon icon="radix-icons:dashboard" className="me-3 nme-1 fs-4" />Dashboard</a>
          <div className="item">
            <a className="sub-btn"><Icon icon="streamline:interface-user-add-actions-add-close-geometric-human-person-plus-single-up-user" className="me-3 nme-1 fs-4" />Application <i className="bi bi-chevron-right dropdown"></i></a>
            <div className="sub-menu">
              <a href="/application-summary" className="sub-item">Application</a>
              <a href="/compliance" className="sub-item">Check and compliance</a>
              <a href="/decision-sharing" className="sub-item">Decision & Scoring</a>
              <a href="/debit-link" className="sub-item">Direct debit link</a>
              <a href="/legal" className="sub-item">Legal</a>
              <a href="/application-settings" className="sub-item">Settings</a>
            </div>
          </div>
          <div className="item">
            <a className="sub-btn"><Icon icon="ri:building-2-line" className="me-3 nme-1 fs-4" />Loans <i className="bi bi-chevron-right dropdown"></i></a>
            <div className="sub-menu">
              <a href="/all-loans" className="sub-item">All Loans</a>
              <a href="/applications" className="sub-item">Applications</a>
              <a href="/manage-products" className="sub-item">Manage products</a>
              <a href="/bulk-loan" className="sub-item">Bulk import loan</a>
              <a href="/loan-calculator" className="sub-item">Calculator</a>
              <a href="/loan-settings" className="sub-item">Settings</a>
              <a href="/reports" className="sub-item">Report</a>
            </div>
          </div>
          <div className="item">
            <a className="sub-btn"><Icon icon="clarity:users-line" className="me-3 nme-1 fs-4" />User management <i className="bi bi-chevron-right dropdown"></i></a>
            <div className="sub-menu">
              <a href="/manage-users" className="sub-item">Manage users</a>
              <a href="/bulk-users" className="sub-item">Import users</a>
              <a href="/user-settings" className="sub-item">Settings</a>
            </div>
          </div>
          <div className="item">
            <a className="sub-btn"><Icon icon="ep:user" className="me-3 nme-1 fs-4" />Agent management <i className="bi bi-chevron-right dropdown"></i></a>
            <div className="sub-menu">
              <a href="/manage-agents" className="sub-item">Manage agent</a>
              <a href="/bulk-agents" className="sub-item">Import agent</a>
              <a href="/agent-settings" className="sub-item">Settings</a>
            </div>
          </div>
          <div className="item">
            <a className="sub-btn"><Icon icon="material-symbols:business-center-outline" className="me-3 nme-1 fs-4" />Company management <i className="bi bi-chevron-right dropdown"></i></a>
            <div className="sub-menu">
              <a href="/manage-company" className="sub-item">Manage company</a>
              <a href="/onboard-company" className="sub-item">Onboarding company</a>
              <a href="/company-settings" className="sub-item">Settings</a>
              <a href="/company/reports" className="sub-item">Reports</a>
            </div>
          </div>
          <div className="item">
            <a className="sub-btn"><Icon icon="jam:store" className="me-3 nme-1 fs-4" />Merchant management <i className="bi bi-chevron-right dropdown"></i></a>
            <div className="sub-menu">
              <a href="/manage-merchant" className="sub-item">Manage merchants</a>
              <a href="/merchant-inventory" className="sub-item">Inventory</a>
              <a href="/merchant-settings" className="sub-item">Settings</a>
              <a href="/merchant-reports" className="sub-item">Reports</a>
            </div>
          </div>
          <a className={isLinkActive('/payment') ? 'active-link' : ''}  href="/payment"><Icon icon="solar:card-linear" className="me-3 nme-1 fs-4" />Payment</a>
          <div className="item">
            <a className="sub-btn"><Icon icon="streamline:money-atm-card-3-deposit-money-payment-finance-atm-withdraw" className="me-3 nme-1 fs-4" />Savings <i className="bi bi-chevron-right dropdown"></i></a>
            <div className="sub-menu">
              <a href="/savings-dashboard" className="sub-item">Dashboard</a>
              <a href="/total-deposit" className="sub-item">Total deposit</a>
              <a href="/total-withdrawal" className="sub-item">Total withdrawal</a>
              <a href="/savings-report" className="sub-item">Report</a>
            </div>
          </div>
          <div className="item">
            <a className="sub-btn"><Icon icon="solar:shop-outline" className="me-3 nme-1 fs-4" />Market place <i className="bi bi-chevron-right dropdown"></i></a>
            <div className="sub-menu">
              <a href="" className="sub-item">Manage marketplace</a>
              <a href="" className="sub-item">Offer available</a>
              <a href="" className="sub-item">Inventory</a>
              <a href="" className="sub-item">Settings</a>
            </div>
          </div>
          <div className="item">
            <a className="sub-btn"><Icon icon="nimbus:marketing" className="me-3 nme-1 fs-4" />Marketing <i className="bi bi-chevron-right dropdown"></i></a>
            <div className="sub-menu">
              <a href="/email" className="sub-item">Email</a>
              <a href="/prompt" className="sub-item">Prompt</a>
              <a href="/app-notification" className="sub-item">Application notification</a>
              <a href="/marketing/settings" className="sub-item">Settings</a>
            </div>
          </div>
          <a className={isLinkActive('/wallet') ? 'active-link' : ''}  href="/wallet"><Icon icon="ion:wallet-outline" className="me-3 nme-1 fs-4" />Wallet</a>
          <a className={isLinkActive('/auction') ? 'active-link' : ''}  href="/auction"><Icon icon="mingcute:auction-line" className="me-3 nme-1 fs-4" />Auction</a>
          <div className="item">
            <a className="sub-btn"><Icon icon="jam:users" className="me-3 nme-1 fs-4" />Member <i className="bi bi-chevron-right dropdown"></i></a>
            <div className="sub-menu">
              <a href="/members" className="sub-item">Manage Members</a>
              <a href="/members/settings" className="sub-item">Settings</a>
            </div>
          </div>
          <div className="item">
            <a className="sub-btn"><Icon icon="ion:wallet-outline" className="me-3 nme-1 fs-4" />Career <i className="bi bi-chevron-right dropdown"></i></a>
            <div className="sub-menu">
              <a href="/career" className="sub-item">Applications</a>
              <a href="/career/job-post" className="sub-item">Manage Job Posts</a>
              <a href="/career/settings" className="sub-item">Settings</a>
            </div>
          </div>
          <div className="item">
            <a className="sub-btn"><Icon icon="mdi:achievement-outline" className="me-3 nme-1 fs-4" />Rewards<i className="bi bi-chevron-right dropdown"></i></a>
            <div className="sub-menu">
              <a href="/cashback" className="sub-item">Cashback</a>
              <a href="/referral" className="sub-item">Referral</a>
              <a href="/rewards/settings" className="sub-item">Settings</a>
            </div>
          </div>
          <a className={isLinkActive('/admin/account-officer') ? 'active-link' : ''}  href="/admin/account-officer"><Icon icon="mdi:account-cog-outline" className="me-3 nme-1 fs-4" />Admin Account Officer</a>
          <a className={isLinkActive('/employee/account-officer') ? 'active-link' : ''}  href="/employee/account-officer"><Icon icon="mdi:account-cog-outline" className="me-3 nme-1 fs-4" />Employee Account Officer</a>
          <a className={isLinkActive('/bills') ? 'active-link' : ''}  href="/bills"><Icon icon="tabler:receipt" className="me-3 nme-1 fs-4" />Bills</a>
          <div className="my-5">
            <hr />
            <h6 className="mt-5">SETTINGS</h6>
            <a className={isLinkActive('/account') ? 'active-link' : ''} href="/account"><Icon icon="iconoir:profile-circle" className="me-3 nme-1 fs-4" />Account</a>
            <a className={isLinkActive('/support') ? 'active-link' : ''}  href="/support"><Icon icon="icons8:support" className="me-3 nme-1 fs-4" />Support</a>
            <Link onClick={handleLogout}>
              <Icon icon="carbon:login" className="me-3 nme-1 fs-4" /> Logout
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </div>
  )
}

export default Sidebar