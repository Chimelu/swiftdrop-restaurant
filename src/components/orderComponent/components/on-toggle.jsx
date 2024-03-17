import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



export default function OnToggleComponent() {
    const [isOpen, setIsOpen] = useState(false); // Initialize isOpen to false
    const [isLoading, setIsLoading] = useState(true); // Track loading state
    const navigate = useNavigate();

    useEffect(() => {
        axios.patch('https://swifdropp.onrender.com/api/v1/restaurant/available/658539fb00f8fe9b7e53dbfa')
            .then(response => {
                const isOpenFromApi = response.data.isOpen;
                setIsOpen(isOpenFromApi);
                setIsLoading(false); // Once state is fetched, set loading to false
            })
            .catch(error => {
                console.error('Error fetching initial switch state:', error);
                setIsLoading(false); // Set loading to false even on error
                // Handle error - set a default state or show an error message to the user
            });
    }, []);

    const handleCheckboxChange = () => {
        const newSwitchState = !isOpen;

        axios.patch('https://swifdropp.onrender.com/api/v1/restaurant/available/658539fb00f8fe9b7e53dbfa', { isOpen: newSwitchState })
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
                    {!isLoading && (
                        <div className="form-check form-switch cursor-pointer">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                style={{ cursor: "pointer" }}
                                checked={isOpen}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
