import Home from './Home.jsx'
import {Routes, Route} from 'react-router-dom'
import Events from './Events.jsx'
import EventDetails from './EventDetails.jsx'
import Register from './Registration.jsx'
import Confirm from './Confirmation.jsx'


function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/confirmation' element={<Confirm />}/>
      </Routes>
    </div>
  )
}

export default App