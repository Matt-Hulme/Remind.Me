import CloseButton from '../Buttons/CloseButton.jsx'
import UrlField from '../UrlField.jsx'
import DateSelectorWrapper from '../DateAndTimeSelectorWrapper.jsx'


export default function MainPage () {
    return (
    <div className='AppContainer'>
        <CloseButton />
        <div className='AppContainerMain'>
            <h1 className="Mainh1">Remind me about this URL</h1>
            <h2 className="MainSubtitle">URL</h2>
            <UrlField />
            <DateSelectorWrapper />
        </div>
    </div>
    )
}