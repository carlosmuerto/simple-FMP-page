import PropTypes from 'prop-types';
import CategoryEntry from './CategoryEntry';
import './Categories.scss';

const Categories = ({ category, info }) => (
  <div className="app-categories">
    <h1 className="category-title">{category}</h1>
    <div className="category-list">
      {info.map((entry) => <CategoryEntry key={`${category} ${entry}`} entry={entry} category={category} />)}
    </div>
  </div>
);

Categories.propTypes = {
  info: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  category: PropTypes.string.isRequired,
};

export default Categories;
