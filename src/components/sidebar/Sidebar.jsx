import React from 'react'
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">Apaar Admin</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className='title'>MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className='title'>LISTS</p>
                <li>
                    <PeopleAltOutlinedIcon className='icon'/>
                    <span>Users</span>
                </li>
                <li>
                    <Inventory2OutlinedIcon className='icon'/>
                    <span>Products</span>
                </li>
                <li>
                    <BorderAllOutlinedIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                    <DeliveryDiningOutlinedIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className='title'>USEFUL</p>
                <li>
                    <QueryStatsOutlinedIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    < NotificationsActiveOutlinedIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className='title'>SERVICE</p>
                <li>
                    <HealthAndSafetyOutlinedIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <FaceOutlinedIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsSuggestOutlinedIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className='title'>USER</p>
                <li>
                    <GroupOutlinedIcon className='icon'/>
                    <span>Profiles</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOptions"> </div>
            <div className="colorOptions"> </div>
        </div>

    </div>
  )
}
