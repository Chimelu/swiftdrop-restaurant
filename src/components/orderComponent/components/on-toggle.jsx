import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function OnToggleComponent() {
    const [isOpen, setIsOpen] = useState(true); // Use a more descriptive variable name
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://swifdropp.onrender.com/api/v1/restaurant/available/658539fb00f8fe9b7e53dbfa')
            .then(response => {
                const isOpenFromApi = response.data.isOpen;
                setIsOpen(isOpenFromApi);
            })
            .catch(error => {
                console.error('Error fetching initial switch state:', error);
                // Handle error - you might want to set a default state or show an error message to the user
            });
    }, []);

    const handleCheckboxChange = () => {
        const newSwitchState = !isOpen;

        axios.post('https://swifdropp.onrender.com/api/v1/restaurant/available/658539fb00f8fe9b7e53dbfa', { isOpen: newSwitchState })
            .then(response => {
                setIsOpen(newSwitchState);

                if (newSwitchState) {
                    navigate("/pending-order");
                } else {
                    navigate("/orders");
                }
            })
            .catch(error => {
                console.error('Error updating switch state:', error);
                // Handle error - log the error or show an error message to the user
            });
    };


    return (
        <>
            <div>
                <div className="toggle-div space-flex">
                    <div className="toggle-text">Toggle on displays your restaurant as open</div>
                    <div className="form-check form-switch cursor-pointer">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            style={{ cursor: "pointer" }}
                            checked={isOpen}
                            onChange={handleCheckboxChange}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
