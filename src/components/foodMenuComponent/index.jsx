/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import FoodMenuData from './foodMenu.js'


export default function FoodMenuComponent() {

    return (

        <>

            <div className="pb-5">
            
                <div className="align-top bg-white p-3 py-4">
                    
                    <div className="d-flex w-100 justify-content-between align-item-center">
                    <div className="">
                        <h2>Food Menu</h2>
                    </div>
                    <div className="">
                        <button className="btn btn-success px-3" data-toggle="modal" data-target="#foodMenuModal"><span className='pr-2'>+</span> Add Menu</button>
                    </div>
                    </div>

                </div>
                <div className="mt-3">
                    <div className="row row-cols-1 row-cols-md-12 g-4">
                    {FoodMenuData.map((food, FoodMenuDataIndex) => (
                        <div className="col" key={FoodMenuDataIndex}>
                        <div className="card" style={{ backgroundColor: '#DBFFDC', border: '2px solid #4CAF50' }}>
                            <div className="card-body">
                            
                                <div  className='space-flex'>

                                                    
                                            <Link to={`/menu/${food.menu}`} style={{ textDecoration: 'none' }}>
                                                <strong>{food.menu}</strong>
                                            </Link>
                                        
                                            <div className="space-flex gap-3">
                                                <a href='#'><img src='/public/image/edit_icon.svg' /> </a>
                                                <a href='#'><img src='/public/image/deleteImg.svg' /> </a>

                                            </div>
                                            
                                       
                                    
                                    
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
                        {FoodMenuData.map((order, index) => (
                        <div className="col" key={index}>
                            <div className="card" style={{ backgroundColor: '#DBFFDC', border: '2px solid #4CAF50' }}>
                            <div className="card-body">
                                
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


                <div className="modal" id="foodMenuModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        
                        <div className="modal-header">
                            <h4 className="modal-title">Add New Menu</h4>
                            {/* <button type="button" className="close" data-dismiss="modal">&times;</button> */}
                        </div>

                        
                        <div className="modal-body">
                            
                            <form>
                            <div className="form-group">
                                <label htmlFor="name">Menu Name</label>
                                <input type="text" className="form-control" id="name"/>
                            </div>
                            
                            
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-success">Submit</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </form>
                        </div>

                        </div>
                    </div>
                </div>

                

            </div>
            
        </>

    )

}