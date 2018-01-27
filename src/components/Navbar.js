import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Navbar extends Component {render() {
    return (
      <Menu stackable className='navbar'>
        <Container>
          <Menu.Item>
            <h4>BOOKING SYSTEM</h4>
          </Menu.Item>
          <Menu.Item>
            <Link to='/'>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/booking'>
              Booking List
            </Link>
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default Navbar