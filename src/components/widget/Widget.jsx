import React from 'react'
import './widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { AccountBalanceOutlined } from '@mui/icons-material';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

export const Widget = ({type}) => {

    let data;

    // Temporary 
    const amount = 100;
    const diff = 20;

    switch(type){
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link:'See all users',
            icon:(<PersonOutlinedIcon className='icon' style = {{color: 'crimson', backgroundColor: 'rgba(218,165,32,0.2)'}}/>)
            }
            break;
            case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link:'View orders',
                icon:(<AddShoppingCartOutlinedIcon className='icon' style = {{color: 'goldenrod', backgroundColor: 'rgba(218,165,32,0.2)'}}/>)
            }
            break;
            case 'earnings':
            data = {
                title: 'EARNINGS',
                isMoney: true,
                link:'View net earnings',
                icon:(<AttachMoneyOutlinedIcon className='icon' style = {{color: 'green', backgroundColor: 'rgba(218,165,32,0.2)'}}/>)
            }
            break;
            case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link:'See details',
                icon:(<AccountBalanceOutlined className='icon' style = {{color: 'purple', backgroundColor: 'rgba(218,165,32,0.2)'}}/>)
            }
            break;
            default:
                break;
    }

  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && '$' } {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
               {diff}
            </div>
            { data.icon}
        </div>
    </div>
  )
}
