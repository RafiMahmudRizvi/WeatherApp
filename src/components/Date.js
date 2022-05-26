import React from 'react'

const Date = () => {
     var d = new window.Date();

     const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   
  return (
    <>
        <div className="date">
            <span className="material-icons-sharp">calendar_month</span>
            <p>{days[d.getDay()]} {d.getDate()} {months[d.getMonth()]} {d.getFullYear()}</p>
         </div>
    </>
  )
}

export default Date