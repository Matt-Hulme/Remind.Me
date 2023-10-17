import SelectableOptionRectangle from "./SelectableOptionRectangle"

export default function DateSelector () {
    return (
        <div className="DateSelector">
            <SelectableOptionRectangle>
                <div>Tomorrow</div>
            </SelectableOptionRectangle>
            <SelectableOptionRectangle>
                <div>In a week</div>
            </SelectableOptionRectangle>
            <SelectableOptionRectangle>
                <div>In a month</div>
            </SelectableOptionRectangle>
            <SelectableOptionRectangle>
                <div>Random day</div>
            </SelectableOptionRectangle>
        </div>

    )
}