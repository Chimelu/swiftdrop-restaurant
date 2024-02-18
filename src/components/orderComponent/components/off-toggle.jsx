import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OffToggleComponent() {
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (!isChecked) {
            navigate("/pending-order");
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
                    <img src="/public/Vector-nothing-to-see.svg" alt="Nothing to see" />
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
