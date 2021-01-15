import React from 'react';
import Avatar from '../Profile/MyPosts/MyInfo/Avatar/Avatar';
import styles from './Users.module.css';

const Users = (props) => {

   props.setUsers(
      { id: 1, followed: false, nickName: 'Dmitry', status: 'I am a boss', location: { city: 'Mensk', country: 'Belarus' } },
      { id: 2, followed: true, nickName: 'Rasputin', status: 'I am a boss too', location: { city: 'Moscow', country: 'Ruzzia' } },
      { id: 3, followed: false, nickName: 'Pavlo', status: 'I am a boss too', location: { city: 'Kyiv', country: 'Ukraine' } }
   )

   return <div>
      {
         props.users.map(u => <div key={u.id}>
            <div className="row">
               <div className="col left">
                  <Avatar />
                  <div className="button">
                     {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                  </div>

               </div>

               <div className="col right">
                  <div className="inner-row">
                     <div className="nick_info">
                        <h2>{u.nickName}</h2>
                        <p>{u.status}</p>
                     </div>
                     <div>
                        <h2>'  '   </h2>
                     </div>
                     <div className="location right">
                        <h2>{u.location.city}</h2>
                        <h3>{u.location.country}</h3>
                     </div>
                  </div>
               </div>

            </div>
         </div>
         )
      }
   </div>
}

export default Users
