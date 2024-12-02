// Stats.js
import React from "react";

function Stats({ items }) {
  const packedItems = items.filter((item) => item.packed).length;
  const packingPercentage =
    items.length > 0 ? Math.round((packedItems / items.length) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        {packingPercentage === 100
          ? "You got everything!"
          : `You have ${items.length} items in the list. You already packed ${packedItems} (${packingPercentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
