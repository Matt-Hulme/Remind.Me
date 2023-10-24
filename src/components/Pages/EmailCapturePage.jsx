import EmailCaptureField from '../Fields/EmailCaptureField'
import NextButton from '../Buttons/NextButton.jsx'

export default function EmailCapturePage (){
  return (
    <div className="EmailCapturePage">
      <div className="EmailCapturePageContainer">
        <div className="EmailCapturePageMainContainer">
          <h1 className="Mainh1"> Enter your email</h1>
          <h2 className="Mainh2">We'll only use it to send you URL reminders—never to advertise.</h2>
          <EmailCaptureField />
        </div>
        <NextButton />
      </div>
    </div>
  )

}