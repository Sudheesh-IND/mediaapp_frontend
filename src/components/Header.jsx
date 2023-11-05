import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
       <MDBNavbar light bgColor='light' className='fixed-top'>
       
          <MDBNavbarBrand href='#'>
            <img
              src='https://th.bing.com/th?id=OIP.4JDTqu2XQkpCypFM2DktqAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
              height='30'
              alt=''
              loading='lazy'
            />
            Media Player
          </MDBNavbarBrand>
        
      </MDBNavbar>
    </div>
  )
}

export default Header