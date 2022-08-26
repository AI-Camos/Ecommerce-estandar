import React, { useState, useContext } from 'react';
import Themecontext from '../context/Themecontext';

const Header = () => {
  const [darkMode, setDarkmode] = useState(false);
  const color = useContext(Themecontext);
  const handleClick = () => {
    setDarkmode(!darkMode);
  }

  return (
    <div className='Header'>
      <h1 style={{ color }}>ReackHooks</h1>
      <button type= "button" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
    </div>
  );
}

export default Header;