import {
  useLocation,
  matchPath,
  useNavigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.scss';

const Header = ({ links }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const activeLock = links.filter((link) => {
    const match = matchPath(
      { path: link.path },
      location.pathname,
    );

    return match !== null;
  });

  return (
    <header className="app-header">

      {activeLock[0].path !== '/'
        ? <button type="button" onClick={() => { navigate(-1); }}>go back</button>
        : <div />}

      <div className="nav-links">
        {activeLock[0].text}
      </div>
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
