import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.scss';
import planet from './planet.png';

const Header = ({ links }) => (
	<header className="app-header">
		<div className="logo">
			<img src={planet} alt="logo" />
		</div>
		<h3>Financial Modeling Prep</h3>
		<nav>
			{links.map((link) => (
				<div className="nav-links" key={`NavLinkTo${link.text}`}>
					<NavLink
						to={link.path}
						end
						className={`nav-link ${({ isActive }) => (isActive ? 'active' : undefined)}`}
					>
						{link.text}
					</NavLink>
				</div>
			))}
		</nav>
	</header>
);

Header.propTypes = {
	links: PropTypes.arrayOf(PropTypes.shape({
		path: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
	})).isRequired,
};

export default Header;
