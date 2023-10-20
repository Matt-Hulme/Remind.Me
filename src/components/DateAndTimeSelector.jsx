import DateSelector from "./DateSelector"
import TimeSelector from './TimeSelector'
import Description from './Description'

export default function DateAndTimeSelector () {
    return (
        <div className="DateAndTimeSelector">
            <h2 className="MainSubtitle">Remind Me...</h2>
            <DateSelector />
            <TimeSelector />
            <Description />
        </div>
    )
}