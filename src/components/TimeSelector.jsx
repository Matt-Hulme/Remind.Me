import React from 'react';
import ClockButton from './Buttons/ClockButton';
import SelectableOptionRectangle from './SelectableOptionRectangle';

export default function TimeSelector({ onTimeChange }) {
  const handleTimeChange = (selectedTime) => {
    onTimeChange(selectedTime);
  };

  return (
    <div className="TimeSelector">
      <div>
        At
      </div>
      <SelectableOptionRectangle onClick={() => handleTimeChange('8AM')}>
        <div>
          8AM
        </div>
      </SelectableOptionRectangle>
      <SelectableOptionRectangle onClick={() => handleTimeChange('5PM')}>
        <div>
          5PM
        </div>
      </SelectableOptionRectangle>
      <ClockButton />
    </div>
  );
}
