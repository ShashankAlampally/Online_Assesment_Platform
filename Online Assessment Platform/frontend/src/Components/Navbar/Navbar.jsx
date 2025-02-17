import React from 'react'
import './Navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import PersonIcon from '@mui/icons-material/Person';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='search'>
                <input type='text' placeholder='Search...'/>
                <SearchOutlinedIcon className='search-icon'/> 
            </div>
            <div className='items'>
            {/*<div className='item'>
                <LanguageOutlinedIcon/>
                English
            </div>
            <div className='item'>
                <DarkModeOutlinedIcon/>
            </div>
            <div className='item'>
                <FullscreenExitOutlinedIcon/>
            </div>
            <div className='item'>
                <NotificationsNoneOutlinedIcon/>
                <div className='couter'>1</div>
            </div>
            <div className='item'>
                <ChatBubbleOutlineOutlinedIcon/>
                <div className='couter'>2</div>
            </div>
            <div className='item'>
                <ListOutlinedIcon/>
            </div>
            <div className='item'>
                <PersonIcon/>
  </div>*/}
            </div>
        </div>
    </div>
  )
}

export default Navbar