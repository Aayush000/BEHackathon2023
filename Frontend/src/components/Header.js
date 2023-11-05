import React from 'react';
import header from '../images/Header.jpeg'
function Header(){
    return (
        <div>
          <img src={header} alt="Header" className='header'/>
        </div>
      );
}

export default Header