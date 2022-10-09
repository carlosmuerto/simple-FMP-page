/* eslint-disable react/no-danger */
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardImage from './CardImage';
import './CardExpand.scss';

const buildInfo = (card) => {
  const info = [];
  const AddInfoObj = (key, title) => {
    if (card[key]) {
      info.push({
        title,
        info: card[key],
      });
    }
  };

  AddInfoObj('playerClass', 'Class');
  AddInfoObj('cardSet', 'Set');
  AddInfoObj('rarity', 'rarity');
  AddInfoObj('faction', 'faction');
  AddInfoObj('type', 'type');
  AddInfoObj('cost', 'cost');
  AddInfoObj('attack', 'attack');
  AddInfoObj('health', 'health');

  return info;
};

const CardExpand = () => {
  const params = useParams();
  const { cardId } = params;
  const allCards = useSelector((store) => store.HearthstoneCategory.allCards);
  const card = allCards[cardId];
  const cardInfo = buildInfo(card);

  return (
    <div className="app-card-expand-details">
      <h1 className="card-title">{card.name}</h1>
      <div className="card-img-info">
        <CardImage cardImage={card.img} cardName={card.name} />
        {
          card.artist
            ? (
              <p>
                {'Artist: '}
                {card.artist}
              </p>
            )
            : undefined
        }
      </div>
      <div className="card-info">
        {cardInfo.map((InfoEntry) => (
          <p key={`${card.name}+card-entry-${InfoEntry.title}`}>
            <span>
              {InfoEntry.title}
              {': '}
            </span>
            {InfoEntry.info}
          </p>
        ))}
      </div>
      <p className="card-text" dangerouslySetInnerHTML={{ __html: card.text }} />

    </div>
  );
};

export default CardExpand;
