import React from 'react';
import SelectableOptionRectangle from "./SelectableOptionRectangle";

export default function NotificationTypeSelector({ onNotificationTypeChange }) {
  return (
    <div className="NotificationTypeSelectorContainer">
      <div className="NotificationTypeSelectorText">Notify me via...</div>
      <div className="NotificationTypeSelector">
        <SelectableOptionRectangle
          onClick={() => onNotificationTypeChange("Email")}
        >
          Email
        </SelectableOptionRectangle>
        <SelectableOptionRectangle
          onClick={() => onNotificationTypeChange("Browser notification")}
        >
          Browser notification
        </SelectableOptionRectangle>
      </div>
    </div>
  );
}
