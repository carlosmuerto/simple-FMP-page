import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import React from 'react';
import Header from './view/components/Header/header';
import HomePage from './view/pages/Home/Home';
import DetailsPage from './view/pages/Details/Details';

const links = [
  {
    path: '/',
    text: 'Home',
    element: (<HomePage />),
  },
  {
    path: '/Missions',
    text: 'Details',
    element: (<DetailsPage />),
  },
];
const App = () => (
  <div className="app">
    <Router>
      <Header links={links} />
      <Routes>
        {links.map((link) => (
          <Route
            key={`RouteTo:${link.text}`}
            path={link.path}
            element={link.element}
          />
        ))}
      </Routes>
    </Router>
  </div>
);

export default App;
