import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./styles.css";


export const SimpleCounter = () => {

    const [count, setCount] = useState(0);

    const handleMinus = () => {
        setCount((prevState) => prevState - 1);
    }

    const handlePlus = () => {
        setCount((prevState) => prevState + 1);
    }



    return (<div className="counter_container">
        <div className="counter_number">
            <h1>{count}</h1>
        </div>
        <div className="counter-button">
            <button onClick={handleMinus}><FaMinus /></button>
            <button onClick={handlePlus}><FaPlus /></button>
        </div>
    </div>
    )
}