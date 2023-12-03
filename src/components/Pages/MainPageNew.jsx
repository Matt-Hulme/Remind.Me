import React, { useState } from 'react';
import EmailCaptureField from '../Fields/EmailCaptureField.jsx';
import UrlField from '../Fields/UrlField.jsx';
import DateAndTimeSelector from '../DateAndTimeSelector.jsx';
import Description from '../Description.jsx';
import NotiTypeSelector from '../NotiTypeSelector.jsx';
import SaveButton from '../Buttons/SaveButton.jsx';

export default function MainPage() {
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidUrl, setIsValidUrl] = useState(true);
  const [isEmailTextboxEmpty, setIsEmailTextboxEmpty] = useState(true);
  const [isUrlTextboxEmpty, setIsUrlTextboxEmpty] = useState(true);
  const [notiDate, setNotiDate] = useState('');
  const [notiTime, setNotiTime] = useState('');
  const [notiType, setNotiType] = useState('');
  const [url, setUrl] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  const handleEmailChange=(event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(emailRegex.test(newEmail));
    setIsEmailTextboxEmpty(false);
  }

  const handleUrlChange = (event) => {
    const newUrl = event.target.value;
    setUrl(newUrl);
    setIsValidUrl(urlRegex.test(newUrl));
    setIsUrlTextboxEmpty(false);
  };

  const handleDateChange = (newDate) => {
    setNotiDate(newDate);
  };

  const handleTimeChange = (newTime) => {
    setNotiTime(newTime);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleNotiTypeChange = (selectedType) => {
    setNotiType(selectedType);
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
            onEmailChange={handleEmailChange}
            isValidEmail={isValidEmail}
            isEmailTextboxEmpty={isEmailTextboxEmpty}
          />
          <h1 className="Mainh1">Remind me about this URL</h1>
          <UrlField 
            onUrlChange={handleUrlChange} 
            isValidUrl={isValidUrl}
            isUrlTextboxEmpty={isUrlTextboxEmpty}
          />
          <DateAndTimeSelector onDateChange={handleDateChange} onTimeChange={handleTimeChange} />
          <Description onDescriptionChange={handleDescriptionChange}/>
          <NotiTypeSelector onNotiTypeChange={handleNotiTypeChange} />
          <SaveButton
            url={url}
            notiDate={notiDate}
            notiTime={notiTime}
            notifiType={notiType}
          />
        </div>
      </div>
    </div>
  );
}
