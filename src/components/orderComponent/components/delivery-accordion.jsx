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
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`}
                                    aria-expanded="true"
                                    aria-controls={`collapse${index}`}
                                >
                                    <strong>{`ORDER #${order.orderNumber} `}</strong>
                                </button>
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
