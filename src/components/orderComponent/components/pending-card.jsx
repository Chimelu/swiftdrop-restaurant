// Import the data file
//import pendingOrdersData from './pendingOrdersData';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// Your existing code for PendingCard component

export default function PendingCard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://swifdropp.onrender.com/api/v1/orders/restaurantorderss/658539fb00f8fe9b7e53dbfa')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  const [showAllItemsMap, setShowAllItemsMap] = useState({});

  const toggleItemsDisplay = (orderIndex) => {
    setShowAllItemsMap((prevMap) => ({
      ...prevMap,
      [orderIndex]: !prevMap[orderIndex],
    }));
  };

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
      <div>
        <div className="row row-cols-1 row-cols-md-3 ">
          {orders.map((order, orderIndex) => (
            <div className="col mb-3" key={orderIndex}>
              <div className="card" style={{ backgroundColor: '#DBFFDC', border: '2px solid #4CAF50' }}>
                <div className="card-body">
                  
                  <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between gap-2">
                          <div className="user-bg" style={{ backgroundColor: generateRandomColor() }}>
                          {order.userInitial || 'U'} 
                          </div>
                            <div className="d-flex flex-column">
                                <strong style={{fontSize: '13px'}}><span>Order #{order.orderId}</span></strong>
                                <div>{order.orderDate}</div>
                            </div>
                        </div>
                        <div className="div-yellow">
                            
                        </div>
                    </div>
                  {/* ... Render items here using order.items */}
                    <div className='mt-3'>

                    {order.orderItems.map((item, itemIndex) => (
                            <div key={itemIndex} className="d-flex justify-content-between">
                                {/* ... Your existing code for rendering item content */}
                                <div className='d-flex justify-content-between mt-2 gap-2'>
                                    <div className="orderImg">
                                      <img src={item.foodImage} alt={item.foodName} />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div><h6><span>{item.foodName}</span></h6></div>
                                        <div>{item.description}</div>
                                        <div><strong style={{fontSize: '13px'}}>N{item.price}</strong></div>
                                    </div>
                                </div>
                                <div>{`x${item.quantity}`}</div>
                                
                            </div>
                            
                        ))}
                          {order.orderItems.length > 2 && (
                            <div className='py-0 my-0 text-right d-flex align-items-end justify-content-end'>
                              <a href='#' className='text-right text-decoration-none' onClick={() => toggleItemsDisplay(orderIndex)}>
                                {showAllItemsMap[orderIndex] ? '- Show less' : '+ Show more'}
                              </a>
                            </div>
                          )}
                          <hr/>
                          <div className='space-flex pt-0 mt-0'>
                            <span>Total</span>
                            <strong><span>N{order.totalAmount}</span></strong>
                          </div>
                          <div className='d-flex justify-content-end mt-2'>
                            <Link to={`/view-order/${order.orderId}`} className="btn btn-success">
                              View Order
                            </Link>
                          </div>
                    </div>
                    
                    
                  {/* ... Your existing code for rendering additional content */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
