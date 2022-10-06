import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CategoryEntry = ({ entry, category }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/${encodeURIComponent(category)}/${encodeURIComponent(entry)}`);
  };
  return (
    <div className="app-category-entry">
      <h4>{entry}</h4>
      <button type="button" onClick={onClick}>{entry}</button>
    </div>
  );
};

CategoryEntry.propTypes = {
  entry: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default CategoryEntry;
