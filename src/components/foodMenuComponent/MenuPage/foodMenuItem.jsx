import OnToggleComponent from "../../orderComponent/components/on-toggle";
const FoodMenuItem = () => {
  
  return (
    <div>
      <div className="align-top bg-white p-3 py-4">
                    
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-ite-center">
                <h2><span className="">Burger</span>
                <button className="btn mx-2" data-toggle="modal" data-target="#foodMenuModal" style={{backgroundColor: '#DBFFDC'}}>+</button>
                </h2>
            </div>
            <div className="">
              <OnToggleComponent />
            </div>
          </div>

      </div>
      <div className="mt-3">
        <div className="row row-cols-1 row-cols-md-3 ">
           
          <div className="col mb-3" >
            <div className="card card-radius" style={{ backgroundColor: '#DBFFDC', border: '2px solid #4CAF50' }}>
              <div className="card-body">
                
                <img src="../../../../public/image/burgerImg1.svg" className="foodItemImg" />
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <h5>Mega Stark Burger</h5>
                  <img src="../../../../public/image/pin-icon.svg" />
                </div>
                <div>
                  <span>Side dish</span>

                </div>
              </div>
            </div>
          </div>
          <div className="col mb-3" >
            <div className="card card-radius" style={{ backgroundColor: '#DBFFDC', border: '2px solid #4CAF50' }}>
              <div className="card-body">
                
                <img src="../../../../public/image/burgerImg1.svg" className="foodItemImg" />
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <h5>Mega Stark Burger</h5>
                  <img src="../../../../public/image/pin-icon.svg" />
                </div>
                <div>
                  <span>Side dish</span>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-3" >
            <div className="card card-radius" style={{ backgroundColor: '#DBFFDC', border: '2px solid #4CAF50' }}>
              <div className="card-body">
                
                <img src="../../../../public/image/burgerImg1.svg" className="foodItemImg" />
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <h5>Mega Stark Burger</h5>
                  <img src="../../../../public/image/pin-icon.svg" />
                </div>
                <div>
                  <span>Side dish</span>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-3" >
            <div className="card card-radius" style={{ backgroundColor: '#DBFFDC', border: '2px solid #4CAF50' }}>
              <div className="card-body">
                
                <img src="../../../../public/image/burgerImg1.svg" className="foodItemImg" />
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <h5>Mega Stark Burger</h5>
                  <img src="../../../../public/image/pin-icon.svg" />
                </div>
                <div>
                  <span>Side dish</span>

                </div>
              </div>
            </div>
          </div>
          <div className="col mb-3" >
            <div className="card card-radius" style={{ backgroundColor: '#DBFFDC', border: '2px solid #4CAF50' }}>
              <div className="card-body">
                
                <img src="../../../../public/image/burgerImg1.svg" className="foodItemImg" />
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <h5>Mega Stark Burger</h5>
                  <img src="../../../../public/image/pin-icon.svg" />
                </div>
                <div>
                  <span>Side dish</span>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-3" >
            <div className="card card-radius" style={{ backgroundColor: '#DBFFDC', border: '2px solid #4CAF50' }}>
              <div className="card-body">
                
                <img src="../../../../public/image/burgerImg1.svg" className="foodItemImg" />
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <h5>Mega Stark Burger</h5>
                  <img src="../../../../public/image/pin-icon.svg" />
                </div>
                <div>
                  <span>Side dish</span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default FoodMenuItem;
