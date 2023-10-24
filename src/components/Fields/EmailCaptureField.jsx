export default function EmailCaptureField() {
    return (
        <div className="EmailCaptureField">
          <h2 className='MainSubtitle' id="EmailCapturePageH2">Email address</h2>
            <form className="EmailCaptureFieldForm">
                <label htmlFor="EmailCaptureTextBox">
                </label>         
                <input className="EmailCaptureTextBox" type="text" id="EmailCaptureTextBox" placeholder="forgetfulfred@remind.me">
                </input>
            </form>
        </div>
    )
}