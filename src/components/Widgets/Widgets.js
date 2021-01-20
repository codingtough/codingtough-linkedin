import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
   const newsArticle = (heading, subtitle) => (
      <div className="widgets__article">
         <div className="widgets__articleLeft">
            <FiberManualRecordIcon fontSize="small" />
         </div>
         <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
         </div>
      </div>
   )

   return (
      <div className="widgets">
         <div className="widgets__header">
            <h2>Linkedin News</h2>
            <InfoIcon fontSize="large" />
         </div>
         {newsArticle("Coronavirus: UK updates", "Top news - 886 readers")}
         {newsArticle("Tesla hits new highs", "Cars & Auto - 300 readers")}
         {newsArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
         {newsArticle("Is Redux too good?", "Code - 125 readers")}
         {newsArticle("Wins for Hooks", "Code - 1457 readers")}
         {newsArticle("Reconciling the useEffect Tree", "Code - 9099 readers")}
      </div>
   )
}

export default Widgets;
