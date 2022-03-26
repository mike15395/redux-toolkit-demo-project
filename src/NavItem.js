import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NavItem.css'

function NavItem({ item,link }) {
    
    const navigate = useNavigate();
    const redirect = () => {
        navigate(link)
    }
  return (
      <div onClick={redirect} className='nav-items'>
          {item}
      </div>
  )
}

export default NavItem