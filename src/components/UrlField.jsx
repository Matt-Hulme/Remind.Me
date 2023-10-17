import Checkbox from './Checkbox.jsx'

export default function UrlField() {
    return (
        <div className="UrlField">
            <Checkbox />
            <form className="UrlFieldForm">
                <label htmlFor="UrlTextBox">
                </label>         
                <input className="UrlTextBox" type="text" name="UrlTextBox">
                </input>
            </form>
        </div>
    )
}