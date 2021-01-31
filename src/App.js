import './App.css'
import Snow from './components/snow/Snow'
import Router from './router/Router'

//const styleWrapper = {
//  width: window.innerWidth + 'px',
//  height: window.innerHeight + 'px'
//}

function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <Router />
        <Snow />
      </div>
    </div>
  )
}

export default App;
