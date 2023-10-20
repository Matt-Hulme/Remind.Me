import ClockButton from './Buttons/ClockButton'
import SelectableOptionRectangle from './SelectableOptionRectangle'

export default function TimeSelector () {
  return (
    <div className="TimeSelector">
      <div>
          At
      </div>
      <SelectableOptionRectangle>
        <div>
          8AM
        </div>
      </SelectableOptionRectangle>
      <SelectableOptionRectangle>
        <div>
          5PM
        </div>
      </SelectableOptionRectangle>
      <ClockButton />
    </div>
  )
}