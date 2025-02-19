"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
    const [counter, setCounter] = useState(0);
    const [prizes, setPrizes] = useState(0);

    const handleClick = async () => {
        const userId = "65f21ab83a45b44c98b12345";  // Valid MongoDB ObjectId
        const { data } = await axios.post("http://localhost:5000/click", { userId });
        setCounter(data.counter);
        setPrizes(data.prizes);
    };
    

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Cookie Clicker Game</h1>
            <button onClick={handleClick} style={{ fontSize: "20px", padding: "10px" }}>
                Click Me!
            </button>
            <h2>Counter: {counter}</h2>
            <h2>Prizes: {prizes}</h2>
        </div>
    );
}
