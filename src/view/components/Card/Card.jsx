import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Card.scss';
import defaultImg from './NoImgCard.png';

const Card = ({ cardName, cardId, cardImage }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/card-details/${encodeURIComponent(cardId)}`);
  };
  return (
    <div className="card-details">
      <h6>
        {cardName}
      </h6>
      <button type="button" onClick={onClick}>
        <img className="card-img" src={cardImage} alt={cardName} />
      </button>
    </div>
  );
};

Card.defaultProps = {
  cardImage: defaultImg,
};

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardId: PropTypes.string.isRequired,
  cardImage: PropTypes.string,
};

export default Card;
