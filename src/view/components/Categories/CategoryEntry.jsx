import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CategoryEntry = ({ entry, category }) => {
  const navigate = useNavigate();

  const onClick = () => {
    // eslint-disable-next-line no-console
    console.log(`Navigate to ${category}: ${entry}`);
    navigate(`/${encodeURIComponent(category)}/${encodeURIComponent(entry)}`);
  };
  return (
    <main className="app-category-entry">
      <h4>{entry}</h4>
      <button type="button" onClick={onClick}>{entry}</button>
    </main>
  );
};

CategoryEntry.propTypes = {
  entry: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default CategoryEntry;
