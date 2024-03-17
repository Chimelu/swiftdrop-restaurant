/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import TabComponent from './tabs/TabContent1';
import TabComponent2 from './tabs/TabContent2';
import TabComponent3 from './tabs/TabContent3';
import { useState, useEffect } from 'react';
import Filter from '../../Asset/Filter.png';
import Group from '../../Asset/Group.png';
import Truck from '../../Asset/Truck.png';
import { useNavigate } from 'react-router';
export default function OverviewComponent() {
  const [activeTab, setActiveTab] = useState('all');
  const [orders, setOrders] = useState([]);
  const [newOrders, setNewOrders] = useState([]);
  const [confirmOrders, setConfirmOrders] = useState([]);
  const [onOrders, setOnOrders] = useState([]);
  const [deliveredOrders, setDeliveredOrders] = useState([]);
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate()

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          `https://swifdropp.onrender.com/api/v1/orders/restaurantorderss/${userId}`
        );
        const data = await response.json();

        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [userId]);

  useEffect(() => {
    const fetchNewOrders = async () => {
      try {
        const response = await fetch(
          `https://swifdropp.onrender.com/api/v1/restaurant/pending/${userId}`
        );
        const data = await response.json();
        console.log(data);
        setNewOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchNewOrders();
  }, [userId]);

  useEffect(() => {
    const fetchConfirmOrders = async () => {
      try {
        const response = await fetch(
          `https://swifdropp.onrender.com/api/v1/restaurant/confirm/${userId}`
        );
        const data = await response.json();

        setConfirmOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchConfirmOrders();
  }, [userId]);

  useEffect(() => {
    const fetchOnOrders = async () => {
      try {
        const response = await fetch(
          `https://swifdropp.onrender.com/api/v1/restaurant/ontheway/${userId}`
        );
        const data = await response.json();

        setOnOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOnOrders();
  }, [userId]);
  useEffect(() => {
    const fetchDeliveredOrders = async () => {
      try {
        const response = await fetch(
          ` https://swifdropp.onrender.com/api/v1/restaurant/delivered/${userId}`
        );
        const data = await response.json();

        setDeliveredOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchDeliveredOrders();
  }, [userId]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const sliderStyle = {
    width: '100px',
    height: '3px',
    backgroundColor: 'blue',
    marginTop: '5px',
    marginLeft:
      activeTab === 'succeeded'
        ? '-1.30%'
        : activeTab === 'refunded'
        ? '8.85%'
        : '16.66%',
  };

  return (
    <main>
      <h2>Overview</h2>
      <div className="overview-orders">
        <div className="new-orders">
          <div className="orders1" style={{cursor:"pointer"}}>
            <p className="order-heading" >New Orders</p>
            <img src={Group} alt="group" />
          </div>
          <div>
            <h1 className="number">{newOrders.totalPendingOrders}</h1>
            <ul>
              <li className="order-number">Updated at every new order</li>
            </ul>
          </div>
        </div>
        <div className="delivery-ready">
          <div className="orders1">
            <p className="order-heading">Delivery ready</p>
            <img src={Group} alt="group" />
          </div>
          <div>
            <h1 className="number">{confirmOrders.totalConfirmedOrders}</h1>
            <ul>
              <li className="order-number">Confirm driver's ID and order ID</li>
            </ul>
          </div>
        </div>
        <div className="dispatched">
          <div className="orders1">
            <p className="order-heading">Dispatched</p>
            <img src={Truck} alt="group" />
          </div>
          <div className="picked">
            <h1 className="number">{onOrders.totalOnthewayOrders}</h1>
            <ul>
              <li className="order-number">Orders picked up by the driver</li>
            </ul>
          </div>
        </div>
        <div className="today">
          <div>
            <p className="order-heading">Today's total order</p>
            {/* <img src={Group} alt="group" /> */}
          </div>
          <div>
            <h1 className="number">{deliveredOrders.totalDeliveredOrders}</h1>
          </div>
        </div>
      </div>
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === 'succeeded' ? 'active' : ''
              }`}
              onClick={() => handleTabClick('succeeded')}
              style={{ marginRight: '30px' }}
            >
              Succeeded
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'refunded' ? 'active' : ''}`}
              onClick={() => handleTabClick('refunded')}
              style={{ marginRight: '30px' }}
            >
              Refunded
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => handleTabClick('all')}
              style={{ marginRight: '30px' }}
            >
              All
            </button>
          </li>

          <button className="filtered">
            <span>
              <img src={Filter} alt="filter" />
            </span>
            Filter
          </button>
        </ul>
        <div className="tab-slider" style={sliderStyle} />
        {Array.isArray(orders) && (
          <>
            {activeTab === 'all' && <TabComponent orders={orders} />}
            {activeTab === 'succeeded' && <TabComponent2 orders={orders} />}
            {activeTab === 'refunded' && <TabComponent3 orders={orders} />}
          </>
        )}
      </div>
    </main>
  );
}
