import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as HearthstoneInfoSlice from '../../../features/Category/HearthstoneCategorySlice';
import loadingStatus from '../../../features/reduxConst';
import CardExpand from '../../components/Card/CardExpand';

const CardDetailsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { cardId } = params;
  const allCards = useSelector((store) => store.HearthstoneCategory.allCards);
  useEffect(() => {
    if (!allCards[cardId]) {
      dispatch(HearthstoneInfoSlice.fetchACard(cardId));
    }
  }, [dispatch, allCards, cardId]);

  let cardComponent = <h1 className="loading-message">loading</h1>;
  if (allCards[cardId]) {
    if (allCards[cardId].loading === loadingStatus.succeeded) {
      cardComponent = <CardExpand />;
    }
  }
  return (
    <main className="app-card-details">
      {cardComponent}
    </main>
  );
};

export default CardDetailsPage;
