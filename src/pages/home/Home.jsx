import React from 'react'
import { Featured } from '../../components/featured/Featured';
import {Chart} from '../../components/chart/Chart';
import { Navbar } from '../../components/navbar/Navbar';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Widget } from '../../components/widget/Widget';
import './home.scss';

export const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
              <Widget type='user'/>
              <Widget type='order'/>
              <Widget type='earnings'/>
              <Widget type='balance'/>
            </div>
            <div className="charts">
              <Featured/>
              <Chart/>
            </div>
        </div>
    </div>
  )
} 
