import React from 'react';

export default function DescriptionField() {
  return (
    <div className="DescriptionField">
      <form className="DescriptionFieldForm">
        <label htmlFor="DescriptionTextBox"></label>
        <textarea
          className="DescriptionTextBox"
          placeholder="Optional"
        ></textarea>
      </form>
    </div>
  );
}
