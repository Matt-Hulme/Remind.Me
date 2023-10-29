import CloseButton from '../Buttons/CloseButton2'
import UpgradeButton from '../Buttons/UpgradeButton'

export default function ConfirmationPage (){
  return (
    <div className="ConfirmationPage">
        <div className="ConfirmationPageContainer">
          <div className="ConfirmationPageMainContainer">
            <CloseButton />
            <h1 className='Mainh1'>URL Saved</h1>
            <p className='Mainp'>You can close this tab and we’ll send you a reminder on [date] at [time].</p>
            <p className='Mainp'>You can save two more URLs until you’ll need to upgrade.</p>
            <UpgradeButton />
          </div>
        </div>
   </div> 
  ) 
}