import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import React from 'react';
import Header from './view/components/Header/header';
import HomePage from './view/pages/Home/Home';
import CardDetails from './view/pages/CardDetails/CardDetails';
import CategoryDetailsPage from './view/pages/CategoryDetails/CategoryDetails';

const links = [
  {
    path: '/',
    text: 'HearthStone Cards',
    element: (<HomePage />),
  },
  {
    path: '/card-details/:cardId',
    text: 'Card Detail',
    element: (<CardDetails />),
  },
  {
    path: '/:categoryId/:entryId',
    text: 'Category',
    element: (<CategoryDetailsPage />),
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
