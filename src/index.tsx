import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.scss';
import App from './App';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Games from './pages/Games';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureReduxStore } from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={configureReduxStore()}>
      <Router>
        <App />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </Router>
      {/* <RouterProvider router={router}  />  */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
