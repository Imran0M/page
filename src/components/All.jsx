import React from 'react'
import FullStack from './FullStack'
import DataScience from './DataScience'
import CyberSecurity from './CyberSecurity'
// import {useParams}from 'react-router-dom'
function All() {
    // const {name} =useParams()
   
  return (
    <div className='component-style'>
        <FullStack/>
        <DataScience/>
        <CyberSecurity/>
    </div>
  )
}

export default All