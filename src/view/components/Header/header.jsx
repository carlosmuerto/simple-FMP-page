import {
  useLocation,
  matchPath,
  useNavigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.scss';
import { BsArrowLeft } from 'react-icons/bs';
import 'lato-font';

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
        ? (
          <button className="back-btn" type="button" onClick={() => { navigate(-1); }}>
            <BsArrowLeft />
          </button>
        )
        : <div />}

      <div className="can">
        {activeLock[0].text}
      </div>

      <div />
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
