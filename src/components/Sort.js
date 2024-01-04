import React, { useState } from 'react';

const SortableList = () => {
  const [numbers, setNumbers] = useState([1, 3, 5, 9, 10]);
  const [isDescending, setIsDescending] = useState(true);

  const changeOrder = () => {
    const newOrder = isDescending ? [...numbers].sort((a, b) => b - a) : [...numbers].sort((a, b) => a - b);
    setNumbers(newOrder);
    setIsDescending(!isDescending);
  };

  return (
    <div>
      <h1>Sortable List</h1>
      <button onClick={changeOrder}>
        {isDescending ? 'Change to Ascending Order' : 'Change to Descending Order'}
      </button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default SortableList;
