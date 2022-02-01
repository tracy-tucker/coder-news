import React from 'react';
import Links from '../constants/links';
import { IoMdClose } from 'react-icons/io';
import Categories from './Categories';

const Sidebar = ({isOpen, toggle}) => {
  return (
      <aside className={`sidebar ${isOpen?'showSidebar' : ''}`}>
        <button className='close-btn' onClick={toggle}>
          <IoMdClose />
        </button>
        <div className="sidebar-container">
          <Links styleClass="sidebar-links">
            <Categories />
          </Links>
        </div>
      </aside>
  )
};

export default Sidebar;
