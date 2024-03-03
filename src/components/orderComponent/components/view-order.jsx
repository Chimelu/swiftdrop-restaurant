//import PendingCard from "./pending-card";
import SinglePendingOrderData from './singlePendingOrderData';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewOrderId() {
    
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Fetch order details using orderId
    axios.get(`https://swifdropp.onrender.com/api/v1/orders/restaurantorderss/${orderId}`)
      .then(response => {
        setOrderDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching order details:', error);
      });
  }, [orderId]);

  // if (!orderDetails) {
  //   return <p>Loading...</p>;
  // }


  return (
      <>
        <div className="pb-5">
      
          <div className="align-top bg-white p-3">
            <div className="w-100">
              <h2>Orders</h2>
              {/* <p>Order ID: {orderDetails.orderId}</p> */}

              <div className="d-flex justify-content-between align-item-center">
                <div className="d-flex justify-content-between gap-3">
                  <div className="user-bg">
                    J
                  </div>

                  <div><strong><span>Order #1101</span></strong></div>


                </div>
                <div className="">
                  08:24 AM, 05/01/24
                </div>
              </div>

            </div>
          </div>
          <div className="mt-3">
            <div className="row row-cols-1 row-cols-md-12 g-4">
              {SinglePendingOrderData.map((order, index) => (
                <div className="col" key={index}>
                  <div className="card" style={{ backgroundColor: '#DBFFDC', border: '2px solid #4CAF50' }}>
                    <div className="card-body">
                      {/* ... Your existing code for rendering card content */}
                      
                      {/* ... Render items here using order.items */}
                        <div className='mt-3'>

                            {order.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="space-flex mt-2">
                                    {/* ... Your existing code for rendering item content */}
                                    <div className='space-flex gap-2'>

                                        <img src={item.image} alt={item.name} />
                                        
                                            
                                          <div>{item.description}</div>
                                      
                                    </div>
                                    <div><strong>{item.price}</strong></div>
                                    
                                </div>
                                
                            ))}
                            
                            
                        </div>
                        
                        
                      {/* ... Your existing code for rendering additional content */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-4'>
              <h6 className='mb-1'>Side Menu</h6>
              <div className="row row-cols-1 row-cols-md-12 g-4">
                {SinglePendingOrderData.map((order, index) => (
                  <div className="col" key={index}>
                    <div className="card" style={{ backgroundColor: '#DBFFDC', border: '2px solid #4CAF50' }}>
                      <div className="card-body">
                        {/* ... Your existing code for rendering card content */}
                        
                        {/* ... Render items here using order.items */}
                          <div className='mt-3'>

                              {order.items.map((item, itemIndex) => (
                                  <div key={itemIndex} className="space-flex mt-2">
                                      {/* ... Your existing code for rendering item content */}
                                      <div className='space-flex gap-2'>

                                          <img src={item.image} alt={item.name} />
                                          
                                              
                                            <div>{item.description}</div>
                                        
                                      </div>
                                      <div><strong>{item.price}</strong></div>
                                      
                                  </div>
                                  
                              ))}
                              
                              
                          </div>
                          
                          
                        {/* ... Your existing code for rendering additional content */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
            <div>

              <hr/>
              <div className='column-flex gap-2'>

                <div className='space-flex pt-0 mt-0'>
                  <span>Price:</span>
                  <strong><span>N9,000</span></strong>
                </div>
                <div className='space-flex pt-0 mt-0'>
                  <span>Discount:</span>
                  <strong><span>N9,000</span></strong>
                </div>
                <div className='space-flex pt-0 mt-0'>
                  <span>Delivery:</span>
                  <strong><span>N9,000</span></strong>
                </div>
                <hr/>
                <div className='space-flex pt-0 mt-0'>
                  <span>Total:</span>
                  <strong><span>N9,000</span></strong>
                </div>
              </div>
              <div className='d-flex justify-content-center gap-3 mt-2'>
              <Link to="" className="btn btn-danger">
                  Cancel Order
                </Link>
                <Link to="/delivery-ready" className="btn btn-success">
                  Accept Order
                </Link>
              </div>
            </div>

        </div>
        
        
      </>
  );
}