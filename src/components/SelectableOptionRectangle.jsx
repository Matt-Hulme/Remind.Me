import React, { useState } from 'react';

export default function SelectableOptionRectangle({ children, onClick }) {
  const [isActive, setActive] = useState(false);

  const handleOptionClick = () => {
    setActive(!isActive); // Toggle the active state
    onClick(); // Call the provided onClick function
  };

  return (
    <button
      type="button"
      className={`SelectableOptionButton ${isActive ? 'active' : ''}`}
      onClick={handleOptionClick}
    >
      {children}
    </button>
  );
}
