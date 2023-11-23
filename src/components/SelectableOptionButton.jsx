import React from 'react';

export default function SelectableOptionButton({ children, onClick, className }) {
  const handleOptionClick = () => {
    onClick(); 
  };

  return (
    <button
      type="button"
      onClick={handleOptionClick}
      className={`SelectableOptionButton ${className}`}
    >
      {children}
    </button>
  );
}
