import React from 'react';
import Checkbox from '../Buttons/Checkbox.jsx';

export default function UrlField({ onUrlChange }) {
  return (
    <div className="UrlField">
      <h2 className="MainSubtitle">URL</h2>
      <form className="UrlFieldForm">
        <Checkbox />
        <label htmlFor="UrlTextBox"></label>
        <input
          className="UrlTextBox"
          type="text"
          id="UrlTextBox"
          onChange={onUrlChange}
          placeholder='www.exampleurl.com'
        />
      </form>
    </div>
  );
}
