import React, { useState } from 'react';

export default function SelectableOptionRectangle({ children, onClick }) {
  const [isActive, setActive] = useState(false);

  const handleOptionClick = () => {
    setActive(!isActive);
    onClick(); 
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
