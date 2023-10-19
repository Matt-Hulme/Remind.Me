import DateSelector from "./DateSelector"
import TimeSelector from './TimeSelector'

export default function DateAndTimeSelectorWrapper () {
    return (
        <div className="DateAndTimeSelectorWrapper">
            <h2 className="MainSubtitle">Remind Me...</h2>
            <DateSelector />
            <TimeSelector />
        </div>
    )
}