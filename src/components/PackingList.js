// PackingList.js
import React from "react";
import Item from "./Item"; // Import Item component

function PackingList({ items, handleRemoveItem, handleUpdateItem }) {
  return (
    <div className="list-container">
      <ul className="list">
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleRemoveItem={handleRemoveItem}
            handleUpdateItem={handleUpdateItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
