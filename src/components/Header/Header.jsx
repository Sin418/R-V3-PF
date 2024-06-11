import React from 'react';
import Typewriter from 'typewriter-effect';
import './Header.css';

function Header() {
  return (
    <header className="header">
     <div>
        <h1>
        <Typewriter
          options={{
            strings: ['Welcome To My Portfolio', 'My Name is Akshay Mysore'],
            autoStart: true,
            loop: true,
          }}
        />
        </h1>
     </div>
    </header>
  );
}

export default Header;
