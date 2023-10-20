import CloseButton from '../Buttons/CloseButton.jsx'
import UrlField from '../UrlField.jsx'
import DateAndTimeSelector from '../DateAndTimeSelector.jsx'
import NotificationTypeSelector from '../NotificationTypeSelector.jsx'
import SaveButton from '../Buttons/SaveButton.jsx'


export default function MainPage () {
    return (
    <div className='AppContainer'>
        <CloseButton />
        <div className='AppContainerMain'>
            <h1 className="Mainh1">Remind me about this URL</h1>
            <h2 className="MainSubtitle">URL</h2>
            <UrlField />
            <DateAndTimeSelector />
            <NotificationTypeSelector />
            <SaveButton />
        </div>
    </div>
    )
}