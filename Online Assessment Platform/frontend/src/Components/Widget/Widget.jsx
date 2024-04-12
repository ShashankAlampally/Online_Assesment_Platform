import React from 'react'
import './Widget.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({type}) => {

    let data;
    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon:<PersonOutlineIcon className='icon' style={{fontSize:"20px"}}/>
                
            };
        break;
        case "order":
            data={
                title:"TECHNOLOGIES",
                isMoney:false,
                link:"View all orders",
                icon:<PrecisionManufacturingIcon className='icon'/>
                
            };
        break;
        case "earning":
            data={
                title:"RESULTS",
                isMoney:true,
                link:"View net earnings",
                icon:<LeaderboardIcon className='fs-5'/>
                
            };
        break;
        case "balance":
            data={
                title:"QUESTIONS",
                isMoney:true,
                link:"See details",
                icon:<QuestionAnswerIcon/>
                
            };
        break;
        default:
            break;

    }


  return (
    <div className='widget d-flex flex-row justify-content-between p-3'>
        <div className='d-flex flex-column align-self-center icon'>
            {data.icon}
           {/* <span className='counter'>{data.isMoney && "$"}1000</span>
  <span className='link'>{data.link}</span>  */}     
        </div>
        <div className='d-flex flex-column align-items-center'>
            <div><h5 className=''>{data.title}</h5>
            <p>100</p>
            </div>
            {/*<div className='percentage positive'>
            <KeyboardArrowUpIcon/>
            20%
            
            </div>
  {data.icon }*/}
            
        </div>
    </div>
  )
}

export default Widget