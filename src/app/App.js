import './App.css';
import Router from '../routes';
import { HashRouter, Link } from 'react-router-dom';
import { elastic as Menu } from 'react-burger-menu'
import Icons from '../components/Icons/Icons';

function App() {
  return (
    <HashRouter >
        <Menu right >
          <div className='listItems'>
              <Link id="home" className="menuItem" to="/">Home</Link>
              <Link id="about" className="menuItem" to="/about">About</Link>
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
