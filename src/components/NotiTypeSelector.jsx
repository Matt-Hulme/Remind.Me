import { React, useState } from 'react';
import SelectableOptionRectangle from "./SelectableOptionRectangle";

export default function NotiTypeSelector({ onNotiTypeChange }) {
  const [activeNotiType, setActiveNotiType] = useState ('');

  const handleNotiTypeSelection = (selectedNoti) => {
    if (activeNotiType === selectedNoti) {
      setActiveNotiType('');
      onNotiTypeChange('');
    }else {
      setActiveNotiType(selectedNoti);
      onNotiTypeChange(selectedNoti);
    }
  }


  return (
    <div className="NotiTypeSelectorContainer">
      <div className="NotiTypeSelectorText">Notify me via...</div>
      <div className="NotiTypeSelector">
        <SelectableOptionRectangle
          onClick={() => handleNotiTypeSelection("Email")}
          className={activeNotiType === "Email" ? 'NotiTypeActive' : ''}
        >
          Email
        </SelectableOptionRectangle>
        <SelectableOptionRectangle
          onClick={() => handleNotiTypeSelection("Browser notification")}
          className={activeNotiType === "Browser notification" ? 'NotiTypeActive' : ''}
        >
          Browser notification
        </SelectableOptionRectangle>
      </div>
    </div>
  );
}
