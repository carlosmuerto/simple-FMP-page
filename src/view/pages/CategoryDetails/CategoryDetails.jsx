import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as HearthstoneInfoSlice from '../../../features/Category/HearthstoneCategorySlice';

const CategoryDetailsPage = () => {
  const params = useParams();
  const category = params.categoryId;
  const entry = params.entryId;

  const dispatch = useDispatch();
  const categories = useSelector((store) => store.HearthstoneCategory.categories);
  useEffect(() => {
    dispatch(HearthstoneInfoSlice.fetchCategory({
      category: params.categoryId,
      entry: params.entryId,
    }));
  }, [dispatch, params.categoryId, params.entryId]);
  console.log(categories[HearthstoneInfoSlice.buildCategoryKey(category, entry)]);
  return (
    <main className="app-category-details">
      <h1>
        Category Details Page
        {' '}
        {category}
        {': '}
        {entry}
      </h1>
    </main>
  );
};

export default CategoryDetailsPage;
