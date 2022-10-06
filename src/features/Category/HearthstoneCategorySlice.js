import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HearthstoneAPI from '../HearthstoneAPI/HearthstoneAPI';
import loadingStatus from '../reduxConst';

// actions CONSTANTS
const ACTION_PREPEND = 'Hearthstone/category';

const buildCategoryKey = (category, entry) => `${category}/${entry}`;

const initialState = {
  categories: {},
};

const fetchCategory = createAsyncThunk(
  `${ACTION_PREPEND}/FETCH`,
  async ({ category, entry }) => HearthstoneAPI.fetchBy(category, entry),
);

const HearthstoneCategorySlice = createSlice({
  name: ACTION_PREPEND,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state) => {
      state.loading = loadingStatus.pending;
    })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.loading = loadingStatus.succeeded;
        const { category, entry } = action.meta.arg;
        state.categories[buildCategoryKey(category, entry)] = action.payload;
      })
      .addCase(fetchCategory.rejected, (state) => {
        state.loading = loadingStatus.failed;
      });
  },
});

const { actions, reducer } = HearthstoneCategorySlice;

export { actions, buildCategoryKey, fetchCategory };

export default reducer;
