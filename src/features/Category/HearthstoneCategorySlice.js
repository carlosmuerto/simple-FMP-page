import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HearthstoneAPI from '../HearthstoneAPI/HearthstoneAPI';
import loadingStatus from '../reduxConst';

// actions CONSTANTS
const ACTION_PREPEND = 'Hearthstone/category';

const buildCategoryKey = (category, entry) => `${category}/${entry}`;

const initialState = {
  categories: {},
  allCards: {},
};

const fetchCategory = createAsyncThunk(
  `${ACTION_PREPEND}/FETCH`,
  async ({ category, entry }) => HearthstoneAPI.fetchBy(category, entry),
);

const fetchACard = createAsyncThunk(
  `${ACTION_PREPEND}/FETCHaCARD`,
  async (cardId) => HearthstoneAPI.fetchACard(cardId),
);

const HearthstoneCategorySlice = createSlice({
  name: ACTION_PREPEND,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.loading = loadingStatus.pending;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.loading = loadingStatus.succeeded;
        const { category, entry } = action.meta.arg;
        const cards = action.payload;

        const ordenedCard = [
          ...cards.filter((card) => card.img),
          ...cards.filter((card) => !card.img),
        ];

        state.categories[buildCategoryKey(category, entry)] = ordenedCard.map(
          (card) => card.cardId,
        );

        cards.forEach((card) => {
          state.allCards[card.cardId] = card;
          state.allCards[card.cardId].loading = loadingStatus.succeeded;
        });
      })
      .addCase(fetchCategory.rejected, (state) => {
        state.loading = loadingStatus.failed;
      })
      .addCase(fetchACard.pending, (state, action) => {
        const cardId = action.meta.arg;
        state.allCards[cardId] = {};
        state.allCards[cardId].loading = loadingStatus.pending;
      })
      .addCase(fetchACard.fulfilled, (state, action) => {
        const cardId = action.meta.arg;
        const [card] = action.payload;
        state.allCards[cardId] = card;
        state.allCards[cardId].loading = loadingStatus.succeeded;
      })
      .addCase(fetchACard.rejected, (state, action) => {
        const cardId = action.meta.arg;
        state.allCards[cardId].loading = loadingStatus.failed;
      });
  },
});

const { actions, reducer } = HearthstoneCategorySlice;

export {
  actions,
  buildCategoryKey,
  fetchCategory,
  fetchACard,
};

export default reducer;
