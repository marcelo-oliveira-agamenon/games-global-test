import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Drawer } from '@mui/material';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Games from './pages/Games';
import Header from './components/header';

function App() {
  const [drawerState, setDrawerState] = useState(false);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/favorites',
      element: <Favorites />,
    },
    {
      path: '/games',
      element: <Games />,
    },
  ]);

  return (
    <div>
      <Drawer
        anchor="left"
        open={drawerState}
        onClose={() => setDrawerState(false)}
      >
        <h1>Hi! Im a drawer!!</h1>
      </Drawer>

      <Header onOpenSidebar={() => setDrawerState(true)} />

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
