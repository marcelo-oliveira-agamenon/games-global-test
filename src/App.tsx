import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Drawer } from '@mui/material';
import { loadFetchGame } from './actions';
import Header from './components/header';
import './index.scss';

function App() {
  const [drawerState, setDrawerState] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFetchGame());
  }, [dispatch]);

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
