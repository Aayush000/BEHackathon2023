import React from 'react';
import header from '../images/Header.jpg'
function Header(){
    return (
        <div>
          <img src={header} alt="Header" className='header'/>
        </div>
      );
}

export default Header