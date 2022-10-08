import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as HearthstoneInfoSlice from '../../../features/Category/HearthstoneCategorySlice';
import Card from '../../components/Card/Card';
import './CategoryDetails.scss';

const CategoryDetailsPage = () => {
  const params = useParams();
  const category = params.categoryId;
  const entry = params.entryId;

  const dispatch = useDispatch();
  const categories = useSelector((store) => store.HearthstoneCategory.categories);
  const allCards = useSelector((store) => store.HearthstoneCategory.allCards);
  useEffect(() => {
    dispatch(HearthstoneInfoSlice.fetchCategory({
      category: params.categoryId,
      entry: params.entryId,
    }));
  }, [dispatch, params.categoryId, params.entryId]);
  return (
    <main className="app-category-details">
      <h1 className="category-title">
        {entry}
      </h1>
      <div className="category-detail-card-list">
        {categories[HearthstoneInfoSlice.buildCategoryKey(category, entry)]?.map(
          (card) => (
            <Card
              key={card}
              cardName={allCards[card].name}
              cardId={allCards[card].cardId}
              cardImage={allCards[card].img}
            />
          ),
        )}
      </div>
    </main>
  );
};

export default CategoryDetailsPage;
