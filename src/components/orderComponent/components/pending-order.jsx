import OnToggleComponent from "./on-toggle";
import OntoggleNavbar from "./ontoggle-navbar";
import PendingCard from "./pending-card";

export default function OffToggleComponent() {
    
    
    return (
        <>
            <div className="p-0 m-0">
                <div className="align-top bg-white p-3">
                    <div>
                        <h2>Orders</h2>
                        <OnToggleComponent/>
                    </div>
                    <div className="">
                       <OntoggleNavbar
                        pending="#F8B602"
                        delivery_ready="#fff"
                        failed="#fff"
                       />
                    </div>
                  
                </div>
                <div className="mt-3">
                    <PendingCard/>
                </div>
            </div>
        </>
    );
}
