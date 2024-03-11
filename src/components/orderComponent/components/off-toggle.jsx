import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function OffToggleComponent() {
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.patch('https://swifdropp.onrender.com/api/v1/restaurant/available/658539fb00f8fe9b7e53dbfa')
            .then(response => {
                const isOpen = response.data.isOpen;
                setIsChecked(isOpen);
            })
            .catch(error => {
                console.error('Error fetching initial switch state:', error);
                // Handle error - set a default state or show an error message to the user
            });
    }, []);

    const handleCheckboxChange = () => {
        const newSwitchState = !isChecked;

        // axios.post('https://swifdropp.onrender.com/api/v1/restaurant/available/658539fb00f8fe9b7e53dbfa', { isOpen: newSwitchState })
        //     .then(response => {
        //         setIsChecked(newSwitchState);
        //         if (newSwitchState) {
        //             navigate("/pending-order");
        //         } else {
        //             navigate("/orders");
        //         }
        //     })
        //     .catch(error => {
        //         console.error('Error updating switch state:', error);
                
        //     });

        setIsChecked(newSwitchState);

        // Test navigation
        if (newSwitchState) {
            navigate("/pending-order");
        } else {
            navigate("/orders");
        }
    };

    const handleButtonClick = () => {
        navigate("/overview");
    };


    return (
        <>
            <div>
                <h2>Orders</h2>
                <div className="toggle-div space-flex">
                    <div className="toggle-text">Toggle off displays your restaurant as closed</div>
                    <div className="form-check form-switch cursor-pointer">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            style={{ cursor: "pointer" }}
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                    </div>
                </div>
                <div className="nothing-to-see">
                    <img src="/public/image/Vector-nothing-to-see.svg" alt="Nothing to see" />
                </div>
                <div className="nothing-to-see-text">
                    <h3>Nothing to Show</h3>
                    <button className="btn text-white" onClick={handleButtonClick}>
                        Go to Dashboard
                    </button>
                </div>
            </div>
        </>
    );
}
