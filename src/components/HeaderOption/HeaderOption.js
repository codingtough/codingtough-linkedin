import React from 'react';
import './HeaderOption.css';
import { Avatar } from "@material-ui/core";
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';

function HeaderOption({ avatar, Icon, title, onClick }) {
   const user = useSelector(selectUser)

   return (
      <div className="headerOption" onClick={onClick}>
         {Icon && <Icon fontSize="large" className="headerOption__icon" />}
         {
            avatar &&
            <div className="tooltip">
               <span className="tooltiptext">Se déconnecter</span>
               <Avatar
                  className="headerOption__icon avatar"
                  src={user?.photoUrl}
               >
                  {!user?.photoUrl && user?.email[0].toUpperCase()}
               </Avatar>
            </div>
         }
         <h3 className="headerOption__title">{title}</h3>
      </div>
   )
}

export default HeaderOption;
