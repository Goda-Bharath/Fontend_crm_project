import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navabar from './Components/Navabar'
import Campaigns from './Components/Campaigns'
import Leads from './Components/Leads'
import Opportunities from './Components/Opportunities'
import Learners from './Components/Learners'
import Courses from './Components/Courses'
import Trainers from './Components/Trainers'
import Tasks from './Components/Tasks'
import CampaignTable from './Components/Campaignstable'
import { BrowserRouter as Router } from "react-router-dom"
import PersonDetails from './Components/PersonDetails'
import Dashboard from './Components/Dashboard'
import PersonWhats from './Components/PersonWhats'
import Searchbar from './Components/searchbar'
function App() {
  return (
    <div>
      <Navabar />
       
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/campaigns-data' element={<Campaigns />}></Route>
        <Route path='/person/what'element={<PersonWhats/>}></Route>
        <Route path='/search-bar' element={<Searchbar/>}></Route>
        <Route path="/person/Sudheer" element={<PersonDetails />} />
        <Route path='/leads-data' element={<Leads />}></Route>
        <Route path='/opportunities-data' element={<Opportunities />}></Route>
        <Route path='/learners-data' element={<Learners />}></Route>
        <Route path='/courses-data' element={<Courses />}></Route>
        <Route path='/trainers-data' element={<Trainers />}></Route>
        <Route path='/tasks-data' element={<Tasks />}></Route>
        <Route path='//Campaignstable/:id' element={<CampaignTable />}></Route>
      </Routes>
    </div>
  )
}

export default App;