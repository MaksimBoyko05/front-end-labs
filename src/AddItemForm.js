import React, { useState } from "react";

const AddItemForm = ({ onAddItem }) => {
    const [inputValue, setInputValue,] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;
        onAddItem(inputValue);
        setInputValue('');
    };


return(
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Write a new element"
        />
        <button type="submit">Add</button>
        </form>
);
};
export default AddItemForm;