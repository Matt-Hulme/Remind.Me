export default function DescriptionField (){
  return (
    <div className="DescriptionField">
      <form className="DescriptionFieldForm">
        <label htmlFor ="DescriptionTextBox"></label>
        <input className="DescriptionTextBox" type="text" placeholder="Optional"></input>
      </form>
    </div>
  )
}