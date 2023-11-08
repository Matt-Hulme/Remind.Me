import React from 'react';
import Checkbox from '../Buttons/Checkbox.jsx';

export default function UrlField({ onUrlChange }) {
  return (
    <div className="UrlField">
      <form className="UrlFieldForm">
        <Checkbox />
        <label htmlFor="UrlTextBox">URL</label>
        <input
          className="UrlTextBox"
          type="text"
          id="UrlTextBox"
          onChange={onUrlChange}
        />
      </form>
    </div>
  );
}
