import React from 'react'
import "./css/sidebar.css"
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
  const user=useSelector(selectUser);
  return (
    <div className='sidebar'>
           <div className='sidebar_profile'>
                  <img src="https://images.pexels.com/photos/14213785/pexels-photo-14213785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="altt"></img>
              <div className='profile_details'>
                  <Avatar src={user.photoURL}/>
                  <h4>{user.displayName}</h4>
                  <p>Full Stack developer</p>
              </div>

               <div className='profile_stat'>
                  <span>Who viwed your profile</span>
                  <span className='stat_number'>15</span>
               </div>

                <div className='profile_stat'>
                     <span>connection<br/><b>Grow Your Network</b></span>
                     <span className='stat_number'>170</span>
                </div>
   
            </div>

      <div className='sidebar_recent'>
           <p>Recent</p>
           <p className='hash'><span>#</span>branding</p>
           <p className='hash'><span>#</span>marketing</p>
           <p className='hash'><span>#</span>Reactjs</p>
           <p className='hash'><span>#</span>Nodejs</p>
           <p className='hash'><span>#</span>branding</p>
  
      </div>
 
    </div>
  )
}

export default Sidebar