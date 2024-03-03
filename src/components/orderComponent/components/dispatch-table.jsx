import pendingOrdersData from './pendingOrdersData';
import { Link } from 'react-router-dom';
export default function DeliveryOrder() {
    
    return (
        <>
            <div className="p-0 m-0">
                <div>
                    <p>Note: Clicking “confirm id” confirms the identity of the driver</p>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr className='text-center'>
                        <th scope="col">ORDER ID</th>
                        <th scope="col">DRIVER</th>
                        <th scope="col">DRIVER'S NAME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                    {pendingOrdersData.map((order, orderIndex) => (
                        <tr key={orderIndex} className='text-center'>
                            <td scope="row">#{order.orderNumber}</td>
                            <td><img src='' alt='dri-img'/></td>
                            <td>{order.driverName}</td>
                            <td>{order.driverEmail}</td>
                            <td>
                                <Link to="" className="btn btn-sm btn-white outline-success border-success text-success">
                                    Successful
                                </Link>
                            </td>
                            <td>
                                <Link to="" className="btn btn-sm btn-secondary">
                                    Confirm ID
                                </Link>
                            </td>
                        </tr>
                    ))}
                        
                    </tbody>
                </table>
            </div>
        </>
    );
}
