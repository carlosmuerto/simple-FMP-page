import { configureStore } from '@reduxjs/toolkit';
import HearthstoneInfoSlice from '../features/Info/HearthstoneInfoSlice';
import HearthstoneCategorySlice from '../features/Category/HearthstoneCategorySlice';

const reducer = {
  hearthstoneInfo: HearthstoneInfoSlice,
  HearthstoneCategory: HearthstoneCategorySlice,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
