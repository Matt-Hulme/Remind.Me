import {React, useState} from 'react';
import ClockButton from './Buttons/ClockButton';
import SelectableOptionRectangle from './SelectableOptionRectangle';

export default function TimeSelector({ onTimeChange }) {
  const [activeTime, setActiveTime] = useState ('');

  const handleTimeSelection = (selectedTime) => {
    if (activeTime === selectedTime) {
      setActiveTime(''); // Deselect if the same time is clicked
      onTimeChange(''); // Notify the parent component about the deselection
    } else {
      setActiveTime(selectedTime); // Set the selected time in state
      onTimeChange(selectedTime); // Notify the parent component about the selected time
    }
  };

  return (
    <div className="TimeSelector">
      <div>
        At
      </div>
      <SelectableOptionRectangle 
        onClick={() => handleTimeSelection('8AM')}
        className={activeTime === '8AM' ? 'NotiTimeActive' : ''}
      >
        
        <div>
          8AM
        </div>
      </SelectableOptionRectangle>
      <SelectableOptionRectangle 
        onClick={() => handleTimeSelection('5PM')}
        className={activeTime === '5PM' ? 'NotiTimeActive' : ''}
      >
        <div>
          5PM
        </div>
      </SelectableOptionRectangle>
      <ClockButton />
    </div>
  );
}
