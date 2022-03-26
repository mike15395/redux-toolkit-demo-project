import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUsers } from './features/UserSlice';
import './Users.css'

function Users() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addUser = () => {
        dispatch(addUsers({
            name: name,
            email:email
        }))
        navigate('/users-list');
    }
  return (
      <div>
          <h1> Add User</h1>
          <div className='form'>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='name' />
            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' /><br/>
            <button onClick={addUser}>Add</button>
          </div>
          
      </div>
  )
}

export default Users