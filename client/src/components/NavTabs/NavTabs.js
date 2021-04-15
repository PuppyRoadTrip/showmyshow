import React from 'react';
import '../NavTabs/NavTabs.css';
import Button from '@material-ui/core/Button';

function NavTabs() {

  return (
    <div>
        <Button variant='contained' className='home-buttons' id='home' href='/'>
            Home
        </Button>
        <Button variant='contained' className='home-buttons' id='login' href='/login'>
            Login
        </Button>
        <Button variant='contained' className='home-buttons' id='login' href='/landing'>
            Landing
        </Button>
    </div>
  );
}

export default NavTabs;
