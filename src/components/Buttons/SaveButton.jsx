import React from 'react';

export default function SaveButton({ handleSubmit }) {

  return (
    <div className="SaveButtonContainer">
      <button type="button" className="SaveButton" onClick={handleSubmit}>
        <div>Save</div>
      </button>
    </div>
  );
}
