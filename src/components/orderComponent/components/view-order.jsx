//import PendingCard from "./pending-card";

import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewOrder() {
  const { order_id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        if (order_id) {
          const response = await axios.get(`https://swifdropp.onrender.com/api/v1/orders/${order_id}`);
          console.log('Response:', response.data); // Log the API response
          setOrderDetails(response.data);
        } else {
          throw new Error('Order ID is undefined');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchOrderDetails();
  }, [order_id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!orderDetails) {
    return <p>No order found.</p>;
  }

 // Calculate total amount
 const orderTotal = orderDetails.orderTotal;

 return (
   <>
     <div className="pb-5">
       <div className="align-top bg-white p-3">
         <div className="w-100">
           <h2>Orders</h2>
           <div className="d-flex justify-content-between align-item-center">
             <div className="d-flex justify-content-between gap-3">
               <div className="user-bg">J</div>
               <div>
                 <strong>Order #{orderDetails.orderId}</strong>
               </div>
             </div>
             <div>{new Date(orderDetails.orderDate).toLocaleString()}</div>
           </div>
         </div>
       </div>
       <div className="mt-3">
         <div className="row row-cols-1 row-cols-md-12 g-4">
         {orderDetails.orderItems.map((orderItems, index) => {
  console.log('Item:', orderItems); // Log each item
  return (
    <div className="col" key={index}>
      <div className="card" style={{ backgroundColor: '#DBFFDC', border: '2px solid #4CAF50' }}>
        <div className="card-body">
          <div className="mt-3">
            <div className="space-flex mt-2">
              <div className="space-flex gap-2">
                <img src={orderItems.foodImage} alt={orderItems.foodName} />
                <div>{orderItems.foodName}</div>
              </div>
              <div>
                <span>Price: </span>
                <strong>{orderItems.price}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})}
         </div>
       </div>
       <div>
         <hr />
         <div className="column-flex gap-2">
           <div className="space-flex pt-0 mt-0">
             <span>Total:</span>
             <strong>N{orderTotal}</strong>
           </div>
         </div>
         <div className="d-flex justify-content-center gap-3 mt-2">
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