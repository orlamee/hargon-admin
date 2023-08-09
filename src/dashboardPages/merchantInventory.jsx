import Inventory from "../component/dashboardParts/inventory";
import Sidebar from "../component/dashboardParts/sidebar";


export default function MerchantInventory () {
  return (
    <div>
      <Sidebar/>
      <Inventory/>
    </div>
  )
}