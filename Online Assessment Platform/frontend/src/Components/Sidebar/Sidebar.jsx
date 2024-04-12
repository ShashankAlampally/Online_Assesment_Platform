import React from 'react'
import './Sidebar.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Navigate, useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const navigate = useNavigate();
  return (
    <div className='sidebar'>
        <div className='top'>
        <span className='logo'>LMS Admin</span>
        </div>
        <div className='center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <li onClick={()=>{
                        navigate('/dashboard')
                    }}>
                        <DashboardIcon className='icon'/>
                       <span >Dashboard</span>
                    </li>
                    <p className='title'>LISTS</p>
                    <li onClick={()=>{
                        navigate('/users')
                    }}>
                        <PersonIcon className='icon'/>
                       <span>Users</span>
                    </li>
                    <li onClick={()=>{
                        navigate('/testlibrary')
                    }}>
                        <CategoryIcon className='icon'/>
                       <span>Test Library</span>
                    </li>
                    <li onClick={()=>{
                        navigate('/testmanagement')
                    }}>
                        <ListAltIcon className='icon'/>
                       <span>Test Management</span>
                    </li>
                    <li onClick={()=>{
                        navigate('/results')
                    }}>
                        <LocalShippingIcon className='icon'/>
                       <span>Results</span>
                    </li>
                    {/*<p className='title'>USEFUL</p>
                    <li>
                        <BarChartIcon className='icon'/>
                       <span>Stats</span>
                    </li>
                    <li>
                        <CircleNotificationsIcon className='icon'/>
                       <span>Notifications</span>
                    </li>
                    <p className='title'>SERVICE</p>
                    <li>
                        <MonitorHeartIcon className='icon'/>
                       <span>System Health</span>
                    </li>
                    <li>
                        <BookIcon className='icon'/>
                       <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className='icon'/>
                       <span>Settings</span>
                </li>*/}
                    <p className='title'>USER</p>
                    <li onClick={()=>{
                        navigate('/profile')
                    }}>
                        <AccountCircleOutlinedIcon className='icon'/>
                       <span>Profile</span>
                    </li>
                    <li onClick={()=>{
                        navigate("/login")
                    }}>
                        <LogoutOutlinedIcon className='icon'/>
                       <span>Logout</span>
                    </li>

                </ul>
        </div>
        
    </div>
  )
}

export default Sidebar