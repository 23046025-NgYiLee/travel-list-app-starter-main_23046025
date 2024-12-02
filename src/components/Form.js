// Form.js
import React, { useState } from "react";

function Form({ handleAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (description.trim()) {
      const newItem = {
        id: Date.now(),
        description,
        quantity,
        packed: false,
      };

      handleAddItems(newItem);
      setDescription("");
      setQuantity(1);
    }
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <label htmlFor="quantity">Quantity: </label>
      <select
        id="quantity"
        name="quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <br />
      <label htmlFor="description">Item Description: </label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
