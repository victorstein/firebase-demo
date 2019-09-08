import React, { useState } from 'react'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap'
import { Auth } from '../utils/firebase'

export default () => {

  const [mobileMenu, setMobileMenu] = useState(false)

  const logout = () => {
    Auth.signOut()
  }

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  return (
    <Navbar style={{ zIndex: 2 }} color='danger' light expand='md' className='position-relative'>
      <NavbarBrand className='text-white'>Firebase demo</NavbarBrand>
      {
        Auth.currentUser
          ? <NavbarToggler onClick={toggleMobileMenu} />
          : null
      }
      <Collapse navbar isOpen={mobileMenu}>
        <Nav className='ml-auto' navbar>
          <UncontrolledDropdown nav inNavbar>
            {
              Auth.currentUser
                ? <DropdownToggle nav caret className='text-white'>
                  {Auth.currentUser.displayName}
                </DropdownToggle>
                : null
            }
            <DropdownMenu right>
              <DropdownItem onClick={logout}>
                Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  )
}