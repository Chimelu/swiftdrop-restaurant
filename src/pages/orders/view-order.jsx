import DashboardHeader from '../../components/header/dashbaordHeader'
import DashbaordSidebar from '../../components/header/dashboardSidebar'
import ViewOrderComponent from '../../components/orderComponent/components/view-order'
import '../../components/styles/dashboard-styles/styles.css'
import '../../App.css'

export default function OrdersPage() {

  return (
    <>

      <DashboardHeader />

      
      <div className='container-fluid'>

        <div className='row'>

          <DashbaordSidebar
            nav_item_color1="black"
            nav_item_color2="#4CAF50"
            nav_item_color3="black"
            nav_item_color4="black"
            nav_item_color5="black"
           
          />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 body" style={{ backgroundColor: "#F2F4F7" }}>

            <ViewOrderComponent />

          </main>


        </div>

      </div>
  

    </>
  )
}