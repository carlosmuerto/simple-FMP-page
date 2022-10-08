import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Card.scss';
import CardImage from './CardImage';
import defaultImg from './NoImgCard.png';

const Card = ({ cardName, cardId, cardImage }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/card-details/${encodeURIComponent(cardId)}`);
  };
  return (
    <div className="card-details">
      <h6 className="card-title">
        {cardName}
      </h6>
      <button className="card-btn" type="button" onClick={onClick}>
        <CardImage cardImage={cardImage} cardName={cardName} />
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
