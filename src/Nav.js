import React from 'react'
import './Nav.css'
import NavItem from './NavItem'

function Nav() {
  return (
      <div className='nav-container'>
          <NavItem item='ADD USER' link='/' />
          <NavItem item='USER LIST' link='/users-list' />
          <NavItem item='PRODUCT' link='/product'/>
          <NavItem item='PRODUCT LIST' link='/product-list' />

          
    </div>
  )
}

export default Nav