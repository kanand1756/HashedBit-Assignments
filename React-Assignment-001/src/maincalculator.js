// Calculator.js
import React, { useState } from 'react';
import './calculatorcss.css';

function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleAddition = () => {
        setResult(parseFloat(num1) + parseFloat(num2));
    };

    const handleSubtraction = () => {
        setResult(parseFloat(num1) - parseFloat(num2));
    };

    const handleMultiplication = () => {
        setResult(parseFloat(num1) * parseFloat(num2));
    };

    const handleDivision = () => {
        setResult(parseFloat(num1) / parseFloat(num2));
    };

    return (
        <div className="calculator">
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
            <div>
                <button onClick={handleAddition}>+</button>
                <button onClick={handleSubtraction}>-</button>
                <button onClick={handleMultiplication}>*</button>
                <button onClick={handleDivision}>/</button>
            </div>
            <div>Result: {result}</div>
        </div>
    );
}

export default Calculator;
