import {BrowserRouter as Router, Link, Routes, Route, } from 'react-router-dom'
import './App.css'
import All from './components/All'
import FullStack from './components/FullStack'
import DataScience from './components/DataScience'
import CyberSecurity from './components/CyberSecurity'

function App() {
  return (
    <>
    <Router>
      <div>
        <ul className='link-style'>
          <li><Link className='name' to='/'>All</Link></li>
          <li><Link className='name' to='/full-stack'>Full Stack Development</Link></li>
          <li><Link className='name' to='/data-science'>Data Science</Link></li>
          <li><Link className='name'to='/cyber-security'>Cyber Security</Link></li>
        </ul>
        <Routes>
          <Route path='/' exact element={<All/>}></Route>
          <Route path='/full-stack' element={<FullStack/>}></Route>
          <Route path='/data-science' element={<DataScience/>}></Route>
          <Route path='/cyber-security' element={<CyberSecurity/>}></Route>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
