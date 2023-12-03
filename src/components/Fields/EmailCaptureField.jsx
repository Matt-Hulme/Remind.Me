import React from 'react';
import Checkbox from '../Buttons/Checkbox';

export default function EmailCaptureField({ onEmailChange, isValidEmail, isEmailTextboxEmpty}) {
  return (
    <div className="EmailCaptureField">
      <h2 className='MainSubtitle' id="EmailCapturePageH2">Email address</h2>
      <form className="EmailCaptureFieldForm">
        <Checkbox 
          passFail={isValidEmail} 
          isTextboxEmpty={isEmailTextboxEmpty} 
        />
        <label htmlFor="EmailCaptureTextBox"></label>
        <input
          className="EmailCaptureTextBox"
          type="text"
          id="EmailCaptureTextBox"
          placeholder="forgetfulfred@remind.me"
          onChange={onEmailChange}
        />
      </form>
      {!isValidEmail && (
        <p className="error-message">Please enter a valid email address</p>
      )}
    </div>
  );
}
