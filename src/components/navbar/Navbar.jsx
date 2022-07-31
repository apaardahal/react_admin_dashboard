import React from 'react'
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { ChatBubbleOutlineOutlined, NotificationAddOutlined } from '@mui/icons-material';
export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className='icon'/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon/>
            English
          </div>
          <div className="item">
            <NotificationAddOutlined className='icon'/>
          </div> 
          <div className="item">
            <ChatBubbleOutlineOutlined className='icon'/>
          </div>  
          <div className="item">
            <img src='https://www.pexels.com/photo/photography-of-a-guy-wearing-green-shirt-1222271/' alt='' className='avatar' />
          </div>  
        </div>
      </div>
    </div>
  )
}
