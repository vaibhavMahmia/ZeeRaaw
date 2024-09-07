import React from 'react';
import './SideBar.css';
import {Link} from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='sidebar-main-container'>
      <ul>
        <li>
            <Link to='/createTask' style={{textDecoration:'none', color:'#d18615'}}>Create Ticket</Link>
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

