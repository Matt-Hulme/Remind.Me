import React from 'react';
import DateSelector from "./DateSelector";
import TimeSelector from './TimeSelector';
import Description from './Description';

export default function DateAndTimeSelector({ onDateChange, onTimeChange }) {
  return (
    <div className="DateAndTimeSelector">
      <h2 className="MainSubtitle" id="DateAndTimeSelectorSubtitle">Remind Me...</h2>
      <DateSelector onDateChange={onDateChange} />
      <TimeSelector onTimeChange={onTimeChange} />
    </div>
  );
}
