import { useState, useEffect } from 'react';
import Checkbox from '../Buttons/Checkbox';

export default function EmailCaptureField() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(emailRegex.test(newEmail));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isValidEmail) {
      console.error('Invalid email address');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/create-reminder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Handle success, e.g., show a confirmation message to the user
        console.log('Email sent successfully');
      } else {
        // Handle errors, e.g., show an error message
        console.error('Email sending failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="EmailCaptureField">
      <h2 className='MainSubtitle' id="EmailCapturePageH2">Email address</h2>
      <form className="EmailCaptureFieldForm" onSubmit={handleSubmit}>
        <Checkbox />
        <label htmlFor="EmailCaptureTextBox"></label>
        <input
          className={`EmailCaptureTextBox ${isValidEmail ? '' : 'invalid'}`}
          type="text"
          id="EmailCaptureTextBox"
          placeholder="forgetfulfred@remind.me"
          value={email}
          onChange={handleEmailChange}
        />
      </form>
      {!isValidEmail && (
        <p className="error-message">Please enter a valid email address</p>
      )}
    </div>
  );
}
