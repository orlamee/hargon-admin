import InventoryDetails from "../component/dashboardParts/inventoryDetails";
import Sidebar from "../component/dashboardParts/sidebar";


export default function ViewInventory () {
  return (
    <div>
      <Sidebar/>
      <InventoryDetails/>
    </div>
  )
}