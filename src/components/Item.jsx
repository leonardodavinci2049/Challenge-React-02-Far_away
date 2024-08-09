import React from "react";

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  console.log(item);

  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <input
        type="checkbox"
        defaultChecked={item.packed}
        value={item.packed}
        onChange={() => {
        onToggleItem(item.id);
        }}
      />
      <span>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
