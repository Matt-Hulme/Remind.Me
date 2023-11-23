import { React, useState } from 'react';
import SelectableOptionButton from "./SelectableOptionButton";

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
        <SelectableOptionButton
          onClick={() => handleNotiTypeSelection("Email")}
          className={activeNotiType === "Email" ? 'NotiTypeActive' : ''}
        >
          Email
        </SelectableOptionButton>
        <SelectableOptionButton
          onClick={() => handleNotiTypeSelection("Browser notification")}
          className={activeNotiType === "Browser notification" ? 'NotiTypeActive' : ''}
        >
          Browser notification
        </SelectableOptionButton>
      </div>
    </div>
  );
}
