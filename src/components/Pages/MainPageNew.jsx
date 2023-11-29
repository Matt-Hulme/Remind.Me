import React, { useState } from 'react';
import CloseButton from '../Buttons/CloseButton.jsx';
import UrlField from '../Fields/UrlField.jsx';
import DateAndTimeSelector from '../DateAndTimeSelector.jsx';
import NotiTypeSelector from '../NotiTypeSelector.jsx';
import SaveButton from '../Buttons/SaveButton.jsx';
import EmailCaptureField from '../Fields/EmailCaptureField.jsx';
import Description from '../Description.jsx';

export default function MainPage() {
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [notiDate, setNotiDate] = useState('');
  const [notiTime, setNotiTime] = useState('');
  const [notiType, setNotiType] = useState('');


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleDateChange = (newDate) => {
    setNotiDate(newDate);
  };

  const handleTimeChange = (newTime) => {
    setNotiTime(newTime);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleNotiTypeChange = (selectedType) => {
    setNotiType(selectedType);
  };

  return (
    <div className='MainPage'>
      <div className='MainPageWrapper'>
        <div className='MainPageMainContainer'>
          <h1 className="Mainh1">Enter email</h1>
          <h2 className="Mainh2">We'll only use it to send you URL reminders—never to advertise.</h2>
          <EmailCaptureField onEmailChange={handleEmailChange}/>
          <h1 className="Mainh1">Remind me about this URL</h1>
          <UrlField onUrlChange={handleUrlChange} />
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
