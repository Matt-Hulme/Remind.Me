import React, { useState } from 'react';
import SelectableOptionButton from "./SelectableOptionButton";
import CalendarButton from "./Buttons/CalendarButton";

export default function DateSelector({ onDateChange }) {
  const [activeDate, setActiveDate] = useState('');

  const handleDateSelection = (selectedDate) => {
    if (activeDate === selectedDate) {
      setActiveDate(''); // Deselect if the same date is clicked
      onDateChange(''); // Notify the parent component about the deselection
      console.log('Date Selection Cleared')
    } else {
      setActiveDate(selectedDate); // Set the selected date in state
      onDateChange(selectedDate); // Notify the parent component about the selected date
      console.log(selectedDate)
    }
  };

  return (
    <div className="DateSelector">
      <SelectableOptionButton
        onClick={() => handleDateSelection('Tomorrow')}
        className={activeDate === 'Tomorrow' ? 'NotiDateActive' : ''}
      >
        <div>Tomorrow</div>
      </SelectableOptionButton>

      <SelectableOptionButton
        onClick={() => handleDateSelection('In a week')}
        className={activeDate === 'In a week' ? 'NotiDateActive' : ''}
      >
        <div>In a week</div>
      </SelectableOptionButton>

      <SelectableOptionButton
        onClick={() => handleDateSelection('In a month')}
        className={activeDate === 'In a month' ? 'NotiDateActive' : ''}
      >
        <div>In a month</div>
      </SelectableOptionButton>
      {/* <CalendarButton /> */}
    </div>
  );
}
