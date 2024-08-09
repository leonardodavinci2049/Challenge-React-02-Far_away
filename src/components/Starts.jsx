import React from "react";

const Starts = ({ items }) => {
  if (!items.length) {
    return <p className="stats"><em>🛄 Nothing to pack for now!</em></p>;
  }

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? "You got everything! Ready to go ✈️" : `
        👜 You have ${totalItems} itens on your list, and you already packed
        ${packedItems} (${percentage}%).
        `}
      </em>
    </footer>
  );
};

export default Starts;
