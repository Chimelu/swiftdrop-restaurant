import OnToggleComponent from "./on-toggle";
import OntoggleNavbar from "./ontoggle-navbar";
import DelieveryAccordion from "./delivery-accordion";
export default function DeliveryOrder() {
    

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
                        pending="#fff"
                        delivery_ready="blue"
                        failed="#fff"
                       />
                    </div>
                    
                </div>
                <div className="mt-4">
                    <DelieveryAccordion/>
                </div>
            </div>
        </>
    );
}
