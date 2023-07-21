/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../../assets/logo.svg"
import { Icon } from "@iconify/react"

function Sidebar() {
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
          <a className="" href="/dashboard"><Icon icon="radix-icons:dashboard" className="me-3 nme-1 fs-4" />Dashboard</a>
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
              <a href="" className="sub-item">Manage users</a>
              <a href="" className="sub-item">Import users</a>
              <a href="" className="sub-item">Settings</a>
            </div>
          </div>
          <div className="item">
            <a className="sub-btn"><Icon icon="ep:user" className="me-3 nme-1 fs-4" />Agent management <i className="bi bi-chevron-right dropdown"></i></a>
            <div className="sub-menu">
              <a href="" className="sub-item">Manage agent</a>
              <a href="" className="sub-item">Import agent</a>
              <a href="" className="sub-item">Settings</a>
            </div>
          </div>
          <div className="item">
            <a className="sub-btn"><Icon icon="material-symbols:business-center-outline" className="me-3 nme-1 fs-4" />Business management <i className="bi bi-chevron-right dropdown"></i></a>
            <div className="sub-menu">
              <a href="" className="sub-item">Manage company</a>
              <a href="" className="sub-item">Onboarding company</a>
              <a href="" className="sub-item">Settings</a>
              <a href="" className="sub-item">Report</a>
            </div>
          </div>
          <div className="item">
            <a className="sub-btn"><Icon icon="jam:store" className="me-3 nme-1 fs-4" />Merchant management <i className="bi bi-chevron-right dropdown"></i></a>
            <div className="sub-menu">
              <a href="" className="sub-item">Manage merchants</a>
              <a href="" className="sub-item">Inventory</a>
              <a href="" className="sub-item">Settings</a>
              <a href="" className="sub-item">Reports</a>
            </div>
          </div>
          <a className="" href="/"><Icon icon="solar:card-linear" className="me-3 nme-1 fs-4" />Payment</a>
          <div className="item">
            <a className="sub-btn"><Icon icon="streamline:money-atm-card-3-deposit-money-payment-finance-atm-withdraw" className="me-3 nme-1 fs-4" />Savings <i className="bi bi-chevron-right dropdown"></i></a>
            <div className="sub-menu">
              <a href="" className="sub-item">Total deposit</a>
              <a href="" className="sub-item">Total withdrawal</a>
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
              <a href="" className="sub-item">Bulk sms</a>
              <a href="" className="sub-item">Email</a>
              <a href="" className="sub-item">Push notification</a>
            </div>
          </div>
          <a className="" href="/"><Icon icon="ion:wallet-outline" className="me-3 nme-1 fs-4" />Wallet</a>
          <a className="" href="/"><Icon icon="mingcute:auction-line" className="me-3 nme-1 fs-4" />Auction</a>
          <a className="" href="/"><Icon icon="tabler:receipt" className="me-3 nme-1 fs-4" />Bills</a>
          <div className="my-5">
            <hr />
            <h6 className="mt-5">SETTINGS</h6>
            <a className="" href="/"><Icon icon="iconoir:profile-circle" className="me-3 nme-1 fs-4" />Account</a>
            <a className="" href="/"><Icon icon="icons8:support" className="me-3 nme-1 fs-4" />Support</a>
            <a className="" href="/"><Icon icon="carbon:login" className="me-3 nme-1 fs-4" />Logout</a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Sidebar