import React, { useState } from "react";
import add from "./utils/StringCalculator";

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setResult(null);
        setInput(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setError("");
            const sum = add(input);
            setResult(sum);
        } catch (err) {
            setError(err.message);
            setResult(null);
        }
    };

    return (
        <div className="container">
            <h2>String Calculator</h2>
            <form onSubmit={handleSubmit} className="form">
                <textarea
                    placeholder="Please enter numbers separated by commas or newlines"
                    value={input}
                    onChange={handleInputChange}
                    className="input"
                    rows={4}
                />
                <button type="submit" className="button">Calculate</button>
            </form>
            {error && <div className="error">Error: {error}</div>}
            {result !== null && (
                <div className="result">Sum: {result}</div>
            )}
        </div>
    );
};

export default Calculator;
