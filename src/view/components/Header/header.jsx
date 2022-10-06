import {
  NavLink,
  useLocation,
  matchPath,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.scss';
import planet from './planet.png';

const Header = ({ links }) => {
  const location = useLocation();

  const activeLock = links.filter((link) => {
    const match = matchPath(
      { path: link.path },
      location.pathname,
    );

    return match !== null;
  });

  return (
    <header className="app-header">
      <NavLink to="/" end>
        <div className="logo">
          <img src={planet} alt="logo" />
        </div>
      </NavLink>
      <h3 className="header">
        <NavLink to="/" end>
          Financial Modeling Prep
        </NavLink>
      </h3>
      <nav>
        {activeLock.map((link) => (
          <div className="nav-links" key={`NavLinkTo${link.text}`}>
            {activeLock[0].text}
          </div>
        ))}
      </nav>
    </header>
  );
};

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default Header;
