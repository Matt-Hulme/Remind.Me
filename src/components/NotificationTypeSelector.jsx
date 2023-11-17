import { React, useState } from 'react';
import SelectableOptionRectangle from "./SelectableOptionRectangle";

export default function NotificationTypeSelector({ onNotificationTypeChange }) {
  const [activeNotificationType, setActiveNotificationType] = useState ('');

  const handleNotificationTypeSelection = (selectedNotification) => {
    if (activeNotificationType === selectedNotification) {
      setActiveNotificationType('');
      onNotificationTypeChange('');
    }else {
      setActiveNotificationType(selectedNotification);
      onNotificationTypeChange(selectedNotification);
    }
  }


  return (
    <div className="NotificationTypeSelectorContainer">
      <div className="NotificationTypeSelectorText">Notify me via...</div>
      <div className="NotificationTypeSelector">
        <SelectableOptionRectangle
          onClick={() => handleNotificationTypeSelection("Email")}
          className={activeNotificationType === "Email" ? 'NotiTypeActive' : ''}
        >
          Email
        </SelectableOptionRectangle>
        <SelectableOptionRectangle
          onClick={() => handleNotificationTypeSelection("Browser notification")}
          className={activeNotificationType === "Browser notification" ? 'NotiTypeActive' : ''}
        >
          Browser notification
        </SelectableOptionRectangle>
      </div>
    </div>
  );
}
