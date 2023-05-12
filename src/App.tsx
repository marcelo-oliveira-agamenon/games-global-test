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
        <ol id="drawer-menu">
          <li className="list-menu">
            <Link to="/" onClick={() => setDrawerState(false)}>
              Home
            </Link>
          </li>

          <li className="list-menu">
            <Link to="/games" onClick={() => setDrawerState(false)}>
              Games
            </Link>
            <ul className="second-level-menu">
              <li>Slots</li>
              <li>
                Table Games
                <ul className="third-level-menu">
                  <li>Roulette</li>
                </ul>
              </li>
              <li>
                Card Games
                <ul className="third-level-menu">
                  <li>Blackjack</li>
                  <li>Poker</li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="list-menu">
            <Link to="/favorites" onClick={() => setDrawerState(false)}>
              Favorites
            </Link>
          </li>
        </ol>
      </Drawer>

      <Header onOpenSidebar={() => setDrawerState(true)} />
    </div>
  );
}

export default App;
