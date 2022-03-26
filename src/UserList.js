import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/UserSlice'
import './UserList.css'
function UserList() {

    const data = useSelector(selectUser);
    console.log(data);

  return (
      <div className='list-container'>
          {data?.map((item, index) => (
              <div className='list' key={index}>
                  <h4>Name:  {item.name}</h4>
                  <h4>Email:  {item.email}</h4>
             </div>
      ))}
          
    </div>
  )
}

export default UserList