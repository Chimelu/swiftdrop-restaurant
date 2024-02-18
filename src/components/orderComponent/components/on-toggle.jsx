import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OnToggleComponent() {
    const [isChecked, setIsChecked] = useState(true);
    const navigate = useNavigate();

    const handleCheckboxChange = () => {
        setIsChecked(prevState => {
            if (!prevState) {
                navigate("/orders");
            }
            return !prevState;
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
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
