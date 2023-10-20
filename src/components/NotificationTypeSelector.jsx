import SelectableOptionRectangle from "./SelectableOptionRectangle";

export default function NotificationTypeSelector (){
  return (
    <div className="NotificationTypeSelectorContainer">
      <div className="NotificationTypeSelectorText">
        Notify me via...
      </div>
      <div className="NotificationTypeSelector">
        <SelectableOptionRectangle>
          Email
        </SelectableOptionRectangle>
        <SelectableOptionRectangle>
          Browser notification
        </SelectableOptionRectangle>
      </div>
    </div>
  )
}