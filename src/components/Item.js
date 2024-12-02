// Item.js
import React from "react";

function Item({ item, handleRemoveItem, handleUpdateItem }) {
  return (
    <li className="item" title="Click to remove">
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => handleUpdateItem(item.id)} // Trigger handleUpdateItem on checkbox change
      />
      {item.description} ({item.quantity})
      <button onClick={() => handleRemoveItem(item.id)}>🗑️</button>
    </li>
  );
}

export default Item;
