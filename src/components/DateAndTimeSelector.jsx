import React from 'react';
import DateSelector from "./DateSelector";
import TimeSelector from './TimeSelector';
import Description from './Description';

export default function DateAndTimeSelector({ onDateTimeChange }) {
  return (
    <div className="DateAndTimeSelector">
      <h2 className="MainSubtitle">Remind Me...</h2>
      <DateSelector onDateChange={onDateTimeChange} />
      <TimeSelector onTimeChange={onDateTimeChange} />
      <Description />
    </div>
  );
}
