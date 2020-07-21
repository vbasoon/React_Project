import React from 'react'

const Avatar = () => {
   return (
      <div>
         <div className="avatar">
            <div className="row">
               <div className="image_box">
                  <img src="./cat.png" alt="cat" />
               </div>
               <div className="info_box">
                  <p>Date of Birth: </p>
                  <p>City: </p>
                  <p>Education: </p>
                  <p>WEB Site</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Avatar
