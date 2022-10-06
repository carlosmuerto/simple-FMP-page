import PropTypes from 'prop-types';
import CategoryEntry from './CategoryEntry';

const Categories = ({ category, info }) => (
  <main className="app-categories">
    <h1>{category}</h1>
    <div>
      {info.map((entry) => <CategoryEntry key={`${category} ${entry}`} entry={entry} category={category} />)}
    </div>
  </main>
);

Categories.propTypes = {
  info: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  category: PropTypes.string.isRequired,
};

export default Categories;
