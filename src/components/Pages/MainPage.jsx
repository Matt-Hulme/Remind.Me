import React, { useState } from 'react';
import EmailCaptureField from '../Fields/EmailCaptureField.jsx';
import UrlField from '../Fields/UrlField.jsx';
import DateAndTimeSelector from '../DateAndTimeSelector.jsx';
import Description from '../Description.jsx';
import NotiTypeSelector from '../NotiTypeSelector.jsx';
import SaveButton from '../Buttons/SaveButton.jsx';

export default function MainPage() {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidUrl, setIsValidUrl] = useState(true);
  const [isEmailTextboxEmpty, setIsEmailTextboxEmpty] = useState(true);
  const [isUrlTextboxEmpty, setIsUrlTextboxEmpty] = useState(true);
  const [notiEmail, setNotiEmail] = useState('');
  const [notiUrl, setNotiUrl] = useState('');
  const [notiDate, setNotiDate] = useState('');
  const [notiTime, setNotiTime] = useState('');
  const [notiDescription, setNotiDescription] = useState('');
  const [notiType, setNotiType] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  const handleNotiEmailChange=(event) => {
    const newNotiEmail = event.target.value;
    setNotiEmail(newNotiEmail);
    setIsValidEmail(emailRegex.test(newNotiEmail));
    setIsEmailTextboxEmpty(false);
  }

  const handleNotiUrlChange = (event) => {
    const newNotiUrl = event.target.value;
    setNotiUrl(newNotiUrl);
    setIsValidUrl(urlRegex.test(newNotiUrl));
    setIsUrlTextboxEmpty(false);
  };

  const handleDateChange = (newDate) => {
    setNotiDate(newDate);
  };

  const handleTimeChange = (newTime) => {
    setNotiTime(newTime);
  };

  const handleNotiDescriptionChange = (event) => {
    setNotiDescription(event.target.value);
  };

  const handleNotiTypeChange = (selectedType) => {
    setNotiType(selectedType);
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!isValidEmail && !isValidUrl) {
      console.error('Invalid email and URL');
      return;
    }
  
    try {
      // Sanitize user inputs before using them in the SQL query
  
      const response = await fetch('http://localhost:3000/create-reminder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ notiEmail, notiUrl, notiDate, notiTime, notiDescription, notiType }),
      });
  
      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Email sending failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='MainPage'>
      <div className='MainPageWrapper'>
        <div className='MainPageMainContainer'>
          <h1 className="Mainh1">Enter email</h1>
          <h2 className="Mainh2">We'll only use it to send you URL reminders—never to advertise.</h2>
          <EmailCaptureField
            onNotiEmailChange={handleNotiEmailChange}
            isValidEmail={isValidEmail}
            isEmailTextboxEmpty={isEmailTextboxEmpty}
          />
          <h1 className="Mainh1">Remind me about this URL</h1>
          <UrlField 
            onNotiUrlChange={handleNotiUrlChange} 
            isValidUrl={isValidUrl}
            isUrlTextboxEmpty={isUrlTextboxEmpty}
          />
          <DateAndTimeSelector 
            onDateChange={handleDateChange} 
            onTimeChange={handleTimeChange} 
          />
          <Description 
            onNotiDescriptionChange={handleNotiDescriptionChange}
          />
          <NotiTypeSelector onNotiTypeChange={handleNotiTypeChange} />
          <SaveButton
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
