/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import pendingOrdersData from './pendingOrdersData';
// import { MobileView } from 'react-device-detect';

export default function DelieveryAccordion() {
    return (
        <>
            <div>
                <div className="accordion" id="accordionExample">
                    {pendingOrdersData.map((order, index) => (
                        <div key={index} className="accordion-item">
                            <h2 className="accordion-header p-2 space-flex2" id={`heading${index}`}>
                                
                                <div className="lg-text"><strong>{`ORDER #${order.orderNumber} `}</strong></div>
                               
                                <div className="d-flex justify-content-between align-items-center">
                                    
                                        <Link to="/dispatch-order" className="btn btn-success" style={{width: '150px'}}>
                                        Dispatch Order
                                        </Link>
                                    

                                    <button
                                        className="accordion-button bg-white"
                                        style={{width: '30%'}}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${index}`}
                                        aria-expanded="true"
                                        aria-controls={`collapse${index}`}
                                    >

                                    </button>
                                </div>
                                
                            </h2>

                            <div
                                id={`collapse${index}`}
                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body w-100">
                                    
                                    {order.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="space-flex">
                                            <p>{`${item.name}`}</p>
                                            <p>{`${item.price}`}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
