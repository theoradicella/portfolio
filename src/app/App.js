import './App.css';
import Router from '../routes';
import { BrowserRouter } from 'react-router-dom';
import { elastic as Menu } from 'react-burger-menu'
import Icons from '../components/Icons/Icons';

function App() {
  return (
    <BrowserRouter >
        <Menu right >
          <div className='listItems'>
              <a id="home" className="menuItem" href="/">Home</a>
              <a id="about" className="menuItem" href="/about">About</a>
          </div>
          <div className='iconsContainer'>
            <Icons/>
          </div>
        </Menu>
      <Router />
    </BrowserRouter>
  );
}

export default App;
