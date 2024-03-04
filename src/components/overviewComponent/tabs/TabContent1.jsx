import React, { useState, useEffect } from 'react';

const TabComponent = ({ orders }) => {
  const formatDate = (dateString) => {
    const options = {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    const date = new Date(dateString);
    return date.toLocaleString('en-US', options).replace(',', '');
  };

  const getStatusClassName = (status) => {
    switch (status) {
      case 'delivered':
        return 'status-delivered';
      case 'declined':
        return 'status-declined';
      case 'pending':
        return 'status-pending';
      default:
        return '';
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">
            <input type="checkbox" />
          </th>
          <th scope="col" style={{ textAlign: 'center' }}>
            Customer's Name
          </th>
          <th scope="col" style={{ textAlign: 'center' }}>
            ORDER ID
          </th>
          <th scope="col" style={{ textAlign: 'center' }}>
            Driver's Name
          </th>
          <th scope="col" style={{ textAlign: 'center' }}>
            Status
          </th>
          <th scope="col" style={{ textAlign: 'center' }}>
            Date
          </th>
          <th scope="col" style={{ textAlign: 'center' }}>
            Total Spent
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index}>
            <td>
              <input type="checkbox" />
            </td>
            <td className="table-data">{order.userName}</td>
            <td className="table-data">#{order.orderId}</td>
            <td className="table-data">{order.assignedDriver?.username}</td>
            <td
              className={`table-data ${getStatusClassName(order.orderStatus)}`}
            >
              {order.orderStatus}
            </td>
            <td className="table-data">{formatDate(order.orderDate)}</td>
            <td className="table-data">#{order.totalAmount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabComponent;
