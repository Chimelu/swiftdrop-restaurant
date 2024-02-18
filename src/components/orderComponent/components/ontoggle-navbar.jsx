/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import { MobileView } from 'react-device-detect';
export default function OntoggleNavbar(props) {
    
    return (
        <>
            <div className="">
                
                    <div className="flex-between toggle-navbar">
                        <span className=""><Link to="/pending-order" className="text-warning"><u style={{ textDecorationColor: `${props.pending}` }}>Pending</u></Link></span>
                        <span className=""><Link to="/delivery-ready" className="text-primary"><u style={{ textDecorationColor: `${props.delivery_ready}` }}>Delivery ready</u></Link></span>
                        <span><Link to="/failed" className="text-danger"><u style={{ textDecorationColor: `${props.failed}` }}>Failed</u></Link></span>
                    </div>
                    
               
            </div>
        </>
    );
}