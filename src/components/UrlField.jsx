import Checkbox from './Buttons/Checkbox.jsx'

export default function UrlField() {
    return (
        <div className="UrlField">
            <form className="UrlFieldForm">
            <Checkbox />
                <label htmlFor="UrlTextBox">
                </label>         
                <input className="UrlTextBox" type="text" id="UrlTextBox">
                </input>
            </form>
        </div>
    )
}