import React, { useState } from 'react';
import CloseButton from '../Buttons/CloseButton.jsx'
import UrlField from '../Fields/UrlField.jsx'
import DateAndTimeSelector from '../DateAndTimeSelector.jsx'
import NotificationTypeSelector from '../NotificationTypeSelector.jsx'
import SaveButton from '../Buttons/SaveButton.jsx'


export default function MainPage() {
    const [url, setUrl] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [notificationType, setNotificationType] = useState('');

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
      };
    
      const handleDateTimeChange = (newDateTime) => {
        setDateTime(newDateTime);
      };
    
      const handleNotificationTypeChange = (selectedType) => {
        setNotificationType(selectedType);
      };

    return (
    <div className='MainPage'>
        <div className='MainPageContainer'>
            <CloseButton />
            <div className='MainPageMainContainer'>
                <h1 className="Mainh1">Remind me about this URL</h1>
                <h2 className="MainSubtitle">URL</h2>
                <UrlField onUrlChange={handleUrlChange} />
                <DateAndTimeSelector onDateTimeChange={handleDateTimeChange} />
                <NotificationTypeSelector onNotificationTypeChange={handleNotificationTypeChange} />
                <SaveButton
                    url={url}
                    dateTime={dateTime}
                    notificationType={notificationType}
                />
            </div>
        </div>
    </div>
    )
}