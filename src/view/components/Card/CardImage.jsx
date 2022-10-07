import PropTypes from 'prop-types';
import './Card.scss';
import defaultImg from './NoImgCard.png';

const CardImage = ({
  cardImage,
  cardName,
}) => (
  <img
    className="card-img"
    src={cardImage}
    alt={cardName}
  />
);

CardImage.defaultProps = {
  cardImage: defaultImg,
};

CardImage.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string,
};
export default CardImage;
