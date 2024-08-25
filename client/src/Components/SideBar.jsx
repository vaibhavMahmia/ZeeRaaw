import React from 'react'
import './SideBar.css'

const SideBar = () => {
  return (
    <div className='sidebar-main-container'>
      <ul>
        <li>
            Create Ticket
        </li>
        <br />
        <li>
            My Tickets
        </li>
        <br />
        <li>
            Kanban Board
        </li>
      </ul>
    </div>
  )
}

export default SideBar

