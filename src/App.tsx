import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from '@mui/material';
import Header from './components/header';
import './index.scss';

function App() {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <div>
      <Drawer anchor="left" open={drawerState} onClose={() => setDrawerState(false)}>
        <ul id="drawer-menu">
          <li>
            <Link to="/" onClick={() => setDrawerState(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/games" onClick={() => setDrawerState(false)}>
              Games
            </Link>
          </li>

          <li>
            <Link to="/favorites" onClick={() => setDrawerState(false)}>
              Favorites
            </Link>
          </li>
        </ul>
      </Drawer>

      <Header onOpenSidebar={() => setDrawerState(true)} />
    </div>
  );
}

export default App;
