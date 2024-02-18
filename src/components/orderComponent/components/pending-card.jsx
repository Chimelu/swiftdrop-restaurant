// Import the data file
import React, { useState } from 'react';
import pendingOrdersData from './pendingOrdersData';
import { Link } from 'react-router-dom';
// Your existing code for PendingCard component

export default function PendingCard() {
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
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {pendingOrdersData.map((order, orderIndex) => (
            <div className="col" key={orderIndex}>
              <div className="card" style={{ backgroundColor: '#DBFFDC', border: '2px solid #4CAF50' }}>
                <div className="card-body">
                  {/* ... Your existing code for rendering card content */}
                  

                  <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between gap-3">
                          <div className="user-bg" style={{ backgroundColor: generateRandomColor() }}>
                          {order.userInitial || 'U'} 
                          </div>
                            <div className="d-flex flex-column">
                                <div><strong><span>Order #{order.orderNumber}</span></strong></div>
                                <div>{order.timestamp}</div>
                            </div>
                        </div>
                        <div className="div-yellow">
                            
                        </div>
                    </div>
                  {/* ... Render items here using order.items */}
                    <div className='mt-3'>

                    {order.items.slice(0, showAllItemsMap[orderIndex] ? order.items.length : 2).map((item, itemIndex) => (
                            <div key={itemIndex} className="d-flex justify-content-between mt-2">
                                {/* ... Your existing code for rendering item content */}
                                <div className='d-flex justify-content-between gap-2'>

                                    <img src={item.image} alt={item.name} />
                                    <div className="d-flex flex-column">
                                        <div><h6><span>{item.name}</span></h6></div>
                                        <div>{item.description}</div>
                                        <div><strong>{item.price}</strong></div>
                                    </div>
                                </div>
                                <div>{`x${item.quantity}`}</div>
                                
                            </div>
                            
                        ))}
                          {order.items.length > 2 && (
                            <div className='py-0 my-0 text-right d-flex align-items-end justify-content-end'>
                              <a href='#' className='text-right text-decoration-none' onClick={() => toggleItemsDisplay(orderIndex)}>
                                {showAllItemsMap[orderIndex] ? '- Show less' : '+ Show more'}
                              </a>
                            </div>
                          )}
                          <hr/>
                          <div className='space-flex pt-0 mt-0'>
                            <span>Total</span>
                            <strong><span>N9,000</span></strong>
                          </div>
                          <div className='d-flex justify-content-end mt-2'>
                            <Link to="/view-order" className="btn btn-success">
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
