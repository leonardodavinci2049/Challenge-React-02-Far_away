import React, { useState } from "react";

const Form = ({onAddItems}) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(5);




  function handleSubmit(e) {
    e.preventDefault();

    if (!description.trim()) {
      return;
    }

    const newItem = {id: Date.now(), description, quantity, packed: false };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select name="" id="" value={quantity} onChange={(e) => setQuantity(Number(e.target.value)) }>
        {Array.from({ length: 10 }, (_, i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
