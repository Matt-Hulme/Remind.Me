import './App.css'
import CloseButton from './components/CloseButton.jsx'
import UrlField from './components/UrlField.jsx'
import DateSelectorWrapper from './components/DateSelectorWrapper'


function App() {

  return (
    <div className='App'>
      <div className='AppContainer'>
        <CloseButton />
          <div className='AppContainerMain'>
            <h1 className="Mainh1">Remind me about this URL</h1>
            <h2 className="MainSubtitle">URL</h2>
            <UrlField />
            <DateSelectorWrapper />
          </div>
      </div>
    </div>
  )
}

export default App
