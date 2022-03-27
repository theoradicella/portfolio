import { useState } from 'react';
import './App.css';
import Router from '../routes';
import { HashRouter, Link } from 'react-router-dom';
import { elastic as Menu } from 'react-burger-menu'
import Icons from '../components/Icons/Icons';

function App() {
  const [menu, setMenu] = useState(false)
  
  function closeMenu() {
    setMenu(false)
  }

  function openMenu() {
    setMenu(true)
  }

  return (
    <HashRouter >
        <Menu
          isOpen={menu} 
          onClose={closeMenu}
          onOpen={openMenu}
          right
          disableAutoFocus
        >
          <div className='listItems'>
              <Link onClick={closeMenu} id="home" className="menuItem" to="/">Home</Link>
              <Link onClick={closeMenu} id="about" className="menuItem" to="/about">About</Link>
          </div>
          <div className='iconsContainer'>
            <Icons/>
          </div>
        </Menu>
      <Router />
    </HashRouter>
  );
}

export default App;
