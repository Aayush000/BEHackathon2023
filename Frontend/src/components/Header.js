import React from 'react';
import header from '/Users/ashahopkins/Desktop/hackathon/BEHackathon2023/Frontend/src/images/Header.jpg'
function Header(){
    return (
        <div>
          <img src={header} alt="Header" className='header'/>
        </div>
      );
}

export default Header