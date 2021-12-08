import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

function Card({ img, price, title, quantity, index, cards, setCards, card }) {
  const [input, setInput] = useState(quantity);
  //set the state's initial value to be quantity so they're sync together
  const handleRemove = () => {
    let filtered = cards.filter((card) => card.title !== title);
    setCards(filtered);
  };

  const handleInput = (e) => {
    if (e.target.value < 0) {
      setInput(1);
      return;
    }
    setInput(e.target.value);
  };

  useEffect(() => {
    let except = cards.filter((x) => x.title !== title);
    setCards([
      ...except,
      {
        ...card,
        quantity: input,
      },
    ]);
    //this effect filters out our current card component than adds it again to the cards state as a new item with a updated quantity property
  }, [input]);

  return (
    <div className="card">
      <img src={img} alt={`cardpic-${index}`} />
      <p className="card-name">{title}</p>
      <p className="card-price">${price}</p>
      <input
        min="1"
        value={input}
        onChange={handleInput}
        step="1"
        type="number"
      />
      <span className="remove" onClick={handleRemove}>
        <FaTrash />
      </span>
    </div>
  );
}

export default Card;
