import React from 'react';
import SelectableOptionRectangle from "./SelectableOptionRectangle";
import CalendarButton from "./Buttons/CalendarButton";

export default function DateSelector({ onDateChange }) {
  const handleDateChange = (selectedDate) => {
    onDateChange(selectedDate);
  };

  return (
    <div className="DateSelector">
      <SelectableOptionRectangle onClick={() => handleDateChange('Tomorrow')}>
        <div>Tomorrow</div>
      </SelectableOptionRectangle>
      <SelectableOptionRectangle onClick={() => handleDateChange('In a week')}>
        <div>In a week</div>
      </SelectableOptionRectangle>
      <SelectableOptionRectangle onClick={() => handleDateChange('In a month')}>
        <div>In a month</div>
      </SelectableOptionRectangle>
      <SelectableOptionRectangle onClick={() => handleDateChange('Random day')}>
        <div>Random day</div>
      </SelectableOptionRectangle>
      <CalendarButton />
    </div>
  );
}
